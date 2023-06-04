"use strict";(self.webpackChunk_monster_js_docs=self.webpackChunk_monster_js_docs||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),s=o,b=u["".concat(c,".").concat(s)]||u[s]||m[s]||a;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},l="Build MonsterJS Project",i={unversionedId:"cli/cli-build-project",id:"cli/cli-build-project",title:"Build MonsterJS Project",description:"The MonsterJS CLI provides a command mn build to compile the project for deployment. By default, the output of this build process is found in the ./build directory, but it can be changed using the options available when running the CLI command to build the project.",source:"@site/docs/cli/cli-build-project.md",sourceDirName:"cli",slug:"/cli/cli-build-project",permalink:"/docs/docs/cli/cli-build-project",draft:!1,editUrl:"https://github.com/monster-js/documentation/docs/cli/cli-build-project.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Local Development Server",permalink:"/docs/docs/cli/cli-local-development-server"},next:{title:"Generate Commands",permalink:"/docs/docs/cli/cli-generate-commands"}},c={},d=[{value:"Build Command",id:"build-command",level:2},{value:"Command Options",id:"command-options",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-monsterjs-project"},"Build MonsterJS Project"),(0,o.kt)("p",null,"The MonsterJS CLI provides a command ",(0,o.kt)("inlineCode",{parentName:"p"},"mn build")," to compile the project for deployment. By default, the output of this build process is found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./build")," directory, but it can be changed using the options available when running the CLI command to build the project."),(0,o.kt)("h2",{id:"build-command"},"Build Command"),(0,o.kt)("p",null,"To build the project we can run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mn build\n")),(0,o.kt)("p",null,"After running the mn build command, the generated files will be located in the output directory specified by the user."),(0,o.kt)("h2",{id:"command-options"},"Command Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Options"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--env <value",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Build the project using the specified environment."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"dev")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--mode <value",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Build the project in 'development', 'production', or 'none' mode. See ",(0,o.kt)("a",{parentName:"td",href:"https://webpack.js.org/configuration/mode/"},"webpack mode")," for more info about the different modes. This option will determine if the build or serve command will generate a production or development codes."),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--output <value",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The directory where it should output the bundles, assets and other files."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"dist")))),(0,o.kt)("p",null,"Example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mn build --env prod --output dist\n")))}m.isMDXComponent=!0}}]);