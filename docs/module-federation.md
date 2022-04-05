---
id: module-federation
title: Module Federation
sidebar_label: Module Federation
---
# Module Federation Implementation

[![Micro Frontend with Module Federation by Achal Jain](https://s7.gifyu.com/images/Banner0265e615a82a2b09d3.jpg)](https://web.microsoftstream.com/video/32da7dbd-10b3-424c-874a-81b1f52fd52a "Micro Frontend with Module Federation by Achal Jain")

## Provider
Add the following ModuleFederation Plugin configurations to expose code that needs to be shared with other applications

### next.config.js
```jsx
const deps = require("./package.json").dependencies;
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "providerApp",  
        filename: "remoteEntry.js",
        exposes: {
         "./Button": "./src/Button",
        }
        shared: { ...deps,react: { singleton: true, requiredVersion: deps.react, }, 'react-dom': { singleton: true, requiredVersion: deps["react-dom"]} },
        },
      })
    );
    return config;
  },
}
```
In this example we are running it on server 5000.
Remote identifies host with it's specified name, here i.e providerApp.The Button componant is exposed and libraries are shared 

## Remote
Add the following ModuleFederation Plugin configurations to consume code that is being shared

### next.config.js
```jsx
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
           providerApp: "providerApp@http://localhost:5000/remoteEntry.js",
        },
      })
    );
    return config;
  },
}
```
In the above configurations at remotes add the provider url 
### index.js

```jsx
import dynamic from "next/dynamic";

const SharedButton = dynamic(
  async () => {
    return await import("providerApp/Button");
  },
  {
    ssr: false,
  }
)

export default function MyPage() {
  return <SharedButton />
}
```
