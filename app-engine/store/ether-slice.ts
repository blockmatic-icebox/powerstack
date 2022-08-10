import { ethers, providers } from 'ethers'
import type { StoreSlice } from '../index'
import _ from 'lodash'

export type EtherState = {
  ether_current_provider: providers.Web3Provider | providers.StaticJsonRpcProvider | null
}

export type EtherActions = {
  initEthers: () => void
  loginWithMetamask: () => void
  signMessageWithEhters: (message: string) => Promise<string>
}

export type EtherStore = EtherState & EtherActions

const defaultEtherState: EtherState = {
  ether_current_provider: null,
}

export const createEtherSlice: StoreSlice<EtherStore> = (set, get) => ({
  ...defaultEtherState,

  // this function is called from session-state.ts when a new session is created
  initEthers: () => {
    console.log('⚙️ initializing ether slice ...')
    // TODO:
    console.log('⚙️ ether slice initialized')
  },
  loginWithMetamask: () => {
    console.log('⚙️ login with metamask')
  },
  signMessageWithEhters: async (message: string) => {
    console.log('⚙️ sign message with ethers', message)
    const { web3auth } = get()
    if (!web3auth) throw new Error('web3auth is not initialized')
    const web3auth_provider = await web3auth.connect()
    if (!web3auth_provider) throw new Error('web3auth_provider is not initialized')
    const ethers_provider = new ethers.providers.Web3Provider(web3auth_provider)
    const signer = ethers_provider.getSigner()
    const signedMessage = await signer.signMessage(message)
    return signedMessage
  },
})
