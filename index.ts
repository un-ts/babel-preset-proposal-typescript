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
import { declare } from '@babel/helper-plugin-utils'

export default declare((api, opts) => {
  api.assertVersion(7)

  const {
    decoratorsLegacy = true,
    isTSX = false,
    pipelineOperator = 'minimal',
  } = opts

  return {
    plugins: [
      [
        syntaxDecorators,
        {
          legacy: decoratorsLegacy,
        },
      ],
      syntaxDynamicImport,
      [
        syntaxTypeScript,
        {
          isTSX,
        },
      ],
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
          proposal: pipelineOperator,
        },
      ],
      proposalPrivateMethods,
      proposalThrowExpression,
    ],
    // no need to override if it has been enabled
    overrides: isTSX
      ? undefined
      : [
          {
            test: /\.[jt]sx$/,
            plugins: [
              [
                syntaxTypeScript,
                {
                  isTSX: true,
                },
              ],
            ],
          },
        ],
  }
})
