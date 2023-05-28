declare global {
  interface Window {
    backpack: any
    VConsole?: any
    phantom?: any
    dataLayer?: object[] // google analytics
  }
}

export {}
