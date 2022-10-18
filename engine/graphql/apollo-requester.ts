import { ApolloClient, QueryOptions, MutationOptions } from '@apollo/client'
import { DocumentNode } from 'graphql'
import _ from 'lodash'
import { getSdk as getDatoCMSSdk, Requester as DatoCMSRequester } from './generated-datocms-sdk'
import { getSdk as getGenericSdk, Requester as GenericRequester } from './generated-sdk'

export type ApolloRequesterMutationOptions<V, R> = Omit<
  MutationOptions<R, V>,
  'variables' | 'mutation'
>
export type ApolloRequesterQueryOptions<V, R> = Omit<QueryOptions<V>, 'variables' | 'query'>
export type ApolloRequesterOptions<V, R> =
  | ApolloRequesterQueryOptions<V, R>
  | ApolloRequesterMutationOptions<V, R>

const validDocDefOps = ['mutation', 'query', 'subscription']

// A Boolean to detect if this generic requester should hear dato cms sdk or not...
export function getGenericSdkApollo<C>(client: ApolloClient<C>, is_datocms?: Boolean) {
  const requester = async <R, V>(
    doc: DocumentNode,
    variables: V,
    options?: ApolloRequesterOptions<V, R>,
  ): Promise<R | undefined> => {
    // Valid document should contain *single* query or mutation unless it's has a fragment
    if (
      doc.definitions.filter(
        (d) => d.kind === 'OperationDefinition' && validDocDefOps.includes(d.operation),
      ).length !== 1
    ) {
      throw new Error('DocumentNode passed to Apollo Client must contain single query or mutation')
    }

    const definition = doc.definitions[0]

    // Valid document should contain *OperationDefinition*
    if (definition.kind !== 'OperationDefinition') {
      throw new Error('DocumentNode passed to Apollo Client must contain single query or mutation')
    }

    switch (definition.operation) {
      case 'mutation': {
        const response = await client.mutate<R, V>({
          mutation: doc,
          variables,
          ...(options as ApolloRequesterMutationOptions<V, R>),
        })

        if (response.errors) throw new Error(JSON.stringify(response.errors))

        if (response.data === undefined || response.data === null)
          throw new Error('No data presented in the GraphQL response')

        return response.data
      }
      case 'query': {
        const response = await client.query<R, V>({
          query: doc,
          variables,
          ...options,
        })

        if (response.errors) throw new Error(JSON.stringify(response.errors))

        if (response.data === undefined || response.data === null)
          throw new Error('No data presented in the GraphQL response')

        return response.data
      }

      case 'subscription': {
        throw new Error('Subscription requests through SDK interface are not supported')
      }
    }
  }

  return getGenericSdk(requester as GenericRequester)
}

// Setting apollo-requester for DatoCMS
export function getDatoCMSSdkApollo<C>(client: ApolloClient<C>) {
  const requester = async <R, V>(
    doc: DocumentNode,
    variables: V,
    options?: ApolloRequesterOptions<V, R>,
  ): Promise<R | undefined> => {
    // Valid document should contain *single* query or mutation unless it's has a fragment
    if (
      doc.definitions.filter(
        (d) => d.kind === 'OperationDefinition' && validDocDefOps.includes(d.operation),
      ).length !== 1
    ) {
      throw new Error('DocumentNode passed to Apollo Client must contain single query or mutation')
    }

    const definition = doc.definitions[0]

    // Valid document should contain *OperationDefinition*
    if (definition.kind !== 'OperationDefinition') {
      throw new Error('DocumentNode passed to Apollo Client must contain single query or mutation')
    }

    switch (definition.operation) {
      case 'mutation': {
        const response = await client.mutate<R, V>({
          mutation: doc,
          variables,
          ...(options as ApolloRequesterMutationOptions<V, R>),
        })

        if (response.errors) throw new Error(JSON.stringify(response.errors))

        if (response.data === undefined || response.data === null)
          throw new Error('No data presented in the GraphQL response')

        return response.data
      }
      case 'query': {
        const response = await client.query<R, V>({
          query: doc,
          variables,
          ...options,
        })

        if (response.errors) throw new Error(JSON.stringify(response.errors))

        if (response.data === undefined || response.data === null)
          throw new Error('No data presented in the GraphQL response')

        return response.data
      }

      case 'subscription': {
        throw new Error('Subscription requests through SDK interface are not supported')
      }
    }
  }

  // Here we stablish which SDK to return
  return getDatoCMSSdk(requester as DatoCMSRequester)
}

export type GenericSdk = ReturnType<typeof getGenericSdkApollo>
export type DatoCMSSdk = ReturnType<typeof getDatoCMSSdkApollo>
