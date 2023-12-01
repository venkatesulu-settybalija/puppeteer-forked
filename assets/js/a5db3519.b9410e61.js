/*! For license information please see a5db3519.b9410e61.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91621],{29957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(85893),i=n(11151);const s={sidebar_label:"Page.goBack"},o="Page.goBack() method",a={id:"api/puppeteer.page.goback",title:"Page.goBack() method",description:"This method navigate to the previous page in history.",source:"@site/../docs/api/puppeteer.page.goback.md",sourceDirName:"api",slug:"/api/puppeteer.page.goback",permalink:"/next/api/puppeteer.page.goback",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.goBack"},sidebar:"api",previous:{title:"Page.getDefaultTimeout",permalink:"/next/api/puppeteer.page.getdefaulttimeout"},next:{title:"Page.goForward",permalink:"/next/api/puppeteer.page.goforward"}},d={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pagegoback-method",children:"Page.goBack() method"}),"\n",(0,r.jsx)(t.p,{children:"This method navigate to the previous page in history."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract goBack(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.waitforoptions",children:"WaitForOptions"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Navigation parameters"]})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,r.jsxs)(t.p,{children:["Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go back, resolves to ",(0,r.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["The argument ",(0,r.jsx)(t.code,{children:"options"})," might have the following properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"timeout"})," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," or ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," methods."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"waitUntil"})," : When to consider navigation succeeded, defaults to ",(0,r.jsx)(t.code,{children:"load"}),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",(0,r.jsx)("br",{})," - ",(0,r.jsx)(t.code,{children:"load"})," : consider navigation to be finished when the load event is fired.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(t.code,{children:"domcontentloaded"})," : consider navigation to be finished when the DOMContentLoaded event is fired.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(t.code,{children:"networkidle0"})," : consider navigation to be finished when there are no more than 0 network connections for at least ",(0,r.jsx)(t.code,{children:"500"})," ms.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(t.code,{children:"networkidle2"})," : consider navigation to be finished when there are no more than 2 network connections for at least ",(0,r.jsx)(t.code,{children:"500"})," ms."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);