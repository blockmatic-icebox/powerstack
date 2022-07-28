import type { StoreSetState, StoreSlice } from '.'
import type { CustomChainConfig } from '@web3auth/base'
import type { Web3Auth } from '@web3auth/web3auth'
import { ADAPTER_EVENTS } from '@web3auth/base'

export const web3auth_chain_config = {
  mainnet: {
    displayName: 'Ethereum Mainnet',
    chainNamespace: 'eip155',
    chainId: '0x1',
    rpcTarget: `https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c`,
    blockExplorer: 'https://etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  } as CustomChainConfig,
  rinkeby: {
    displayName: 'Rinkeby Testnet',
    chainNamespace: 'eip155',
    chainId: '0x4',
    rpcTarget: `https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c`,
    blockExplorer: 'https://etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  } as CustomChainConfig,
  solana: {
    chainNamespace: 'solana',
    rpcTarget: 'https://api.mainnet-beta.solana.com',
    blockExplorer: 'https://explorer.solana.com/',
    chainId: '0x1',
    displayName: 'Solana Mainnet',
    ticker: 'SOL',
    tickerName: 'Solana',
  } as CustomChainConfig,
  polygon: {
    chainNamespace: 'eip155',
    rpcTarget: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com/',
    chainId: '0x89',
    displayName: 'Polygon Mainnet',
    ticker: 'matic',
    tickerName: 'Matic',
  } as CustomChainConfig,
} as const

// export interface Web3AuthWalletProvider {
//   getAccounts: () => Promise<any>
//   getBalance: () => Promise<any>
//   signAndSendTransaction: () => Promise<void>
//   signTransaction: () => Promise<void>
//   signMessage: () => Promise<void>
// }

export type Web3AuthState = {
  web3auth: any | null
  // web3auth_provider: Web3AuthWalletProvider | null
  web3auth_loading: boolean
  web3auth_chain: string
  web3auth_user: unknown
}

export type Web3AuthActions = {
  web3authInit: () => void
  web3authLogin: () => Promise<void>
  web3authLogout: () => Promise<void>
  web3authGetUserInfo: () => Promise<any>
  web3authGetAccounts: () => Promise<any>
  web3authGetBalance: () => Promise<any>
  web3authSignMessage: () => Promise<any>
  web3authSignTransaction: () => Promise<void>
  web3authSignAndSendTransaction: () => Promise<void>
}

export type Web3AuthStore = Web3AuthState & Web3AuthActions

const defaultWeb3AuthState: Web3AuthState = {
  web3auth: null,
  // web3auth_provider: null,
  web3auth_loading: false,
  web3auth_chain: '',
  web3auth_user: {},
}

const subscribeToWeb3AuthEvents = (web3auth: Web3Auth, set: StoreSetState) => {
  web3auth.on(ADAPTER_EVENTS.CONNECTED, (web3auth_user: {}) => {
    console.log('you are successfully logged in', web3auth_user)
    set({ web3auth_user })
  })

  web3auth.on(ADAPTER_EVENTS.CONNECTING, () => console.log('connecting ...'))

  web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
    console.log('disconnected')
    set({ web3auth_user: null })
  })

  web3auth.on(ADAPTER_EVENTS.ERRORED, (error: unknown) =>
    console.error('some error or user has cancelled login request', error),
  )
}

export const createWeb3AuthSlice: StoreSlice<Web3AuthStore> = (set, get) => ({
  ...defaultWeb3AuthState,

  web3authInit: async () => {
    console.log('🔑 initializing web3auth ...')
    const { Web3Auth } = await import('@web3auth/web3auth')

    // instantiate and initialize web3auth client
    const web3auth = new Web3Auth({
      clientId:
        'BGg06C3u5cKtQ8pY3sANCcwZe30Ch8qz7xbbd-1RAQsUBPeZThjuG6EH6qeTaBB-VKdii-oeOvp2uemQcHBNxKY',
      chainConfig: { chainNamespace: 'eip155', chainId: '0x3' },
      authMode: 'DAPP',
      uiConfig: {
        theme: 'dark',
        loginMethodsOrder: ['google', 'twitter', 'apple', 'email_passwordless'],
      },
    })

    // subscribe to ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
    subscribeToWeb3AuthEvents(web3auth, set)
    web3auth.initModal()

    set({ web3auth: web3auth })

    console.log('🔑 web3auth initialized!')
  },
  web3authLogin: async () => get().web3auth.connect(),
  web3authLogout: async () => {},
  web3authGetUserInfo: async () => {},
  web3authGetAccounts: async () => {},
  web3authGetBalance: async () => {},
  web3authSignMessage: async () => {},
  web3authSignTransaction: async () => {},
  web3authSignAndSendTransaction: async () => {},
})
