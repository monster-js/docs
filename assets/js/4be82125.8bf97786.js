"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[981],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3283:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},i="Router",l={unversionedId:"available-packages/router",id:"available-packages/router",title:"Router",description:"The MonsterJS Router enables developers to build a single-page application with multiple components that act as different pages of the app. The view changes depending on the activated route, which is determined by the URL of the browser and the path registered in the route component.",source:"@site/docs/available-packages/router.md",sourceDirName:"available-packages",slug:"/available-packages/router",permalink:"/docs/docs/available-packages/router",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/available-packages/router.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Store",permalink:"/docs/docs/available-packages/store"},next:{title:"Useful Topics",permalink:"/docs/docs/category/useful-topics"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Creating a Route",id:"creating-a-route",level:2},{value:"Route Props",id:"route-props",level:2},{value:"Router Directive",id:"router-directive",level:2},{value:"Router Link",id:"router-link",level:3},{value:"Router Link Active",id:"router-link-active",level:3},{value:"Router Link Active Exact",id:"router-link-active-exact",level:3},{value:"Router Guard",id:"router-guard",level:2},{value:"Can Activate",id:"can-activate",level:3},{value:"Can Deactivate",id:"can-deactivate",level:3},{value:"Navigate",id:"navigate",level:2},{value:"Arguments",id:"arguments",level:4},{value:"On Route Change",id:"on-route-change",level:2},{value:"Router Params",id:"router-params",level:2},{value:"Dynamic Route Matching",id:"dynamic-route-matching",level:2},{value:"Lazy Loading",id:"lazy-loading",level:2}],s=(c="Route",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"router"},"Router"),(0,r.kt)("p",null,"The MonsterJS Router enables developers to build a single-page application with multiple components that act as different pages of the app. The view changes depending on the activated route, which is determined by the URL of the browser and the path registered in the route component."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The router can be installed using npm."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"npm install @monster-js/router\n")),(0,r.kt)("h2",{id:"creating-a-route"},"Creating a Route"),(0,r.kt)("p",null,"A route is simply a component provided by the router package. We can create a route using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Route />")," component."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Route } from '@monster-js/router';\nimport { Greeting } from './greeting.component';\n\nexport function App() {\n    return <div>\n        <Route\n            path=\"/greeting\"\n            element={() => <Greeting />}\n        />\n    </div>\n}\n")),(0,r.kt)("p",null,"In the example given above, when the user navigates to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/greeting")," route, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Greeting")," component will be displayed in the view."),(0,r.kt)("h2",{id:"route-props"},"Route Props"),(0,r.kt)("p",null,"Route props refer to the properties of a route that determine its behavior."),(0,r.kt)("p",null,"Below is a list of the props that can be used in a route to configure its behavior."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"This particular prop refers to the path that must match in the browser URL pathname before the route can be activated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"element"),(0,r.kt)("td",{parentName:"tr",align:null},"This particular prop is a function that returns the component or element that will be rendered inside the ",(0,r.kt)(s,{mdxType:"Route"})," when the route path matches the browser URL pathname.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exact"),(0,r.kt)("td",{parentName:"tr",align:null},"If this is set to true, then the component will only activate if the route path is an exact match with the browser URL pathname, but it will still respect dynamic route matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guards"),(0,r.kt)("td",{parentName:"tr",align:null},"A route guard is an additional layer of checking that determines whether a component can activate or deactivate when a particular route is navigated to or away from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirect-to"),(0,r.kt)("td",{parentName:"tr",align:null},"This prop is a string URL to redirect to if the route path matches the browser URL pathname.")))),(0,r.kt)("h2",{id:"router-directive"},"Router Directive"),(0,r.kt)("p",null,"The router also provides some directives that are very helpful when working with routes."),(0,r.kt)("h3",{id:"router-link"},"Router Link"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'router:link="<link>"')),(0,r.kt)("p",null,"Attach this directive to an element to navigate to the link when the element is clicked. If used in an ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," tag, it will automatically add the link as an href attribute."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<a router:link="/some/url">I am a link</a>\n<button router:link="/some/url/123">I am a button</button>\n')),(0,r.kt)("h3",{id:"router-link-active"},"Router Link Active"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'router:link-active="<class name>"')),(0,r.kt)("p",null,"This directive will add the specified class name to the class list of the element if the ",(0,r.kt)("inlineCode",{parentName:"p"},"router:link")," directive link matches the browser URL pathname using dynamic matching."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<a\n    router:link="/some/url/123"\n    router:link-active="i-am-active"\n>I am a link</a>\n')),(0,r.kt)("h3",{id:"router-link-active-exact"},"Router Link Active Exact"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"router:link-active-exact={<boolean>}")),(0,r.kt)("p",null,"If the value is true, this directive will enable us to add the class name of router:link-active directive only when the router:link directive link is an exact match of the browser url pathname but still respect dynamic matching."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<button\n    router:link="/some/url/123"\n    router:link-active="i-am-active"\n    router:link-active-exact={true}\n>I am a button</button>\n')),(0,r.kt)("h2",{id:"router-guard"},"Router Guard"),(0,r.kt)("p",null,"Router guard is another way to check whether a component can activate or not. It can also run a block of code before a route can activate or deactivate."),(0,r.kt)("p",null,"The following code is an example of working router guard code, but it does not yet include any functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Guard } from '@monster-js/router';\n\n@Guard\nexport class AuthGuard {\n}\n")),(0,r.kt)("h3",{id:"can-activate"},"Can Activate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"canActivate")," method can help us add additional checks to determine if a component is allowed to activate or not."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { navigate } from '@monster-js/core';\nimport { Guard } from '@monster-js/router';\nimport { AuthService } from './auth.service';\n\n@Guard\nexport class AuthGuard {\n\n    constructor(private authService: AuthService) {}\n\n    public override canActivate(): Promise<boolean> | boolean {\n        if (this.authService.isLoggedIn) {\n            return true;\n        }\n        navigate('/guest/route');\n        return false;\n    }\n}\n")),(0,r.kt)("h3",{id:"can-deactivate"},"Can Deactivate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"canDeactivate")," method can help us add additional checks to determine if a component is allowed to deactivate or not."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Guard } from '@monster-js/router';\nimport { ChangesService } from './changes.service';\n\n@Guard\nexport class ChangesGuard {\n\n    constructor(private changesService: ChangesService) {}\n\n    public override canDeactivate(): Promise<boolean> | boolean {\n        return !this.changesService.hasChanges();\n    }\n}\n")),(0,r.kt)("h2",{id:"navigate"},"Navigate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate(<url>, <state>, <title>, <replace state>)")," function can be used to navigate to a route programmatically."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { navigate } from '@monster-js/router';\n\nexport function greeting() {\n\n    const handleClick = () => {\n        navigate('/some/url');\n    }\n\n    return <button on:click={handleClick}>Navigate</button>\n}\n")),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter is required and specifies the URL to which we want to navigate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"An object, used as the state in history.pushState api. This parameter is not required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"A string, used as the title in history.pushState api. This parameter is not required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace state"),(0,r.kt)("td",{parentName:"tr",align:null},"This boolean value indicates whether to use history.replaceState or history.pushState during navigation.")))),(0,r.kt)("h2",{id:"on-route-change"},"On Route Change"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"onRouteChange")," function can help developers to subscribe to the route change event."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { onRouteChange } from '@monster-js/router';\n\nexport function Greeting() {\n\n    onRouteChange(this, () => {\n        console.log('route has change');\n    });\n\n    return <h1>Greeting</h1>\n}\n")),(0,r.kt)("p",null,"In the example above, the component will log a message to the console every time the route changes."),(0,r.kt)("h2",{id:"router-params"},"Router Params"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getParams")," functions allows us to retrieve router parameters. More information about these route parameters can be found in the ",(0,r.kt)("a",{parentName:"p",href:"#dynamic-route-matching"},"dynamic route matching")," section."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { getParams } from '@monster-js/router';\n\nexport function greeting(props) {\n\n    console.log(getParams());\n\n    return <h1>Greeting</h1>\n}\n")),(0,r.kt)("h2",{id:"dynamic-route-matching"},"Dynamic Route Matching"),(0,r.kt)("p",null,"Dynamic route matching is a way to match a segment of a route path with the corresponding segment of a browser URL pathname. A dynamic segment is denoted by a colon (",(0,r.kt)("inlineCode",{parentName:"p"},":"),") followed by the segment name. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/:userId"),". The values of the dynamic segments are referred to as router parameters."),(0,r.kt)("p",null,"Here is a table that shows examples of dynamic routes and their corresponding router parameter values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Browser URL Pathname"),(0,r.kt)("th",{parentName:"tr",align:null},"Router Params"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/:path"),(0,r.kt)("td",{parentName:"tr",align:null},"/100"),(0,r.kt)("td",{parentName:"tr",align:null},"{ path: 100 }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/user/:userId"),(0,r.kt)("td",{parentName:"tr",align:null},"/user/123"),(0,r.kt)("td",{parentName:"tr",align:null},"{ userId: 123 }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/post/:postId/:userId"),(0,r.kt)("td",{parentName:"tr",align:null},"/post/1/123"),(0,r.kt)("td",{parentName:"tr",align:null},"{ postId: 1, userId: 123 }")))),(0,r.kt)("h2",{id:"lazy-loading"},"Lazy Loading"),(0,r.kt)("p",null,"To load a component on demand, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createLazyComponent")," function to create a lazily loaded component."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Route } from '@monster-js/router';\nimport { createLazyComponent } from '@monster-js/core';\n\nconst LazyGreeting = createLazyComponent(() => import('./greeting.component').then(c => c.Greeting));\n\nexport function App() {\n    return <div>\n        <Route path=\"/\" element={() => <LazyGreeting />} />\n    </div>\n}\n")))}h.isMDXComponent=!0}}]);