import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxDynamicImport from '@babel/plugin-syntax-dynamic-import'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'

import proposalDoExpressions from '@babel/plugin-proposal-do-expressions'
import proposalFunctionBind from '@babel/plugin-proposal-function-bind'
import proposalFunctionSent from '@babel/plugin-proposal-function-sent'
import proposalNullishCoalescingOperator from '@babel/plugin-proposal-nullish-coalescing-operator'
import proposalNumericSeparator from '@babel/plugin-proposal-numeric-separator'
import proposalOptionalChaining from '@babel/plugin-proposal-optional-chaining'
import proposalPipelineOperator from '@babel/plugin-proposal-pipeline-operator'
import proposalThrowExpression from '@babel/plugin-proposal-throw-expressions'
import proposalUnicodePropertyRegex from '@babel/plugin-proposal-unicode-property-regex'

export default () => ({
  plugins: [
    syntaxDecorators,
    syntaxDynamicImport,
    syntaxTypeScript,
    proposalDoExpressions,
    proposalFunctionBind,
    proposalFunctionSent,
    proposalNullishCoalescingOperator,
    proposalNumericSeparator,
    proposalOptionalChaining,
    proposalPipelineOperator,
    proposalThrowExpression,
    proposalUnicodePropertyRegex
  ]
})
