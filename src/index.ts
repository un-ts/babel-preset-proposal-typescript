import type { PluginItem, PresetAPI } from '@babel/core'
import { declarePreset } from '@babel/helper-plugin-utils'
import proposalAsyncDoExpressions from '@babel/plugin-proposal-async-do-expressions'
import proposalDestructuringPrivate from '@babel/plugin-proposal-destructuring-private'
import proposalDiscardBinding from '@babel/plugin-proposal-discard-binding'
import proposalDoExpressions from '@babel/plugin-proposal-do-expressions'
import proposalExportDefaultFrom from '@babel/plugin-proposal-export-default-from'
import proposalFunctionBind from '@babel/plugin-proposal-function-bind'
import proposalFunctionSent from '@babel/plugin-proposal-function-sent'
import proposalImportDefer from '@babel/plugin-proposal-import-defer'
import proposalImportWasmSource from '@babel/plugin-proposal-import-wasm-source'
import proposalOptionalChainingAssign from '@babel/plugin-proposal-optional-chaining-assign'
import proposalPartialApplication from '@babel/plugin-proposal-partial-application'
import proposalPipelineOperator from '@babel/plugin-proposal-pipeline-operator'
import proposalThrowExpression from '@babel/plugin-proposal-throw-expressions'
import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxJSX from '@babel/plugin-syntax-jsx'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'
import proposalDuplicateNamedCapturingGroupsRegex from '@babel/plugin-transform-duplicate-named-capturing-groups-regex'
import transformModulesCommonjs from '@babel/plugin-transform-modules-commonjs'
import proposalRegexpModifiers from '@babel/plugin-transform-regexp-modifiers'

import syntaxV8intrinsic from './v8intrinsic.js'

export interface ProposalTypeScriptOptions {
  decoratorsLegacy?: boolean
  importDefer?: boolean | 'commonjs'
  isTSX?: boolean
  optionalChainingAssignVersion?: '2023-07'
  partialApplicationVersion?: '2018-07'
  pipelineOperator?: 'fsharp' | 'hack'
  pipelineTopicToken?: '@@' | '#' | '%' | '^' | '^^'
}

export default declarePreset(
  (
    api: PresetAPI,
    {
      decoratorsLegacy = true,
      importDefer,
      isTSX,
      pipelineOperator = 'fsharp',
      pipelineTopicToken = '%',
      optionalChainingAssignVersion = '2023-07',
      partialApplicationVersion = '2018-07',
    }: ProposalTypeScriptOptions,
  ) => {
    api.assertVersion('^8.0.0')
    return {
      plugins: [
        [
          syntaxDecorators,
          {
            version: decoratorsLegacy ? 'legacy' : '2023-11',
          },
        ],
        ...(isTSX ? [syntaxJSX] : []),
        syntaxTypeScript,
        // Babel 8 disallows combining `v8intrinsic` with Hack-style pipes,
        // both of them rely on the same `%` token
        ...(pipelineOperator === 'hack' ? [] : [syntaxV8intrinsic]),
        proposalAsyncDoExpressions,
        proposalDestructuringPrivate,
        [
          proposalDiscardBinding,
          {
            syntaxType: 'void',
          },
        ] as PluginItem,
        proposalDuplicateNamedCapturingGroupsRegex,
        proposalDoExpressions,
        proposalExportDefaultFrom,
        proposalFunctionBind,
        proposalFunctionSent,
        ...(importDefer ? [proposalImportDefer, transformModulesCommonjs] : []),
        [
          proposalPartialApplication,
          {
            version: partialApplicationVersion,
          },
        ],
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
            topicToken:
              pipelineOperator === 'hack' ? pipelineTopicToken : undefined,
          },
        ] as PluginItem,
        proposalRegexpModifiers,
        proposalThrowExpression,
      ],
      // Babel 8 detects TSX by file extension, `isTSX` forces JSX parsing for
      // every file instead, otherwise only `.[jt]sx` files are treated as TSX
      overrides: isTSX
        ? undefined
        : [
            {
              test: /\.[jt]sx$/,
              plugins: [syntaxJSX],
            },
          ],
    }
  },
)
