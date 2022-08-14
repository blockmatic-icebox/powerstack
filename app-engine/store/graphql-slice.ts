import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { StoreSlice } from '..'
import { createApolloClient } from '../graphql'

export interface GraphQLState {
  graphql_client: ApolloClient<NormalizedCacheObject>
}

export interface GraphQLActions {
  createAuthorizedApolloCleint: () => void
}

export type GraphQLSlice = GraphQLState & GraphQLActions

export const createGraphQLSlice: StoreSlice<GraphQLSlice> = (set, get) => ({
  graphql_client: createApolloClient(),
  createAuthorizedApolloCleint: async () => {
    set({ graphql_client: createApolloClient })
  },
})
