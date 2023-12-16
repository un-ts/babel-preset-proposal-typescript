export default (maybeOptions?: { retries?: number }) => {
  // eslint-disable-next-line prettier/prettier
  maybeOptions?.retries = 5;
  return maybeOptions
}
