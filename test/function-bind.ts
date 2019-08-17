const box = {
  weight: 2,
  getWeight() {
    return this.weight
  },
}

const bigBox = { weight: 10 }

// Can be chained:
function add(val: number) {
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
