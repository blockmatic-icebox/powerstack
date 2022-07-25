import type { AppConfig } from 'environment/app-config'

export type Address = string
export type Network = string

export type AppUser = {
  address: Address
  network: Network
  provider: string
  id: string
  name: string
  username: string
  token: string
} | null

export type AppSessionData = {
  user: AppUser
  appconfig: AppConfig
  session_error: string
}
