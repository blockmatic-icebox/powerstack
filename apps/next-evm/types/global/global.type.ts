declare global {
  interface Window {
    VConsole?: any // mobile debugging
    dataLayer?: object[] // google analytics
  }
}

export {}
