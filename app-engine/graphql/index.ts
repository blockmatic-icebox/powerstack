export * from './graphql-client'
export * as AppGraphQL from './generated-sdk'
import { app_args } from '~/app-config/app-arguments'
import { getSdk } from './generated-sdk'

import { GraphQLClient } from 'graphql-request'

// TODO: get jwt with https://www.npmjs.com/package/cookies-next
const jwt = null
const headers = jwt
  ? {
      // Authorization: `Bearer ${jwt}`,
      'x-hasura-user-role': 'user',
    }
  : {
      'x-hasura-user-role': 'anon',
    }
export const graphql_sdk = getSdk(new GraphQLClient(app_args.services.graphql_api, { headers }))
