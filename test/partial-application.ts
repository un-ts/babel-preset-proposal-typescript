function add(x, y) {
  return x + y
}

export default () => {
  const addOne = add(1, ?)
  const addTen = add(?, 10)
  return [addOne(2), addTen(2)]
}
