"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4323],{74323:function(J,x,z){z.r(x),z.d(x,{cython:function(){return B},mkPython:function(){return s},python:function(){return R}});function k(o){return new RegExp("^(("+o.join(")|(")+"))\\b")}var I=k(["and","or","not","is"]),S=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],_=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function c(o){return o.scopes[o.scopes.length-1]}function s(o){for(var p="error",D=o.delimiters||o.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,h=[o.singleOperators,o.doubleOperators,o.doubleDelimiters,o.tripleDelimiters,o.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],g=0;g<h.length;g++)h[g]||h.splice(g--,1);var v=o.hangingIndent,d=S,a=_;o.extra_keywords!=null&&(d=d.concat(o.extra_keywords)),o.extra_builtins!=null&&(a=a.concat(o.extra_builtins));var T=!(o.version&&Number(o.version)<3);if(T){var y=o.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;d=d.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),a=a.concat(["ascii","bytes","exec","print"]);var E=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var y=o.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;d=d.concat(["exec","print"]),a=a.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var E=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var N=k(d),U=k(a);function F(n,e){var r=n.sol()&&e.lastToken!="\\";if(r&&(e.indent=n.indentation()),r&&c(e).type=="py"){var i=c(e).offset;if(n.eatSpace()){var u=n.indentation();return u>i?A(n,e):u<i&&O(n,e)&&n.peek()!="#"&&(e.errorToken=!0),null}else{var t=w(n,e);return i>0&&O(n,e)&&(t+=" "+p),t}}return w(n,e)}function w(n,e,r){if(n.eatSpace())return null;if(!r&&n.match(/^#.*/))return"comment";if(n.match(/^[0-9\.]/,!1)){var i=!1;if(n.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(i=!0),n.match(/^[\d_]+\.\d*/)&&(i=!0),n.match(/^\.\d+/)&&(i=!0),i)return n.eat(/J/i),"number";var u=!1;if(n.match(/^0x[0-9a-f_]+/i)&&(u=!0),n.match(/^0b[01_]+/i)&&(u=!0),n.match(/^0o[0-7_]+/i)&&(u=!0),n.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(n.eat(/J/i),u=!0),n.match(/^0(?![\dx])/i)&&(u=!0),u)return n.eat(/L/i),"number"}if(n.match(E)){var t=n.current().toLowerCase().indexOf("f")!==-1;return t?(e.tokenize=P(n.current(),e.tokenize),e.tokenize(n,e)):(e.tokenize=Z(n.current(),e.tokenize),e.tokenize(n,e))}for(var l=0;l<h.length;l++)if(n.match(h[l]))return"operator";return n.match(D)?"punctuation":e.lastToken=="."&&n.match(y)?"property":n.match(N)||n.match(I)?"keyword":n.match(U)?"builtin":n.match(/^(self|cls)\b/)?"self":n.match(y)?e.lastToken=="def"||e.lastToken=="class"?"def":"variable":(n.next(),r?null:p)}function P(n,e){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var r=n.length==1,i="string";function u(l){return function(f,b){var m=w(f,b,!0);return m=="punctuation"&&(f.current()=="{"?b.tokenize=u(l+1):f.current()=="}"&&(l>1?b.tokenize=u(l-1):b.tokenize=t)),m}}function t(l,f){for(;!l.eol();)if(l.eatWhile(/[^'"\{\}\\]/),l.eat("\\")){if(l.next(),r&&l.eol())return i}else{if(l.match(n))return f.tokenize=e,i;if(l.match("{{"))return i;if(l.match("{",!1))return f.tokenize=u(0),l.current()?i:f.tokenize(l,f);if(l.match("}}"))return i;if(l.match("}"))return p;l.eat(/['"]/)}if(r){if(o.singleLineStringErrors)return p;f.tokenize=e}return i}return t.isString=!0,t}function Z(n,e){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var r=n.length==1,i="string";function u(t,l){for(;!t.eol();)if(t.eatWhile(/[^'"\\]/),t.eat("\\")){if(t.next(),r&&t.eol())return i}else{if(t.match(n))return l.tokenize=e,i;t.eat(/['"]/)}if(r){if(o.singleLineStringErrors)return p;l.tokenize=e}return i}return u.isString=!0,u}function A(n,e){for(;c(e).type!="py";)e.scopes.pop();e.scopes.push({offset:c(e).offset+n.indentUnit,type:"py",align:null})}function $(n,e,r){var i=n.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:n.column()+1;e.scopes.push({offset:e.indent+(v||n.indentUnit),type:r,align:i})}function O(n,e){for(var r=n.indentation();e.scopes.length>1&&c(e).offset>r;){if(c(e).type!="py")return!0;e.scopes.pop()}return c(e).offset!=r}function j(n,e){n.sol()&&(e.beginningOfLine=!0,e.dedent=!1);var r=e.tokenize(n,e),i=n.current();if(e.beginningOfLine&&i=="@")return n.match(y,!1)?"meta":T?"operator":p;if(/\S/.test(i)&&(e.beginningOfLine=!1),(r=="variable"||r=="builtin")&&e.lastToken=="meta"&&(r="meta"),(i=="pass"||i=="return")&&(e.dedent=!0),i=="lambda"&&(e.lambda=!0),i==":"&&!e.lambda&&c(e).type=="py"&&n.match(/^\s*(?:#|$)/,!1)&&A(n,e),i.length==1&&!/string|comment/.test(r)){var u="[({".indexOf(i);if(u!=-1&&$(n,e,"])}".slice(u,u+1)),u="])}".indexOf(i),u!=-1)if(c(e).type==i)e.indent=e.scopes.pop().offset-(v||n.indentUnit);else return p}return e.dedent&&n.eol()&&c(e).type=="py"&&e.scopes.length>1&&e.scopes.pop(),r}return{name:"python",startState:function(){return{tokenize:F,scopes:[{offset:0,type:"py",align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(n,e){var r=e.errorToken;r&&(e.errorToken=!1);var i=j(n,e);return i&&i!="comment"&&(e.lastToken=i=="keyword"||i=="punctuation"?n.current():i),i=="punctuation"&&(i=null),n.eol()&&e.lambda&&(e.lambda=!1),r?p:i},indent:function(n,e,r){if(n.tokenize!=F)return n.tokenize.isString?null:0;var i=c(n),u=i.type==e.charAt(0)||i.type=="py"&&!n.dedent&&/^(else:|elif |except |finally:)/.test(e);return i.align!=null?i.align-(u?1:0):i.offset-(u?v||r.unit:0)},languageData:{autocomplete:S.concat(_).concat(["exec","print"]),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:"#"},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}var L=function(o){return o.split(" ")};const R=s({}),B=s({extra_keywords:L("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})}}]);
