/*! For license information please see 2e1871d7.6370dda8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8793],{42214:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(85893),r=a(11151);const s={sidebar_label:"Frame.evaluateHandle"},l="Frame.evaluateHandle() method",i={id:"api/puppeteer.frame.evaluatehandle",title:"Frame.evaluateHandle() method",description:"Behaves identically to Page.evaluateHandle() except it's run within the context of this frame.",source:"@site/../docs/api/puppeteer.frame.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.frame.evaluatehandle",permalink:"/next/api/puppeteer.frame.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Frame.evaluateHandle"},sidebar:"api",previous:{title:"Frame.evaluate",permalink:"/next/api/puppeteer.frame.evaluate"},next:{title:"Frame.focus",permalink:"/next/api/puppeteer.frame.focus"}},d={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frameevaluatehandle-method",children:"Frame.evaluateHandle() method"}),"\n",(0,n.jsxs)(t.p,{children:["Behaves identically to ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," except it's run within the context of this frame."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pageFunction"}),(0,n.jsx)(t.td,{children:"Func | string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"args"}),(0,n.jsx)(t.td,{children:"Params"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,t,a)=>{var n=a(67294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,a){var n,s={},o=null,c=null;for(n in void 0!==a&&(o=""+a),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:o,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},85893:(e,t,a)=>{e.exports=a(75251)},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>l});var n=a(67294);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);