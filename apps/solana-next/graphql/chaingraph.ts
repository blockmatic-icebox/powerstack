import { GraphqlOperation } from '@genql/runtime'
import { createClient as createWsClient } from 'graphql-ws'

import { clientEnv } from '~/config/client'

import { createClient } from './generated/chaingraph'

export { everything } from './generated/chaingraph'

type GraphQLSdkProps = {
  config?: RequestInit
  jwt?: string
}

// Server side client
export function getChaingraphClient({ config, jwt }: GraphQLSdkProps = {}) {
  return createClient({
    fetcher: async (operation: any) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }

      console.info(
        '\n ==> GraphQL Query : \n',
        JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', ''))
      )

      let fetchResponse
      try {
        fetchResponse = fetch(clientEnv.services.graphql, {
          method: 'POST',
          headers,
          body: JSON.stringify(operation),
          ...config,
        }).then((response) => response.json())
      } catch (error) {
        console.error('Error in graphql fetcher', error)
      }

      return fetchResponse
    },
  })
}

export function getFeGraphQLClient({ config }: Omit<GraphQLSdkProps, 'jwt'> = {}) {
  let jwt = undefined // localStorage.getItem(clientEnv.jwtKey) || undefined

  return getChaingraphClient({ jwt, config })
}

export function getWsGraphQLClient() {
  return createWsClient({
    url: clientEnv.services.graphql.replace('http', 'ws').replace('https', 'ws'),
  })
}
