(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{60:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(82)),i={id:"overview",title:"Overview"},c={unversionedId:"parsers/overview",id:"parsers/overview",isDocsHomePage:!1,title:"Overview",description:"A parser is responsible for converting other structures into plain old JavaScript objects (POJOs).",source:"@site/docs/parsers/overview.md",slug:"/parsers/overview",permalink:"/node-konfig/parsers/overview",editUrl:"https://github.com/willsoto/node-konfig/edit/main/docs/docs/parsers/overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Consul",permalink:"/node-konfig/loaders/consul"}},s=[{value:"Core parsers",id:"core-parsers",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:s};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A parser is responsible for converting other structures into plain old JavaScript objects (POJOs)."),Object(a.b)("h2",{id:"core-parsers"},"Core parsers"),Object(a.b)("p",null,"The following parsers are included by default in ",Object(a.b)("inlineCode",{parentName:"p"},"node-konfig-core"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"JSONParser")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"TOMLParser")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"YAMLParser"))),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"For loaders that support it, an appropriate parser must be instantiated and passed to the loader. Parsers can be shared between loaders."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'import * as Konfig from "@willsoto/node-konfig-core";\n\nconst loader = new Konfig.FileLoader({\n  files: [\n    {\n      path: path.join(__dirname, "config.json"),\n      parser: new Konfig.JSONParser(),\n    },\n    {\n      path: path.join(__dirname, "config.yaml"),\n      // Accepts any options that the `js-yaml` library accepts\n      parser: new Konfig.YAMLParser(),\n    },\n    {\n      path: path.join(__dirname, "config.toml"),\n      parser: new Konfig.TOMLParser(),\n    },\n  ],\n});\n')))}l.isMDXComponent=!0},82:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=t,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:r},p),{},{components:n})):o.a.createElement(f,c({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);