(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=p(a),O=r,d=i["".concat(b,".").concat(O)]||i[O]||m[O]||c;return a?n.a.createElement(d,o(o({ref:t},s),{},{components:a})):n.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var s=2;s<c;s++)b[s]=a[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(115)),b={id:"yamlparser",title:"Class: YAMLParser",sidebar_label:"YAMLParser"},o={unversionedId:"api/classes/yamlparser",id:"api/classes/yamlparser",isDocsHomePage:!1,title:"Class: YAMLParser",description:"Hierarchy",source:"@site/docs/api/classes/yamlparser.md",slug:"/api/classes/yamlparser",permalink:"/node-konfig/api/classes/yamlparser",editUrl:"https://github.com/willsoto/node-konfig/edit/main/docs/docs/api/classes/yamlparser.md",version:"current",sidebar_label:"YAMLParser",sidebar:"docs",previous:{title:"Class: VaultLoader",permalink:"/node-konfig/api/classes/vaultloader"},next:{title:"Interface: ConsulLoaderOptions",permalink:"/node-konfig/api/interfaces/consulloaderoptions"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"name",id:"name",children:[]},{value:"yamlLoadOptions",id:"yamlloadoptions",children:[]}]},{value:"Methods",id:"methods",children:[{value:"parse",id:"parse",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"YAMLParser"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/node-konfig/api/interfaces/parser"}),"Parser"))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new YAMLParser"),"(",Object(c.b)("inlineCode",{parentName:"p"},"yamlLoadOptions?"),": LoadOptions): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/yamlparser"}),"YAMLParser")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/parsers/yaml.ts#L7"}),"packages/core/src/parsers/yaml.ts:7"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"yamlLoadOptions")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"LoadOptions"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{}")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/yamlparser"}),"YAMLParser")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),': string = "yaml"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/parser"}),"Parser"),".",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/parser#name"}),"name"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/parsers/yaml.ts#L7"}),"packages/core/src/parsers/yaml.ts:7"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"yamlloadoptions"},"yamlLoadOptions"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"yamlLoadOptions"),": LoadOptions"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/parsers/yaml.ts#L5"}),"packages/core/src/parsers/yaml.ts:5"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"parse"},"parse"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"parse"),"(",Object(c.b)("inlineCode",{parentName:"p"},"contents"),": string): Record","<","string, unknown>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/interfaces/parser"}),"Parser"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/e86bb60/packages/core/src/parsers/yaml.ts#L13"}),"packages/core/src/parsers/yaml.ts:13"))),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"contents")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Record","<","string, unknown>"))}p.isMDXComponent=!0}}]);