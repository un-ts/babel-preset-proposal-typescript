import { babelExecute, tsExecute } from './helpers'

const proposal = 'pipeline-operator'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal, 'hello', 25)).toEqual(['Hello, hello!', 57])
})
