export * from './apollo-client'
export * as AppGraphQL from './generated-sdk'
import { getGenericSdkApollo, getDatoCMSSdkApollo } from './apollo-requester'
import { createApolloClient, createDatoCMSApolloClient } from './apollo-client'

export const getGraphQLSdk = (jwt: string) => getGenericSdkApollo(createApolloClient(jwt))
export const getGraphQLDatoCMSSdk = () => getDatoCMSSdkApollo(createDatoCMSApolloClient())
