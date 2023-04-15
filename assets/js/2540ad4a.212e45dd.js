"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[73],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(v,o(o({ref:t},d),{},{components:n})):i.createElement(v,o({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:10},o="Directives",l={unversionedId:"main-concept/directives",id:"main-concept/directives",title:"Directives",description:"In MonsterJS, directives allow you to modify the appearance or add additional behavior to an element. Directives are used to attach special behavior to elements in the DOM, such as manipulating their attributes or registering event listeners. They can be used to make elements dynamic, reactive, or conditional based on certain conditions or state changes.",source:"@site/docs/main-concept/directives.md",sourceDirName:"main-concept",slug:"/main-concept/directives",permalink:"/docs/main-concept/directives",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/main-concept/directives.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Lifecycle Hooks",permalink:"/docs/main-concept/lifecyle-hooks"},next:{title:"Custom Directives",permalink:"/docs/main-concept/custom-directive"}},s={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Available Directives",id:"available-directives",level:2},{value:"View Model",id:"view-model",level:3},{value:"View Class",id:"view-class",level:3},{value:"View Reference",id:"view-reference",level:3},{value:"Observed Attribute",id:"observed-attribute",level:3},{value:"Event Handler",id:"event-handler",level:3},{value:"List Rendering",id:"list-rendering",level:3},{value:"Conditional Rendering",id:"conditional-rendering",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"directives"},"Directives"),(0,r.kt)("p",null,"In MonsterJS, directives allow you to modify the appearance or add additional behavior to an element. Directives are used to attach special behavior to elements in the DOM, such as manipulating their attributes or registering event listeners. They can be used to make elements dynamic, reactive, or conditional based on certain conditions or state changes."),(0,r.kt)("p",null,"There are two types of directives: attribute directives and structural directives. Attribute directives are used to modify the behavior of an element by manipulating its attributes or to reference an element to a variable, while structural directives are used to dynamically modify the structure of the DOM. Attribute directives include ",(0,r.kt)("inlineCode",{parentName:"p"},"v:class"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v:ref"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"v:model"),", while structural directives include ",(0,r.kt)("inlineCode",{parentName:"p"},"v:for")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"v:if"),"."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"The syntax of a directive is ",(0,r.kt)("inlineCode",{parentName:"p"},'<namespace>:<name>="<value>"'),". The value can be a string or a JSX expression container in curly braces ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),", or you can omit the value altogether because it is optional."),(0,r.kt)("h2",{id:"available-directives"},"Available Directives"),(0,r.kt)("p",null,"Below is a list of directives provided by the core package."),(0,r.kt)("h3",{id:"view-model"},"View Model"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v:model={[<state getter>, <state setter>]}")),(0,r.kt)("p",null,"The view model directive provides a two-way binding of data between the view and the logic. Whenever the model is changed in the view, the corresponding state in the logic is updated, and vice versa. This ensures that the view and logic stay in sync with each other."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { registerDirectives, viewDirectives, useState } from '@monster-js/core';\n\nexport function Greeting() {\n\n    const [message, setMessage] = useState(this, 'Hello World');\n    const messageModel = [message, setMessage];\n\n    return <div>\n        <h1>{getter()}</h1>\n        <input v:model={messageModel} type=\"text\" />\n    </div>\n}\n\nregisterDirectives(Greeting, [viewDirectives]);\n")),(0,r.kt)("h3",{id:"view-class"},"View Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v:class={<object>}")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"v:class")," directive is used to conditionally add or remove a CSS class to an element. It accepts an object as an argument, and adds the keys of truthy object properties as classes to the element."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { registerDirectives, viewDirectives, useState } from '@monster-js/core';\n\nexport function Greeting() {\n    const [showGreeting, setShowGreeting] = useState(this, true);\n    return <h1 v:class={{ 'show-greeting': showGreeting }}>Hello world!</h1>\n}\n\nregisterDirectives(Greeting, [viewDirectives]);\n")),(0,r.kt)("h3",{id:"view-reference"},"View Reference"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v:ref={<reference_holder>}")),(0,r.kt)("p",null,"This directive is used to create a reference of an element to the variable in logic."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { registerDirectives, viewDirectives } from '@monster-js/core';\n\nexport function Greeting() {\n    let elementRef: HTMLElement;\n    return <h1 v:ref={elementRef}>Hello world!</h1>\n}\n\nregisterDirectives(Greeting, [viewDirectives]);\n")),(0,r.kt)("p",null,"After the view has been initialized, the ",(0,r.kt)("inlineCode",{parentName:"p"},"elementRef")," variable should contain a reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," element in the view."),(0,r.kt)("h3",{id:"observed-attribute"},"Observed Attribute"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"attr:<attribute name>={<value>}")),(0,r.kt)("p",null,"This directive allows you to track changes to a component's attributes. You can find more information about the observed attributes in the documentation ",(0,r.kt)("a",{parentName:"p",href:"/docs/main-concept/observed-attributes"},"here"),"."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Child } from './child.component';\n\nexport function Parent() {\n    return <Child attr:date={new Date()} />\n}\n")),(0,r.kt)("p",null,"This directive is a built-in directive, we do not need to register any directives to the component."),(0,r.kt)("h3",{id:"event-handler"},"Event Handler"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on:<event name>={<event handler>}")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on-prevent:<event name>={<event handler>}")),(0,r.kt)("p",null,"This directive is used to attach an event handler to an element. You can find more information about the event handler in the documentation ",(0,r.kt)("a",{parentName:"p",href:"/docs/main-concept/event-handling"},"here"),"."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export function Greeting() {\n    const greet = () => {\n        console.log('Hello World!');\n    }\n    return <button on:click={greet}>Greet</button>\n}\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'export function Greeting() {\n    const submit = () => {\n        console.log(\'Hello World!\');\n    }\n    return <form on-prevent:submit={submit}>\n        <input type="text" />\n        <button type="submit">Submit</button>\n    </form>\n}\n')),(0,r.kt)("p",null,"to use ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," to prevent the default action from happening."),(0,r.kt)("p",null,"This directives are built-in directives, we do not need to register any directives to the component."),(0,r.kt)("h3",{id:"list-rendering"},"List Rendering"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v:for={<array of values>}")),(0,r.kt)("p",null,"This directive is used for list rendering. It allows developers to render a list of elements based on a given array of data. You can find more information about the list rendering in the documentation ",(0,r.kt)("a",{parentName:"p",href:"/docs/main-concept/list-rendering"},"here"),"."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export function List() {\n    const array = [1, 2, 3];\n    return <p v:for={this.array}>Hello World!</p>\n}\n")),(0,r.kt)("p",null,"This directives are built-in directives, we do not need to register any directives to the component."),(0,r.kt)("h3",{id:"conditional-rendering"},"Conditional Rendering"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v:if={<expression>}")),(0,r.kt)("p",null,"This directive is used to conditionally render an element to the DOM. It will remove the element from the DOM if the value of the directive is false, and append the element if the value is true. You can find more information about the list rendering in the documentation ",(0,r.kt)("a",{parentName:"p",href:"/docs/main-concept/conditional-rendering"},"here"),"."),(0,r.kt)("p",null,"Example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export function Greeting() {\n    const [toggle] = useState(this, true);\n    return <h1 v:if={toggle()}>Hello World!</h1>\n}\n")))}u.isMDXComponent=!0}}]);