const box = {
  weight: 2,
  getWeight(): number {
    return this.weight
  },
}

const bigBox = { weight: 10 }

// Can be chained:
function add(this: number, val: number) {
  // eslint-disable-next-line @babel/no-invalid-this
  return this + val
}

export default () => {
  const result = []

  result.push(box.getWeight())

  const { getWeight } = box
  result.push(bigBox::getWeight())

  result.push(bigBox::getWeight()::add(5))

  return result
}
