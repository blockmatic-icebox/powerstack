import { providers } from 'ethers'
import { StoreSlice } from '.'
import _ from 'lodash'

export type EtherStoreSlice = {
  ether_current_provider: providers.Web3Provider | providers.StaticJsonRpcProvider | null
}

export type EtherActions = {
  initEthers: () => void
}

export type EtherStore = EtherStoreSlice & EtherActions

const defaultEtherState: EtherStoreSlice = {
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
})
