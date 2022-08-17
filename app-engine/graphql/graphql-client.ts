import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { exec_env } from '../library/exec-env'

export const createApolloClient = (jwt?: {}) => {
  // TODO: fix me @RUBENBIX
  const apollo_base_url = 'powerstack-hasura-panslbmhpa-uc.a.run.app/v1/graphql'
  const headers = jwt
    ? {
        Authorization: `Bearer ${jwt}`,
      }
    : {
        'x-hasura-user-role': 'anon',
      }

  const wsLink = exec_env.is_browser
    ? new GraphQLWsLink(
        createClient({
          url: `wss://${apollo_base_url}`,
          connectionParams: {
            headers,
          },
        }),
      )
    : null

  const http_link = new HttpLink({
    uri: `https://${apollo_base_url}`,
    headers,
  })

  const link =
    exec_env.is_browser && wsLink != null
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
