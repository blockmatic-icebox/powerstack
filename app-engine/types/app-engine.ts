import type { Decimal } from 'decimal.js'

export type AuthMethod =
  | 'web2_twitter'
  | 'web3_solana'
  | 'web3_anchor'
  | 'web3_metamask'
  | 'web3_auth'

export type Address = string

export interface AppUserAddress {
  address: string
  network: string
  ticker: string
  balance: Decimal
  unit_balance: string // Eg balane in wei
}
export interface AppUser {
  username?: string
  jwt: string
  auth_method: AuthMethod
  user_addresses: AppUserAddress[]
}

export interface AppNetwork {
  chain_id: string
  chain_name: string
  rpc_url: string
}
