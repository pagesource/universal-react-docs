---
id: loader
title: Loader
sidebar_label: Loader
---

# Loader
Loader is a react component, mainly used to load the other micro react micro apps using maifest files, solve the problems of cross-team collaboration and reduce the build dependecy.

## Goals
To compose multiple independently delivered front-end applications into a whole, and to decompose front-end applications into some smaller and simpler applications that can be "independently developed", "independently tested" and "independently deployed", while still appearing to users as cohesive individual products.

## Getting Started

### To load a react app
```javascript
<Loader url='http://localhost:5000/manifest.json' loading={<h3>loading ...</h3>}  appdata= {{"count":count}} namespace='headerApp' selector='headercontainer'/>
```
### To load a web component
```javascript
<Loader url='http://localhost:5002/manifest.json' loading={<h3>loading ...</h3>} namespace='webComponent' selector='webcomponentcount'>
<web-component name-attribute={count}>\</web-component> 
</Loader> 
```

### Attributes 
***appdata*** contains data you want to pass to your micro app as object.
***namespace*** name under which your exporting the app(Required).
***selector*** id given to the div on which app is loaded(Required).
***loading*** element to show while loading.
***url*** url of the mainfest.json file(Required).
***deferloading*** it is boolean to load script async or non-async,true by default.
