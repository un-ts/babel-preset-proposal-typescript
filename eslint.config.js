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
    // the Babel config of this repo is for Babel 8, while the ESLint Babel
    // parser is still on Babel 7
    files: ['**/*.{cjs,js,jsx,mjs}'],
    languageOptions: {
      parserOptions: {
        babelOptions: {
          configFile: false,
        },
      },
    },
  },
  {
    files: ['test/**/*.{cjs,cts,js,ts}'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/require-await': 'off',
      'jest/valid-title': 'off',
      'no-magic-numbers': 'off',
      'sonarjs/code-eval': 'off',
      'sonarjs/os-command': 'off',
      'sonarjs/todo-tag': 'off',
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
  {
    files: [
      'test/duplicate-named-capturing-groups-regex.ts',
      'test/regexp-modifiers.ts',
    ],
    rules: {
      'regexp/no-invalid-regexp': 'off',
      'regexp/no-unused-capturing-group': 'off',
      'regexp/no-useless-non-capturing-group': 'off',
      'regexp/strict': 'off',
      'unicorn/better-regex': 'off',
    },
  },
]
