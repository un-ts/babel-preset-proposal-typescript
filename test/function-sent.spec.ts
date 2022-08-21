import _ from './function-sent.js'
import { execute } from './helpers.js'

const proposal = 'function-sent'

test(proposal, () => {
  const args = [0.3, 0.4, 0.5]
  const expectResult = 2.2
  expect(execute(proposal, ...args)).not.toEqual(expectResult)
  expect(_(...args)).toBe(expectResult)
})
