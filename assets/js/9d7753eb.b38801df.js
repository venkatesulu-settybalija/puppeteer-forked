/*! For license information please see 9d7753eb.b38801df.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83230],{27485:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=n(85893),r=n(11151);const l={sidebar_label:"Page.evaluateHandle"},s="Page.evaluateHandle() method",i={id:"api/puppeteer.page.evaluatehandle",title:"Page.evaluateHandle() method",description:"Signature:",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.page.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluatehandle",permalink:"/api/puppeteer.page.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"Page.evaluateHandle"},sidebar:"api",previous:{title:"Page.evaluate",permalink:"/api/puppeteer.page.evaluate"},next:{title:"Page.evaluateOnNewDocument",permalink:"/api/puppeteer.page.evaluateonnewdocument"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function o(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"pageevaluatehandle-method",children:"Page.evaluateHandle() method"}),"\n",(0,t.jsx)(a.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"class Page {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Parameter"}),(0,t.jsx)(a.th,{children:"Type"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"pageFunction"}),(0,t.jsx)(a.td,{children:"Func | string"}),(0,t.jsx)(a.td,{children:"a function that is run within the page"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"args"}),(0,t.jsx)(a.td,{children:"Params"}),(0,t.jsx)(a.td,{children:"arguments to be passed to the pageFunction"})]})]})]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(a.p,{children:["Promise<",(0,t.jsx)(a.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]}),"\n",(0,t.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(a.p,{children:["The only difference between ",(0,t.jsx)(a.a,{href:"/api/puppeteer.page.evaluate",children:"page.evaluate"})," and ",(0,t.jsx)(a.code,{children:"page.evaluateHandle"})," is that ",(0,t.jsx)(a.code,{children:"evaluateHandle"})," will return the value wrapped in an in-page object."]}),"\n",(0,t.jsxs)(a.p,{children:["If the function passed to ",(0,t.jsx)(a.code,{children:"page.evaluateHandle"})," returns a Promise, the function will wait for the promise to resolve and return its value."]}),"\n",(0,t.jsx)(a.p,{children:"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"}),"\n",(0,t.jsx)(a.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"const aHandle = await page.evaluateHandle('document');\n"})}),"\n",(0,t.jsx)(a.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"})," instances can be passed as arguments to the ",(0,t.jsx)(a.code,{children:"pageFunction"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"const aHandle = await page.evaluateHandle(() => document.body);\nconst resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);\nconsole.log(await resultHandle.jsonValue());\nawait resultHandle.dispose();\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Most of the time this function returns a ",(0,t.jsx)(a.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),", but if ",(0,t.jsx)(a.code,{children:"pageFunction"})," returns a reference to an element, you instead get an ",(0,t.jsx)(a.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"})," back:"]}),"\n",(0,t.jsx)(a.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"const button = await page.evaluateHandle(() =>\n  document.querySelector('button')\n);\n// can call `click` because `button` is an `ElementHandle`\nawait button.click();\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The TypeScript definitions assume that ",(0,t.jsx)(a.code,{children:"evaluateHandle"})," returns a ",(0,t.jsx)(a.code,{children:"JSHandle"}),", but if you know it's going to return an ",(0,t.jsx)(a.code,{children:"ElementHandle"}),", pass it as the generic argument:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"const button = await page.evaluateHandle<ElementHandle>(...);\n"})})]})}function u(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},75251:(e,a,n)=>{var t=n(67294),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,n){var t,l={},c=null,o=null;for(t in void 0!==n&&(c=""+n),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(o=a.ref),a)s.call(a,t)&&!d.hasOwnProperty(t)&&(l[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===l[t]&&(l[t]=a[t]);return{$$typeof:r,type:e,key:c,ref:o,props:l,_owner:i.current}}a.Fragment=l,a.jsx=c,a.jsxs=c},85893:(e,a,n)=>{e.exports=n(75251)},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>s});var t=n(67294);const r={},l=t.createContext(r);function s(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);