import { ConfigAPI } from '@babel/core'
import { declare } from '@babel/helper-plugin-utils'
import proposalClassProperties from '@babel/plugin-proposal-class-properties'
import proposalClassStaticBlock from '@babel/plugin-proposal-class-static-block'
import proposalDoExpressions from '@babel/plugin-proposal-do-expressions'
import proposalFunctionBind from '@babel/plugin-proposal-function-bind'
import proposalFunctionSent from '@babel/plugin-proposal-function-sent'
import proposalJsonStrings from '@babel/plugin-proposal-json-strings'
import proposalPartialApplication from '@babel/plugin-proposal-partial-application'
import proposalPipelineOperator from '@babel/plugin-proposal-pipeline-operator'
import proposalPrivateMethods from '@babel/plugin-proposal-private-methods'
import proposalPrivatePropertyInObject from '@babel/plugin-proposal-private-property-in-object'
import proposalThrowExpression from '@babel/plugin-proposal-throw-expressions'
import syntaxDecorators from '@babel/plugin-syntax-decorators'
import syntaxDynamicImport from '@babel/plugin-syntax-dynamic-import'
import syntaxTypeScript from '@babel/plugin-syntax-typescript'

import syntaxV8intrinsic from './v8intrinsic'

export interface ProposalTypeScriptOptions {
  classLoose?: boolean
  decoratorsBeforeExport?: boolean
  decoratorsLegacy?: boolean
  isTSX?: boolean
  pipelineOperator?: 'minimal'
}

export default declare(
  (
    api: ConfigAPI,
    {
      classLoose = true,
      decoratorsBeforeExport,
      decoratorsLegacy = true,
      isTSX,
      pipelineOperator = 'minimal',
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
        syntaxDynamicImport,
        [
          syntaxTypeScript,
          {
            isTSX,
          },
        ],
        syntaxV8intrinsic,
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
          proposalPrivateMethods,
          {
            loose: classLoose,
          },
        ],
        [
          proposalPrivatePropertyInObject,
          {
            loose: classLoose,
          },
        ],
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
  },
)
