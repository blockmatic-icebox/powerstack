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
import type { Query, QueryGenqlSelection } from './schema'
import types from './types'

export type { FieldsSelection } from './runtime'
export { GenqlError }

export * from './schema'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends QueryGenqlSelection>(request: R & { __name?: string }): Promise<FieldsSelection<Query, R>>
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: 'https://graphql.datocms.com',

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any
}

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<Query, fields>
export const generateQueryOp: (fields: QueryGenqlSelection & { __name?: string }) => GraphqlOperation = function (
  fields
) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}
