---
id: how
title: How it works? 
---

There are 2 Key Pillars of Universal React.

## 1. Accelerate React Development by instant initial setup

React developers can run `npx create-universal-react` generator for setting up Micro Frontend and SPA architecture with essential tooling instantly.
## 2. Continuous Improvement and Support via addition of optional features 

React developers can run `npx create-universal-react` generator again for adding on-demand optional features and projects to evolving applications generated with Universal React. 

## Execution flow of generator

Following flow chart explains the workings of generator. 

![Execution flow of Universal React generator](/img/universal-react-generator-2x.png)

## Possible Architecture Overview

Using this generator flow you can setup and evolve a project into following Architecture types. 

![Architecture Types with Universal React generator](/img/universal-react-arch-types-2x.png)

There are 2 ways you can achieve Micro Frontend in this ecosystem. 

1. Micro-App Loader: A small NPM package to load any React micro app or Web Component into a given container. This approach is ideal when:
    1. You are not loading too many Micro Apps on a page. 
    2. You don't want to change configurations of Micro App to support Module Federation. 
2. Module Federation: Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually. Learn more [here](/universal-react-docs/docs/module-federation/).


