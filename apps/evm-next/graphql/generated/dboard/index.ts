// @ts-nocheck

import {
  createClient as createClientOriginal,
  generateGraphqlOperation,
  GenqlError,
  linkTypeMap,
  type ClientOptions,
  type FieldsSelection,
  type GraphqlOperation,
} from './runtime'
import type {
  mutation_root,
  mutation_rootGenqlSelection,
  query_root,
  query_rootGenqlSelection,
  subscription_root,
  subscription_rootGenqlSelection,
} from './schema'
import types from './types'

export type { FieldsSelection } from './runtime'
export { GenqlError }

export * from './schema'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends query_rootGenqlSelection>(request: R & { __name?: string }): Promise<FieldsSelection<query_root, R>>

  mutation<R extends mutation_rootGenqlSelection>(
    request: R & { __name?: string }
  ): Promise<FieldsSelection<mutation_root, R>>
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: 'https://dboard-hasura-vvo2l3fi7a-uc.a.run.app/v1/graphql',

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any
}

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends query_rootGenqlSelection> = FieldsSelection<query_root, fields>
export const generateQueryOp: (fields: query_rootGenqlSelection & { __name?: string }) => GraphqlOperation = function (
  fields
) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}

export type MutationResult<fields extends mutation_rootGenqlSelection> = FieldsSelection<mutation_root, fields>
export const generateMutationOp: (fields: mutation_rootGenqlSelection & { __name?: string }) => GraphqlOperation =
  function (fields) {
    return generateGraphqlOperation('mutation', typeMap.Mutation!, fields as any)
  }

export type SubscriptionResult<fields extends subscription_rootGenqlSelection> = FieldsSelection<
  subscription_root,
  fields
>
export const generateSubscriptionOp: (
  fields: subscription_rootGenqlSelection & { __name?: string }
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription!, fields as any)
}
