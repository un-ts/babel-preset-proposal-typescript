import { ConfigAPI } from '@babel/core'
import { declare } from '@babel/helper-plugin-utils'
import proposalAsyncDoExpressions from '@babel/plugin-proposal-async-do-expressions'
import proposalClassProperties from '@babel/plugin-proposal-class-properties'
import proposalClassStaticBlock from '@babel/plugin-proposal-class-static-block'
import proposalDoExpressions from '@babel/plugin-proposal-do-expressions'
import proposalFunctionBind from '@babel/plugin-proposal-function-bind'
import proposalFunctionSent from '@babel/plugin-proposal-function-sent'
import proposalJsonStrings from '@babel/plugin-proposal-json-strings'
import proposalPartialApplication from '@babel/plugin-proposal-partial-application'
import proposalPipelineOperator from '@babel/plugin-proposal-pipeline-operator'
import proposalPrivatePropertyInObject from '@babel/plugin-proposal-private-property-in-object'
import proposalRecordAndTuple from '@babel/plugin-proposal-record-and-tuple'
import proposalThrowExpression from '@babel/plugin-proposal-throw-expressions'
import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'

import syntaxV8intrinsic from './v8intrinsic'
import { IS_RECORD_TUPLE_SUPPORTED } from './utils'

export interface ProposalTypeScriptOptions {
  classLoose?: boolean
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
      classLoose,
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
        [
          proposalClassStaticBlock,
          {
            loose: classLoose,
          },
        ],
        [
          proposalClassProperties,
          {
            loose: classLoose,
          },
        ],
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
        [
          proposalPrivatePropertyInObject,
          {
            loose: classLoose,
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
