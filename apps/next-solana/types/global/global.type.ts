declare global {
  interface Window {
    VConsole?: any
    dataLayer?: object[] // google analytics
  }
}

export {}
