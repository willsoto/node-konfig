(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),i=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):b(b({},a),e)),t},p=function(e){var a=i(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},O=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),O=r,m=p["".concat(c,".").concat(O)]||p[O]||d[O]||o;return t?n.a.createElement(m,b(b({ref:a},s),{},{components:t})):n.a.createElement(m,b({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=O;var b={};for(var l in a)hasOwnProperty.call(a,l)&&(b[l]=a[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var s=2;s<o;s++)c[s]=t[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},81:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return b})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return i}));var r=t(3),n=t(7),o=(t(0),t(115)),c={id:"valueloader",title:"Class: ValueLoader",sidebar_label:"ValueLoader"},b={unversionedId:"api/classes/valueloader",id:"api/classes/valueloader",isDocsHomePage:!1,title:"Class: ValueLoader",description:"Hierarchy",source:"@site/docs/api/classes/valueloader.md",slug:"/api/classes/valueloader",permalink:"/node-konfig/api/classes/valueloader",editUrl:"https://github.com/willsoto/node-konfig/edit/main/docs/docs/api/classes/valueloader.md",version:"current",sidebar_label:"ValueLoader",sidebar:"docs",previous:{title:"Class: TOMLParser",permalink:"/node-konfig/api/classes/tomlparser"},next:{title:"Class: VaultLoader",permalink:"/node-konfig/api/classes/vaultloader"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"maxRetries",id:"maxretries",children:[]},{value:"name",id:"name",children:[]},{value:"options",id:"options",children:[]},{value:"retryDelay",id:"retrydelay",children:[]},{value:"stopOnFailure",id:"stoponfailure",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"retryPolicy",id:"retrypolicy",children:[]}]},{value:"Methods",id:"methods",children:[{value:"load",id:"load",children:[]}]}],s={rightToc:l};function i(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/loader"}),"Loader")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"ValueLoader")))),Object(o.b)("h2",{id:"constructors"},"Constructors"),Object(o.b)("h3",{id:"constructor"},"constructor"),Object(o.b)("p",null,"+"," ",Object(o.b)("strong",{parentName:"p"},"new ValueLoader"),"(",Object(o.b)("inlineCode",{parentName:"p"},"options"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/interfaces/valueloaderoptions"}),"ValueLoaderOptions"),"): ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/valueloader"}),"ValueLoader")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#constructor"}),"constructor"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/value.ts#L11"}),"packages/core/src/loaders/value.ts:11"))),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"options")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/node-konfig/api/interfaces/valueloaderoptions"}),"ValueLoaderOptions"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/valueloader"}),"ValueLoader")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"maxretries"},"maxRetries"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"maxRetries"),": number"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#maxretries"}),"maxRetries"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/base.ts#L13"}),"packages/core/src/loaders/base.ts:13"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"name"),': string = "value"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#name"}),"name"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/value.ts#L11"}),"packages/core/src/loaders/value.ts:11"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"options"},"options"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(o.b)("strong",{parentName:"p"},"options"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/interfaces/valueloaderoptions"}),"ValueLoaderOptions")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/value.ts#L9"}),"packages/core/src/loaders/value.ts:9"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"retrydelay"},"retryDelay"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"retryDelay"),": number"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#retrydelay"}),"retryDelay"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/base.ts#L14"}),"packages/core/src/loaders/base.ts:14"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"stoponfailure"},"stopOnFailure"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"stopOnFailure"),": boolean"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#stoponfailure"}),"stopOnFailure"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/base.ts#L12"}),"packages/core/src/loaders/base.ts:12"))),Object(o.b)("h2",{id:"accessors"},"Accessors"),Object(o.b)("h3",{id:"retrypolicy"},"retryPolicy"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Protected"),"get ",Object(o.b)("strong",{parentName:"p"},"retryPolicy"),"(): RetryPolicy"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#retrypolicy"}),"retryPolicy"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/base.ts#L24"}),"packages/core/src/loaders/base.ts:24"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," RetryPolicy"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"load"},"load"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"load"),"(",Object(o.b)("inlineCode",{parentName:"p"},"store"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/node-konfig/api/classes/store"}),"Store"),"): void"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader"}),"Loader"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/node-konfig/api/classes/loader#load"}),"load"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/60bd8de/packages/core/src/loaders/value.ts#L19"}),"packages/core/src/loaders/value.ts:19"))),Object(o.b)("h4",{id:"parameters-1"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"store")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/node-konfig/api/classes/store"}),"Store"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," void"))}i.isMDXComponent=!0}}]);