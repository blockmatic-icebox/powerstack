export * from './graphql-client'
export * as AppGraphQL from './generated-sdk'
import { getSdkApollo } from './apollo-requester'
import { createApolloClient } from './graphql-client'

export const graphql_sdk = getSdkApollo(createApolloClient())
