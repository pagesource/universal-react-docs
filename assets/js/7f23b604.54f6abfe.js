"use strict";(self.webpackChunkuniversal_react_docs=self.webpackChunkuniversal_react_docs||[]).push([[156],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5213:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Generate Plop",p={unversionedId:"generate-plop",id:"generate-plop",title:"Generate Plop",description:"Generate-plop Introduction by Khushboo Kumari",source:"@site/docs/generate-plop.md",sourceDirName:".",slug:"/generate-plop",permalink:"/universal-react-docs/docs/generate-plop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/generate-plop.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Logger",permalink:"/universal-react-docs/docs/logger"},next:{title:"Module Federation",permalink:"/universal-react-docs/docs/module-federation"}},c={},u=[{value:"Workflow diagram",id:"workflow-diagram",level:2},{value:"Feature Details",id:"feature-details",level:2},{value:"Components",id:"components",level:3},{value:"Hooks",id:"hooks",level:3},{value:"Pages",id:"pages",level:3},{value:"Stores",id:"stores",level:3},{value:"Services",id:"services",level:3},{value:"Refrences",id:"refrences",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-plop"},"Generate Plop"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://web.microsoftstream.com/video/4508e6c4-7434-4247-a3a4-3a65e47f9352",title:"Generate-plop Introduction by Khushboo Kumari"},(0,o.kt)("img",{parentName:"a",src:"https://s7.gifyu.com/images/Banner0395df38ffe0484140.jpg",alt:"Generate-plop Introduction by Khushboo Kumari"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@xt-pagesource/generate-plop"},"@xt-pagesource/generate-plop")," is a simple, extensible  and scalable component generator. It can help you to scaffold components, templates, hooks and pages simply by running few cli commands. Automating the component creation process makes really easy for the team to maintain consistency and saves good time. "),(0,o.kt)("p",null,"This tool will generate typescript files by default. However, we can generate\njavascript files as well by passing --js in script command."),(0,o.kt)("h2",{id:"workflow-diagram"},"Workflow diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s10.gifyu.com/images/workflow928767aefb9d6b3d.png",alt:"generate-plop"})),(0,o.kt)("h2",{id:"feature-details"},"Feature Details"),(0,o.kt)("p",null,"You can generate the following components using generate-plop"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React Components: Class and Functional in ",(0,o.kt)("a",{parentName:"li",href:"https://atomicdesign.bradfrost.com/"},"Atomic Design")," structure. "),(0,o.kt)("li",{parentName:"ul"},"React Custom Hooks."),(0,o.kt)("li",{parentName:"ul"},"React Context."),(0,o.kt)("li",{parentName:"ul"},"React Query Services."),(0,o.kt)("li",{parentName:"ul"},"Next.js Pages/Routes.")),(0,o.kt)("p",null,"You can use this generator in a single app repo as well as in a monorepo\n(powered by ",(0,o.kt)("a",{parentName:"p",href:"https://turborepo.org/"},"turborepo"),").\ngenerate-plop is intelligent enough to figure out if it being run in single app repo\nor in the root directory of monorepo."),(0,o.kt)("p",null,"If it is a monorepo, you will be asked to choose the from the application in ",(0,o.kt)("inlineCode",{parentName:"p"}," /apps"),"\nannd ",(0,o.kt)("inlineCode",{parentName:"p"}," /packages")," directories where you wish to create the component."),(0,o.kt)("p",null,"After the app selection workflow of monorepo is same as the workflow in single repo application.\nThe workflow is explaied below."),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("p",null,"As of now, the Current version creates react-components only. You can create ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html"},"Functional\nor Class components"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can create atoms or molecules or organisms or templates."),(0,o.kt)("li",{parentName:"ul"},"Any of the above categories you choose, tool expects directory ",(0,o.kt)("inlineCode",{parentName:"li"},"/src/{category}"),"\nto be available."),(0,o.kt)("li",{parentName:"ul"},"You can create react component at the custom path as well. You will need to enter\na custom path relative to ",(0,o.kt)("inlineCode",{parentName:"li"},"/src")," directory.\nIn the last step, you will need to provide the name of the componentt.")),(0,o.kt)("p",null,"Based on all details provided generate-tool will create follwoing files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"index.ts")," Export statement for the component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{name}.ts"),"React component"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tests/{name}.test.ts")," Unit test basic structure for the component using ",(0,o.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro/"},"React Test Library")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{name}.style.ts")," Style file for the component using ",(0,o.kt)("a",{parentName:"li",href:"https://stitches.dev/"},"Stitches Styling Library")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{name}.story.ts")," ",(0,o.kt)("a",{parentName:"li",href:"https://storybook.js.org/"},"Storybook")," created for the component.")),(0,o.kt)("h3",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"You can create ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-custom.html"},"React custom hooks"),". You\nwill need to provide name for the hook.\nThe custom hook will be created in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/hooks ")," directory. generate-tool\nwill create the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"index.ts")," React custom hook."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test.ts")," Unit test basic structure for the hook using ",(0,o.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro/"},"React Test Library"))),(0,o.kt)("h3",{id:"pages"},"Pages"),(0,o.kt)("p",null,"You can create ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages"},"Next pages"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You will need to provide the name of the page."),(0,o.kt)("li",{parentName:"ul"},"You can provide directory where you want to create the page, default directory\nis ",(0,o.kt)("inlineCode",{parentName:"li"},"src/pages"),"."),(0,o.kt)("li",{parentName:"ul"},"Tool will create ",(0,o.kt)("inlineCode",{parentName:"li"},"index.ts")," Export statement for the template."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{name}.ts"),"If Template doesn't exists, it will create a template in the dir ",(0,o.kt)("inlineCode",{parentName:"li"},"src/components/templates")),(0,o.kt)("li",{parentName:"ul"},"It will update the route as well in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/routes/paths.ts")," file.")),(0,o.kt)("h3",{id:"stores"},"Stores"),(0,o.kt)("p",null,"You can create ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React context"),". Context created\nis ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/smart-context"},"smart-context"),". It makes state management\nsimple. You will need to provide store name. Files created by the tool are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"index.ts")," Export statement for the store."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contextProvider.ts")," Context will return the provider wrapped component.")),(0,o.kt)("h3",{id:"services"},"Services"),(0,o.kt)("p",null,"You can create services using ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-query")," to fetch\ncache ad create data. You have an option to create rest based services or ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"graphql")," based\nservices."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service will be created in ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/services")," directory."),(0,o.kt)("li",{parentName:"ul"},"You will need to choose if it is a graphql call or not."),(0,o.kt)("li",{parentName:"ul"},"You will need to provide the name of the service.\nFiles created by generate-plop tool are:"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{name}.ts")," Service created using react-query"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"types/common.ts")," Interface for default props used in the service (",(0,o.kt)("em",{parentName:"li"},"Only for Typescript"),")")),(0,o.kt)("h2",{id:"refrences"},"Refrences"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://plopjs.com/documentation/"},"Plop documetation")))}d.isMDXComponent=!0}}]);