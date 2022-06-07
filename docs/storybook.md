---
id: storybook
title: Storybook
---

In a component driven development ecosystem such as React, a tool like Storybook is essential. It allows developers to build, test component in isolation. This is perfect way to build reusable components. Ideally 80% of development should happen via Storybook this way teams are never blocked because of test data or env issues.

Storybook setup is equipped with important add-ons to test for A11Y as well.

## Commands

- Start `yarn storybook`
- Build `yarn build-storybook`

## Configured Addons 
Storybook is configured with great addons for setting up an ideal dev ecosystem. 

- @storybook/addon-a11y: Validate accessability for each component. 
- @storybook/addon-actions: Actions can be used to display data received by event handlers
- @storybook/addon-docs: Document Stories in Storybook easily. 
- @storybook/addon-knobs: Change prop values and test components variations. 
- @storybook/addon-links: Create links that navigate between stories in Storybook.
- storybook-design-token: Browse project design tokens in storybook. 
- @storybook/addon-viewport: Test component in various viewport. 