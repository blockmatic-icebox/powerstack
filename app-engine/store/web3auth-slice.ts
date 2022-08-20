import type { StoreSlice } from '../index'
import type { Web3Auth } from '@web3auth/web3auth'
import { ADAPTER_EVENTS, CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { ethers } from 'ethers'
import Decimal from 'decimal.js'
import { app_args } from '~/app-config/app-arguments'
import { AuthMethod } from '../types/app-engine'
import { app_logger } from '../library/logger'

export type Web3AuthState = {
  web3auth: Web3Auth | null
  web3auth_provider: SafeEventEmitterProvider | null
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

export type Web3AuthSlice = Web3AuthState & Web3AuthActions

const defaultWeb3AuthState: Web3AuthState = {
  web3auth: null,
  web3auth_loading: false,
  web3auth_chain: '',
  web3auth_user: {},
  web3auth_provider: null,
}

export const createWeb3AuthSlice: StoreSlice<Web3AuthSlice> = (set, get) => ({
  ...defaultWeb3AuthState,

  web3authInit: async () => {
    app_logger.log('🔑 initializing web3auth ...')
    const { Web3Auth } = await import('@web3auth/web3auth')
    // TODO: fix me @RUBENABIX
    const client_id =
      'BCeTdMp4F7vxJyP9pi93aCl2bclncDAUs76Awo74cFzN43pisN_Rmksd4hvQq_85rp9oRQSHXLxtvb2c-mxEyf8' //get().app_engine_config.services.web3auth_client_id,
    // instantiate and initialize web3auth client
    const web3auth = new Web3Auth({
      clientId: client_id,
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: '0x4',
        rpcTarget: 'https://rinkeby.infura.io/v3/d1113d056f834c6192955c2b26a14cc1',
      },
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
      set({ web3auth_provider })
      const ethers_provider = new ethers.providers.Web3Provider(web3auth_provider)
      const user_info = await web3auth.getUserInfo()
      const signer = ethers_provider.getSigner()
      const address = await signer.getAddress()
      const wei_balance = await ethers_provider.getBalance(address)
      const balance = ethers.utils.formatEther(wei_balance)
      const auth_method: AuthMethod = 'web3_auth'
      app_logger.log({ address, balance, user_info })
      const message = app_args.messages.session_message
      const signed_message = await get().signMessageWithEhters(message)

      await get().createSession({
        message,
        network: 'rinkeby', // TODO: fix me X@RUBENABIX why rinkeby?
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
            network: 'rinkeby',
            address,
            ticker: 'rinkETH',
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
