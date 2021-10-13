---
id: semantic
title: Add Semantic release capability in each arch type
sidebar_label: Add semantic release capability in each arch type
---

## What is Sementic Release ?
Semantic release automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.
 
## Requirements 
1. npm Token
2. Git Token

*** Please generate a git token with GIT_TOKEN or GH_TOKEN ***

## Use
1. Run `npm run cm` for commit because we use commitlint to generate better commit messages. 
2. To create a release note please run `npm run release` it will realease a CHANGELOG.md file. 
3. Please modify `.github/workflows/publish.yml` to configure branch and os's. 
4. Once you commit to stated branch the next version will be created. 

*** NOTE: Please modify publish.yml file as defined Use section.  ***