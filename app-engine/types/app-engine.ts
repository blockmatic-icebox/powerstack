import type { Decimal } from 'decimal.js'

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
