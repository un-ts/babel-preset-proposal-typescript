function* adder(total = 0) {
  let increment = 1
  let request
  do {
    switch ((request = function.sent)) {
      case undefined: {
        break
      }
      case 'done': {
        return total
      }
      default: {
        increment = request
      }
    }
    yield (total += increment)
  } while (true)
}

export default (...args: number[]) => {
  const tally = adder()
  tally.next()
  for (const arg of args) {
    tally.next(arg)
  }
  return tally.next('done').value
}
