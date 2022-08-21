import { ConfigAPI } from '@babel/core'
import { declare } from '@babel/helper-plugin-utils'
import proposalAsyncDoExpressions from '@babel/plugin-proposal-async-do-expressions'
import proposalDoExpressions from '@babel/plugin-proposal-do-expressions'
import proposalFunctionBind from '@babel/plugin-proposal-function-bind'
import proposalFunctionSent from '@babel/plugin-proposal-function-sent'
import proposalJsonStrings from '@babel/plugin-proposal-json-strings'
import proposalPartialApplication from '@babel/plugin-proposal-partial-application'
import proposalPipelineOperator from '@babel/plugin-proposal-pipeline-operator'
import proposalRecordAndTuple from '@babel/plugin-proposal-record-and-tuple'
import proposalThrowExpression from '@babel/plugin-proposal-throw-expressions'
import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'

import { IS_RECORD_TUPLE_SUPPORTED } from './utils.js'
import syntaxV8intrinsic from './v8intrinsic.js'

export interface ProposalTypeScriptOptions {
  decoratorsBeforeExport?: boolean
  decoratorsLegacy?: boolean
  isTSX?: boolean
  pipelineOperator?: 'fsharp' | 'minimal' | 'smart'
  recordTuplePolyfill?: boolean | string
  recordTupleSyntaxType?: 'bar' | 'hash'
}

export default declare(
  (
    api: ConfigAPI,
    {
      decoratorsBeforeExport,
      decoratorsLegacy = true,
      isTSX,
      pipelineOperator = 'minimal',
      recordTuplePolyfill = IS_RECORD_TUPLE_SUPPORTED,
      recordTupleSyntaxType = 'hash',
    }: ProposalTypeScriptOptions,
  ) => {
    api.assertVersion(7)
    return {
      plugins: [
        [
          syntaxDecorators,
          {
            decoratorsBeforeExport,
            legacy: decoratorsLegacy,
          },
        ],
        [
          syntaxTypeScript,
          {
            isTSX,
          },
        ],
        syntaxV8intrinsic,
        proposalAsyncDoExpressions,
        proposalDoExpressions,
        proposalFunctionBind,
        proposalFunctionSent,
        proposalJsonStrings,
        proposalPartialApplication,
        [
          proposalPipelineOperator,
          {
            proposal: pipelineOperator,
          },
        ],
        recordTuplePolyfill && [
          proposalRecordAndTuple,
          {
            importPolyfill: !!recordTuplePolyfill,
            polyfillModuleName:
              typeof recordTuplePolyfill === 'string'
                ? recordTuplePolyfill
                : undefined,
            syntaxType: recordTupleSyntaxType,
          },
        ],
        proposalThrowExpression,
      ].filter(Boolean),
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
  },
)
