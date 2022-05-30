"use strict";(self.webpackChunkuniversal_react_docs=self.webpackChunkuniversal_react_docs||[]).push([[279],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),f=u(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(y,a(a({ref:e},s),{},{components:n})):r.createElement(y,a({ref:e},s))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5769:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"quality-control",title:"Static Quality Control"},l=void 0,u={unversionedId:"quality-control",id:"quality-control",title:"Static Quality Control",description:"Linting",source:"@site/docs/quality-control.md",sourceDirName:".",slug:"/quality-control",permalink:"/universal-react-docs/docs/quality-control",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/quality-control.md",tags:[],version:"current",frontMatter:{id:"quality-control",title:"Static Quality Control"},sidebar:"someSidebar",previous:{title:"Storybook",permalink:"/universal-react-docs/docs/storybook"},next:{title:"Unit Testing",permalink:"/universal-react-docs/docs/unit-testing"}},s={},p=[{value:"Linting",id:"linting",level:2}],f={toc:p};function d(t){var e=t.components,c=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"linting"},"Linting"),(0,i.kt)("p",null,"Config packages to unify code linting and typescript configuration and rules across projects. No need to install those packages anymore in your each project and maintain them all separately, thanks to monorepo structure. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Linting config in Turborepo",src:n(5698).Z,width:"1778",height:"1598"})))}d.isMDXComponent=!0},5698:function(t,e,n){e.Z=n.p+"assets/images/linting-config-f2ab40baa73c90dae114835c7797d1df.png"}}]);