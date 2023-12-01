/*! For license information please see a87f1f2b.12f68f7c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44970],{6539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=r(85893),a=r(11151);const i={sidebar_label:"Page.addScriptTag"},s="Page.addScriptTag() method",d={id:"api/puppeteer.page.addscripttag",title:"Page.addScriptTag() method",description:"Adds a `` tag into the page with the desired URL or content.",source:"@site/../docs/api/puppeteer.page.addscripttag.md",sourceDirName:"api",slug:"/api/puppeteer.page.addscripttag",permalink:"/next/api/puppeteer.page.addscripttag",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.addScriptTag"},sidebar:"api",previous:{title:"Page.$x",permalink:"/next/api/puppeteer.page._x"},next:{title:"Page.addStyleTag",permalink:"/next/api/puppeteer.page.addstyletag"}},p={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pageaddscripttag-method",children:"Page.addScriptTag() method"}),"\n",(0,n.jsxs)(t.p,{children:["Adds a ",(0,n.jsx)(t.code,{children:"<script>"})," tag into the page with the desired URL or content."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  addScriptTag(\n    options: FrameAddScriptTagOptions\n  ): Promise<ElementHandle<HTMLScriptElement>>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.frameaddscripttagoptions",children:"FrameAddScriptTagOptions"})}),(0,n.jsx)(t.td,{children:"Options for the script."})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLScriptElement>>"]}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,n.jsx)(t.code,{children:"<script>"})," element."]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Shortcut for ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.frame.addscripttag",children:"page.mainFrame().addScriptTag(options)"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,o=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)s.call(t,n)&&!p.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:o,props:i,_owner:d.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>s});var n=r(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);