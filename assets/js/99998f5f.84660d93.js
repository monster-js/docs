"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[43],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="What is MonsterJS",s={unversionedId:"getting-started/what-is-monster-js",id:"getting-started/what-is-monster-js",title:"What is MonsterJS",description:"MonsterJS is a JavaScript framework for building web applications or standalone components based on web components, which are suitable for encapsulating components and creating micro front-end apps.",source:"@site/docs/getting-started/what-is-monster-js.mdx",sourceDirName:"getting-started",slug:"/getting-started/what-is-monster-js",permalink:"/docs/docs/getting-started/what-is-monster-js",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/getting-started/what-is-monster-js.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/docs/category/getting-started"},next:{title:"Quick Start",permalink:"/docs/docs/getting-started/quick-start"}},l={},c=[{value:"MonsterJS in Other Frameworks",id:"monsterjs-in-other-frameworks",level:2},{value:"Features",id:"features",level:2},{value:"Contact us",id:"contact-us",level:2},{value:"Support us",id:"support-us",level:2},{value:"License",id:"license",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-monsterjs"},"What is MonsterJS"),(0,a.kt)("p",null,"MonsterJS is a JavaScript framework for building web applications or standalone components based on web components, which are suitable for encapsulating components and creating micro front-end apps."),(0,a.kt)("p",null,"This framework does not use virtual DOM; instead, it creates a watcher for each binding and updates it only when necessary. This feature is what makes it fast and gives it good client runtime performance and memory efficiency, even for large applications."),(0,a.kt)("p",null,"Official documentation ",(0,a.kt)("a",{parentName:"p",href:"https://monster-js.org"},"https://monster-js.org"),"."),(0,a.kt)("h2",{id:"monsterjs-in-other-frameworks"},"MonsterJS in Other Frameworks"),(0,a.kt)("p",null,"MonsterJS works perfectly with other frameworks. Its components are all web components, making it easy to integrate with Angular, Vue, React, and other JavaScript frameworks. Additionally, it can be used in vanilla JavaScript applications."),(0,a.kt)("p",null,"This framework makes it easy to develop widgets, standalone components, and micro front-end architectures."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../main-concept/data-binding#model-binding"},"Two way data binding")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../main-concept/component"},"Components")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../main-concept/event-handling"},"Event handling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../main-concept/component-states"},"State Management")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../available-packages/store"},"Store")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../available-packages/router"},"Router")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../main-concept/directives"},"Directives")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../cli/cli-what-is-cli"},"Cli"))),(0,a.kt)("h2",{id:"contact-us"},"Contact us"),(0,a.kt)("p",null,"To contact the team, send us an email at ",(0,a.kt)("a",{parentName:"p",href:"mailto:mfpjayb@gmail.com"},"mfpjayb@gmail.com"),"."),(0,a.kt)("h2",{id:"support-us"},"Support us"),(0,a.kt)("p",null,"MonsterJS is licensed under the MIT license and is completely free to use. However, maintaining and developing new features for the framework requires some financial backing."),(0,a.kt)("p",null,(0,a.kt)("img",{width:"15px",height:"15px",style:{marginRight:"5px"},src:"https://github.githubassets.com/images/icons/emoji/heart.png"}),"If you'd like to support the development of MonsterJS, you can do so using the following links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.paypal.com/paypalme/dariusbualan"},"One-time donation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.patreon.com/monsterjs"},"Become a patreon sponsor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sponsors/monster-js"},"Become a github sponsor"))),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"MonsterJS: Licensed Under the ",(0,a.kt)("a",{parentName:"p",href:"../license"},"MIT License"),"."),(0,a.kt)("p",null,"Copyright (c) 2022 Darius Bualan Jr."))}u.isMDXComponent=!0}}]);