(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,O=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(O,c(c({ref:t},p),{},{components:n})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(115)),i={id:"consulloaderoptions",title:"Interface: ConsulLoaderOptions",sidebar_label:"ConsulLoaderOptions"},c={unversionedId:"api/interfaces/consulloaderoptions",id:"api/interfaces/consulloaderoptions",isDocsHomePage:!1,title:"Interface: ConsulLoaderOptions",description:"Hierarchy",source:"@site/docs/api/interfaces/consulloaderoptions.md",slug:"/api/interfaces/consulloaderoptions",permalink:"/node-konfig/api/interfaces/consulloaderoptions",editUrl:"https://github.com/willsoto/node-konfig/edit/main/docs/docs/api/interfaces/consulloaderoptions.md",version:"current",sidebar_label:"ConsulLoaderOptions",sidebar:"docs",previous:{title:"Class: YAMLParser",permalink:"/node-konfig/api/classes/yamlparser"},next:{title:"Interface: EnvLoaderOptions",permalink:"/node-konfig/api/interfaces/envloaderoptions"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"consulOptions",id:"consuloptions",children:[]},{value:"keys",id:"keys",children:[]},{value:"maxRetries",id:"maxretries",children:[]},{value:"retryDelay",id:"retrydelay",children:[]},{value:"stopOnFailure",id:"stoponfailure",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"LoaderOptions"),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"ConsulLoaderOptions")))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"consuloptions"},"consulOptions"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"consulOptions"),": consul.ConsulOptions"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/e86bb60/packages/consul/src/loader.ts#L29"}),"packages/consul/src/loader.ts:29"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"keys"},"keys"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"keys"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/interfaces/key"}),"Key"),"[]"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/e86bb60/packages/consul/src/loader.ts#L28"}),"packages/consul/src/loader.ts:28"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"maxretries"},"maxRetries"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"maxRetries"),": undefined ","|"," number"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/consulloaderoptions"}),"ConsulLoaderOptions"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/consulloaderoptions#maxretries"}),"maxRetries"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in packages/core/dist/loaders/base.d.ts:5")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"retrydelay"},"retryDelay"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"retryDelay"),": undefined ","|"," number"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/consulloaderoptions"}),"ConsulLoaderOptions"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/consulloaderoptions#retrydelay"}),"retryDelay"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in packages/core/dist/loaders/base.d.ts:6")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"stoponfailure"},"stopOnFailure"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"stopOnFailure"),": undefined ","|"," false ","|"," true"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/consulloaderoptions"}),"ConsulLoaderOptions"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/consulloaderoptions#stoponfailure"}),"stopOnFailure"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in packages/core/dist/loaders/base.d.ts:4")))}s.isMDXComponent=!0}}]);