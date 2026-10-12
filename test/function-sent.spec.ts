import _ from './function-sent.js'
import { execute } from './helpers.js'

const proposal = 'function-sent'

test(proposal, () => {
  const args = [0.3, 0.4, 0.5]
  const expectResult = 2.2
  // eslint-disable-next-line sonarjs/no-floating-point-equality -- the exact float sum is asserted on purpose
  expect(execute(proposal, ...args)).not.toEqual(expectResult)
  // eslint-disable-next-line sonarjs/no-floating-point-equality -- see above
  expect(_(...args)).toBe(expectResult)
})
