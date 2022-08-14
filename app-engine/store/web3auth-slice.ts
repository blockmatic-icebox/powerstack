import type { StoreSlice } from '../index'
import type { Web3Auth } from '@web3auth/web3auth'
import { ADAPTER_EVENTS, CHAIN_NAMESPACES } from '@web3auth/base'
import { ethers } from 'ethers'
import Decimal from 'decimal.js'
import { client_args } from '~/app-config/client-config'

export type Web3AuthState = {
  web3auth: Web3Auth | null
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

export type Web3AuthSlice = Web3AuthState & Web3AuthActions

const defaultWeb3AuthState: Web3AuthState = {
  web3auth: null,
  web3auth_loading: false,
  web3auth_chain: '',
  web3auth_user: {},
}

export const createWeb3AuthSlice: StoreSlice<Web3AuthSlice> = (set, get) => ({
  ...defaultWeb3AuthState,

  web3authInit: async () => {
    console.log('🔑 initializing web3auth ...')
    const { Web3Auth } = await import('@web3auth/web3auth')
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
      console.log('you are successfully logged in', web3auth_user)
      const web3auth_provider = await web3auth.connect()
      if (!web3auth_provider) throw new Error('web3auth_provider is not initialized')
      const ethers_provider = new ethers.providers.Web3Provider(web3auth_provider)
      const user_info = await web3auth.getUserInfo()
      const signer = ethers_provider.getSigner()
      const address = await signer.getAddress()
      const wei_balance = await ethers_provider.getBalance(address)
      const balance = ethers.utils.formatEther(wei_balance)

      console.log({ address, balance, user_info })
      const signed_message = await get().signMessageWithEhters(client_args.messages.session_message)
      await get().createSession(
        {
          network: 'rinkeby',
          address,
        },
        signed_message,
      )
      get().setUser({
        username: user_info.name,
        jwt: {},
        user_addresses: [
          {
            network: 'rinkeby',
            address,
          },
        ],
        user_balances: [
          {
            network: 'rinkeby',
            ticker: 'rinkETH',
            balance: new Decimal(balance),
            unit_balance: wei_balance.toString(),
          },
        ],
      })
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
    await web3auth.initModal()
    set({ web3auth: web3auth })
    console.log(`🔑 web3auth initialized with client_id ${client_id}`)
  },
  web3authLogin: async () => {
    console.log('🔑 login with web3auth')
    const { web3auth } = get()
    if (!web3auth) throw new Error('Web3Auth is not initialized')
    await web3auth.connect()
    console.log('🔑 user logged in')
  },
  web3authLogout: async () => {},
  web3authGetUserInfo: async () => {},
  web3authGetAccounts: async () => {},
  web3authGetBalance: async () => {},
  web3authSignMessage: async () => {},
  web3authSignTransaction: async () => {},
  web3authSignAndSendTransaction: async () => {},
})
