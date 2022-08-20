import type { StoreSlice } from '../index'
import type { Web3Auth } from '@web3auth/web3auth'
import { ADAPTER_EVENTS, CHAIN_NAMESPACES, CustomChainConfig, SafeEventEmitterProvider } from '@web3auth/base'
import { ethers } from 'ethers'
import Decimal from 'decimal.js'
import { app_args } from '~/app-config/app-arguments'
import { AuthMethod } from '../types/app-engine'
import { app_logger } from '../library/logger'
import { ChainConfig, ChainKeyConfig, web3auth_chain_config } from '../static/web3auth-chains'

export type Web3AuthState = {
  web3auth: Web3Auth | null
  web3auth_provider: SafeEventEmitterProvider | null
  web3auth_loading: boolean
  web3auth_chain_config: ChainConfig
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

export type Web3AuthSlice = Web3AuthState & Web3AuthActions

const defaultWeb3AuthState: Web3AuthState = {
  web3auth: null,
  web3auth_loading: false,
  // We set default chain config
  web3auth_chain_config: web3auth_chain_config.rinkeby,
  web3auth_user: {},
  web3auth_provider: null,
}

export const createWeb3AuthSlice: StoreSlice<Web3AuthSlice> = (set, get) => ({
  ...defaultWeb3AuthState,

  web3authInit: async () => {
    app_logger.log('🔑 initializing web3auth ...')
    const { Web3Auth } = await import('@web3auth/web3auth')
    const client_id = app_args.services.web3auth_client_id

    // throughout chain_id env config, we set chain_config 
    Object.keys(web3auth_chain_config).forEach((config: string) => {
      if (web3auth_chain_config[config as keyof ChainKeyConfig].chainId !== app_args.services.web3auth_client_id) return

      const chain_config = web3auth_chain_config[config as keyof ChainKeyConfig]

      set({ web3auth_chain_config: chain_config })
    })

    // instantiate and initialize web3auth client
    const web3auth = new Web3Auth({
      clientId: client_id,
      chainConfig: get().web3auth_chain_config as ChainConfig,
      authMode: 'DAPP',
      uiConfig: {
        theme: 'dark',
        loginMethodsOrder: ['google', 'twitter', 'apple', 'email_passwordless'],
      },
    })

    // subscribe to ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
    web3auth.on(ADAPTER_EVENTS.CONNECTED, async (web3auth_user: {}) => {
      app_logger.log('you are successfully logged in', web3auth_user)
      const web3auth_provider = await web3auth.connect()

      if (!web3auth_provider) throw new Error('web3auth_provider is not initialized')
     
      set({ web3auth_provider, web3auth })

      const ethers_provider = new ethers.providers.Web3Provider(web3auth_provider)
      const ethers_network = await ethers_provider.getNetwork()
      const user_info = await web3auth.getUserInfo()
      const signer = ethers_provider.getSigner()
      const address = await signer.getAddress()
      const wei_balance = await ethers_provider.getBalance(address)
      const balance = ethers.utils.formatEther(wei_balance)
      const auth_method: AuthMethod = 'web3_auth'

      // NOTE: user_info.idToken is a JWT token with => wallet: { pub_key, type, curve }[] FYI... save it for user session?
      app_logger.log({ address, balance, user_info })

      const message = app_args.messages.session_message
      const signed_message = await get().signMessageWithEthers(message)

      await get().createSession({
        message,
        network: ethers_network.name,
        address,
        signed_message,
        auth_method,
      })

      get().setUser({
        username: user_info.name,
        jwt: get().token,
        auth_method,
        user_addresses: [
          {
            network: ethers_network.name,
            address,
            ticker: get().web3auth_chain_config.ticker as string,
            balance: new Decimal(balance),
            unit_balance: wei_balance.toString(),
          },
        ],
      })
      set({ web3auth_user })
    })

    web3auth.on(ADAPTER_EVENTS.CONNECTING, () => app_logger.log('connecting ...'))

    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      app_logger.log('disconnected')
      set({ web3auth_user: null })
    })

    web3auth.on(ADAPTER_EVENTS.ERRORED, (error: unknown) =>
      console.error('some error or user has cancelled login request', error),
    )
    await web3auth.initModal()
    set({ web3auth: web3auth })
    app_logger.log(`🔑 web3auth initialized with client_id ${client_id}`)
  },
  web3authLogin: async () => {
    app_logger.log('🔑 login with web3auth')
    const { web3auth } = get()
    if (!web3auth) throw new Error('Web3Auth is not initialized')
    await web3auth.connect()
    app_logger.log('🔑 user logged in')
  },
  web3authLogout: async () => {
    await get().web3auth?.logout()
  },
  web3authGetUserInfo: async () => {},
  web3authGetAccounts: async () => {},
  web3authGetBalance: async () => {},
  web3authSignMessage: async () => {},
  web3authSignTransaction: async () => {},
  web3authSignAndSendTransaction: async () => {},
})
