import { GraphqlOperation } from '@genql/runtime'

import { clientEnv } from '~/config/client'
import { logger } from '~/lib/logger'

import { createClient } from './generated/cms'

export { everything } from './generated/cms'

type GraphQLSdkProps = {
  config?: RequestInit
  jwt?: string
}

// Server side client
export function getCMSSdk({ config }: GraphQLSdkProps = {}) {
  return createClient({
    fetcher: async (operation: any) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${clientEnv.datocms.key}`,
      }

      logger.info(
        '\n ==> GraphQL Query : \n',
        JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', ''))
      )

      let fetchResponse
      try {
        fetchResponse = fetch(clientEnv.datocms.endpoint, {
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
