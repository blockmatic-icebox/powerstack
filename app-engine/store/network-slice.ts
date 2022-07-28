import type { StoreSlice } from '.'

export type NetworkState = {
  current_evm_network: null
  current_sol_network: null
  current_eosio_network: null
  supported_network: []
}

export type UserActions = {}

export type User = NetworkState & UserActions

const defaultNetworkSlice: NetworkState = {
  current_evm_network: null,
  current_sol_network: null,
  current_eosio_network: null,
  supported_network: [],
}

export const createUserSlice: StoreSlice<User> = (set, get) => ({
  ...defaultNetworkSlice,
})
