"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:9},i="Lifecycle Hooks",l={unversionedId:"main-concept/lifecyle-hooks",id:"main-concept/lifecyle-hooks",title:"Lifecycle Hooks",description:"Lifecycle hooks are functions that let you run a block of code when your component or directive triggers a lifecycle event.",source:"@site/docs/main-concept/lifecyle-hooks.md",sourceDirName:"main-concept",slug:"/main-concept/lifecyle-hooks",permalink:"/docs/docs/main-concept/lifecyle-hooks",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/main-concept/lifecyle-hooks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Conditional Rendering",permalink:"/docs/docs/main-concept/conditional-rendering"},next:{title:"Directives",permalink:"/docs/docs/main-concept/directives"}},c={},s=[{value:"Component Hooks",id:"component-hooks",level:2},{value:"Directive Hooks",id:"directive-hooks",level:2}],p={toc:s},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lifecycle-hooks"},"Lifecycle Hooks"),(0,r.kt)("p",null,"Lifecycle hooks are functions that let you run a block of code when your component or directive triggers a lifecycle event."),(0,r.kt)("h2",{id:"component-hooks"},"Component Hooks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hooks"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onInit"),(0,r.kt)("td",{parentName:"tr",align:null},"The first hook to run when the component is initialized. This will be called right after the view is built as DOM elements but is not yet connected to the DOM tree.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"afterInit"),(0,r.kt)("td",{parentName:"tr",align:null},"This hook will be called once the component's view is connected to the DOM tree.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChangeDetection"),(0,r.kt)("td",{parentName:"tr",align:null},"This is called every time the component's change detection runs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onViewChange"),(0,r.kt)("td",{parentName:"tr",align:null},"This will be called every time there are changes in view caused by change detection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDestroy"),(0,r.kt)("td",{parentName:"tr",align:null},"This function will be called when a component is destroyed, and is typically used for cleanup tasks such as unsubscribing from all subscriptions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adopted"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a component is moved from one HTML document to another using adoptNode()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attributeChanged"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when an observed attribute has been added, removed, or changed. The callback function for this hook has three parameters, first the the name of the attribute, second is the old value, and third is the new value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPropsChange"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is called when there are changes to a component's props.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useEffect"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a hook used to watch for changes in a state or variable during change detection. It has three arguments: the first is the ",(0,r.kt)("inlineCode",{parentName:"td"},"this")," context of the component, the second is the callback function, and the third is a function that returns an array of values. If one or more of these values change, the hook will execute the callback function.")))),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { onInit, useEffect, useState } from '@monster-js/core';\n\nexport function Greeting() {\n\n    const [name, setName] = useState(this, 'John');\n\n    onInit(this, () => {\n        console.log('I am in onInit hook');\n    });\n\n    useEffect(this, () => {\n        console.log('Hello ' + name);\n    }, () => [name()]);\n\n    return <h1>Greeting<h1>\n}\n")),(0,r.kt)("h2",{id:"directive-hooks"},"Directive Hooks"),(0,r.kt)("p",null,"There are no hooks specifically intended for directives, but directives can make use of the component hooks. It's important to note that these hooks will only trigger when their corresponding event in the component is triggered. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"onInit")," hook will only trigger when the component is being initialized. Elements created using structural directives like ",(0,r.kt)("inlineCode",{parentName:"p"},"v:if")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"v:for")," will not trigger this event."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { onChangeDetection, createDirective } from '@monster-js/core';\n\nexport function highlight(element: HTMLElement, directives: DirectiveObject, context: FunctionComponent) {\n\n    onChangeDetection(this, () => {\n        console.log('I am in onChangeDetection hook');\n    }, () => element.isConnected);\n\n    return element;\n}\n\ncreateDirective(highlight, 'highlight');\n")),(0,r.kt)("p",null,"It's important to note that when using hooks inside a directive, we need to pass a third argument, which is a function that returns a boolean value. During the change detection process, if this function returns false, the hook will be removed. In the example above, the hook will be removed when the element is disconnected from the DOM tree."))}h.isMDXComponent=!0}}]);