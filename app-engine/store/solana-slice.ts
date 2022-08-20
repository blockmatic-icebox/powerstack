import type { StoreSlice } from '../index'
import Decimal from 'decimal.js'
import _ from 'lodash'
import { app_args } from '~/app-config/app-arguments'
import { AuthMethod } from '../types/app-engine'
import bs58 from 'bs58'
import { Connection } from '@solana/web3.js'
import { web3auth_chain_config } from '../static/web3auth-chains'
import { getPhantomProvider } from '../library/solana'
import { app_logger } from '../library/logger'

export type SolanaState = {
  solana_current_provider: null
  solana_static_provider: Connection | null
}

export type SolanaActions = {
  initSolana: () => void
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
    const solana_static_provider = new Connection(web3auth_chain_config.solana.rpcTarget)
    set({ solana_static_provider })
    app_logger.log('🌞 solana slice initialized')
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
      const auth_method: AuthMethod = 'web3_solana'
      const network = 'solana'
      const sessionInput = {
        network,
        message,
        signed_message,
        auth_method,
        address,
      }
      app_logger.log('solana input', sessionInput)
      const { token, error } = await get().createSession(sessionInput)
      if (error || !token) return // TODO: fix me handle login error
      get().setUser({
        username: 'anon',
        jwt: token,
        auth_method,
        user_addresses: [
          {
            network: 'solana',
            address,
            ticker: 'solana',
            balance: new Decimal(0), // TODO: fix me
            unit_balance: '0', // // TODO: fix me
          },
        ],
      })
    } catch (err) {
      console.error(err)
    }
  },
  mintOnSolana: async () => {
    app_logger.log('🌞 mint on solana using bundlr')
  },
})
