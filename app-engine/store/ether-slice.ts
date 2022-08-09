import { providers } from 'ethers'
import type { StoreSlice } from '../index'
import _ from 'lodash'

export type EtherState = {
  ether_current_provider: providers.Web3Provider | providers.StaticJsonRpcProvider | null
}

export type EtherActions = {
  initEthers: () => void
  loginWithMetamask: () => void
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
})
