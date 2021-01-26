import { Foo } from './private-property-in-object'
import { execute } from './helpers'

const proposal = 'private-property-in-object'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(new Foo().test({})).toEqual(false)
  expect(new Foo().test(new Foo())).toEqual(true)
})
