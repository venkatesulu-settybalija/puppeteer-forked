/*! For license information please see e4fc6f0e.306641ff.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48326],{29580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(85893),a=n(11151);const s={sidebar_label:"Page.$$eval"},l="Page.$$eval() method",i={id:"api/puppeteer.page.__eval",title:"Page.$$eval() method",description:"This method runs Array.from(document.querySelectorAll(selector)) within the page and passes the result as the first argument to the pageFunction.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.page.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.page.__eval",permalink:"/api/puppeteer.page.__eval",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"Page.$$eval"},sidebar:"api",previous:{title:"Page.$$",permalink:"/api/puppeteer.page.__"},next:{title:"Page.$eval",permalink:"/api/puppeteer.page._eval"}},o={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pageeval-method",children:"Page.$$eval() method"}),"\n",(0,r.jsxs)(t.p,{children:["This method runs ",(0,r.jsx)(t.code,{children:"Array.from(document.querySelectorAll(selector))"})," within the page and passes the result as the first argument to the ",(0,r.jsx)(t.code,{children:"pageFunction"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selector"}),(0,r.jsx)(t.td,{children:"Selector"}),(0,r.jsxs)(t.td,{children:["the ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"selector"})," to query for"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pageFunction"}),(0,r.jsx)(t.td,{children:"Func | string"}),(0,r.jsxs)(t.td,{children:["the function to be evaluated in the page context. Will be passed the result of ",(0,r.jsx)("code",{children:"Array.from(document.querySelectorAll(selector))"})," as its first argument."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"args"}),(0,r.jsx)(t.td,{children:"Params"}),(0,r.jsxs)(t.td,{children:["any additional arguments to pass through to ",(0,r.jsx)("code",{children:"pageFunction"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,r.jsxs)(t.p,{children:["The result of calling ",(0,r.jsx)(t.code,{children:"pageFunction"}),". If it returns an element it is wrapped in an ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),", else the raw value itself is returned."]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"pageFunction"})," returns a promise ",(0,r.jsx)(t.code,{children:"$$eval"})," will wait for the promise to resolve and then return its value."]}),"\n",(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// get the amount of divs on the page\nconst divCount = await page.$$eval('div', divs => divs.length);\n\n// get the text content of all the `.options` elements:\nconst options = await page.$$eval('div > span.options', options => {\n  return options.map(option => option.textContent);\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",(0,r.jsx)(t.code,{children:"pageFunction"}),". By default it is typed as ",(0,r.jsx)(t.code,{children:"Element[]"}),", but you may need to provide a more specific sub-type:"]}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// if you don't provide HTMLInputElement here, TS will error\n// as `value` is not on `Element`\nawait page.$$eval('input', (elements: HTMLInputElement[]) => {\n  return elements.map(e => e.value);\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The compiler should be able to infer the return type from the ",(0,r.jsx)(t.code,{children:"pageFunction"})," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",(0,r.jsx)(t.code,{children:"$$eval"}),":"]}),"\n",(0,r.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// The compiler can infer the return type in this case, but if it can't\n// or if you want to be more explicit, provide it as the generic type.\nconst allInputValues = await page.$$eval<string[]>(\n  'input',\n  (elements: HTMLInputElement[]) => elements.map(e => e.textContent)\n);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,t,n)=>{var r=n(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(67294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);