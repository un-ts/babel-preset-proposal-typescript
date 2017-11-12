import { babelExecute, tsExecute } from './helpers'

const proposal = 'function-sent'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal, .3, .4, .5)).toBe(1.2)
})
