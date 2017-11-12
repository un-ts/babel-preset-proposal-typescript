const response = {
  settings: {
    nullValue: null,
    height: 400,
    animationDuration: 0,
    headerText: '',
    showSplashScreen: false
  }
}

export default () => {
  const undefinedValue = response.settings?.undefinedValue ?? 'some other default'
  const nullValue = response.settings?.nullValue ?? 'some other default'
  const headerText = response.settings?.headerText ?? 'Hello, world!'
  const animationDuration = response.settings?.animationDuration ?? 300
  const showSplashScreen = response.settings?.showSplashScreen ?? true
  
  return [undefinedValue, nullValue, headerText, animationDuration, showSplashScreen]
}
