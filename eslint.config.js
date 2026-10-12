// @ts-check

import recommended from '@1stg/eslint-config'

export default [
  ...recommended,
  {
    ignores: [
      // fixtures intentionally use syntax which TypeScript does not support
      'test/async-do-expressions.ts',
      'test/discard-binding.ts',
      'test/do-expressions.ts',
      'test/export-default-from.ts',
      'test/function-bind.ts',
      'test/function-sent.ts',
      'test/import-wasm-source.ts',
      'test/partial-application.ts',
      'test/pipeline-operator.ts',
      'test/throw-expressions.ts',
      'test/v8intrinsic.cjs',
    ],
  },
  {
    files: ['test/**/*.{cjs,cts,js,ts}'],
    rules: {
      // test cases assert arbitrary literal values
      '@typescript-eslint/no-magic-numbers': 'off',
      'no-magic-numbers': 'off',
      // test titles are shared with the fixture names through variables
      'jest/valid-title': 'off',
    },
  },
  {
    files: [
      'test/duplicate-named-capturing-groups-regex.spec.ts',
      'test/duplicate-named-capturing-groups-regex.ts',
      'test/regexp-modifiers.spec.ts',
      'test/regexp-modifiers.ts',
    ],
    rules: {
      // these fixtures intentionally use RegExp syntax which is not supported yet
      'regexp/no-invalid-regexp': 'off',
      'regexp/no-unused-capturing-group': 'off',
      'regexp/no-useless-non-capturing-group': 'off',
      'regexp/strict': 'off',
      'unicorn-x/better-regex': 'off',
    },
  },
]
