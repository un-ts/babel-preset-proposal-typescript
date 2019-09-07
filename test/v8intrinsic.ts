function fn() {
  // do nothing
}

// eslint-disable-next-line babel/new-cap
process.stdout.write(String(%GetOptimizationStatus(fn)))
