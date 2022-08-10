import type { StoreSlice } from '../index'
import Decimal from 'decimal.js'
import _ from 'lodash'

export type SolanaState = {
  solana_current_provider: null
}

export type SolanaActions = {
  initSolana: () => void
  loginWithPhantom: () => Promise<void>
  mintOnSolana: () => Promise<void>
}

export type SolanaStore = SolanaState & SolanaActions

const defaultSolanaState: SolanaState = {
  solana_current_provider: null,
}

export const createSolanaSlice: StoreSlice<SolanaStore> = (set, get) => ({
  ...defaultSolanaState,

  // this function is called from session-state.ts when a new session is created
  initSolana: () => {
    console.log('🌞 initializing solana slice ...')
    // TODO:
    console.log('🌞 solana slice initialized')
  },
  loginWithPhantom: async () => {
    console.log('🌞 login with phantom')
    const phantom_installed = _.get(window, 'phantom.solana.isPhantom')
    if (!phantom_installed) throw new Error('phantom is not installed')

    try {
      const solana_provider = window.phantom.solana
      solana_provider.on('connect', () => console.log('🌞 phantom wallet connected!'))
      const resp = await solana_provider.connect()
      const address = resp.publicKey.toString()

      const message = `Login to PowerStack App`
      const encoded_message = new TextEncoder().encode(message)
      const signed_message = await solana_provider.signMessage(encoded_message, 'utf8')

      await get().createSession(
        {
          network: 'solana',
          address,
        },
        signed_message,
      )
      get().setUser({
        username: 'solano',
        user_addresses: [
          {
            network: 'solana',
            address,
          },
        ],
        user_balances: [
          {
            network: 'solana',
            ticker: 'solana',
            balance: new Decimal(0),
            unit_balance: '0',
          },
        ],
      })
    } catch (err) {
      console.error(err)
    }
  },
  mintOnSolana: async () => {
    console.log('🌞 mint on solana using bundlr')
  },
})
