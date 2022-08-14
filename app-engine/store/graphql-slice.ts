import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { StoreSlice } from '..'
import { createApolloClient } from '../graphql'

export interface GraphQLState {
  graphql_client: ApolloClient<NormalizedCacheObject>
}

export interface GraphQLActions {
  refreshGraphQLClient: () => void
}

export type GraphQLSlice = GraphQLState & GraphQLActions

export const createGraphQLSlice: StoreSlice<GraphQLSlice> = (set, get) => ({
  graphql_client: createApolloClient(),
  refreshGraphQLClient: async () => {
    console.log('🚊 refreshing graphql client ...')
    // TODO: get jwt from cookie session
    const jwt = {}
    set({ graphql_client: createApolloClient(jwt) })
  },
})
