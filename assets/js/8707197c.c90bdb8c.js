"use strict";(self.webpackChunkuniversal_react_docs=self.webpackChunkuniversal_react_docs||[]).push([[600],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||s[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3516:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],d={id:"module-federation",title:"Module Federation",sidebar_label:"Module Federation"},l="Module Federation Implementation",c={unversionedId:"module-federation",id:"module-federation",isDocsHomePage:!1,title:"Module Federation",description:"Provider",source:"@site/docs/module-federation.md",sourceDirName:".",slug:"/module-federation",permalink:"/universal-react-docs/docs/module-federation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/module-federation.md",tags:[],version:"current",frontMatter:{id:"module-federation",title:"Module Federation",sidebar_label:"Module Federation"},sidebar:"someSidebar",previous:{title:"Generate Plop",permalink:"/universal-react-docs/docs/generate-plop"}},u=[{value:"Provider",id:"provider",children:[{value:"next.config.js",id:"nextconfigjs",children:[],level:3}],level:2},{value:"Remote",id:"remote",children:[{value:"next.config.js",id:"nextconfigjs-1",children:[],level:3},{value:"index.js",id:"indexjs",children:[],level:3}],level:2}],s={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"module-federation-implementation"},"Module Federation Implementation"),(0,i.kt)("h2",{id:"provider"},"Provider"),(0,i.kt)("p",null,"Add the following ModuleFederation Plugin configurations to expose code that needs to be shared with other applications"),(0,i.kt)("h3",{id:"nextconfigjs"},"next.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const deps = require("./package.json").dependencies;\nmodule.exports = {\n  reactStrictMode: true,\n  webpack: (config, options) => {\n    const { ModuleFederationPlugin } = options.webpack.container;\n    config.plugins.push(\n      new ModuleFederationPlugin({\n        name: "providerApp",  \n        filename: "remoteEntry.js",\n        exposes: {\n         "./Button": "./src/Button",\n        }\n        shared: { ...deps,react: { singleton: true, requiredVersion: deps.react, }, \'react-dom\': { singleton: true, requiredVersion: deps["react-dom"]} },\n        },\n      })\n    );\n    return config;\n  },\n}\n')),(0,i.kt)("p",null,"In this example we are running it on server 5000.\nRemote identifies host with it's specified name, here i.e providerApp.The Button componant is exposed and libraries are shared "),(0,i.kt)("h2",{id:"remote"},"Remote"),(0,i.kt)("p",null,"Add the following ModuleFederation Plugin configurations to consume code that is being shared"),(0,i.kt)("h3",{id:"nextconfigjs-1"},"next.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'module.exports = {\n  reactStrictMode: true,\n  webpack: (config, options) => {\n    const { ModuleFederationPlugin } = options.webpack.container;\n    config.plugins.push(\n      new ModuleFederationPlugin({\n        remotes: {\n           providerApp: "providerApp@http://localhost:5000/remoteEntry.js",\n        },\n      })\n    );\n    return config;\n  },\n}\n')),(0,i.kt)("p",null,"In the above configurations at remotes add the provider url "),(0,i.kt)("h3",{id:"indexjs"},"index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import dynamic from "next/dynamic";\n\nconst SharedButton = dynamic(\n  async () => {\n    return await import("providerApp/Button");\n  },\n  {\n    ssr: false,\n  }\n)\n\nexport default function MyPage() {\n  return <SharedButton />\n}\n')))}p.isMDXComponent=!0}}]);