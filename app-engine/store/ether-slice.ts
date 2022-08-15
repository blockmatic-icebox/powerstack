import { ethers, providers } from 'ethers'
import type { StoreSlice } from '../index'
import _ from 'lodash'
import { ethereum } from '../library'
import { getInfuraChainData } from '../library/infura'
import Decimal from 'decimal.js'
import { client_args } from '~/app-config/client-config'
import { AuthMethod } from '../types/app-engine'

export type EtherState = {
  ether_current_provider: providers.Web3Provider | providers.StaticJsonRpcProvider | null
}

export type EtherActions = {
  initEthers: () => void
  loginWithMetamask: () => Promise<void>
  signMessageWithEhters: (message: string) => Promise<string>
  mintOnEvm: () => Promise<void>
}

export type EtherStore = EtherState & EtherActions

const defaultEtherState: EtherState = {
  ether_current_provider: null,
}

export const createEtherSlice: StoreSlice<EtherStore> = (set, get) => ({
  ...defaultEtherState,

  // this function is called from session-state.ts when a new session is created
  initEthers: () => {
    console.log('🇪🇹 initializing ether slice ...')
    // TODO:
    console.log('🇪🇹 ether slice initialized')
  },
  loginWithMetamask: async () => {
    console.log('🇪🇹 login with metamask')
    if (!ethereum) throw new Error('Please install the metamask extension to login')
    await ethereum.request({ method: 'eth_requestAccounts' })
    const provider = new ethers.providers.Web3Provider(ethereum)
    const infura_network_id = parseInt(ethereum.networkVersion)
    const network = getInfuraChainData(infura_network_id).name
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    const wei_balance = await provider.getBalance(address)
    const balance = ethers.utils.formatEther(wei_balance)
    // const chain_id = ethereum.chainId // TODO: is it neccessary?
    const message = client_args.messages.session_message
    const signed_message = await signer.signMessage(message)
    console.log('🇪🇹 logging in with metamask...')
    const auth_method: AuthMethod = 'web3_metamask'
    const { token, error } = await get().createSession({
      network,
      address,
      message,
      signed_message,
      auth_method,
    })
    console.log('metamask response', { token, error })
    if (error || !token) return // TODO: fix me handle login error
    get().setUser({
      username: 'anon', // TODO: fix me,
      jwt: token,
      auth_method,
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
  },
  signMessageWithEhters: async (message: string) => {
    console.log('🇪🇹 sign message with ethers', message)
    const { web3auth } = get()
    if (!web3auth) throw new Error('web3auth is not initialized')
    const web3auth_provider = await web3auth.connect()
    if (!web3auth_provider) throw new Error('web3auth_provider is not initialized')
    const ethers_provider = new ethers.providers.Web3Provider(web3auth_provider)
    const signer = ethers_provider.getSigner()
    console.log('🇪🇹 signing message with ethers ...')
    const signed_message = await signer.signMessage(message)
    return signed_message
  },
  mintOnEvm: async () => {
    console.log('🌞 mint on Evm using Pinata')
  },
})
