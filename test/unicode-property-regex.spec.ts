import { babelExecute, tsExecute } from './helpers'

const proposal = 'unicode-property-regex'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal, 'π')).toBe(true)
  expect(babelExecute(proposal)).toBe(false)
})
