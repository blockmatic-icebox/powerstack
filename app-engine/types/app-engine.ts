import type { Decimal } from 'decimal.js'
import { ChainNamespaceType } from '@web3auth/base'

export type Address = string
export type URL = string

export type AppLoginMethod =
  | 'web2_twitter'
  | 'web3_solana'
  | 'web3_anchor'
  | 'web3_metamask'
  | 'web3_auth'
export interface AppUser {
  username?: string
  jwt: string
  auth_method: AppLoginMethod
  user_addresses: AppUserAddress[]
}
export interface AppUserAddress {
  address: string
  network: string
  ticker: string
  balance: Decimal | string
  unit_balance: string // Eg balane in wei
}
export interface AppNetwork {
  network_id: number
  chain_namespace: ChainNamespaceType
  chain_id: string
  rpc_target: URL
  display_name: string
  block_explorer: URL
  ticker: string
  ticker_name: string
}

export type AppNetworkName = 'ethereum' | 'rinkeby' | 'solana' | 'polygon' | 'mumbai' | 'eosio'

// AppNetworks indices must be on AppNetwork type as well
export type AppNetworks = {
  readonly ethereum: AppNetwork
  readonly rinkeby: AppNetwork
  readonly solana: AppNetwork
  readonly polygon: AppNetwork
  readonly mumbai: AppNetwork
  readonly eosio: AppNetwork
}
