import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxDynamicImport from '@babel/plugin-syntax-dynamic-import'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'
import proposalClassProperties from '@babel/plugin-proposal-class-properties'
import proposalDoExpressions from '@babel/plugin-proposal-do-expressions'
import proposalFunctionBind from '@babel/plugin-proposal-function-bind'
import proposalFunctionSent from '@babel/plugin-proposal-function-sent'
import proposalJsonStrings from '@babel/plugin-proposal-json-strings'
import proposalLogicalAssignmentOperators from '@babel/plugin-proposal-logical-assignment-operators'
import proposalNullishCoalescingOperator from '@babel/plugin-proposal-nullish-coalescing-operator'
import proposalOptionalChaining from '@babel/plugin-proposal-optional-chaining'
import proposalPartialApplication from '@babel/plugin-proposal-partial-application'
import proposalPipelineOperator from '@babel/plugin-proposal-pipeline-operator'
import proposalPrivateMethods from '@babel/plugin-proposal-private-methods'
import proposalThrowExpression from '@babel/plugin-proposal-throw-expressions'

export default () => ({
  plugins: [
    [
      syntaxDecorators,
      {
        legacy: true,
      },
    ],
    syntaxDynamicImport,
    syntaxTypeScript,
    proposalClassProperties,
    proposalDoExpressions,
    proposalFunctionBind,
    proposalFunctionSent,
    proposalJsonStrings,
    proposalLogicalAssignmentOperators,
    proposalNullishCoalescingOperator,
    proposalOptionalChaining,
    proposalPartialApplication,
    [
      proposalPipelineOperator,
      {
        proposal: 'minimal',
      },
    ],
    proposalPrivateMethods,
    proposalThrowExpression,
  ],
})
