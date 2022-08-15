import type { StoreSlice } from '../index'
import Decimal from 'decimal.js'
import _ from 'lodash'
import { client_args } from '~/app-config/client-config'
import { AuthMethod } from '../types/app-engine'
import bs58 from 'bs58'

export type SolanaState = {
  solana_current_provider: null
}

export type SolanaActions = {
  initSolana: () => void
  loginWithPhantom: () => Promise<void>
  mintOnSolana: () => Promise<void>
}

export type SolanaStore = SolanaState & SolanaActions

const getProvider = () => {
  if ('phantom' in window) {
    const provider = window.phantom?.solana

    if (provider?.isPhantom) {
      return provider
    }
  }
  alert('Please install phantom')
  window.open('https://phantom.app/', '_blank')
}

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
    const solana_provider = getProvider()
    console.log({ solana_provider })
    // TODO: WIP complete and enable
    if (!solana_provider) throw new Error('phantom is not installed')

    try {
      solana_provider.on('connect', () => console.log('🌞 phantom wallet connected!'))
      const resp = await solana_provider.connect()
      const address = resp.publicKey.toString()
      const message = client_args.messages.session_message
      const encoded_message = new TextEncoder().encode(client_args.messages.session_message)
      const { signature, publicKey } = await solana_provider.signMessage(encoded_message, 'utf8')
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
      console.log('solana input', sessionInput)
      const { token, error } = await get().createSession(sessionInput)
      if (error || !token) return // TODO: fix me handle login error
      get().setUser({
        username: 'anon', // TODO: fix me,
        jwt: token,
        auth_method,
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
    console.log('🌞 mint on solana using bundlr')
  },
})
