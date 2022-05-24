"use strict";(self.webpackChunkuniversal_react_docs=self.webpackChunkuniversal_react_docs||[]).push([[214],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2973:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"unit-testing",title:"unit-testing",sidebar_label:"Unit Testing"},s="Unit testing with RTL",u={unversionedId:"unit-testing",id:"unit-testing",title:"unit-testing",description:"Jest setup file",source:"@site/docs/unit-testing.md",sourceDirName:".",slug:"/unit-testing",permalink:"/universal-react-docs/docs/unit-testing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/unit-testing.md",tags:[],version:"current",frontMatter:{id:"unit-testing",title:"unit-testing",sidebar_label:"Unit Testing"},sidebar:"someSidebar",previous:{title:"Smart Context",permalink:"/universal-react-docs/docs/smart-context"},next:{title:"Design System Integration",permalink:"/universal-react-docs/docs/design-system"}},p={},d=[{value:"Jest setup file",id:"jest-setup-file",level:2},{value:"Global mock setup",id:"global-mock-setup",level:2},{value:"git hooks",id:"git-hooks",level:2},{value:"Test Util Functions",id:"test-util-functions",level:2}],m={toc:d};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"unit-testing-with-rtl"},"Unit testing with RTL"),(0,l.kt)("h2",{id:"jest-setup-file"},"Jest setup file"),(0,l.kt)("p",null," Developers can add global test features,enviroment,mocks in the file config\\jest\\jest.setup.js"),(0,l.kt)("h2",{id:"global-mock-setup"},"Global mock setup"),(0,l.kt)("p",null,"Mocks for files such as jpg, jpeg, png, gif, eot, otf, webp, svg, ttf, woff, woff2, mp4, webm, wav, mp3, m4a, aac, oga and stylesheets are configured"),(0,l.kt)("h2",{id:"git-hooks"},"git hooks"),(0,l.kt)("p",null,"pre-push testing is added in husky"),(0,l.kt)("h2",{id:"test-util-functions"},"Test Util Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test Util Functions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assertByTestId(renderComp,testId,isTruthy)"),(0,l.kt)("td",{parentName:"tr",align:null},"assert whether testId is present")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assertByTextContent(getByText,textContent)"),(0,l.kt)("td",{parentName:"tr",align:null},"assert whether given textContent is present")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assertProperty(obj,key,val)"),(0,l.kt)("td",{parentName:"tr",align:null},"assert value of the property in an object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderWithContext({Comp,ContextProviderRef,state,props})"),(0,l.kt)("td",{parentName:"tr",align:null},"renders the component with given context")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assertMockFunctionArg ({mockFunction,funCallIndex,argIndex,argument})"),(0,l.kt)("td",{parentName:"tr",align:null},"asserts the mth Argument of Mock Function for n number of function calls")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderComp"),(0,l.kt)("td",{parentName:"tr",align:null},"Rendered Component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testId"),(0,l.kt)("td",{parentName:"tr",align:null},"TestId which has to be checked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isTruthy"),(0,l.kt)("td",{parentName:"tr",align:null},"if truthy, test passes if the testId is present; if falsy, test passes if the testId is not present")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getByText"),(0,l.kt)("td",{parentName:"tr",align:null},"The getByText property reference of rendered")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"textContent"),(0,l.kt)("td",{parentName:"tr",align:null},"Text String that needs to be asserted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"obj"),(0,l.kt)("td",{parentName:"tr",align:null},"object reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"val"),(0,l.kt)("td",{parentName:"tr",align:null},"expected value of the key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Comp"),(0,l.kt)("td",{parentName:"tr",align:null},"Component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ContextProviderRef"),(0,l.kt)("td",{parentName:"tr",align:null},"context provider (ex: contextProviderRef=SomeContext.Provider)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"state of context that has to be assigned")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"props"),(0,l.kt)("td",{parentName:"tr",align:null},"props that needs to be assigned to the given Component ie.Comp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mockFunction"),(0,l.kt)("td",{parentName:"tr",align:null},"Mock Function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"funCallIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Index of nth function call (note:Indexing starts from 0,Index of function for the first call is 0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"argIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Index of the argument (Indexing starts from 0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"argument"),(0,l.kt)("td",{parentName:"tr",align:null},"expected argument")))))}c.isMDXComponent=!0}}]);