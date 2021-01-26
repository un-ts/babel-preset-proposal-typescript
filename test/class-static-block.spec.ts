import { C } from './class-static-block'
import { execute } from './helpers'

const proposal = 'class-static-block'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(C.y).toEqual('bad')
})
