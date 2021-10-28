---
id: module-federation
title: Module Federation
sidebar_label: Module Federation
---
# Module Federation Implementation

## Host

### next.config.js
```jsx
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
        },
      })
    );

    return config;
  },
}
```

Remote identifies host with it's specified name.Here the Button componant is exposed.In the same way we can expose react packages

## Remote

### next.config.js
```jsx
const deps = require("./package.json").dependencies;
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        
        remotes: {
           providerApp: "providerApp@http://localhost:5000/remoteEntry.js",
        },
        shared: { ...deps,react: { singleton: true, eager:true, requiredVersion: deps.react, }, 'react-dom': { singleton: true,eager:true , requiredVersion: deps["react-dom"]} },
      })
    );

    return config;
  },
}
```

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
