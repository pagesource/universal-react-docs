### Provider

#### next.config.js
'''
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
        },
        shared: {  react: { singleton: true, eager:true, requiredVersion: deps.react, }, 'react-dom': { singleton: true,eager:true , requiredVersion: deps["react-dom"]} 
        },
      })
    );

    return config;
  },
}
'''
### Remote

#### next.config.js
'''
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
'''

### index.js

'''
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

'''
