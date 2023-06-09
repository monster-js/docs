"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="Change Detection",c={unversionedId:"main-concept/change-detection",id:"main-concept/change-detection",title:"Change Detection",description:"Change detection is the process of synchronizing the data between a component's logic and view. It is triggered when a value of a state is updated or the detectChanges function is manually called.",source:"@site/docs/main-concept/change-detection.md",sourceDirName:"main-concept",slug:"/main-concept/change-detection",permalink:"/docs/main-concept/change-detection",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/main-concept/change-detection.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Event Emitter",permalink:"/docs/main-concept/event-emitter"},next:{title:"Data Binding",permalink:"/docs/main-concept/data-binding"}},s={},l=[{value:"Setting a State",id:"setting-a-state",level:2},{value:"Manually Trigger Change Detection",id:"manually-trigger-change-detection",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"change-detection"},"Change Detection"),(0,r.kt)("p",null,"Change detection is the process of synchronizing the data between a component's logic and view. It is triggered when a value of a state is updated or the ",(0,r.kt)("inlineCode",{parentName:"p"},"detectChanges")," function is manually called."),(0,r.kt)("h2",{id:"setting-a-state"},"Setting a State"),(0,r.kt)("p",null,"We can create a state using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," function. For more information about how to create and use a state, please refer to the documentation on ",(0,r.kt)("a",{parentName:"p",href:"../main-concept/component-states#component-state"},"component states"),"."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from '@monster-js/core';\n\nexport function Counter() {\n    const [count, setCount] = useState(this, 0);\n    setInterval(() => setCount(count() + 1), 1000);\n    return <h1>{count()}</h1>\n}\n")),(0,r.kt)("p",null,"In the example above, we set a new value for the state using the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCount")," function, and this will trigger the change detection process."),(0,r.kt)("h2",{id:"manually-trigger-change-detection"},"Manually Trigger Change Detection"),(0,r.kt)("p",null,"In some cases, we may need to manually trigger the change detection process of a component."),(0,r.kt)("p",null,"To manually trigger the change detection process, we just need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"detectChanges")," function and pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," context of a component as an argument."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { detectChanges } from '@monster-js/core';\n\nexport function Counter() {\n    setInterval(() => detectChanges(this), 1000);\n    return <h1>{new Date()}</h1>\n}\n")))}d.isMDXComponent=!0}}]);