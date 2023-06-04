"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[641],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:14.5},c="Dependency Injection",a={unversionedId:"main-concept/dependency-injection",id:"main-concept/dependency-injection",title:"Dependency Injection",description:"Dependency Injection is a design pattern that enables a class to be injected with its dependencies instead of creating them inside the class. This pattern is used to promote loose coupling between classes, which can lead to more maintainable and testable code.",source:"@site/docs/main-concept/dependency-injection.md",sourceDirName:"main-concept",slug:"/main-concept/dependency-injection",permalink:"/docs/main-concept/dependency-injection",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/main-concept/dependency-injection.md",tags:[],version:"current",sidebarPosition:14.5,frontMatter:{sidebar_position:14.5},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/docs/main-concept/services"},next:{title:"Available Packages",permalink:"/docs/category/available-packages"}},s={},l=[{value:"Registering a Dependency",id:"registering-a-dependency",level:2},{value:"Injecting a Dependency",id:"injecting-a-dependency",level:2},{value:"Constructor Injection",id:"constructor-injection",level:2},{value:"Dependency Configuration",id:"dependency-configuration",level:2},{value:"The useValue Method",id:"the-usevalue-method",level:3},{value:"The useClass Method",id:"the-useclass-method",level:3}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dependency-injection"},"Dependency Injection"),(0,i.kt)("p",null,"Dependency Injection is a design pattern that enables a class to be injected with its dependencies instead of creating them inside the class. This pattern is used to promote loose coupling between classes, which can lead to more maintainable and testable code."),(0,i.kt)("p",null,"In MonsterJS, we use a built-in dependency injection container to manage and inject dependencies into our components, services, routes, and directives."),(0,i.kt)("h2",{id:"registering-a-dependency"},"Registering a Dependency"),(0,i.kt)("p",null,"Before we can use a dependency, we need to register it with the dependency injection container. We can do this by passing the dependencies to the dependency array of the ",(0,i.kt)("inlineCode",{parentName:"p"},"createDIContainer")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { createDIContainer } from "@monster-js/core";\nimport { GreetingService } from "./greeting.service";\n\nexport const homeDI = createDIContainer(\'home\', [ GreetingService ]);\n')),(0,i.kt)("h2",{id:"injecting-a-dependency"},"Injecting a Dependency"),(0,i.kt)("p",null,"We can inject a dependency into a function-type consumer using the container's inject method."),(0,i.kt)("p",null,"Example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { homeDI } from './home.di';\nimport { GreetingService } from \"./greeting.service\";\n\nexport function App() {\n    const greetingService = homeDI.inject(GreetingService);\n    return <h1>App Component</h1>\n}\n")),(0,i.kt)("h2",{id:"constructor-injection"},"Constructor Injection"),(0,i.kt)("p",null,"We can also inject dependencies using constructor injection for a class-type consumer. To do this, we add a constructor to our class that takes the dependencies as arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Service } from '@monster-js/core';\nimport { MessageService } from './message.service';\n\n@Service()\nexport class GreetingService {\n\n    constructor(private messageService: MessageService) {}\n\n    public greet() {\n        console.log(this.messageService.getMessage());\n    }\n}\n")),(0,i.kt)("h2",{id:"dependency-configuration"},"Dependency Configuration"),(0,i.kt)("p",null,"We can configure how our dependency injection container resolves registered dependencies."),(0,i.kt)("h3",{id:"the-usevalue-method"},"The useValue Method"),(0,i.kt)("p",null,"The useValue property is used to return a value, instead of a class instance, when the dependencies are resolved."),(0,i.kt)("p",null,"Example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createDIContainer } from \"@monster-js/core\";\nimport { GreetingService } from \"./greeting.service\";\n\nexport const homeDI = createDIContainer('home', [GreetingService]);\n\nconst stubGreet = {\n    greet: () => {\n        console.log('Hello I am a custom message');\n    }\n};\n\nhomeDI.useValue(GreetingService, stubGreet);\n")),(0,i.kt)("p",null,"In the example above, when we inject the ",(0,i.kt)("inlineCode",{parentName:"p"},"GreetingService")," into our component, service, or directive, it will return the ",(0,i.kt)("inlineCode",{parentName:"p"},"stubGreet")," object instead of an instance of GreetingService."),(0,i.kt)("h3",{id:"the-useclass-method"},"The useClass Method"),(0,i.kt)("p",null,"The useClass property is used to replace a dependency with another class when resolving dependencies."),(0,i.kt)("p",null,"Example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createDIContainer } from \"@monster-js/core\";\nimport { GreetingService } from \"./greeting.service\";\n\nexport const homeDI = createDIContainer('home', [GreetingService]);\n\nclass MockGreetingService {\n    greet() {\n        console.log('Hello I am a custom message');\n    }\n}\n\nhomeDI.useValue(GreetingService, MockGreetingService);\n")),(0,i.kt)("p",null,"In the example above, when we inject ",(0,i.kt)("inlineCode",{parentName:"p"},"GreetingService")," into our component, service, or directive, it will return the resolved instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"MockGreetingService")," instead."))}u.isMDXComponent=!0}}]);