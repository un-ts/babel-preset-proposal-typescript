export default Promise.all([
  async do {
    const result = await Promise.resolve(1)
    result * 2
  },
  async do {
    const result = await Promise.resolve(2)
    result * 3
  },
])
