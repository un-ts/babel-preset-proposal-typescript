# babel-preset-ts

Yet another Babel preset for TypeScript, only transforms proposals which TypeScript does not support now.

So that you can use babel to transform proposals which are current in stage 0-2 and TypeScript team [will not implement them temporarily](https://github.com/Microsoft/TypeScript/issues/19044#event-1293164503).

For now only [babel-plugin-transform-do-expressions](https://www.npmjs.com/package/babel-plugin-transform-do-expressions) is included.

## Install

```sh
npm install --save-dev @babel/preset-ts
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["@babel/ts"]
}
```

### Via CLI

```sh
babel input.ts --presets @babel/ts > output.ts
```

### Via Node API

```js
require("@babel/core").transform("code", {
  presets: ["@babel/ts"]
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
      presets: ['@babel/ts']
    }
  }]
}
```
