(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(115)),c={id:"store",title:"Class: Store<TConfig>",sidebar_label:"Store"},o={unversionedId:"api/classes/store",id:"api/classes/store",isDocsHomePage:!1,title:"Class: Store<TConfig>",description:"Holds the configuration object.",source:"@site/docs/api/classes/store.md",slug:"/api/classes/store",permalink:"/node-konfig/api/classes/store",editUrl:"https://github.com/willsoto/node-konfig/edit/main/docs/docs/api/classes/store.md",version:"current",sidebar_label:"Store",sidebar:"api",previous:{title:"Class: NoValueForKeyError",permalink:"/node-konfig/api/classes/novalueforkeyerror"},next:{title:"Class: TOMLParser",permalink:"/node-konfig/api/classes/tomlparser"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"#groups",id:"groups",children:[]},{value:"#loaders",id:"loaders",children:[]},{value:"config",id:"config",children:[]},{value:"options",id:"options",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"name",id:"name",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"get",id:"get",children:[]},{value:"getOrThrow",id:"getorthrow",children:[]},{value:"group",id:"group",children:[]},{value:"has",id:"has",children:[]},{value:"init",id:"init",children:[]},{value:"registerLoader",id:"registerloader",children:[]},{value:"set",id:"set",children:[]},{value:"toJSON",id:"tojson",children:[]}]}],i={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Holds the configuration object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"const store = new Store();\n")),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TConfig")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/node-konfig/api#config"}),"Config")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Record\\","<","string, unknown>")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Store"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Store"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/interfaces/storeoptions"}),"StoreOptions"),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/store"}),"Store")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L43"}),"packages/core/src/store.ts:43"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/node-konfig/api/interfaces/storeoptions"}),"StoreOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/store"}),"Store")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"groups"},"#groups"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"#groups"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/store"}),"Store"),"[] = []"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L27"}),"packages/core/src/store.ts:27"))),Object(b.b)("p",null,"Keeps track of all the groups associated with this Store instance."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loaders"},"#loaders"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"#loaders"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/loader"}),"Loader"),"[] = []"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L33"}),"packages/core/src/store.ts:33"))),Object(b.b)("p",null,"Keeps track of all the loaders associated with this Store instance."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(b.b)("hr",null),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"config"),": TConfig = {} as TConfig"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L43"}),"packages/core/src/store.ts:43"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"options"},"options"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"options"),": Required","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/interfaces/storeoptions"}),"StoreOptions"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L35"}),"packages/core/src/store.ts:35"))),Object(b.b)("h2",{id:"accessors"},"Accessors"),Object(b.b)("h3",{id:"name"},"name"),Object(b.b)("p",null,"\u2022 get ",Object(b.b)("strong",{parentName:"p"},"name"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L250"}),"packages/core/src/store.ts:250"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"assign"},"assign"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"assign"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config"),": TConfig): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L155"}),"packages/core/src/store.ts:155"))),Object(b.b)("p",null,"Given a config, will recursively merge all of its properties onto this instance's config.\nIf a Group (ie ",Object(b.b)("inlineCode",{parentName:"p"},"Store"),") is encountered, it will correctly merge those properties onto that Group."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TConfig"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The config to merge with this instance's config")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"get"},"get"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"get"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"accessor"),": string): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L67"}),"packages/core/src/store.ts:67"))),Object(b.b)("p",null,"The primary way to retrieve values from the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/store"}),"Store"),".\nCan traverse through ",Object(b.b)("inlineCode",{parentName:"p"},"Group")," as well."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'const store = new Store();\n\nconst value = store.get("path.to.my.thing");\n')),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"accessor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the path to the desired value within the store.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getorthrow"},"getOrThrow"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getOrThrow"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"accessor"),": string): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L96"}),"packages/core/src/store.ts:96"))),Object(b.b)("p",null,"If the given accessor is not present on the store or the returned value is ",Object(b.b)("inlineCode",{parentName:"p"},"null"),",\nan error will be thrown."),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/store#get"}),"Store.get")),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"accessor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"group"},"group"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"group"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": string): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/store"}),"Store")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L230"}),"packages/core/src/store.ts:230"))),Object(b.b)("p",null,"Get or set a sub-",Object(b.b)("inlineCode",{parentName:"p"},"Store")," (group). Once a group has been created, you can register loaders\nspecfic to that group. Calling ",Object(b.b)("inlineCode",{parentName:"p"},"Store#init")," on the parent ",Object(b.b)("inlineCode",{parentName:"p"},"Store")," will also initialize all the groups\nregistered to that ",Object(b.b)("inlineCode",{parentName:"p"},"Store")," instance."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'const store = new Store();\n\nstore.registerLoader(new Loader());\n\nconst group = store.group("myGroup");\n\ngroup.registerLoader(new Loader());\n\nawait store.init();\n')),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the group. This name is also how you access the group after creation.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/store"}),"Store")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"has"},"has"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"has"),"(",Object(b.b)("inlineCode",{parentName:"p"},"accessor"),": string): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L129"}),"packages/core/src/store.ts:129"))),Object(b.b)("p",null,"Check if a particular accessor exists in the config."),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"accessor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the path to the desired value within the store.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"init"),"(): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L174"}),"packages/core/src/store.ts:174"))),Object(b.b)("p",null,"Used to initialize the ",Object(b.b)("inlineCode",{parentName:"p"},"Store")," and process all registered ",Object(b.b)("inlineCode",{parentName:"p"},"Loaders")," and groups within."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registerloader"},"registerLoader"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"registerLoader"),"(",Object(b.b)("inlineCode",{parentName:"p"},"loader"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/loader"}),"Loader"),"): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L141"}),"packages/core/src/store.ts:141"))),Object(b.b)("p",null,"Register a ",Object(b.b)("inlineCode",{parentName:"p"},"Loader")," to this ",Object(b.b)("inlineCode",{parentName:"p"},"Store"),". Use ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/node-konfig/api/classes/store#init"}),"Store.init")," to initialize all of the Store's\nregistered loaders."),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"loader")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/node-konfig/api/classes/loader"}),"Loader")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any ",Object(b.b)("inlineCode",{parentName:"td"},"Loader")," subclass")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"set"},"set"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"set"),"(",Object(b.b)("inlineCode",{parentName:"p"},"accessor"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": unknown): TConfig"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L114"}),"packages/core/src/store.ts:114"))),Object(b.b)("p",null,"Manually set a value to the ",Object(b.b)("inlineCode",{parentName:"p"},"Store"),".\nIn most circumstances, you should not need to use this directly."),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"accessor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the path to the desired value within the store.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the value to set at ",Object(b.b)("inlineCode",{parentName:"td"},"accessor"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," TConfig"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(): Record","<","string, unknown>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/willsoto/node-konfig/blob/66d5095/packages/core/src/store.ts#L190"}),"packages/core/src/store.ts:190"))),Object(b.b)("p",null,"Serialize the Store's configuration object. This will traverse all groups as well."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Record","<","string, unknown>"))}p.isMDXComponent=!0},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(a),j=n,d=s["".concat(c,".").concat(j)]||s[j]||O[j]||b;return a?r.a.createElement(d,o(o({ref:t},i),{},{components:a})):r.a.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);