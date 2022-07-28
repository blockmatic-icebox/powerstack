
export type AppAddress = string

export interface AppUser {
  address: AppAddress
  user_id: string
  fullname: string
  username: string
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



