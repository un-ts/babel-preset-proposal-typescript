# babel-preset-proposal-typescript

[![Greenkeeper badge](https://badges.greenkeeper.io/JounQin/babel-preset-proposal-typescript.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/JounQin/babel-preset-proposal-typescript.svg)](https://travis-ci.org/JounQin/babel-preset-proposal-typescript)
[![David](https://img.shields.io/david/JounQin/babel-preset-proposal-typescript.svg)](https://david-dm.org/JounQin/babel-preset-proposal-typescript)
[![David Dev](https://img.shields.io/david/dev/JounQin/babel-preset-proposal-typescript.svg)](https://david-dm.org/JounQin/babel-preset-proposal-typescript?type=dev)

Yet another Babel preset for TypeScript, only transforms proposals which TypeScript does not support now.

So that you can use babel to transform proposals which are current in stage 0-2 and TypeScript team [will not implement them temporarily](https://github.com/Microsoft/TypeScript/issues/19044#event-1293164503).

## Enabled proposal plugins

1. [do-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-do-expressions)
2. [function-bind](https://www.npmjs.com/package/@babel/plugin-proposal-function-bind)
3. [function-sent](https://www.npmjs.com/package/@babel/plugin-proposal-function-sent)
4. [nullish-coalescing-operator](https://www.npmjs.com/package/@babel/plugin-proposal-nullish-coalescing-operator)
5. [numeric-separator](https://www.npmjs.com/package/@babel/plugin-proposal-numeric-separator)
6. [optional-chaining](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)
7. [pipeline-operator](https://www.npmjs.com/package/@babel/plugin-proposal-pipeline-operator)
8. [throw-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-throw-expressions)
9. [unicode-property-regex](https://www.npmjs.com/package/@babel/plugin-proposal-unicode-property-regex)

## Install

```sh
npm install --save-dev babel-preset-proposal-typescript # npm
yarn add -D babel-preset-proposal-typescript # yarn
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["proposal-typescript"]
}
```

### Via CLI

```sh
babel input.ts --presets proposal-typescript > output.ts
```

### Via Node API

```js
require("@babel/core").transform("code", {
  presets: ["proposal-typescript"]
});
```

### Via webpack

Pipe codes through `babel-loader` to `ts-loader` or `awesome-typescript-loader`.

```js
loader = {
  test: /\.ts$/,
  use: [{
    loader: 'ts-loader'
  }, {
    loader: 'babel-loader',
    options: {
      presets: ['proposal-typescript']
    }
  }]
}
```
