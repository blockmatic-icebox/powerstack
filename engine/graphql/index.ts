export * from './generated/apollo-client'
export * as AppGraphQL from './generated/generated-sdk'
import { getGenericSdkApollo, getDatoCMSSdkApollo } from './generated/apollo-requester'
import { createApolloClient, createDatoCMSApolloClient } from './generated/apollo-client'

export const getGraphQLSdk = (jwt: string) => getGenericSdkApollo(createApolloClient(jwt))
export const getGraphQLDatoCMSSdk = () => getDatoCMSSdkApollo(createDatoCMSApolloClient())
