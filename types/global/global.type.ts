import { Web3AuthCore } from '@web3auth/core'

declare global {
  interface Window {
    web3auth: Web3AuthCore
    ethereum: any
    VConsole?: any
    prisma: any
    phantom?: any
    dataLayer?: object[] // google analytics
  }
}

export {}
