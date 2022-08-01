import type { StoreSlice } from '../index'

export type NetworkState = {
  current_evm_network: null
  current_sol_network: null
  current_eosio_network: null
  supported_network: []
}

export type UserActions = {}

export type UserSlice = NetworkState & UserActions

const defaultNetworkState: NetworkState = {
  current_evm_network: null,
  current_sol_network: null,
  current_eosio_network: null,
  supported_network: [],
}

export const createUserSlice: StoreSlice<UserSlice> = (set, get) => ({
  ...defaultNetworkState,
})
