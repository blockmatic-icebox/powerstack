import { ethers } from 'ethers'
import { AppGraphQL } from '../graphql'
import type { StoreSlice } from '../index'
import { getNativeTokenBalance } from '../library'
import type { AppUser } from '../types/app-engine'

export type UserState = {
  user: AppUser | null
}

export type UserActions = {
  setUser: (user: AppUser | null) => void
  fetchUserBalances: () => Promise<void>
  createUserAccount: (username: string) => Promise<void>
}

export type User = UserState & UserActions

const defaultUserState: UserState = {
  user: null,
}

export const createUserSlice: StoreSlice<User> = (set, get) => ({
  ...defaultUserState,

  setUser: (user: AppUser | null) => {
    console.log('🤵🏻‍♂️ updating app user', JSON.stringify(user))
    set({ user })
    if (user) {
      console.log('🤵🏻‍♂️ set new user')
      set({ user })
      setTimeout(() => {
        get().initEthers()
        get().fetchUserBalances()
      }, 0)
    }
    get().refreshGraphQLClient()
  },

  fetchUserBalances: async () => {
    const user = get().user
    console.log('user', user)
    if (user?.auth_method === 'web3_auth' || user?.auth_method === 'web3_metamask') {
      const ethereum_static_provider = get().ethereum_static_provider
      if (!ethereum_static_provider) return
      const eth_balance = await getNativeTokenBalance(
        user?.user_addresses[0].address,
        ethereum_static_provider,
      )
      // TODO: why user.balences and user.addresses are splited?
      console.log({
        eth_balance,
        balance: eth_balance.toString(),
      })
    }
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
