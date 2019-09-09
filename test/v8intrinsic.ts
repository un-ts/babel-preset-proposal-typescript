/* istanbul ignore next */
function fn() {
  // do nothing
}
/* istanbul ignore next */
// eslint-disable-next-line babel/new-cap
process.stdout.write(String(%GetOptimizationStatus(fn)))
