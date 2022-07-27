import { StoreSlice } from '.'
import _ from 'lodash'

export type EosioStoreSlice = {
  eosio_current_provider: null
}

export type EosioActions = {
  initEosio: () => void
}

export type EosioStore = EosioStoreSlice & EosioActions

const defaultEosioState: EosioStoreSlice = {
  eosio_current_provider: null,
}

export const createEosioSlice: StoreSlice<EosioStore> = (set, get) => ({
  ...defaultEosioState,

  // this function is called from session-state.ts when a new session is created
  initEosio: () => {
    console.log('⚙️ initializing eosio slice ...')
    // TODO:
    console.log('⚙️ eosio slice initialized')
  },
})
