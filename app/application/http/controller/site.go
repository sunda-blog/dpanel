package controller

import (
	"encoding/json"
	"github.com/donknap/dpanel/app/application/logic"
	"github.com/donknap/dpanel/common/dao"
	"github.com/donknap/dpanel/common/entity"
	"github.com/gin-gonic/gin"
	"github.com/we7coreteam/w7-rangine-go/src/core/err_handler"
	"github.com/we7coreteam/w7-rangine-go/src/http/controller"
	"strings"
)

type Site struct {
	controller.Abstract
}

func (self Site) CreateByImage(http *gin.Context) {
	type ParamsValidate struct {
		SiteName   string `form:"siteName" binding:"required"`
		SiteId     string `form:"siteId" binding:"required"`
		SiteDomain string `form:"siteDomain" binding:"required"`
		Image      string `json:"image" binding:"required"`
		logic.ContainerRunParams
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	runParams := &logic.ContainerRunParams{
		Environment: params.Environment,
		Volumes:     params.Volumes,
		Ports:       params.Ports,
		Links:       params.Links,
	}

	siteEnv, err := json.Marshal(runParams)
	if err != nil {
		self.JsonResponseWithError(
			http,
			err,
			500,
		)
		return
	}
	siteUrlExt, err := json.Marshal(
		[]string{
			params.SiteDomain,
		},
	)
	if err != nil {
		self.JsonResponseWithError(
			http,
			err,
			500,
		)
		return
	}
	siteRow := &entity.Site{
		SiteID:     params.SiteId,
		SiteName:   params.SiteName,
		SiteURL:    params.SiteDomain,
		SiteURLExt: string(siteUrlExt),
		Env:        string(siteEnv),
		Status:     logic.STATUS_STOP,
	}
	err = dao.Q.Transaction(
		func(tx *dao.Query) error {
			site, _ := tx.Site.Where(dao.Site.SiteID.Eq(params.SiteId)).First()
			if site != nil {
				//return errors.New("站点已经存在，请更换标识")
			}
			if params.Image != "" {
				imageArr := strings.Split(
					params.Image+":",
					":",
				)
				containerRow, _ := tx.Container.Where(
					tx.Container.Image.Eq(imageArr[0]),
					tx.Container.Version.Eq(imageArr[1]),
				).First()
				if containerRow != nil {
					siteRow.ContainerID = containerRow.ID
				} else {
					containerRow = &entity.Container{
						Image:   imageArr[0],
						Version: imageArr[1],
					}
					err = tx.Container.Create(containerRow)
					if err != nil {
						return err
					}
					siteRow.ContainerID = containerRow.ID
				}
			}
			err = tx.Site.Create(siteRow)
			if err != nil {
				return err
			}
			return nil
		},
	)

	if err_handler.Found(err) {
		self.JsonResponseWithError(
			http,
			err,
			500,
		)
		return
	}

	err = dao.Q.Transaction(
		func(tx *dao.Query) (err error) {
			_, err = tx.Task.Where(tx.Task.SiteID.Eq(siteRow.ID)).Delete()
			if err != nil {
				return err
			}
			task := logic.NewContainerTask()
			runTaskRow := &logic.CreateMessage{
				Name:      params.SiteId,
				SiteId:    siteRow.ID,
				Image:     params.Image,
				RunParams: runParams,
			}
			task.QueueCreate <- runTaskRow
			return nil
		},
	)

	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	self.JsonResponseWithoutError(http, gin.H{"siteId": siteRow.ID})
	return
}

func (self Site) GetList(http *gin.Context) {
	type ParamsValidate struct {
		Page     int    `form:"page,default=1" binding:"omitempty,gt=0"`
		PageSize int    `form:"pageSize" binding:"omitempty"`
		SiteName string `form:"siteName" binding:"omitempty"`
		Sort     string `form:"sort,default=new" binding:"omitempty,oneof=hot new"`
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	if params.Page < 1 {
		params.Page = 1
	}
	if params.PageSize < 1 {
		params.PageSize = 10
	}
	query := dao.Site.Preload(
		dao.Site.Container.Select(
			dao.Container.ID,
			dao.Container.Image,
			dao.Container.Status,
			dao.Container.Version,
		),
	).Select(
		dao.Site.SiteID,
		dao.Site.ID,
		dao.Site.SiteName,
		dao.Site.SiteURL,
		dao.Site.ContainerID,
		dao.Site.Status,
	)

	if params.SiteName != "" {
		query = query.Where(dao.Site.SiteName.Like("%" + params.SiteName + "%"))
	}
	query = query.Order(dao.Site.ID.Desc())
	list, total, _ := query.FindByPage((params.Page-1)*params.PageSize, params.PageSize)
	self.JsonResponseWithoutError(
		http, gin.H{
			"total": total,
			"page":  params.Page,
			"list":  list,
		},
	)
	return
}

func (self Site) GetDetail(http *gin.Context) {
	type ParamsValidate struct {
		SiteId int32 `form:"siteId" binding:"required"`
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	//siteRow, _ := dao.Site.Where(dao.Site.SiteID.Eq(params.SiteId)).First()
	//if siteRow == nil {
	//	self.JsonResponseWithError(http, errors.New("站点不存在"), 500)
	//	return
	//}
	// 更新容器信息
	//sdk, err := docker.NewDockerClient()
	//if err != nil {
	//	self.JsonResponseWithError(http, err, 500)
	//	return
	//}
	//sdk.ContainerByName()

}
