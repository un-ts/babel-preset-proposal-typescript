import _ from './optional-chaining-assign.js'

const proposal = 'optional-chaining-assign'

test(proposal, () => {
  expect(_()).toBeUndefined()
  const maybeOptions = { retries: 6 }
  const result = _(maybeOptions)!
  expect(_(maybeOptions)).toBe(result)
  expect(result.retries).toBe(5)
})
