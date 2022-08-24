export * from './apollo-client'
export * as AppGraphQL from './generated-sdk'
import { getSdkApollo } from './apollo-requester'
import { createApolloClient } from './apollo-client'

export const getGraphQLSdk = (jwt: string) => getSdkApollo(createApolloClient(jwt))
