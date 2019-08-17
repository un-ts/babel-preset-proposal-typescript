import _ from './nullish-coalescing-operator'
import { execute } from './helpers'

const proposal = 'nullish-coalescing-operator'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toEqual([
    'some other default',
    'some other default',
    '',
    0,
    false,
  ])
})
