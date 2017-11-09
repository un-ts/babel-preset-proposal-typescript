import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxDynamicImport from '@babel/plugin-syntax-dynamic-import'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'
import transformDoExpressions from 'babel-plugin-transform-do-expressions'
import transformFunctionBind from 'babel-plugin-transform-function-bind'

export default () => ({
  plugins: [
    syntaxDecorators,
    syntaxDynamicImport,
    syntaxTypeScript,
    transformDoExpressions,
    transformFunctionBind
  ]
})
