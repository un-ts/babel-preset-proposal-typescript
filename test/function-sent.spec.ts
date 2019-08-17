import _ from './function-sent'

import { execute } from './helpers'

const proposal = 'function-sent'

test(proposal, () => {
  const args = [0.3, 0.4, 0.5]
  const expectResult = 2.2
  expect(execute(proposal, ...args)).not.toEqual(expectResult)
  expect(_(...args)).toBe(expectResult)
})
