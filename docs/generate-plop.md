
# Generate Plop

Generate-plop is a simple, scalable and fast component generator. It can help 
you to scaffold components, templates, hooks and pages simply by running few 
cli commands. Automating the component creation process makes really easy for 
the team to maintain consistency and saves good time. 

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
 - ````{name}.style.ts```` Style file for the component using [Styled Component framework](https://styled-components.com/)
 - ````{name}.story.ts```` [Storybook](https://storybook.js.org/) created for the component.
 
