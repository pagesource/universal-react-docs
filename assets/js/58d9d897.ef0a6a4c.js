"use strict";(self.webpackChunkuniversal_react_docs=self.webpackChunkuniversal_react_docs||[]).push([[683],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,v=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"how",title:"How it works?"},c=void 0,s={unversionedId:"how",id:"how",title:"How it works?",description:"There are 2 Key Pillars of Universal React.",source:"@site/docs/how.md",sourceDirName:".",slug:"/how",permalink:"/universal-react-docs/docs/how",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/how.md",tags:[],version:"current",frontMatter:{id:"how",title:"How it works?"},sidebar:"someSidebar",previous:{title:"Why you need this generator?",permalink:"/universal-react-docs/docs/why"},next:{title:"Features Summary",permalink:"/universal-react-docs/docs/features"}},u={},p=[{value:"1. Accelerate React Development by instant initial setup",id:"1-accelerate-react-development-by-instant-initial-setup",level:2},{value:"2. Continuous Improvement and Support via addition of optional features",id:"2-continuous-improvement-and-support-via-addition-of-optional-features",level:2},{value:"Execution flow of generator",id:"execution-flow-of-generator",level:2},{value:"Possible Architecture Overview",id:"possible-architecture-overview",level:2}],d={toc:p};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are 2 Key Pillars of Universal React."),(0,a.kt)("h2",{id:"1-accelerate-react-development-by-instant-initial-setup"},"1. Accelerate React Development by instant initial setup"),(0,a.kt)("p",null,"React developers can run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx create-universal-react")," generator for setting up Micro Frontend and SPA architecture\xa0with essential tooling instantly."),(0,a.kt)("h2",{id:"2-continuous-improvement-and-support-via-addition-of-optional-features"},"2. Continuous Improvement and Support via addition of optional features"),(0,a.kt)("p",null,"React developers can run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx create-universal-react")," generator again for adding on-demand optional features and projects to evolving applications generated with Universal React. "),(0,a.kt)("h2",{id:"execution-flow-of-generator"},"Execution flow of generator"),(0,a.kt)("p",null,"Following flow chart explains the workings of generator. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Execution flow of Universal React generator",src:n(805).Z,width:"3028",height:"2212"})),(0,a.kt)("h2",{id:"possible-architecture-overview"},"Possible Architecture Overview"),(0,a.kt)("p",null,"Using this generator flow you can setup and evolve a project into following Architecture types. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture Types with Universal React generator",src:n(7206).Z,width:"1636",height:"1060"})),(0,a.kt)("p",null,"There are 2 ways you can achieve Micro Frontend in this ecosystem. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Micro-App Loader: A small NPM package to load any React micro app or Web Component into a given container. This approach is ideal when:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"You are not loading too many Micro Apps on a page. "),(0,a.kt)("li",{parentName:"ol"},"You don't want to change configurations of Micro App to support Module Federation. "))),(0,a.kt)("li",{parentName:"ol"},"Module Federation: Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually. Learn more ",(0,a.kt)("a",{parentName:"li",href:"/universal-react-docs/docs/module-federation/"},"here"),".")))}f.isMDXComponent=!0},7206:function(e,t,n){t.Z=n.p+"assets/images/universal-react-arch-types-2x-6aa0c2d19c9b926f8591be99cc29e038.png"},805:function(e,t,n){t.Z=n.p+"assets/images/universal-react-generator-2x-f2847c48dbd4040b55d9e7c14f915151.png"}}]);