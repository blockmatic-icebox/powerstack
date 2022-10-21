import type { StoreSlice } from './index'
import Decimal from 'decimal.js'
import _ from 'lodash'
import { app_args } from '~/engine/_legacy/config/app.config'
import { AppLoginMethod, AppUser } from '../_legacy/types/engine.type'
import bs58 from 'bs58'
import { Connection } from '@solana/web3.js'
import { getPhantomProvider } from '../_legacy/library/solana.lib'
import { app_logger } from '../_legacy/library/logger.lib'
import { app_networks } from '../static/app-networks'

export type SolanaState = {
  solana_current_provider: null
  solana_static_provider: Connection | null
}

export type SolanaActions = {
  initSolana: () => void
  initSolanaProvider: () => void
  loginWithPhantom: () => Promise<void>
  mintOnSolana: () => Promise<void>
}

export type SolanaStore = SolanaState & SolanaActions

const defaultSolanaState: SolanaState = {
  solana_current_provider: null,
  solana_static_provider: null,
}

export const createSolanaSlice: StoreSlice<SolanaStore> = (set, get) => ({
  ...defaultSolanaState,

  initSolana: () => {
    app_logger.log('🌞 initializing solana slice ...')
    // TODO: improve multichain support
    const solana_static_provider = new Connection(app_networks.solana.rpc_target)
    set({ solana_static_provider })
    app_logger.log('🌞 solana slice initialized')
  },
  initSolanaProvider: () => {
    if (!get().solana_static_provider) get().initSolana()
  },
  loginWithPhantom: async () => {
    app_logger.log('🌞 login with phantom')
    const solana_provider = getPhantomProvider()
    app_logger.log({ solana_provider })
    // TODO: WIP handle error message
    if (!solana_provider) throw new Error('Phantom is not installed')
    try {
      solana_provider.on('connect', () => app_logger.log('🌞 phantom wallet connected!'))
      const resp = await solana_provider.connect()
      app_logger.log({ solana_provider })
      set({ solana_current_provider: solana_provider })
      const address = resp.publicKey.toString()
      const message = app_args.messages.session_message
      const encoded_message = new TextEncoder().encode(app_args.messages.session_message)
      const { signature } = await solana_provider.signMessage(encoded_message, 'utf8')
      const signed_message = bs58.encode(signature)
      const auth_method: AppLoginMethod = 'web3_solana'
      const network = 'solana'

      await get().createSession({
        network,
        message,
        signed_message,
        auth_method,
        address,
      })
      await get().fetchUserBalances()
    } catch (err) {
      console.error(err)
    }
  },
  mintOnSolana: async () => {
    app_logger.log('🌞 mint on solana using bundlr')
  },
})
