import Decimal from 'decimal.js'
import { AppGraphQL } from '../graphql'
import type { StoreSlice } from '../index'
import { getEthNativeTokenBalance, getSolNativeTokenBalance } from '../library'
import type { AppUser } from '../types/app-engine'

export type UserState = {
  user: AppUser | null
}

export type UserActions = {
  setUser: (user: AppUser | null) => void
  fetchUserBalances: (user: AppUser) => Promise<AppUser>
  syncUserBalances: () => void
  createUserAccount: (username: string) => Promise<void>
}

export type User = UserState & UserActions

const defaultUserState: UserState = {
  user: null,
}

const isEth = (user: AppUser | null) =>
  user &&
  (user.auth_method === 'web3_anchor' ||
    user.auth_method === 'web3_metamask' ||
    user.auth_method === 'web3_auth')

export const isSol = (user: AppUser | null) => user && user?.auth_method === 'web3_solana'

export const createUserSlice: StoreSlice<User> = (set, get) => ({
  ...defaultUserState,

  setUser: (user: AppUser | null) => {
    console.log('🤵🏻‍♂️ updating app user', JSON.stringify(user))
    set({ user })
    if (user) {
      console.log('🤵🏻‍♂️ set new user')
      setTimeout(async () => {
        // TODO: is it the best place?
        get().initEthers()
        get().initSolana()
        const updated_user = await get().fetchUserBalances(user)
        set({ user: updated_user })
      }, 0)
    }
    get().refreshGraphQLClient()
  },

  syncUserBalances: () => {
    const user = get().user
    if (user) {
      setTimeout(async () => {
        const updated_user = await get().fetchUserBalances(user)
        set({ user: updated_user })
      }, 0)
    }
  },

  fetchUserBalances: async (user: AppUser) => {
    if (isEth(user)) {
      const ethereum_static_provider = get().ethereum_static_provider
      if (!ethereum_static_provider) return user
      user?.user_addresses.forEach(async (address) => {
        const eth_balance = (
          await getEthNativeTokenBalance(address.address, ethereum_static_provider)
        ).toString()
        address.balance = new Decimal(eth_balance)
        address.unit_balance = eth_balance
      })
    }
    if (isSol(user)) {
      const solana_static_provider = get().solana_static_provider
      if (!solana_static_provider) return user
      user?.user_addresses.forEach(async (address) => {
        const balance = (
          await getSolNativeTokenBalance(address.address, solana_static_provider)
        ).toString()
        address.balance = new Decimal(balance)
        address.unit_balance = balance
      })
    }
    return user
  },

  createUserAccount: async (username: string) => {
    const result = await get().graphql_client.mutate<
      AppGraphQL.CreateUsernameMutation,
      AppGraphQL.CreateUsernameMutationVariables
    >({
      mutation: AppGraphQL.CreateUsernameDocument,
      variables: { username },
    })
    console.log('create account result', result)
  },
})
