import { IS_RECORD_TUPLE_SUPPORTED } from '../src/utils'

import { execute } from './helpers'

const proposal = 'record-and-tuple'

test(proposal, async () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  if (IS_RECORD_TUPLE_SUPPORTED) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect((await import('./record-and-tuple')).default).toEqual([
      'Record & Tuple proposal',
      'tc39',
    ])
  }
})
