
export type AppAddress = string

export interface AppUser {
  address: AppAddress
  jwt_token: string
} 
export interface AppSession {
  name: string

}

export interface AppNetwork {
  name: string

}

export interface AppWalletProvider {
  name: string

}

export interface AppApiProvider {
  name: string

}



