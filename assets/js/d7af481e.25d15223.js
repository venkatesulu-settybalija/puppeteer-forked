/*! For license information please see d7af481e.25d15223.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68163],{10848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(85893),n=r(11151);const s={sidebar_label:"Viewport"},d="Viewport interface",o={id:"api/puppeteer.viewport",title:"Viewport interface",description:"Signature:",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.viewport.md",sourceDirName:"api",slug:"/api/puppeteer.viewport",permalink:"/api/puppeteer.viewport",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"Viewport"},sidebar:"api",previous:{title:"UnsupportedOperation",permalink:"/api/puppeteer.unsupportedoperation"},next:{title:"VisibilityOption",permalink:"/api/puppeteer.visibilityoption"}},c={},l=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"viewport-interface",children:"Viewport interface"}),"\n",(0,i.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"export interface Viewport\n"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Modifiers"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"deviceScaleFactor"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"optional"})}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsxs)(t.td,{children:["Specify device scale factor. See ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",children:"devicePixelRatio"})," for more info."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hasTouch"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"optional"})}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{children:"Specify if the viewport supports touch events."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"height"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{children:"The page height in pixels."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isLandscape"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"optional"})}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{children:"Specifies if the viewport is in landscape mode."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isMobile"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"optional"})}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsxs)(t.td,{children:["Whether the ",(0,i.jsx)("code",{children:"meta viewport"})," tag is taken into account."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"width"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{children:"The page width in pixels."}),(0,i.jsx)(t.td,{})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var i=r(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var i,s={},l=null,p=null;for(i in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)d.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:n,type:e,key:l,ref:p,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>d});var i=r(67294);const n={},s=i.createContext(n);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);