import type { Decimal } from 'decimal.js'

export type AuthMethod = 'web2_twitter' | 'web3_solana' | 'web3_evm' | 'web3_anchor'

export type Address = string

export interface AppUserAddress {
  network: string
  address: string
}

export interface AppUserBalance {
  network: string
  ticker: string
  balance: Decimal
  unit_balance: string // Eg balane in wei
}
export interface AppUser {
  username?: string
  jwt: {}
  user_addresses: AppUserAddress[]
  user_balances: AppUserBalance[]
}
