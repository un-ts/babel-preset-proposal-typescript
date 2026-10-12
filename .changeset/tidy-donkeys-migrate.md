---
"babel-preset-proposal-typescript": major
---

feat!: upgrade to Babel 8 and TypeScript 6/7

- require `@babel/core` v8 as the peer dependency
- support Node.js `^20.19.0 || ^22.18.0 || >=24.11.0`
- remove `record-and-tuple` support, the proposal has been withdrawn and the syntax support has been removed in Babel 8
- add the `discard-binding` and `export-default-from` proposals
- remove the `decoratorsBeforeExport` option, `decoratorsLegacy` now maps to `version: 'legacy' | '2023-11'`
- `pipelineOperator` now accepts `hack` or `fsharp`, and defaults to `fsharp` (`hack` cannot be combined with `v8intrinsic` since Babel 8)
- add the `partialApplicationVersion` option, which is required by Babel 8
