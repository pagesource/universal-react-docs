---
id: how
title: How it works? 
---

There are 2 Key Pillars of Universal React.

## 1. Instant initial setup

React developers can run `npx create-universal-react` generator for setting up Micro Frontend and/or SPA architecture with essential tooling instantly. 
## 2. On-demand addition of optional features 

React developers can continuously improve their project by running `npx create-universal-react` generator again for adding optional features like mocking, end-to-end testing or even new projects to their evolving applications. 

## Architecture Overview

Using this generator you can setup and evolve a project into a combination of following architecture types. 

![Architecture Types with Universal React generator](/img/universal-react-arch-types-2x.png)

### How does Universal React achieve Micro Frontend? 

There are 2 ways you can achieve Micro Frontend in this ecosystem. 

1. **Micro-App Loader**: A small NPM package to load any React micro app or Web Component into a given container. This approach is ideal when:
    1. You are not loading too many Micro Apps on a page. 
    2. You don't want to change configurations of Micro App to support Module Federation. 
2. **Module Federation**: Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually. Learn more [here](/universal-react-docs/docs/module-federation/).
