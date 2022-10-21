import { ethers, providers } from 'ethers'
import type { StoreSlice } from './index'
import _ from 'lodash'
import Decimal from 'decimal.js'
import { app_args } from '~/engine/_legacy/config/app.config'
import { AppLoginMethod, AppUser } from '../_legacy/types/engine.type'
import { exec_env } from '../_legacy/library/exec-env.lib'
import { app_logger } from '../_legacy/library/logger.lib'
import { app_networks } from '../static/app-networks'

export type EtherState = {
  ethereum_static_provider: providers.Web3Provider | providers.StaticJsonRpcProvider | null
}

export type EtherActions = {
  initEthers: () => void
  initEtherProvider: () => void
  loginWithMetamask: () => Promise<void>
  signMessageWithEthers: (message: string) => Promise<string>
  mintOnEvm: () => Promise<void>
}

export type EtherStore = EtherState & EtherActions

const defaultEtherState: EtherState = {
  ethereum_static_provider: null,
}

export const createEtherSlice: StoreSlice<EtherStore> = (set, get) => ({
  ...defaultEtherState,

  initEthers: () => {
    app_logger.log('🇪🇹 initializing ether-state ...')
    const ethereum_chain_data = app_networks.rinkeby // TODO:  multichain support
    const ethereum_static_provider = new ethers.providers.StaticJsonRpcProvider(
      ethereum_chain_data.rpc_target,
      parseInt(ethereum_chain_data.chain_id),
    )
    set({ ethereum_static_provider })
    app_logger.log('🇪🇹 ether state initialized')
  },
  initEtherProvider: () => {
    if (!get().ethereum_static_provider) get().initEthers()
  },
  loginWithMetamask: async () => {
    app_logger.log('🇪🇹 login with metamask')
    if (!exec_env.ethereum) throw new Error('Please install the metamask extension to login')
    await exec_env.ethereum.request({ method: 'eth_requestAccounts' })
    const provider = new ethers.providers.Web3Provider(exec_env.ethereum)
    const ethers_network = await provider.getNetwork()
    const network = ethers_network.name
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    const wei_balance = await provider.getBalance(address)
    const balance = ethers.utils.formatEther(wei_balance)
    const message = app_args.messages.session_message
    const signed_message = await signer.signMessage(message)
    const auth_method: AppLoginMethod = 'web3_metamask'

    await get().createSession({
      network,
      address,
      message,
      signed_message,
      auth_method,
    })
    await get().fetchUserBalances()
  },
  signMessageWithEthers: async (message: string) => {
    app_logger.log('🇪🇹 sign message with ethers', message)
    const { web3auth } = get()
    if (!web3auth) throw new Error('web3auth is not initialized')
    const web3auth_provider = await web3auth.connect()
    if (!web3auth_provider) throw new Error('web3auth_provider is not initialized')
    const ethers_provider = new ethers.providers.Web3Provider(web3auth_provider)
    const signer = ethers_provider.getSigner()
    app_logger.log('🇪🇹 signing message with ethers ...')
    const signed_message = await signer.signMessage(message)
    return signed_message
  },
  mintOnEvm: async () => {
    app_logger.log('🇪🇹 mint on Evm using Pinata')
  },
})
