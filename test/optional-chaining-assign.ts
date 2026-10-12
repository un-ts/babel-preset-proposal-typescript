const assignRetries = (maybeOptions?: { retries?: number }) => {
  // eslint-disable-next-line prettier/prettier
  maybeOptions?.retries = 5;
  return maybeOptions
}

export default assignRetries
