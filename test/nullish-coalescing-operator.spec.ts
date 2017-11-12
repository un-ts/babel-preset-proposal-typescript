import { babelExecute, tsExecute } from './helpers'

const proposal = 'nullish-coalescing-operator'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal)).toEqual(['some other default', 'some other default', '', 0, false])
})
