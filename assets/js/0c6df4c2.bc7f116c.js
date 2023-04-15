"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8.2},l="List Rendering",o={unversionedId:"main-concept/list-rendering",id:"main-concept/list-rendering",title:"List Rendering",description:"The list rendering directive allows developers to render a list of elements based on a given array of data.",source:"@site/docs/main-concept/list-rendering.md",sourceDirName:"main-concept",slug:"/main-concept/list-rendering",permalink:"/docs/main-concept/list-rendering",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/main-concept/list-rendering.md",tags:[],version:"current",sidebarPosition:8.2,frontMatter:{sidebar_position:8.2},sidebar:"tutorialSidebar",previous:{title:"Output Function",permalink:"/docs/main-concept/output"},next:{title:"Conditional Rendering",permalink:"/docs/main-concept/conditional-rendering"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Using List Rendering",id:"using-list-rendering",level:2},{value:"List Item Name",id:"list-item-name",level:2},{value:"List Index",id:"list-index",level:2},{value:"List Update Event",id:"list-update-event",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list-rendering"},"List Rendering"),(0,a.kt)("p",null,"The list rendering directive allows developers to render a list of elements based on a given array of data."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntax of the list rendering directive is ",(0,a.kt)("inlineCode",{parentName:"p"},"v:for")," followed by the array to be rendered."),(0,a.kt)("p",null,"Example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<ul>\n    <li v:for={[1,2,3]}>Hello</li>\n<ul>\n")),(0,a.kt)("h2",{id:"using-list-rendering"},"Using List Rendering"),(0,a.kt)("p",null,"To demonstrate how to use list rendering, consider the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export function Greeting() {\n    const array = [1, 2, 3];\n    return <p v:for={array}>Hello World!</p>\n}\n")),(0,a.kt)("p",null,"The example code shown above will generate a list of elements that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<p>Hello World!</p>\n<p>Hello World!</p>\n<p>Hello World!</p>\n")),(0,a.kt)("p",null,"There are three ",(0,a.kt)("inlineCode",{parentName:"p"},"<p>")," tags because there are three elements inside the array."),(0,a.kt)("h2",{id:"list-item-name"},"List Item Name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'v:for-item="<item name>"')),(0,a.kt)("p",null,"This directive allows developers to set the variable name of each list item and display it in the view."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export function Greeting() {\n    const array = ['foo', 'bar', 'bazz'];\n    return <p v:for={array} v:for-item=\"listItem\">Hello {listItem}!</p>\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The code above might throw a TypeScript linter error of ",(0,a.kt)("inlineCode",{parentName:"p"},"Cannot find name 'listItem'")," since listItem is not defined within the component. A temporary fix for this is to declare listItem above the component, and below the import statements, add the following line: ",(0,a.kt)("inlineCode",{parentName:"p"},"declare const listItem: string;"))),(0,a.kt)("p",null,"The example code above will generate a list of elements that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<p>Hello foo!</p>\n<p>Hello bar!</p>\n<p>Hello bazz!</p>\n")),(0,a.kt)("h2",{id:"list-index"},"List Index"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'v:for-index="<index name>"')),(0,a.kt)("p",null,"This directive allows developers to set the variable name of each list item index."),(0,a.kt)("p",null,"Example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export function greeting() {\n    const array = ['foo', 'bar', 'bazz'];\n    return <p v:for={array} v:for-index=\"listIndex\">Hello {listIndex}!</p>\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The code above might throw a TypeScript linter error of ",(0,a.kt)("inlineCode",{parentName:"p"},"Cannot find name 'listIndex'")," since listIndex is not defined within the component. A temporary fix for this is to declare listIndex above the component, and below the import statements, add the following line: ",(0,a.kt)("inlineCode",{parentName:"p"},"declare const listIndex: number;"))),(0,a.kt)("p",null,"The example code above will generate a list of elements that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<p>Hello 0!</p>\n<p>Hello 1!</p>\n<p>Hello 2!</p>\n")),(0,a.kt)("h2",{id:"list-update-event"},"List Update Event"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"v:for-update={<callback function>}")),(0,a.kt)("p",null,"The list rendering directive can detect changes in the length of the array and trigger an event, which can be useful for updating the view dynamically."),(0,a.kt)("p",null,"Example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export function Greeting() {\n\n    const array = [1, 2, 3];\n\n    const arrayLengthUpdated = () => {\n        console.log('array length is updated');\n    }\n\n    return <p v:for={array} v:for-update={arrayLengthUpdated}>Hello World!</p>\n}\n")))}m.isMDXComponent=!0}}]);