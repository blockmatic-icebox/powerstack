import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { isBrowser } from '../library'

export const createApolloClient = () => {
  // TODO: fix me @RUBENBIX
  const apollo_base_url = 'powerstack-hasura-panslbmhpa-uc.a.run.app/v1/graphql'

  const wsLink = isBrowser
    ? new GraphQLWsLink(
        createClient({
          url: `wss://${apollo_base_url}`,
        }),
      )
    : null

  const http_link = new HttpLink({
    uri: `https://${apollo_base_url}`,
  })

  const link =
    isBrowser && wsLink != null
      ? split(
          ({ query }) => {
            const def = getMainDefinition(query)
            return def.kind === 'OperationDefinition' && def.operation === 'subscription'
          },
          wsLink,
          http_link,
        )
      : http_link

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}
