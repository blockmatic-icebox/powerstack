import { GraphqlOperation } from '@genql/runtime'
import { createClient as createWsClient } from 'graphql-ws'

import { clientEnv } from '~/config/client'
import { logger } from '~/lib/logger'

import { createClient } from './generated/dboard'

export { everything } from './generated/dboard'

type GraphQLSdkProps = {
  config?: RequestInit
  jwt?: string
}

// Server side client
export function getDBoardClient({ config, jwt }: GraphQLSdkProps = {}) {
  return createClient({
    fetcher: async (operation: any) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }

      logger.info(
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
        logger.error('Error in graphql fetcher', error)
      }

      return fetchResponse
    },
  })
}

export function getFeDBoardClient({ config }: Omit<GraphQLSdkProps, 'jwt'> = {}) {
  let jwt = undefined // localStorage.getItem(clientEnv.jwtKey) || undefined

  return getDBoardClient({ jwt, config })
}

export function getWsDBoardClient() {
  return createWsClient({
    url: clientEnv.services.graphql.replace('http', 'ws').replace('https', 'ws'),
  })
}
