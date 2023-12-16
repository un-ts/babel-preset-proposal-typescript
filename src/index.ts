import type { ConfigAPI } from '@babel/core'
import { declare } from '@babel/helper-plugin-utils'
import proposalAsyncDoExpressions from '@babel/plugin-proposal-async-do-expressions'
import proposalDestructuringPrivate from '@babel/plugin-proposal-destructuring-private'
import proposalDoExpressions from '@babel/plugin-proposal-do-expressions'
import proposalDuplicateNamedCapturingGroupsRegex from '@babel/plugin-proposal-duplicate-named-capturing-groups-regex'
import proposalFunctionBind from '@babel/plugin-proposal-function-bind'
import proposalFunctionSent from '@babel/plugin-proposal-function-sent'
import proposalImportDefer from '@babel/plugin-proposal-import-defer'
import proposalImportWasmSource from '@babel/plugin-proposal-import-wasm-source'
import proposalOptionalChainingAssign from '@babel/plugin-proposal-optional-chaining-assign'
import proposalPartialApplication from '@babel/plugin-proposal-partial-application'
import proposalPipelineOperator from '@babel/plugin-proposal-pipeline-operator'
import proposalRecordAndTuple from '@babel/plugin-proposal-record-and-tuple'
import proposalRegexpModifiers from '@babel/plugin-proposal-regexp-modifiers'
import proposalThrowExpression from '@babel/plugin-proposal-throw-expressions'
import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'
import transformModulesCommonjs from '@babel/plugin-transform-modules-commonjs'

import { IS_RECORD_TUPLE_SUPPORTED } from './utils.js'
import syntaxV8intrinsic from './v8intrinsic.js'

export interface ProposalTypeScriptOptions {
  decoratorsBeforeExport?: boolean
  decoratorsLegacy?: boolean
  importDefer?: boolean | 'commonjs'
  isTSX?: boolean
  optionalChainingAssignVersion?: '2023-07'
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
      importDefer,
      isTSX,
      pipelineOperator = 'minimal',
      optionalChainingAssignVersion = '2023-07',
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
        proposalDestructuringPrivate,
        proposalDuplicateNamedCapturingGroupsRegex,
        proposalDoExpressions,
        proposalFunctionBind,
        proposalFunctionSent,
        ...(importDefer ? [proposalImportDefer, transformModulesCommonjs] : []),
        proposalPartialApplication,
        proposalImportWasmSource,
        [
          proposalOptionalChainingAssign,
          {
            version: optionalChainingAssignVersion,
          },
        ],
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
        proposalRegexpModifiers,
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
