import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { exec_env } from '../library/exec-env'

const loggingFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
  const body = JSON.parse(init?.body?.toString() ?? '{}')
  console.log(`🐭 GraphQL Operation`, JSON.stringify(init, null, 2))
  const start = Date.now()
  console.log(`${new Date().toISOString().slice(-13)} 📡 Sending ${body.operationName} request`)
  const response = await fetch(input, init)
  console.log(
    `${new Date().toISOString().slice(-13)} 📡 Received ${body.operationName} response in ${
      Date.now() - start
    }ms`,
  )

  return {
    ...response,

    async text() {
      const start = Date.now()
      const result = await response.text()
      console.log(
        `${new Date().toISOString().slice(-13)} ⚙️  Read ${body.operationName} response body in ${
          Date.now() - start
        }ms (${result.length} bytes)`,
      )
      return result
    },
  }
}

export const createApolloClient = (jwt?: {}) => {
  // TODO: fix me @RUBENBIX
  const apollo_base_url = 'api.powerstack.xyz/v1/graphql'
  const headers = jwt
    ? {
        // Authorization: `Bearer ${jwt}`,
        'x-hasura-user-role': 'user',
      }
    : {
        'x-hasura-user-role': 'anon',
      }

  console.log('apollo headers', headers)

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
    fetch: loggingFetch,
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
    cache: new InMemoryCache({ addTypename: false }),
  })
}
