import { anon_apollo_client, AppGraphQL } from '../graphql'
import type { StoreSlice } from '../index'
import type { AppUser } from '../types/app-engine'

export type UserState = {
  user: AppUser | null
}

export type UserActions = {
  setUser: (user: AppUser | null) => void
  fetchUserBalances: () => Promise<void>
  createAccount: (username: string) => Promise<void>
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
  },

  fetchUserBalances: async () => {},

  createAccount: async (username: string) => {
    const result = await anon_apollo_client.mutate<
      AppGraphQL.CreateUsernameMutation,
      AppGraphQL.CreateUsernameMutationVariables
    >({
      mutation: AppGraphQL.CreateUsernameDocument,
      variables: { username },
    })
    console.log('create account result', result)
  },
})
