import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { exec_env } from '../library/exec-env'
import { app_logger } from '../library/logger'
import { app_args } from '~/app-config/app-arguments'
import { getCookie } from 'cookies-next'

const apolloLoggingFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
  const body = JSON.parse(init?.body?.toString() ?? '{}')
  app_logger.log(`🐭 GraphQL Operation`, JSON.stringify(init, null, 2))
  const start = Date.now()
  app_logger.log(`${new Date().toISOString().slice(-13)} 📡 Sending ${body.operationName} request`)
  const response = await fetch(input, init)
  app_logger.log(
    `${new Date().toISOString().slice(-13)} 📡 Received ${body.operationName} response in ${
      Date.now() - start
    }ms`,
  )

  return {
    ...response,

    async text() {
      const start = Date.now()
      const result = await response.text()
      app_logger.log(
        `${new Date().toISOString().slice(-13)} ⚙️  Read ${body.operationName} response body in ${
          Date.now() - start
        }ms (${result.length} bytes)`,
      )
      return result
    },
  }
}

export const createApolloClient = () => {
  const apollo_base_url = app_args.services.graphql_api
    .replace('https://', '')
    .replace('http://', '')

  const cookie = getCookie(app_args.session_cookie_name)
  console.log('cookie', cookie)
  const jwt = {}
  const headers = jwt
    ? {
        // Authorization: `Bearer ${jwt}`,
        'x-hasura-user-role': 'user',
      }
    : {
        'x-hasura-user-role': 'anon',
      }

  app_logger.log('apollo headers', headers)

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
    fetch: apolloLoggingFetch,
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
