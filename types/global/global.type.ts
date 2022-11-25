declare global {
  interface Window {
    ethereum: any
    VConsole?: any
    prisma: any
    phantom?: any
    dataLayer?: object[] // google analytics
  }
}

export {}
