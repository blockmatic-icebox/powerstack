import { ethers, providers } from 'ethers'
import type { StoreSlice } from '../index'
import _ from 'lodash'
import { getInfuraChainData } from '../services/infura'
import Decimal from 'decimal.js'
import { app_args } from '~/app-config/app-arguments'
import { AuthMethod } from '../types/app-engine'
import { exec_env } from '../library/exec-env'
import { web3auth_chain_config } from '../static/web3auth-chains'

export type EtherState = {
  ethereum_static_provider: providers.Web3Provider | providers.StaticJsonRpcProvider | null
}

export type EtherActions = {
  initEthers: () => void
  loginWithMetamask: () => Promise<void>
  signMessageWithEhters: (message: string) => Promise<string>
  mintOnEvm: () => Promise<void>
}

export type EtherStore = EtherState & EtherActions

const defaultEtherState: EtherState = {
  ethereum_static_provider: null,
}

export const createEtherSlice: StoreSlice<EtherStore> = (set, get) => ({
  ...defaultEtherState,

  initEthers: () => {
    console.log('🇪🇹 initializing ether-state ...')
    // TODO: improve multichain support
    const ethereum_chain_data = getInfuraChainData(web3auth_chain_config.rinkeby.networkId)

    const ethereum_static_provider = new ethers.providers.StaticJsonRpcProvider(
      ethereum_chain_data.rpc_url,
      {
        chainId: ethereum_chain_data.chain_id,
        name: ethereum_chain_data.name,
      },
    )
    set({
      ethereum_static_provider,
    })
    console.log('🇪🇹 ether state initialized')
  },
  loginWithMetamask: async () => {
    console.log('🇪🇹 login with metamask')
    if (!exec_env.ethereum) throw new Error('Please install the metamask extension to login')
    await exec_env.ethereum.request({ method: 'eth_requestAccounts' })
    const provider = new ethers.providers.Web3Provider(exec_env.ethereum)
    const infura_network_id = parseInt(exec_env.ethereum.networkVersion)
    const network = getInfuraChainData(infura_network_id).name
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    const wei_balance = await provider.getBalance(address)
    const balance = ethers.utils.formatEther(wei_balance)
    // const chain_id = exec_env.ethereum.chainId // TODO: is it neccessary?
    const message = app_args.messages.session_message
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
    console.log('🇪🇹 mint on Evm using Pinata')
  },
})
