const response = {
  settings: {
    nullValue: null,
    height: 400,
    animationDuration: 0,
    headerText: '',
    showSplashScreen: false,
  },
}

export default () => {
  const undefinedValue =
    response.settings?.undefinedValue ?? 'some other default'
  const nullValue = response.settings?.nullValue ?? 'some other default'
  // istanbul ignore next
  const headerText = response.settings?.headerText ?? 'Hello, world!'
  // istanbul ignore next
  const animationDuration = response.settings?.animationDuration ?? 300
  // istanbul ignore next
  const showSplashScreen = response.settings?.showSplashScreen ?? true

  return [
    undefinedValue,
    nullValue,
    headerText,
    animationDuration,
    showSplashScreen,
  ]
}
