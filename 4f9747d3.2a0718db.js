(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=b(r),u=n,d=l["".concat(c,".").concat(u)]||l[u]||m[u]||o;return r?a.a.createElement(d,s(s({ref:t},p),{},{components:r})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(115)),c={id:"jsonparser",title:"Class: JSONParser",sidebar_label:"JSONParser"},s={unversionedId:"api/classes/jsonparser",id:"api/classes/jsonparser",isDocsHomePage:!1,title:"Class: JSONParser",description:"Hierarchy",source:"@site/docs/api/classes/jsonparser.md",slug:"/api/classes/jsonparser",permalink:"/node-konfig/api/classes/jsonparser",editUrl:"https://github.com/willsoto/node-konfig/edit/main/docs/docs/api/classes/jsonparser.md",version:"current",sidebar_label:"JSONParser",sidebar:"api",previous:{title:"Class: HttpLoader",permalink:"/node-konfig/api/classes/httploader"},next:{title:"Class: KeyNotFoundError",permalink:"/node-konfig/api/classes/keynotfounderror"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Properties",id:"properties",children:[{value:"name",id:"name",children:[]}]},{value:"Methods",id:"methods",children:[{value:"parse",id:"parse",children:[]}]}],p={rightToc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"JSONParser"))),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/node-konfig/api/interfaces/parser"}),"Parser"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"name"),': string = "json"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Implementation of ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/parser"}),"Parser"),".",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/parser#name"}),"name"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/parsers/json.ts#L4"}),"packages/core/src/parsers/json.ts:4"))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"parse"},"parse"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"parse"),"(",Object(o.b)("inlineCode",{parentName:"p"},"contents"),": string): Record","<","string, unknown>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Implementation of ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/parser"}),"Parser"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/parsers/json.ts#L6"}),"packages/core/src/parsers/json.ts:6"))),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"contents")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," Record","<","string, unknown>"))}b.isMDXComponent=!0}}]);