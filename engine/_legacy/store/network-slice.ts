import type { StoreSlice } from './index'

export type NetworkState = {
  current_evm_network: null
  current_sol_network: null
  current_antilope_network: null
  supported_network: []
}

export type UserActions = {}

export type NetworkSlice = NetworkState & UserActions

const defaultNetworkState: NetworkState = {
  current_evm_network: null,
  current_sol_network: null,
  current_antilope_network: null,
  supported_network: [],
}

export const createNetworkSlice: StoreSlice<NetworkSlice> = (set, get) => ({
  ...defaultNetworkState,
})
