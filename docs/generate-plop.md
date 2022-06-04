
# Generate Plop

[![Generate-plop Introduction by Khushboo Kumari](https://s7.gifyu.com/images/Banner0395df38ffe0484140.jpg)](https://web.microsoftstream.com/video/4508e6c4-7434-4247-a3a4-3a65e47f9352 "Generate-plop Introduction by Khushboo Kumari")

[@xt-pagesource/generate-plop](https://www.npmjs.com/package/@xt-pagesource/generate-plop) is a simple, extensible  and scalable component generator. It can help you to scaffold components, templates, hooks and pages simply by running few cli commands. Automating the component creation process makes really easy for the team to maintain consistency and saves good time. 

This tool will generate typescript files by default. However, we can generate
javascript files as well by passing --js in script command.

## Workflow diagram

![generate-plop](https://s10.gifyu.com/images/workflow928767aefb9d6b3d.png)


## Feature Details
You can generate the following components using generate-plop

- React Components: Class and Functional in [Atomic Design](https://atomicdesign.bradfrost.com/) structure. 
- React Custom Hooks.
- React Context.
- React Query Services.
- Next.js Pages/Routes.

You can use this generator in a single app repo as well as in a monorepo
(powered by [turborepo](https://turborepo.org/)).
generate-plop is intelligent enough to figure out if it being run in single app repo
or in the root directory of monorepo.

If it is a monorepo, you will be asked to choose the from the application in ```` /apps````
annd ```` /packages```` directories where you wish to create the component.

After the app selection workflow of monorepo is same as the workflow in single repo application. 
The workflow is explaied below.

### Components
As of now, the Current version creates react-components only. You can create [Functional
or Class components](https://reactjs.org/docs/components-and-props.html).
- You can create atoms or molecules or organisms or templates.
- Any of the above categories you choose, tool expects directory ````/src/{category}```` 
    to be available.
- You can create react component at the custom path as well. You will need to enter
    a custom path relative to ````/src```` directory.
In the last step, you will need to provide the name of the componentt.

Based on all details provided generate-tool will create follwoing files:
 - ````index.ts```` Export statement for the component.
 - ````{name}.ts````React component
 - ````tests/{name}.test.ts```` Unit test basic structure for the component using [React Test Library](https://testing-library.com/docs/react-testing-library/intro/)
 - ````{name}.style.ts```` Style file for the component using [Stitches Styling Library](https://stitches.dev/)
 - ````{name}.story.ts```` [Storybook](https://storybook.js.org/) created for the component.
 
### Hooks
You can create [React custom hooks](https://reactjs.org/docs/hooks-custom.html). You 
will need to provide name for the hook.
The custom hook will be created in ````src/hooks ```` directory. generate-tool 
will create the following files:
- ````index.ts```` React custom hook.
- ````test.ts```` Unit test basic structure for the hook using [React Test Library](https://testing-library.com/docs/react-testing-library/intro/)

### Pages
You can create [Next pages](https://nextjs.org/docs/basic-features/pages).
 - You will need to provide the name of the page.
 - You can provide directory where you want to create the page, default directory 
    is ````src/pages````.
 - Tool will create ````index.ts```` Export statement for the template.
 - ````{name}.ts````If Template doesn't exists, it will create a template in the dir ````src/components/templates````
 - It will update the route as well in ````src/routes/paths.ts```` file.

### Stores
You can create [React context](https://reactjs.org/docs/context.html). Context created
is [smart-context](https://www.npmjs.com/package/smart-context). It makes state management
simple. You will need to provide store name. Files created by the tool are:
 - ````index.ts```` Export statement for the store.
 - ````contextProvider.ts```` Context will return the provider wrapped component.

### Services
You can create services using [react-query](https://react-query.tanstack.com/) to fetch
cache ad create data. You have an option to create rest based services or [graphql](https://graphql.org/) based
services.
- Service will be created in ````packages/services```` directory.
- You will need to choose if it is a graphql call or not.
- You will need to provide the name of the service.
Files created by generate-plop tool are:
- ````{name}.ts```` Service created using react-query
- ````types/common.ts```` Interface for default props used in the service (*Only for Typescript*)

## Refrences 
[Plop documetation](https://plopjs.com/documentation/)
