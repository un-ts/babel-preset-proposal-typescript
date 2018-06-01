import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxDynamicImport from '@babel/plugin-syntax-dynamic-import'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'

import proposalDoExpressions from '@babel/plugin-proposal-do-expressions'
import proposalFunctionBind from '@babel/plugin-proposal-function-bind'
import proposalFunctionSent from '@babel/plugin-proposal-function-sent'
import proposalJsonStrings from '@babel/plugin-proposal-json-strings'
import proposalLogicalAssginmentOperators from '@babel/plugin-proposal-logical-assignment-operators'
import proposalNullishCoalescingOperator from '@babel/plugin-proposal-nullish-coalescing-operator'
import proposalOptionalChaining from '@babel/plugin-proposal-optional-chaining'
import proposalPipelineOperator from '@babel/plugin-proposal-pipeline-operator'
import proposalThrowExpression from '@babel/plugin-proposal-throw-expressions'

export default () => ({
  plugins: [
    syntaxDecorators,
    syntaxDynamicImport,
    syntaxTypeScript,
    proposalDoExpressions,
    proposalFunctionBind,
    proposalFunctionSent,
    proposalJsonStrings,
    proposalLogicalAssginmentOperators,
    proposalNullishCoalescingOperator,
    proposalOptionalChaining,
    proposalPipelineOperator,
    proposalThrowExpression,
  ],
})
