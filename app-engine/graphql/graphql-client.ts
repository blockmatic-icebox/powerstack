import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: 'wss://powerstack.xyz/v1/graphql',
        }),
      )
    : null

const httpLink = new HttpLink({
  uri: `https://powerstack.xyz/v1/graphql`,
})

const link =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query)
          return def.kind === 'OperationDefinition' && def.operation === 'subscription'
        },
        wsLink,
        httpLink,
      )
    : httpLink

export const anon_apollo_client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
