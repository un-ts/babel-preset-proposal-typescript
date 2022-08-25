import Test from './declare-field.js'

const testCase = 'declare-field'

test(testCase, async () => {
  expect(new Test(2).a).toEqual(1)
})
