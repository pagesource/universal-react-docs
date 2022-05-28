---
id: quality-control
title: Static Quality Control
sidebar_label: Quality Control
---

# XT Page Source Code Quality Config Package

Package to unify code quality control configuration and rules across projects. No need to install those packages anymore in your projects and maintain them all separately.

## Eslint Package

To Install package <@xt-pagesource/eslint-config>

```sh
npm install @xt-pagesource/eslint-config-react
```

#### Configure

Create the file .eslintrc in your app root folder and extend rules. you can also add additional rules as per your desire.

```
{
 "extends":["@xt-pagesource/eslint-config-react"]
}
```

#### Note:
 You can extend or modify this rules in your project as is described on the documentation of eslint, the same way as you will do when extending eslint recommended rules.

```
{
 "extends":["@xt-pagesource/eslint-config-react"],

 rules:{
     your rules here
 }
}
```

### Usage

Like you will do normally with eslint, this package is nothing else just a wrapper. - For just linting and to see the report, run:

```
eslint path/to/folder
```

For linting and autofix the problems, run:

```
eslint --fix path/to/folder
```

Recommended
Add in your package.json at the scripts section the two following scripts:

```
{
    "scripts": {
    "lint:js": "eslint path/to/folder",
    "lint:fix": "eslint  --fix path/to/folder"
    }
}
```

---

## Stylint Package

To Install package <@xt-pagesource/stylelint-config>

```
npm install @xt-pagesource/stylelint-config-react
```

#### Configure

Create the file .stylelintrc in your app root folder and extend rules. you can also add additional rules as per your desire.

```
{
 "extends":["@xt-pagesource/stylelint-config-react"]
}
```

#### Note: 
You can extend or modify this rules in your project as is described on the documentation of eslint, the same way as you will do when extending eslint recommended rules.

```
{
 "extends":["@xt-pagesource/stylelint-config-react"],

 rules:{
     your rules here
 }

}
```

### Usage

Like you will do normally with stylelint, this package is a wrapper. - For just linting and to see the report, run:

```
stylelint path/to/folder
```

For linting and autofix the problems, run:

```
stylelint --fix path/to/folder
```

Recommended
Add in your package.json at the scripts section the two following scripts:

```
{
    "scripts": {

    "lint:css": "stylelint path/to/folder",
    }
}
```