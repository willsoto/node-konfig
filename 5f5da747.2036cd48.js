(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),i=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=i(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(a),O=r,m=p["".concat(c,".").concat(O)]||p[O]||d[O]||o;return a?n.a.createElement(m,b(b({ref:t},s),{},{components:a})):n.a.createElement(m,b({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(3),n=a(7),o=(a(0),a(115)),c={id:"flagloader",title:"Class: FlagLoader",sidebar_label:"FlagLoader"},b={unversionedId:"api/classes/flagloader",id:"api/classes/flagloader",isDocsHomePage:!1,title:"Class: FlagLoader",description:"Hierarchy",source:"@site/docs/api/classes/flagloader.md",slug:"/api/classes/flagloader",permalink:"/node-konfig/api/classes/flagloader",editUrl:"https://github.com/willsoto/node-konfig/edit/main/docs/docs/api/classes/flagloader.md",version:"current",sidebar_label:"FlagLoader",sidebar:"api",previous:{title:"Class: FileLoader",permalink:"/node-konfig/api/classes/fileloader"},next:{title:"Class: HttpLoader",permalink:"/node-konfig/api/classes/httploader"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"#cli",id:"cli",children:[]},{value:"maxRetries",id:"maxretries",children:[]},{value:"name",id:"name",children:[]},{value:"options",id:"options",children:[]},{value:"retryDelay",id:"retrydelay",children:[]},{value:"stopOnFailure",id:"stoponfailure",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"retryPolicy",id:"retrypolicy",children:[]}]},{value:"Methods",id:"methods",children:[{value:"load",id:"load",children:[]}]}],s={rightToc:l};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/loader"}),"Loader")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"FlagLoader")))),Object(o.b)("h2",{id:"constructors"},"Constructors"),Object(o.b)("h3",{id:"constructor"},"constructor"),Object(o.b)("p",null,"+"," ",Object(o.b)("strong",{parentName:"p"},"new FlagLoader"),"(",Object(o.b)("inlineCode",{parentName:"p"},"options"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/interfaces/flagloaderoptions"}),"FlagLoaderOptions"),"): ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/flagloader"}),"FlagLoader")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#constructor"}),"constructor"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/flag.ts#L14"}),"packages/core/src/loaders/flag.ts:14"))),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"options")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/node-konfig/api/interfaces/flagloaderoptions"}),"FlagLoaderOptions"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/flagloader"}),"FlagLoader")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"cli"},"#cli"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Private")," ",Object(o.b)("strong",{parentName:"p"},"#cli"),": Result","<","meow.AnyFlags>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/flag.ts#L10"}),"packages/core/src/loaders/flag.ts:10"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"maxretries"},"maxRetries"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"maxRetries"),": number"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#maxretries"}),"maxRetries"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/base.ts#L13"}),"packages/core/src/loaders/base.ts:13"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"name"),': string = "flag"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#name"}),"name"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/flag.ts#L14"}),"packages/core/src/loaders/flag.ts:14"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"options"},"options"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(o.b)("strong",{parentName:"p"},"options"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/interfaces/flagloaderoptions"}),"FlagLoaderOptions")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/flag.ts#L12"}),"packages/core/src/loaders/flag.ts:12"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"retrydelay"},"retryDelay"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"retryDelay"),": number"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#retrydelay"}),"retryDelay"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/base.ts#L14"}),"packages/core/src/loaders/base.ts:14"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"stoponfailure"},"stopOnFailure"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"stopOnFailure"),": boolean"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#stoponfailure"}),"stopOnFailure"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/base.ts#L12"}),"packages/core/src/loaders/base.ts:12"))),Object(o.b)("h2",{id:"accessors"},"Accessors"),Object(o.b)("h3",{id:"retrypolicy"},"retryPolicy"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Protected"),"get ",Object(o.b)("strong",{parentName:"p"},"retryPolicy"),"(): RetryPolicy"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#retrypolicy"}),"retryPolicy"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/base.ts#L24"}),"packages/core/src/loaders/base.ts:24"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," RetryPolicy"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"load"},"load"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"load"),"(",Object(o.b)("inlineCode",{parentName:"p"},"store"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/store"}),"Store"),"): void ","|"," Promise","<","void>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#load"}),"load"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/742f0b0/packages/core/src/loaders/flag.ts#L23"}),"packages/core/src/loaders/flag.ts:23"))),Object(o.b)("h4",{id:"parameters-1"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"store")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/node-konfig/api/classes/store"}),"Store"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," void ","|"," Promise","<","void>"))}i.isMDXComponent=!0}}]);