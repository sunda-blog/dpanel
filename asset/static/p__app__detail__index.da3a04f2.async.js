"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5947],{50070:function(j,l,e){e.r(l),e.d(l,{default:function(){return m}});var i=e(5574),n=e.n(i),d=e(2831),t=e(54006),o=e(68508),u=e(62435),_=e(86074);function m(){var r,s=(0,t.useParams)(),c=(0,t.useSearchParams)(),a=n()(c,2),O=a[0],W=a[1],v=(r=O.get("tab"))!==null&&r!==void 0?r:"edit",M=(0,u.useState)("edit"),h=n()(M,2),C=h[0],E=h[1],g=(0,u.useState)(),f=n()(g,2),k=f[0],y=f[1],U=(0,u.useState)([{label:(0,_.jsx)(t.Link,{to:"/app/detail/edit/".concat(s.id,"?tab=edit"),children:"\u5BB9\u5668\u8BE6\u60C5"}),key:"edit"},{label:(0,_.jsx)(t.Link,{to:"/app/detail/domain/".concat(s.id,"?tab=domain"),children:"\u57DF\u540D\u7BA1\u7406"}),key:"domain"},{label:(0,_.jsx)(t.Link,{to:"/app/detail/file/".concat(s.id,"?tab=file"),children:"\u6587\u4EF6\u7BA1\u7406"}),key:"file"},{label:(0,_.jsx)(t.Link,{to:"/app/detail/log/".concat(s.id,"?tab=log"),children:"\u8FD0\u884C\u65E5\u5FD7"}),key:"log"},{label:(0,_.jsx)(t.Link,{to:"/app/detail/stat/".concat(s.id,"?tab=stat"),children:"\u8FD0\u884C\u72B6\u6001"}),key:"stat"}]),P=n()(U,2),D=P[0],T=P[1];(0,u.useEffect)(function(){E(v),(0,d.a)().then(function(b){b.data.dpanel.family=="lite"&&T(D.filter(function(p){return p.key!="domain"}))})},[]);var B=function(p){E(p.key)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o.Z,{mode:"horizontal",onClick:B,selectedKeys:[C],items:D}),(0,_.jsx)(t.Outlet,{})]})}},2831:function(j,l,e){e.d(l,{a:function(){return u},d:function(){return m}});var i=e(15009),n=e.n(i),d=e(99289),t=e.n(d),o=e(54006);function u(){return _.apply(this,arguments)}function _(){return _=t()(n()().mark(function s(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/common/home/info",{method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},s)})),_.apply(this,arguments)}function m(){return r.apply(this,arguments)}function r(){return r=t()(n()().mark(function s(){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},s)})),r.apply(this,arguments)}}}]);
