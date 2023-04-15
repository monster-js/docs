"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[974],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},v="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),v=p(t),u=i,d=v["".concat(s,".").concat(u)]||v[u]||c[u]||o;return t?r.createElement(d,a(a({ref:n},m),{},{components:t})):r.createElement(d,a({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[v]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:2},a="Environment Variables",l={unversionedId:"useful-topics/environment-variables",id:"useful-topics/environment-variables",title:"Environment Variables",description:"Environment variables help us define static variables for our application. They allow us to configure our project for different deployments without changing the code inside our application. We can define environment variables for production, development, and even custom environment variables.",source:"@site/docs/useful-topics/environment-variables.md",sourceDirName:"useful-topics",slug:"/useful-topics/environment-variables",permalink:"/docs/useful-topics/environment-variables",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/useful-topics/environment-variables.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Useful Topics",permalink:"/docs/category/useful-topics"},next:{title:"Document Fragment",permalink:"/docs/useful-topics/document-fragment"}},s={},p=[{value:"Using Environment Variables in a Project",id:"using-environment-variables-in-a-project",level:2},{value:"Development environment variables",id:"development-environment-variables",level:4},{value:"Production environment variables",id:"production-environment-variables",level:4},{value:"Custom Environment Variables",id:"custom-environment-variables",level:2},{value:"Using Environment Variables in CLI",id:"using-environment-variables-in-cli",level:2}],m={toc:p},v="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(v,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"Environment variables help us define static variables for our application. They allow us to configure our project for different deployments without changing the code inside our application. We can define environment variables for production, development, and even custom environment variables."),(0,i.kt)("p",null,"When we create our application, two available environment variables are provided for us. If we check the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/environments")," directory, we can see that there are ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.ts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.prod.ts")," files."),(0,i.kt)("h2",{id:"using-environment-variables-in-a-project"},"Using Environment Variables in a Project"),(0,i.kt)("p",null,"To use our environment variables inside our project, we can simply import the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/environment/environment.ts")," file. The CLI will be responsible for replacing the value of the environment variables depending on the command."),(0,i.kt)("p",null,"Example if we have two environment variables:"),(0,i.kt)("h4",{id:"development-environment-variables"},"Development environment variables"),(0,i.kt)("p",null,"filename: ",(0,i.kt)("inlineCode",{parentName:"p"},"src/environments/environment.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export const environment = {\n    hostURL: 'http://dev.my-server.com'\n};\n")),(0,i.kt)("h4",{id:"production-environment-variables"},"Production environment variables"),(0,i.kt)("p",null,"filename: ",(0,i.kt)("inlineCode",{parentName:"p"},"src/environments/environment.prod.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export const environment = {\n    hostURL: 'http://my-server.com'\n};\n")),(0,i.kt)("p",null,"We just need to import the development environment variables into our application. To use the production environment variable we can build the application using the following command:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Never import other environment variables in the application other than the development environment variables.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mn build --env prod\n")),(0,i.kt)("p",null,"or to serve it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mn serve --env prod\n")),(0,i.kt)("h2",{id:"custom-environment-variables"},"Custom Environment Variables"),(0,i.kt)("p",null,"To create a new environment variable, we just need to create a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.<env name>.ts"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<env name>")," is the name used in the CLI option ",(0,i.kt)("inlineCode",{parentName:"p"},"--env"),", as shown in the following example:"),(0,i.kt)("p",null,"Example if we have ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.stage.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mn serve --env stage\n")),(0,i.kt)("h2",{id:"using-environment-variables-in-cli"},"Using Environment Variables in CLI"),(0,i.kt)("p",null,"To use our environment variables in the CLI command, we just need to pass the environment name to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--env")," option in CLI commands."),(0,i.kt)("p",null,"Example, if we have environment variables like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"environments\n    \u251c\u2500\u2500 environment.ts\n    \u251c\u2500\u2500 environment.uat.ts\n    \u2514\u2500\u2500 environment.prod.ts\n")),(0,i.kt)("p",null,"And we want to build our application using the ",(0,i.kt)("inlineCode",{parentName:"p"},"uat")," environment. Then we can use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mn build --env uat\n")))}c.isMDXComponent=!0}}]);