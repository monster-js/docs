"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5},o="Data Binding",s={unversionedId:"main-concept/data-binding",id:"main-concept/data-binding",title:"Data Binding",description:"Data binding is a technique that synchronizes the data between a component's logic and its view. This means that when data changes in the logic, the view is updated, and when the user changes some values in the view, the data in the logic is updated accordingly.",source:"@site/docs/main-concept/data-binding.md",sourceDirName:"main-concept",slug:"/main-concept/data-binding",permalink:"/docs/main-concept/data-binding",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/main-concept/data-binding.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Change Detection",permalink:"/docs/main-concept/change-detection"},next:{title:"Event Handling",permalink:"/docs/main-concept/event-handling"}},c={},l=[{value:"Attribute Binding",id:"attribute-binding",level:2},{value:"Text Binding",id:"text-binding",level:2},{value:"Model Binding",id:"model-binding",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-binding"},"Data Binding"),(0,a.kt)("p",null,"Data binding is a technique that synchronizes the data between a component's logic and its view. This means that when data changes in the logic, the view is updated, and when the user changes some values in the view, the data in the logic is updated accordingly."),(0,a.kt)("h2",{id:"attribute-binding"},"Attribute Binding"),(0,a.kt)("p",null,"Here is an example of how to bind a property from the component's logic to an element's attribute:"),(0,a.kt)("p",null,"Example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from '@monster-js/core';\n\nexport function App() {\n    const [id, setId] = useState(this, 0);\n    setInterval(() => setId(id() + 1), 1000);\n    return <h1 id={id()}>App component.</h1>\n}\n")),(0,a.kt)("p",null,"In the example above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute of the ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," element will increment every second. This is an example of one-way binding."),(0,a.kt)("h2",{id:"text-binding"},"Text Binding"),(0,a.kt)("p",null,"Here is an example of how to bind a state of a component to its view."),(0,a.kt)("p",null,"Example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from '@monster-js/core';\n\nexport function App() {\n    const [counter, setCounter] = useState(this, 0);\n    setInterval(() => setCounter(counter() + 1), 1000);\n    return <h1>{counter()}</h1>\n}\n")),(0,a.kt)("p",null,"In the example above, the counter will increment every second and display the changes as text in the view. This is another example of one-way binding."),(0,a.kt)("h2",{id:"model-binding"},"Model Binding"),(0,a.kt)("p",null,"Model binding is a two-way binding of data that uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"v:model")," directive. Whenever the model is changed in the view, the value in the logic will be updated, and the same thing will happen in the view when the model is updated from the logic."),(0,a.kt)("p",null,"Example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from '@monster-js/core';\n\nexport function App() {\n\n    const [message, setMessage] = useState(this, 'Hello world!');\n    const model = [message, setMessage];\n\n    return <div>\n        <h1>{getter()}</h1>\n        <input v:model={model} type=\"text\" />\n    </div>\n}\n")),(0,a.kt)("p",null,"This is an example of two way binding. Please check the ",(0,a.kt)("a",{parentName:"p",href:"../main-concept/directives#view-model"},"view model directive")," form more information about this directive."))}u.isMDXComponent=!0}}]);