# Dej's Eslint Config

### Description
This package provides a customized ESLint configuration for consistent code style and best practices in JavaScript, TypeScript, and Vue.js projects.

### Installation
To install this ESLint configuration package, use the following command:


```bash
npm install dej10/eslint-config
```

or 

```bash
pnpm install dej10/eslint-config
```

or

```bash
yarn add dej10/eslint-config
```




### Usage
To use this configuration in your project, create an `.eslintrc.js` file in the root directory of your project and extend this configuration:

```javascript
module.exports = {
 ...
  extends: ['@dej10/eslint-config'],
  // Other configurations or overrides here...
};

```
NB: Copy the .prettierrc file from this [repository](https://github.com/dej10/eslint-config/blob/main/.prettierrc) into your project folder

