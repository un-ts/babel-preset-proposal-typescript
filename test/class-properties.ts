/* eslint-disable @typescript-eslint/member-ordering */
const Test = () => {
  //
}

@Test
export class Counter {
  #x = 0

  increment() {
    this.#x++
    return this
  }

  getCount() {
    return this.#x
  }
}
