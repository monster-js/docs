"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4},o="Local Development Server",i={unversionedId:"cli/cli-local-development-server",id:"cli/cli-local-development-server",title:"Local Development Server",description:"To start a local development server, you can run the following command:",source:"@site/docs/cli/cli-local-development-server.md",sourceDirName:"cli",slug:"/cli/cli-local-development-server",permalink:"/docs/docs/cli/cli-local-development-server",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/cli/cli-local-development-server.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create MonsterJS Application",permalink:"/docs/docs/cli/cli-create-application"},next:{title:"Build MonsterJS Project",permalink:"/docs/docs/cli/cli-build-project"}},p={},c=[{value:"Command Options",id:"command-options",level:2},{value:"Available Options",id:"available-options",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-development-server"},"Local Development Server"),(0,a.kt)("p",null,"To start a local development server, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"Alternatively, if you have ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-cli")," installed globally, you can also run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"webpack serve\n")),(0,a.kt)("p",null,"The command above will start a development server on port 4000 and will use the development environment variables. For more information about these variables, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../useful-topics/environment-variables"},"environment variables")," section in the documentation."),(0,a.kt)("p",null,"Once the server is running, you can view your project by accessing the local development server at the URL ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000"},"http://localhost:4000"),"."),(0,a.kt)("h2",{id:"command-options"},"Command Options"),(0,a.kt)("p",null,"You can also pass some configuration options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack")," CLI command, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"webpack serve --env environment=prod port=4001\n")),(0,a.kt)("h3",{id:"available-options"},"Available Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Options"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--env environment=<value",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Serve the project using the specified environment."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--env port=<value",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the port number for the local development server."),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"4000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--env open=true"),(0,a.kt)("td",{parentName:"tr",align:null},"Opens a browser when local development server is ready."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--mode <value",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Serve the project in 'development', 'production', or 'none' mode. See ",(0,a.kt)("a",{parentName:"td",href:"https://webpack.js.org/configuration/mode/"},"webpack mode")," for more info about the different modes. This option determines whether the build or serve command will generate production or development code."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"development")))))}u.isMDXComponent=!0}}]);