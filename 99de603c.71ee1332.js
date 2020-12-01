(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(i,".").concat(d)]||l[d]||u[d]||c;return r?a.a.createElement(m,o(o({ref:t},b),{},{components:r})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(115)),i={id:"parser",title:"Interface: Parser",sidebar_label:"Parser"},o={unversionedId:"api/interfaces/parser",id:"api/interfaces/parser",isDocsHomePage:!1,title:"Interface: Parser",description:"Hierarchy",source:"@site/docs/api/interfaces/parser.md",slug:"/api/interfaces/parser",permalink:"/node-konfig/api/interfaces/parser",editUrl:"https://github.com/willsoto/node-konfig/edit/main/docs/docs/api/interfaces/parser.md",version:"current",sidebar_label:"Parser",sidebar:"api",previous:{title:"Interface: LoaderOptions",permalink:"/node-konfig/api/interfaces/loaderoptions"},next:{title:"Interface: Secret",permalink:"/node-konfig/api/interfaces/secret"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Properties",id:"properties",children:[{value:"name",id:"name",children:[]}]},{value:"Methods",id:"methods",children:[{value:"parse",id:"parse",children:[]}]}],b={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Parser"))),Object(c.b)("h2",{id:"implemented-by"},"Implemented by"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/node-konfig/api/classes/jsonparser"}),"JSONParser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/node-konfig/api/classes/tomlparser"}),"TOMLParser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/node-konfig/api/classes/yamlparser"}),"YAMLParser"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"name"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/parsers/interface.ts#L2"}),"packages/core/src/parsers/interface.ts:2"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"parse"},"parse"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"parse"),"(",Object(c.b)("inlineCode",{parentName:"p"},"contents"),": string): Record","<","string, unknown>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/parsers/interface.ts#L3"}),"packages/core/src/parsers/interface.ts:3"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"contents")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Record","<","string, unknown>"))}s.isMDXComponent=!0}}]);