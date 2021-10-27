---
id: base-path
title: Base Path
sidebar_label: Base Path
---
## Introduction
basePath is the URL prefix for all API paths, relative to the host root. It must start with a leading slash /. If basePath is not specified, it defaults to /, that is, all paths start at the host root. basePath is set at the next.config.js file.
```
basePath: process.env.BASE_PATH || ''
```

## Setup
Deep path is set in the package.json file.
```
"scripts": {
    "env-var": "cross-env BASE_PATH=/universal-react"
}
```
This path can be modified by changing /universal-react.