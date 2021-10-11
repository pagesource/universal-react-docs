---
id: web-component
title: Consuming Web component in react
sidebar_label: Consuming Web component in react
---

## What are web component ? 
Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. For example, we can create our new component called `<my-custom-web-component>`, with its unique styling and functionality, and use it in any JavaScript framework or library.


## Consuming the Web Component in React [ universal-react-v2 ]
1. Create universal-react-v2 
2. Chosse prefered app type
3. Copy file in your project `src/` folder or `inside of src/<your-folder-name> as you wish` or `provide url of web-component it will installed in src/web-component`
4. Now simply call your import your web-component in respected file. 
5. Install webcomponentjs and vendor copy to make polyfills and to make the polyfills available on runtime.
6. Run `npm install --save @webcomponents/webcomponentsjs vendor-copy`
7. Add postinstall in script as follows, 
```javascript
"scripts": {
  "postinstall": "vendor-copy"
},
```
8. Give instructions to vendor-copy on what it should copy over when the install is run. We need webcomponents-bundle.js and custom-elements-es5-adapter.js
9. Run `npm i` or `npm install`
10. Lastly we have to use the polyfills at runtime by adding them to our /public/index.html

`//index.js`
```javascript
<script src="%PUBLIC_URL%/vendor/webcomponents-bundle.js"></script>

<script>if (!window.customElements) { document.write("<!--"); }</script>

<script src="%PUBLIC_URL%/vendor/custom-elements-es5-adapter.js"></script>
```
11. Run `npm start`

## Reference :
* https://academind.com/tutorials/web-components-introduction
* https://vaadin.com/learn/tutorials/using-web-components-in-react
