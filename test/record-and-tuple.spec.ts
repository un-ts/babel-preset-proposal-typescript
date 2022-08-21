import { IS_RECORD_TUPLE_SUPPORTED } from '../src/utils.js'

import { execute } from './helpers.js'

const proposal = 'record-and-tuple'

test(proposal, async () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  if (IS_RECORD_TUPLE_SUPPORTED) {
    const module = await import('./record-and-tuple.js')
    // eslint-disable-next-line jest/no-conditional-expect
    expect(module.default).toEqual(['Record & Tuple proposal', 'tc39'])
  }
})
