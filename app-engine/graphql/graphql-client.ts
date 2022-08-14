import { split, HttpLink, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { SentryLink } from 'apollo-link-sentry'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import _ from 'lodash'
import { client_args } from '~/app-config/client-config'

export { ApolloProvider } from '@apollo/client'

export const createApolloClientBrowser = (graphql_api: string) => {
  const splitWs = (wsLink: GraphQLWsLink, httpLink: HttpLink) => {
    return split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
      },
      wsLink,
      httpLink,
    )
  }

  const graphql_api_headers = {}

  const httpLink = new HttpLink({
    uri: graphql_api,
    headers: graphql_api_headers,
  })

  const wsLink = new GraphQLWsLink(
    createClient({
      url: graphql_api.replace('http', 'ws'),
      keepAlive: 5,
      connectionParams: {
        headers: graphql_api_headers,
      },
    }),
  )

  const applicationLink = splitWs(wsLink, httpLink)

  const links = [
    applicationLink,
    new SentryLink({
      setTransaction: true,
      setFingerprint: true,
      attachBreadcrumbs: {
        includeQuery: true,
        includeVariables: true,
        includeFetchResult: true,
        includeError: true,
        includeCache: true,
      },
    }),
  ]
  return new ApolloClient({
    link: ApolloLink.from(links),
    cache: new InMemoryCache({
      addTypename: false,
    }),
  })
}

export const anon_apollo_client = createApolloClientBrowser(client_args.services.graphql_api)
