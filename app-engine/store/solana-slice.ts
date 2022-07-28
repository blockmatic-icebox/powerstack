import type { StoreSlice } from '../index'
import _ from 'lodash'

export type SolanaStoreSlice = {
  solana_current_provider: null
}

export type SolanaActions = {
  initSolana: () => void
}

export type SolanaStore = SolanaStoreSlice & SolanaActions

const defaultSolanaState: SolanaStoreSlice = {
  solana_current_provider: null,
}

export const createSolanaSlice: StoreSlice<SolanaStore> = (set, get) => ({
  ...defaultSolanaState,

  // this function is called from session-state.ts when a new session is created
  initSolana: () => {
    console.log('⚙️ initializing solana slice ...')
    // TODO:
    console.log('⚙️ solana slice initialized')
  },
})
