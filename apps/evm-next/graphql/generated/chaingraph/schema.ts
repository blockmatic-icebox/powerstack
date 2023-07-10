// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
  Boolean: boolean
  Float: number
  Int: number
  String: string
  jsonb: any
  timestamptz: any
  uuid: any
}

/** columns and relationships of "actions" */
export interface actions {
  account_disk_deltas: Scalars['jsonb'] | null
  account_ram_deltas: Scalars['jsonb'] | null
  action: Scalars['String']
  action_ordinal: Scalars['Int']
  authorization: Scalars['jsonb']
  chain: Scalars['String']
  console: Scalars['String'] | null
  context_free: Scalars['Boolean'] | null
  contract: Scalars['String']
  data: Scalars['jsonb']
  global_sequence: Scalars['String']
  receipt: Scalars['jsonb'] | null
  receiver: Scalars['String'] | null
  /** An object relationship */
  transaction: transactions | null
  transaction_id: Scalars['String']
  __typename: 'actions'
}

/** aggregated selection of "actions" */
export interface actions_aggregate {
  aggregate: actions_aggregate_fields | null
  nodes: actions[]
  __typename: 'actions_aggregate'
}

/** aggregate fields of "actions" */
export interface actions_aggregate_fields {
  avg: actions_avg_fields | null
  count: Scalars['Int']
  max: actions_max_fields | null
  min: actions_min_fields | null
  stddev: actions_stddev_fields | null
  stddev_pop: actions_stddev_pop_fields | null
  stddev_samp: actions_stddev_samp_fields | null
  sum: actions_sum_fields | null
  var_pop: actions_var_pop_fields | null
  var_samp: actions_var_samp_fields | null
  variance: actions_variance_fields | null
  __typename: 'actions_aggregate_fields'
}

/** aggregate avg on columns */
export interface actions_avg_fields {
  action_ordinal: Scalars['Float'] | null
  __typename: 'actions_avg_fields'
}

/** unique or primary key constraints on table "actions" */
export type actions_constraint = 'actions_pkey'

/** aggregate max on columns */
export interface actions_max_fields {
  action: Scalars['String'] | null
  action_ordinal: Scalars['Int'] | null
  chain: Scalars['String'] | null
  console: Scalars['String'] | null
  contract: Scalars['String'] | null
  global_sequence: Scalars['String'] | null
  receiver: Scalars['String'] | null
  transaction_id: Scalars['String'] | null
  __typename: 'actions_max_fields'
}

/** aggregate min on columns */
export interface actions_min_fields {
  action: Scalars['String'] | null
  action_ordinal: Scalars['Int'] | null
  chain: Scalars['String'] | null
  console: Scalars['String'] | null
  contract: Scalars['String'] | null
  global_sequence: Scalars['String'] | null
  receiver: Scalars['String'] | null
  transaction_id: Scalars['String'] | null
  __typename: 'actions_min_fields'
}

/** response of any mutation on the table "actions" */
export interface actions_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: actions[]
  __typename: 'actions_mutation_response'
}

/** select columns of table "actions" */
export type actions_select_column =
  | 'account_disk_deltas'
  | 'account_ram_deltas'
  | 'action'
  | 'action_ordinal'
  | 'authorization'
  | 'chain'
  | 'console'
  | 'context_free'
  | 'contract'
  | 'data'
  | 'global_sequence'
  | 'receipt'
  | 'receiver'
  | 'transaction_id'

/** aggregate stddev on columns */
export interface actions_stddev_fields {
  action_ordinal: Scalars['Float'] | null
  __typename: 'actions_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface actions_stddev_pop_fields {
  action_ordinal: Scalars['Float'] | null
  __typename: 'actions_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface actions_stddev_samp_fields {
  action_ordinal: Scalars['Float'] | null
  __typename: 'actions_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface actions_sum_fields {
  action_ordinal: Scalars['Int'] | null
  __typename: 'actions_sum_fields'
}

/** update columns of table "actions" */
export type actions_update_column =
  | 'account_disk_deltas'
  | 'account_ram_deltas'
  | 'action'
  | 'action_ordinal'
  | 'authorization'
  | 'chain'
  | 'console'
  | 'context_free'
  | 'contract'
  | 'data'
  | 'global_sequence'
  | 'receipt'
  | 'receiver'
  | 'transaction_id'

/** aggregate var_pop on columns */
export interface actions_var_pop_fields {
  action_ordinal: Scalars['Float'] | null
  __typename: 'actions_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface actions_var_samp_fields {
  action_ordinal: Scalars['Float'] | null
  __typename: 'actions_var_samp_fields'
}

/** aggregate variance on columns */
export interface actions_variance_fields {
  action_ordinal: Scalars['Float'] | null
  __typename: 'actions_variance_fields'
}

/** columns and relationships of "api_users" */
export interface api_users {
  account: Scalars['String']
  api_key: Scalars['String']
  created_at: Scalars['timestamptz'] | null
  domain_names: Scalars['String'] | null
  id: Scalars['Int']
  updated_at: Scalars['timestamptz'] | null
  __typename: 'api_users'
}

/** aggregated selection of "api_users" */
export interface api_users_aggregate {
  aggregate: api_users_aggregate_fields | null
  nodes: api_users[]
  __typename: 'api_users_aggregate'
}

/** aggregate fields of "api_users" */
export interface api_users_aggregate_fields {
  avg: api_users_avg_fields | null
  count: Scalars['Int']
  max: api_users_max_fields | null
  min: api_users_min_fields | null
  stddev: api_users_stddev_fields | null
  stddev_pop: api_users_stddev_pop_fields | null
  stddev_samp: api_users_stddev_samp_fields | null
  sum: api_users_sum_fields | null
  var_pop: api_users_var_pop_fields | null
  var_samp: api_users_var_samp_fields | null
  variance: api_users_variance_fields | null
  __typename: 'api_users_aggregate_fields'
}

/** aggregate avg on columns */
export interface api_users_avg_fields {
  id: Scalars['Float'] | null
  __typename: 'api_users_avg_fields'
}

/** unique or primary key constraints on table "api_users" */
export type api_users_constraint = 'api_users_api_key_key' | 'api_users_pkey'

/** aggregate max on columns */
export interface api_users_max_fields {
  account: Scalars['String'] | null
  api_key: Scalars['String'] | null
  created_at: Scalars['timestamptz'] | null
  domain_names: Scalars['String'] | null
  id: Scalars['Int'] | null
  updated_at: Scalars['timestamptz'] | null
  __typename: 'api_users_max_fields'
}

/** aggregate min on columns */
export interface api_users_min_fields {
  account: Scalars['String'] | null
  api_key: Scalars['String'] | null
  created_at: Scalars['timestamptz'] | null
  domain_names: Scalars['String'] | null
  id: Scalars['Int'] | null
  updated_at: Scalars['timestamptz'] | null
  __typename: 'api_users_min_fields'
}

/** response of any mutation on the table "api_users" */
export interface api_users_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: api_users[]
  __typename: 'api_users_mutation_response'
}

/** select columns of table "api_users" */
export type api_users_select_column = 'account' | 'api_key' | 'created_at' | 'domain_names' | 'id' | 'updated_at'

/** aggregate stddev on columns */
export interface api_users_stddev_fields {
  id: Scalars['Float'] | null
  __typename: 'api_users_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface api_users_stddev_pop_fields {
  id: Scalars['Float'] | null
  __typename: 'api_users_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface api_users_stddev_samp_fields {
  id: Scalars['Float'] | null
  __typename: 'api_users_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface api_users_sum_fields {
  id: Scalars['Int'] | null
  __typename: 'api_users_sum_fields'
}

/** update columns of table "api_users" */
export type api_users_update_column = 'account' | 'api_key' | 'created_at' | 'domain_names' | 'id' | 'updated_at'

/** aggregate var_pop on columns */
export interface api_users_var_pop_fields {
  id: Scalars['Float'] | null
  __typename: 'api_users_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface api_users_var_samp_fields {
  id: Scalars['Float'] | null
  __typename: 'api_users_var_samp_fields'
}

/** aggregate variance on columns */
export interface api_users_variance_fields {
  id: Scalars['Float'] | null
  __typename: 'api_users_variance_fields'
}

/** columns and relationships of "blocks" */
export interface blocks {
  block_id: Scalars['String'] | null
  block_num: Scalars['Int']
  chain: Scalars['String']
  /** An object relationship */
  chian: chains
  producer: Scalars['String']
  timestamp: Scalars['timestamptz']
  __typename: 'blocks'
}

/** aggregated selection of "blocks" */
export interface blocks_aggregate {
  aggregate: blocks_aggregate_fields | null
  nodes: blocks[]
  __typename: 'blocks_aggregate'
}

/** aggregate fields of "blocks" */
export interface blocks_aggregate_fields {
  avg: blocks_avg_fields | null
  count: Scalars['Int']
  max: blocks_max_fields | null
  min: blocks_min_fields | null
  stddev: blocks_stddev_fields | null
  stddev_pop: blocks_stddev_pop_fields | null
  stddev_samp: blocks_stddev_samp_fields | null
  sum: blocks_sum_fields | null
  var_pop: blocks_var_pop_fields | null
  var_samp: blocks_var_samp_fields | null
  variance: blocks_variance_fields | null
  __typename: 'blocks_aggregate_fields'
}

/** aggregate avg on columns */
export interface blocks_avg_fields {
  block_num: Scalars['Float'] | null
  __typename: 'blocks_avg_fields'
}

/** unique or primary key constraints on table "blocks" */
export type blocks_constraint = 'blocks_block_id_key' | 'blocks_pkey'

/** aggregate max on columns */
export interface blocks_max_fields {
  block_id: Scalars['String'] | null
  block_num: Scalars['Int'] | null
  chain: Scalars['String'] | null
  producer: Scalars['String'] | null
  timestamp: Scalars['timestamptz'] | null
  __typename: 'blocks_max_fields'
}

/** aggregate min on columns */
export interface blocks_min_fields {
  block_id: Scalars['String'] | null
  block_num: Scalars['Int'] | null
  chain: Scalars['String'] | null
  producer: Scalars['String'] | null
  timestamp: Scalars['timestamptz'] | null
  __typename: 'blocks_min_fields'
}

/** response of any mutation on the table "blocks" */
export interface blocks_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: blocks[]
  __typename: 'blocks_mutation_response'
}

/** select columns of table "blocks" */
export type blocks_select_column = 'block_id' | 'block_num' | 'chain' | 'producer' | 'timestamp'

/** aggregate stddev on columns */
export interface blocks_stddev_fields {
  block_num: Scalars['Float'] | null
  __typename: 'blocks_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface blocks_stddev_pop_fields {
  block_num: Scalars['Float'] | null
  __typename: 'blocks_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface blocks_stddev_samp_fields {
  block_num: Scalars['Float'] | null
  __typename: 'blocks_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface blocks_sum_fields {
  block_num: Scalars['Int'] | null
  __typename: 'blocks_sum_fields'
}

/** update columns of table "blocks" */
export type blocks_update_column = 'block_id' | 'block_num' | 'chain' | 'producer' | 'timestamp'

/** aggregate var_pop on columns */
export interface blocks_var_pop_fields {
  block_num: Scalars['Float'] | null
  __typename: 'blocks_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface blocks_var_samp_fields {
  block_num: Scalars['Float'] | null
  __typename: 'blocks_var_samp_fields'
}

/** aggregate variance on columns */
export interface blocks_variance_fields {
  block_num: Scalars['Float'] | null
  __typename: 'blocks_variance_fields'
}

/** columns and relationships of "chains" */
export interface chains {
  /** An array relationship */
  blocks: blocks[]
  /** An aggregate relationship */
  blocks_aggregate: blocks_aggregate
  chain_id: Scalars['String']
  chain_name: Scalars['String']
  rpc_endpoint: Scalars['String']
  /** fetch data from the table: "table_rows" */
  table_rows: table_rows[]
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate: table_rows_aggregate
  __typename: 'chains'
}

/** aggregated selection of "chains" */
export interface chains_aggregate {
  aggregate: chains_aggregate_fields | null
  nodes: chains[]
  __typename: 'chains_aggregate'
}

/** aggregate fields of "chains" */
export interface chains_aggregate_fields {
  count: Scalars['Int']
  max: chains_max_fields | null
  min: chains_min_fields | null
  __typename: 'chains_aggregate_fields'
}

/** unique or primary key constraints on table "chains" */
export type chains_constraint = 'chains_pkey'

/** aggregate max on columns */
export interface chains_max_fields {
  chain_id: Scalars['String'] | null
  chain_name: Scalars['String'] | null
  rpc_endpoint: Scalars['String'] | null
  __typename: 'chains_max_fields'
}

/** aggregate min on columns */
export interface chains_min_fields {
  chain_id: Scalars['String'] | null
  chain_name: Scalars['String'] | null
  rpc_endpoint: Scalars['String'] | null
  __typename: 'chains_min_fields'
}

/** response of any mutation on the table "chains" */
export interface chains_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: chains[]
  __typename: 'chains_mutation_response'
}

/** select columns of table "chains" */
export type chains_select_column = 'chain_id' | 'chain_name' | 'rpc_endpoint'

/** update columns of table "chains" */
export type chains_update_column = 'chain_id' | 'chain_name' | 'rpc_endpoint'

/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'

/** columns and relationships of "manifests" */
export interface manifests {
  app_id: Scalars['uuid']
  app_name: Scalars['String']
  description: Scalars['String']
  url: Scalars['String']
  __typename: 'manifests'
}

/** aggregated selection of "manifests" */
export interface manifests_aggregate {
  aggregate: manifests_aggregate_fields | null
  nodes: manifests[]
  __typename: 'manifests_aggregate'
}

/** aggregate fields of "manifests" */
export interface manifests_aggregate_fields {
  count: Scalars['Int']
  max: manifests_max_fields | null
  min: manifests_min_fields | null
  __typename: 'manifests_aggregate_fields'
}

/** unique or primary key constraints on table "manifests" */
export type manifests_constraint = 'manifests_pkey'

/** aggregate max on columns */
export interface manifests_max_fields {
  app_id: Scalars['uuid'] | null
  app_name: Scalars['String'] | null
  description: Scalars['String'] | null
  url: Scalars['String'] | null
  __typename: 'manifests_max_fields'
}

/** aggregate min on columns */
export interface manifests_min_fields {
  app_id: Scalars['uuid'] | null
  app_name: Scalars['String'] | null
  description: Scalars['String'] | null
  url: Scalars['String'] | null
  __typename: 'manifests_min_fields'
}

/** response of any mutation on the table "manifests" */
export interface manifests_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: manifests[]
  __typename: 'manifests_mutation_response'
}

/** select columns of table "manifests" */
export type manifests_select_column = 'app_id' | 'app_name' | 'description' | 'url'

/** update columns of table "manifests" */
export type manifests_update_column = 'app_id' | 'app_name' | 'description' | 'url'

/** columns and relationships of "mappings" */
export interface mappings {
  abi: Scalars['jsonb'] | null
  chain: Scalars['String']
  contract: Scalars['String']
  contract_type: Scalars['String'] | null
  tables: Scalars['jsonb'] | null
  __typename: 'mappings'
}

/** aggregated selection of "mappings" */
export interface mappings_aggregate {
  aggregate: mappings_aggregate_fields | null
  nodes: mappings[]
  __typename: 'mappings_aggregate'
}

/** aggregate fields of "mappings" */
export interface mappings_aggregate_fields {
  count: Scalars['Int']
  max: mappings_max_fields | null
  min: mappings_min_fields | null
  __typename: 'mappings_aggregate_fields'
}

/** unique or primary key constraints on table "mappings" */
export type mappings_constraint = 'mappings_pkey'

/** aggregate max on columns */
export interface mappings_max_fields {
  chain: Scalars['String'] | null
  contract: Scalars['String'] | null
  contract_type: Scalars['String'] | null
  __typename: 'mappings_max_fields'
}

/** aggregate min on columns */
export interface mappings_min_fields {
  chain: Scalars['String'] | null
  contract: Scalars['String'] | null
  contract_type: Scalars['String'] | null
  __typename: 'mappings_min_fields'
}

/** response of any mutation on the table "mappings" */
export interface mappings_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: mappings[]
  __typename: 'mappings_mutation_response'
}

/** select columns of table "mappings" */
export type mappings_select_column = 'abi' | 'chain' | 'contract' | 'contract_type' | 'tables'

/** update columns of table "mappings" */
export type mappings_update_column = 'abi' | 'chain' | 'contract' | 'contract_type' | 'tables'

/** mutation root */
export interface mutation_root {
  /** delete data from the table: "actions" */
  delete_actions: actions_mutation_response | null
  /** delete single row from the table: "actions" */
  delete_actions_by_pk: actions | null
  /** delete data from the table: "api_users" */
  delete_api_users: api_users_mutation_response | null
  /** delete single row from the table: "api_users" */
  delete_api_users_by_pk: api_users | null
  /** delete data from the table: "blocks" */
  delete_blocks: blocks_mutation_response | null
  /** delete single row from the table: "blocks" */
  delete_blocks_by_pk: blocks | null
  /** delete data from the table: "chains" */
  delete_chains: chains_mutation_response | null
  /** delete single row from the table: "chains" */
  delete_chains_by_pk: chains | null
  /** delete data from the table: "manifests" */
  delete_manifests: manifests_mutation_response | null
  /** delete single row from the table: "manifests" */
  delete_manifests_by_pk: manifests | null
  /** delete data from the table: "mappings" */
  delete_mappings: mappings_mutation_response | null
  /** delete single row from the table: "mappings" */
  delete_mappings_by_pk: mappings | null
  /** delete data from the table: "table_rows" */
  delete_table_rows: table_rows_mutation_response | null
  /** delete single row from the table: "table_rows" */
  delete_table_rows_by_pk: table_rows | null
  /** delete data from the table: "transactions" */
  delete_transactions: transactions_mutation_response | null
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk: transactions | null
  /** delete data from the table: "whitelists" */
  delete_whitelists: whitelists_mutation_response | null
  /** delete single row from the table: "whitelists" */
  delete_whitelists_by_pk: whitelists | null
  /** insert data into the table: "actions" */
  insert_actions: actions_mutation_response | null
  /** insert a single row into the table: "actions" */
  insert_actions_one: actions | null
  /** insert data into the table: "api_users" */
  insert_api_users: api_users_mutation_response | null
  /** insert a single row into the table: "api_users" */
  insert_api_users_one: api_users | null
  /** insert data into the table: "blocks" */
  insert_blocks: blocks_mutation_response | null
  /** insert a single row into the table: "blocks" */
  insert_blocks_one: blocks | null
  /** insert data into the table: "chains" */
  insert_chains: chains_mutation_response | null
  /** insert a single row into the table: "chains" */
  insert_chains_one: chains | null
  /** insert data into the table: "manifests" */
  insert_manifests: manifests_mutation_response | null
  /** insert a single row into the table: "manifests" */
  insert_manifests_one: manifests | null
  /** insert data into the table: "mappings" */
  insert_mappings: mappings_mutation_response | null
  /** insert a single row into the table: "mappings" */
  insert_mappings_one: mappings | null
  /** insert data into the table: "table_rows" */
  insert_table_rows: table_rows_mutation_response | null
  /** insert a single row into the table: "table_rows" */
  insert_table_rows_one: table_rows | null
  /** insert data into the table: "transactions" */
  insert_transactions: transactions_mutation_response | null
  /** insert a single row into the table: "transactions" */
  insert_transactions_one: transactions | null
  /** insert data into the table: "whitelists" */
  insert_whitelists: whitelists_mutation_response | null
  /** insert a single row into the table: "whitelists" */
  insert_whitelists_one: whitelists | null
  /** update data of the table: "actions" */
  update_actions: actions_mutation_response | null
  /** update single row of the table: "actions" */
  update_actions_by_pk: actions | null
  /** update multiples rows of table: "actions" */
  update_actions_many: (actions_mutation_response | null)[] | null
  /** update data of the table: "api_users" */
  update_api_users: api_users_mutation_response | null
  /** update single row of the table: "api_users" */
  update_api_users_by_pk: api_users | null
  /** update multiples rows of table: "api_users" */
  update_api_users_many: (api_users_mutation_response | null)[] | null
  /** update data of the table: "blocks" */
  update_blocks: blocks_mutation_response | null
  /** update single row of the table: "blocks" */
  update_blocks_by_pk: blocks | null
  /** update multiples rows of table: "blocks" */
  update_blocks_many: (blocks_mutation_response | null)[] | null
  /** update data of the table: "chains" */
  update_chains: chains_mutation_response | null
  /** update single row of the table: "chains" */
  update_chains_by_pk: chains | null
  /** update multiples rows of table: "chains" */
  update_chains_many: (chains_mutation_response | null)[] | null
  /** update data of the table: "manifests" */
  update_manifests: manifests_mutation_response | null
  /** update single row of the table: "manifests" */
  update_manifests_by_pk: manifests | null
  /** update multiples rows of table: "manifests" */
  update_manifests_many: (manifests_mutation_response | null)[] | null
  /** update data of the table: "mappings" */
  update_mappings: mappings_mutation_response | null
  /** update single row of the table: "mappings" */
  update_mappings_by_pk: mappings | null
  /** update multiples rows of table: "mappings" */
  update_mappings_many: (mappings_mutation_response | null)[] | null
  /** update data of the table: "table_rows" */
  update_table_rows: table_rows_mutation_response | null
  /** update single row of the table: "table_rows" */
  update_table_rows_by_pk: table_rows | null
  /** update multiples rows of table: "table_rows" */
  update_table_rows_many: (table_rows_mutation_response | null)[] | null
  /** update data of the table: "transactions" */
  update_transactions: transactions_mutation_response | null
  /** update single row of the table: "transactions" */
  update_transactions_by_pk: transactions | null
  /** update multiples rows of table: "transactions" */
  update_transactions_many: (transactions_mutation_response | null)[] | null
  /** update data of the table: "whitelists" */
  update_whitelists: whitelists_mutation_response | null
  /** update single row of the table: "whitelists" */
  update_whitelists_by_pk: whitelists | null
  /** update multiples rows of table: "whitelists" */
  update_whitelists_many: (whitelists_mutation_response | null)[] | null
  __typename: 'mutation_root'
}

/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
  /** fetch data from the table: "actions" */
  actions: actions[]
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: actions_aggregate
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk: actions | null
  /** fetch data from the table: "api_users" */
  api_users: api_users[]
  /** fetch aggregated fields from the table: "api_users" */
  api_users_aggregate: api_users_aggregate
  /** fetch data from the table: "api_users" using primary key columns */
  api_users_by_pk: api_users | null
  /** An array relationship */
  blocks: blocks[]
  /** An aggregate relationship */
  blocks_aggregate: blocks_aggregate
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk: blocks | null
  /** fetch data from the table: "chains" */
  chains: chains[]
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate: chains_aggregate
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk: chains | null
  /** fetch data from the table: "manifests" */
  manifests: manifests[]
  /** fetch aggregated fields from the table: "manifests" */
  manifests_aggregate: manifests_aggregate
  /** fetch data from the table: "manifests" using primary key columns */
  manifests_by_pk: manifests | null
  /** fetch data from the table: "mappings" */
  mappings: mappings[]
  /** fetch aggregated fields from the table: "mappings" */
  mappings_aggregate: mappings_aggregate
  /** fetch data from the table: "mappings" using primary key columns */
  mappings_by_pk: mappings | null
  /** fetch data from the table: "table_rows" */
  table_rows: table_rows[]
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate: table_rows_aggregate
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk: table_rows | null
  /** fetch data from the table: "transactions" */
  transactions: transactions[]
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: transactions_aggregate
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk: transactions | null
  /** fetch data from the table: "whitelists" */
  whitelists: whitelists[]
  /** fetch aggregated fields from the table: "whitelists" */
  whitelists_aggregate: whitelists_aggregate
  /** fetch data from the table: "whitelists" using primary key columns */
  whitelists_by_pk: whitelists | null
  __typename: 'query_root'
}

export interface subscription_root {
  /** fetch data from the table: "actions" */
  actions: actions[]
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: actions_aggregate
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk: actions | null
  /** fetch data from the table in a streaming manner: "actions" */
  actions_stream: actions[]
  /** fetch data from the table: "api_users" */
  api_users: api_users[]
  /** fetch aggregated fields from the table: "api_users" */
  api_users_aggregate: api_users_aggregate
  /** fetch data from the table: "api_users" using primary key columns */
  api_users_by_pk: api_users | null
  /** fetch data from the table in a streaming manner: "api_users" */
  api_users_stream: api_users[]
  /** An array relationship */
  blocks: blocks[]
  /** An aggregate relationship */
  blocks_aggregate: blocks_aggregate
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk: blocks | null
  /** fetch data from the table in a streaming manner: "blocks" */
  blocks_stream: blocks[]
  /** fetch data from the table: "chains" */
  chains: chains[]
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate: chains_aggregate
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk: chains | null
  /** fetch data from the table in a streaming manner: "chains" */
  chains_stream: chains[]
  /** fetch data from the table: "manifests" */
  manifests: manifests[]
  /** fetch aggregated fields from the table: "manifests" */
  manifests_aggregate: manifests_aggregate
  /** fetch data from the table: "manifests" using primary key columns */
  manifests_by_pk: manifests | null
  /** fetch data from the table in a streaming manner: "manifests" */
  manifests_stream: manifests[]
  /** fetch data from the table: "mappings" */
  mappings: mappings[]
  /** fetch aggregated fields from the table: "mappings" */
  mappings_aggregate: mappings_aggregate
  /** fetch data from the table: "mappings" using primary key columns */
  mappings_by_pk: mappings | null
  /** fetch data from the table in a streaming manner: "mappings" */
  mappings_stream: mappings[]
  /** fetch data from the table: "table_rows" */
  table_rows: table_rows[]
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate: table_rows_aggregate
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk: table_rows | null
  /** fetch data from the table in a streaming manner: "table_rows" */
  table_rows_stream: table_rows[]
  /** fetch data from the table: "transactions" */
  transactions: transactions[]
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: transactions_aggregate
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk: transactions | null
  /** fetch data from the table in a streaming manner: "transactions" */
  transactions_stream: transactions[]
  /** fetch data from the table: "whitelists" */
  whitelists: whitelists[]
  /** fetch aggregated fields from the table: "whitelists" */
  whitelists_aggregate: whitelists_aggregate
  /** fetch data from the table: "whitelists" using primary key columns */
  whitelists_by_pk: whitelists | null
  /** fetch data from the table in a streaming manner: "whitelists" */
  whitelists_stream: whitelists[]
  __typename: 'subscription_root'
}

/** columns and relationships of "table_rows" */
export interface table_rows {
  chain: Scalars['String']
  contract: Scalars['String']
  data: Scalars['jsonb']
  primary_key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
  __typename: 'table_rows'
}

/** aggregated selection of "table_rows" */
export interface table_rows_aggregate {
  aggregate: table_rows_aggregate_fields | null
  nodes: table_rows[]
  __typename: 'table_rows_aggregate'
}

/** aggregate fields of "table_rows" */
export interface table_rows_aggregate_fields {
  count: Scalars['Int']
  max: table_rows_max_fields | null
  min: table_rows_min_fields | null
  __typename: 'table_rows_aggregate_fields'
}

/** unique or primary key constraints on table "table_rows" */
export type table_rows_constraint = 'tables_pkey'

/** aggregate max on columns */
export interface table_rows_max_fields {
  chain: Scalars['String'] | null
  contract: Scalars['String'] | null
  primary_key: Scalars['String'] | null
  scope: Scalars['String'] | null
  table: Scalars['String'] | null
  __typename: 'table_rows_max_fields'
}

/** aggregate min on columns */
export interface table_rows_min_fields {
  chain: Scalars['String'] | null
  contract: Scalars['String'] | null
  primary_key: Scalars['String'] | null
  scope: Scalars['String'] | null
  table: Scalars['String'] | null
  __typename: 'table_rows_min_fields'
}

/** response of any mutation on the table "table_rows" */
export interface table_rows_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: table_rows[]
  __typename: 'table_rows_mutation_response'
}

/** select columns of table "table_rows" */
export type table_rows_select_column = 'chain' | 'contract' | 'data' | 'primary_key' | 'scope' | 'table'

/** update columns of table "table_rows" */
export type table_rows_update_column = 'chain' | 'contract' | 'data' | 'primary_key' | 'scope' | 'table'

/** columns and relationships of "transactions" */
export interface transactions {
  block_num: Scalars['Int']
  chain: Scalars['String']
  cpu_usage_us: Scalars['Int'] | null
  net_usage: Scalars['Int'] | null
  net_usage_words: Scalars['Int'] | null
  transaction_id: Scalars['String']
  __typename: 'transactions'
}

/** aggregated selection of "transactions" */
export interface transactions_aggregate {
  aggregate: transactions_aggregate_fields | null
  nodes: transactions[]
  __typename: 'transactions_aggregate'
}

/** aggregate fields of "transactions" */
export interface transactions_aggregate_fields {
  avg: transactions_avg_fields | null
  count: Scalars['Int']
  max: transactions_max_fields | null
  min: transactions_min_fields | null
  stddev: transactions_stddev_fields | null
  stddev_pop: transactions_stddev_pop_fields | null
  stddev_samp: transactions_stddev_samp_fields | null
  sum: transactions_sum_fields | null
  var_pop: transactions_var_pop_fields | null
  var_samp: transactions_var_samp_fields | null
  variance: transactions_variance_fields | null
  __typename: 'transactions_aggregate_fields'
}

/** aggregate avg on columns */
export interface transactions_avg_fields {
  block_num: Scalars['Float'] | null
  cpu_usage_us: Scalars['Float'] | null
  net_usage: Scalars['Float'] | null
  net_usage_words: Scalars['Float'] | null
  __typename: 'transactions_avg_fields'
}

/** unique or primary key constraints on table "transactions" */
export type transactions_constraint = 'transactions_pkey'

/** aggregate max on columns */
export interface transactions_max_fields {
  block_num: Scalars['Int'] | null
  chain: Scalars['String'] | null
  cpu_usage_us: Scalars['Int'] | null
  net_usage: Scalars['Int'] | null
  net_usage_words: Scalars['Int'] | null
  transaction_id: Scalars['String'] | null
  __typename: 'transactions_max_fields'
}

/** aggregate min on columns */
export interface transactions_min_fields {
  block_num: Scalars['Int'] | null
  chain: Scalars['String'] | null
  cpu_usage_us: Scalars['Int'] | null
  net_usage: Scalars['Int'] | null
  net_usage_words: Scalars['Int'] | null
  transaction_id: Scalars['String'] | null
  __typename: 'transactions_min_fields'
}

/** response of any mutation on the table "transactions" */
export interface transactions_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: transactions[]
  __typename: 'transactions_mutation_response'
}

/** select columns of table "transactions" */
export type transactions_select_column =
  | 'block_num'
  | 'chain'
  | 'cpu_usage_us'
  | 'net_usage'
  | 'net_usage_words'
  | 'transaction_id'

/** aggregate stddev on columns */
export interface transactions_stddev_fields {
  block_num: Scalars['Float'] | null
  cpu_usage_us: Scalars['Float'] | null
  net_usage: Scalars['Float'] | null
  net_usage_words: Scalars['Float'] | null
  __typename: 'transactions_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface transactions_stddev_pop_fields {
  block_num: Scalars['Float'] | null
  cpu_usage_us: Scalars['Float'] | null
  net_usage: Scalars['Float'] | null
  net_usage_words: Scalars['Float'] | null
  __typename: 'transactions_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface transactions_stddev_samp_fields {
  block_num: Scalars['Float'] | null
  cpu_usage_us: Scalars['Float'] | null
  net_usage: Scalars['Float'] | null
  net_usage_words: Scalars['Float'] | null
  __typename: 'transactions_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface transactions_sum_fields {
  block_num: Scalars['Int'] | null
  cpu_usage_us: Scalars['Int'] | null
  net_usage: Scalars['Int'] | null
  net_usage_words: Scalars['Int'] | null
  __typename: 'transactions_sum_fields'
}

/** update columns of table "transactions" */
export type transactions_update_column =
  | 'block_num'
  | 'chain'
  | 'cpu_usage_us'
  | 'net_usage'
  | 'net_usage_words'
  | 'transaction_id'

/** aggregate var_pop on columns */
export interface transactions_var_pop_fields {
  block_num: Scalars['Float'] | null
  cpu_usage_us: Scalars['Float'] | null
  net_usage: Scalars['Float'] | null
  net_usage_words: Scalars['Float'] | null
  __typename: 'transactions_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface transactions_var_samp_fields {
  block_num: Scalars['Float'] | null
  cpu_usage_us: Scalars['Float'] | null
  net_usage: Scalars['Float'] | null
  net_usage_words: Scalars['Float'] | null
  __typename: 'transactions_var_samp_fields'
}

/** aggregate variance on columns */
export interface transactions_variance_fields {
  block_num: Scalars['Float'] | null
  cpu_usage_us: Scalars['Float'] | null
  net_usage: Scalars['Float'] | null
  net_usage_words: Scalars['Float'] | null
  __typename: 'transactions_variance_fields'
}

/** columns and relationships of "whitelists" */
export interface whitelists {
  actions: Scalars['jsonb']
  app_id: Scalars['uuid']
  chain: Scalars['String']
  contract: Scalars['String']
  history_ready: Scalars['Boolean']
  /** An object relationship */
  manifest: manifests
  start_block: Scalars['Int']
  tables: Scalars['jsonb']
  __typename: 'whitelists'
}

/** aggregated selection of "whitelists" */
export interface whitelists_aggregate {
  aggregate: whitelists_aggregate_fields | null
  nodes: whitelists[]
  __typename: 'whitelists_aggregate'
}

/** aggregate fields of "whitelists" */
export interface whitelists_aggregate_fields {
  avg: whitelists_avg_fields | null
  count: Scalars['Int']
  max: whitelists_max_fields | null
  min: whitelists_min_fields | null
  stddev: whitelists_stddev_fields | null
  stddev_pop: whitelists_stddev_pop_fields | null
  stddev_samp: whitelists_stddev_samp_fields | null
  sum: whitelists_sum_fields | null
  var_pop: whitelists_var_pop_fields | null
  var_samp: whitelists_var_samp_fields | null
  variance: whitelists_variance_fields | null
  __typename: 'whitelists_aggregate_fields'
}

/** aggregate avg on columns */
export interface whitelists_avg_fields {
  start_block: Scalars['Float'] | null
  __typename: 'whitelists_avg_fields'
}

/** unique or primary key constraints on table "whitelists" */
export type whitelists_constraint = 'whitelists_pkey'

/** aggregate max on columns */
export interface whitelists_max_fields {
  app_id: Scalars['uuid'] | null
  chain: Scalars['String'] | null
  contract: Scalars['String'] | null
  start_block: Scalars['Int'] | null
  __typename: 'whitelists_max_fields'
}

/** aggregate min on columns */
export interface whitelists_min_fields {
  app_id: Scalars['uuid'] | null
  chain: Scalars['String'] | null
  contract: Scalars['String'] | null
  start_block: Scalars['Int'] | null
  __typename: 'whitelists_min_fields'
}

/** response of any mutation on the table "whitelists" */
export interface whitelists_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: whitelists[]
  __typename: 'whitelists_mutation_response'
}

/** select columns of table "whitelists" */
export type whitelists_select_column =
  | 'actions'
  | 'app_id'
  | 'chain'
  | 'contract'
  | 'history_ready'
  | 'start_block'
  | 'tables'

/** aggregate stddev on columns */
export interface whitelists_stddev_fields {
  start_block: Scalars['Float'] | null
  __typename: 'whitelists_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface whitelists_stddev_pop_fields {
  start_block: Scalars['Float'] | null
  __typename: 'whitelists_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface whitelists_stddev_samp_fields {
  start_block: Scalars['Float'] | null
  __typename: 'whitelists_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface whitelists_sum_fields {
  start_block: Scalars['Int'] | null
  __typename: 'whitelists_sum_fields'
}

/** update columns of table "whitelists" */
export type whitelists_update_column =
  | 'actions'
  | 'app_id'
  | 'chain'
  | 'contract'
  | 'history_ready'
  | 'start_block'
  | 'tables'

/** aggregate var_pop on columns */
export interface whitelists_var_pop_fields {
  start_block: Scalars['Float'] | null
  __typename: 'whitelists_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface whitelists_var_samp_fields {
  start_block: Scalars['Float'] | null
  __typename: 'whitelists_var_samp_fields'
}

/** aggregate variance on columns */
export interface whitelists_variance_fields {
  start_block: Scalars['Float'] | null
  __typename: 'whitelists_variance_fields'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {
  _eq?: Scalars['Boolean'] | null
  _gt?: Scalars['Boolean'] | null
  _gte?: Scalars['Boolean'] | null
  _in?: Scalars['Boolean'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['Boolean'] | null
  _lte?: Scalars['Boolean'] | null
  _neq?: Scalars['Boolean'] | null
  _nin?: Scalars['Boolean'][] | null
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Scalars['Int'] | null
  _gt?: Scalars['Int'] | null
  _gte?: Scalars['Int'] | null
  _in?: Scalars['Int'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['Int'] | null
  _lte?: Scalars['Int'] | null
  _neq?: Scalars['Int'] | null
  _nin?: Scalars['Int'][] | null
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Scalars['String'] | null
  _gt?: Scalars['String'] | null
  _gte?: Scalars['String'] | null
  /** does the column match the given case-insensitive pattern */
  _ilike?: Scalars['String'] | null
  _in?: Scalars['String'][] | null
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Scalars['String'] | null
  _is_null?: Scalars['Boolean'] | null
  /** does the column match the given pattern */
  _like?: Scalars['String'] | null
  _lt?: Scalars['String'] | null
  _lte?: Scalars['String'] | null
  _neq?: Scalars['String'] | null
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Scalars['String'] | null
  _nin?: Scalars['String'][] | null
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Scalars['String'] | null
  /** does the column NOT match the given pattern */
  _nlike?: Scalars['String'] | null
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Scalars['String'] | null
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Scalars['String'] | null
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Scalars['String'] | null
  /** does the column match the given SQL regular expression */
  _similar?: Scalars['String'] | null
}

/** columns and relationships of "actions" */
export interface actionsGenqlSelection {
  account_disk_deltas?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  account_ram_deltas?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  action?: boolean | number
  action_ordinal?: boolean | number
  authorization?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  chain?: boolean | number
  console?: boolean | number
  context_free?: boolean | number
  contract?: boolean | number
  data?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  global_sequence?: boolean | number
  receipt?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  receiver?: boolean | number
  /** An object relationship */
  transaction?: transactionsGenqlSelection
  transaction_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "actions" */
export interface actions_aggregateGenqlSelection {
  aggregate?: actions_aggregate_fieldsGenqlSelection
  nodes?: actionsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "actions" */
export interface actions_aggregate_fieldsGenqlSelection {
  avg?: actions_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: actions_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: actions_max_fieldsGenqlSelection
  min?: actions_min_fieldsGenqlSelection
  stddev?: actions_stddev_fieldsGenqlSelection
  stddev_pop?: actions_stddev_pop_fieldsGenqlSelection
  stddev_samp?: actions_stddev_samp_fieldsGenqlSelection
  sum?: actions_sum_fieldsGenqlSelection
  var_pop?: actions_var_pop_fieldsGenqlSelection
  var_samp?: actions_var_samp_fieldsGenqlSelection
  variance?: actions_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface actions_append_input {
  account_disk_deltas?: Scalars['jsonb'] | null
  account_ram_deltas?: Scalars['jsonb'] | null
  authorization?: Scalars['jsonb'] | null
  data?: Scalars['jsonb'] | null
  receipt?: Scalars['jsonb'] | null
}

/** aggregate avg on columns */
export interface actions_avg_fieldsGenqlSelection {
  action_ordinal?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export interface actions_bool_exp {
  _and?: actions_bool_exp[] | null
  _not?: actions_bool_exp | null
  _or?: actions_bool_exp[] | null
  account_disk_deltas?: jsonb_comparison_exp | null
  account_ram_deltas?: jsonb_comparison_exp | null
  action?: String_comparison_exp | null
  action_ordinal?: Int_comparison_exp | null
  authorization?: jsonb_comparison_exp | null
  chain?: String_comparison_exp | null
  console?: String_comparison_exp | null
  context_free?: Boolean_comparison_exp | null
  contract?: String_comparison_exp | null
  data?: jsonb_comparison_exp | null
  global_sequence?: String_comparison_exp | null
  receipt?: jsonb_comparison_exp | null
  receiver?: String_comparison_exp | null
  transaction?: transactions_bool_exp | null
  transaction_id?: String_comparison_exp | null
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface actions_delete_at_path_input {
  account_disk_deltas?: Scalars['String'][] | null
  account_ram_deltas?: Scalars['String'][] | null
  authorization?: Scalars['String'][] | null
  data?: Scalars['String'][] | null
  receipt?: Scalars['String'][] | null
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface actions_delete_elem_input {
  account_disk_deltas?: Scalars['Int'] | null
  account_ram_deltas?: Scalars['Int'] | null
  authorization?: Scalars['Int'] | null
  data?: Scalars['Int'] | null
  receipt?: Scalars['Int'] | null
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface actions_delete_key_input {
  account_disk_deltas?: Scalars['String'] | null
  account_ram_deltas?: Scalars['String'] | null
  authorization?: Scalars['String'] | null
  data?: Scalars['String'] | null
  receipt?: Scalars['String'] | null
}

/** input type for incrementing numeric columns in table "actions" */
export interface actions_inc_input {
  action_ordinal?: Scalars['Int'] | null
}

/** input type for inserting data into table "actions" */
export interface actions_insert_input {
  account_disk_deltas?: Scalars['jsonb'] | null
  account_ram_deltas?: Scalars['jsonb'] | null
  action?: Scalars['String'] | null
  action_ordinal?: Scalars['Int'] | null
  authorization?: Scalars['jsonb'] | null
  chain?: Scalars['String'] | null
  console?: Scalars['String'] | null
  context_free?: Scalars['Boolean'] | null
  contract?: Scalars['String'] | null
  data?: Scalars['jsonb'] | null
  global_sequence?: Scalars['String'] | null
  receipt?: Scalars['jsonb'] | null
  receiver?: Scalars['String'] | null
  transaction?: transactions_obj_rel_insert_input | null
  transaction_id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface actions_max_fieldsGenqlSelection {
  action?: boolean | number
  action_ordinal?: boolean | number
  chain?: boolean | number
  console?: boolean | number
  contract?: boolean | number
  global_sequence?: boolean | number
  receiver?: boolean | number
  transaction_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface actions_min_fieldsGenqlSelection {
  action?: boolean | number
  action_ordinal?: boolean | number
  chain?: boolean | number
  console?: boolean | number
  contract?: boolean | number
  global_sequence?: boolean | number
  receiver?: boolean | number
  transaction_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "actions" */
export interface actions_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: actionsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "actions" */
export interface actions_on_conflict {
  constraint?: actions_constraint
  update_columns?: actions_update_column[]
  where?: actions_bool_exp | null
}

/** Ordering options when selecting data from "actions". */
export interface actions_order_by {
  account_disk_deltas?: order_by | null
  account_ram_deltas?: order_by | null
  action?: order_by | null
  action_ordinal?: order_by | null
  authorization?: order_by | null
  chain?: order_by | null
  console?: order_by | null
  context_free?: order_by | null
  contract?: order_by | null
  data?: order_by | null
  global_sequence?: order_by | null
  receipt?: order_by | null
  receiver?: order_by | null
  transaction?: transactions_order_by | null
  transaction_id?: order_by | null
}

/** primary key columns input for table: actions */
export interface actions_pk_columns_input {
  chain?: Scalars['String']
  global_sequence?: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface actions_prepend_input {
  account_disk_deltas?: Scalars['jsonb'] | null
  account_ram_deltas?: Scalars['jsonb'] | null
  authorization?: Scalars['jsonb'] | null
  data?: Scalars['jsonb'] | null
  receipt?: Scalars['jsonb'] | null
}

/** input type for updating data in table "actions" */
export interface actions_set_input {
  account_disk_deltas?: Scalars['jsonb'] | null
  account_ram_deltas?: Scalars['jsonb'] | null
  action?: Scalars['String'] | null
  action_ordinal?: Scalars['Int'] | null
  authorization?: Scalars['jsonb'] | null
  chain?: Scalars['String'] | null
  console?: Scalars['String'] | null
  context_free?: Scalars['Boolean'] | null
  contract?: Scalars['String'] | null
  data?: Scalars['jsonb'] | null
  global_sequence?: Scalars['String'] | null
  receipt?: Scalars['jsonb'] | null
  receiver?: Scalars['String'] | null
  transaction_id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface actions_stddev_fieldsGenqlSelection {
  action_ordinal?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface actions_stddev_pop_fieldsGenqlSelection {
  action_ordinal?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface actions_stddev_samp_fieldsGenqlSelection {
  action_ordinal?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Streaming cursor of the table "actions" */
export interface actions_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: actions_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface actions_stream_cursor_value_input {
  account_disk_deltas?: Scalars['jsonb'] | null
  account_ram_deltas?: Scalars['jsonb'] | null
  action?: Scalars['String'] | null
  action_ordinal?: Scalars['Int'] | null
  authorization?: Scalars['jsonb'] | null
  chain?: Scalars['String'] | null
  console?: Scalars['String'] | null
  context_free?: Scalars['Boolean'] | null
  contract?: Scalars['String'] | null
  data?: Scalars['jsonb'] | null
  global_sequence?: Scalars['String'] | null
  receipt?: Scalars['jsonb'] | null
  receiver?: Scalars['String'] | null
  transaction_id?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface actions_sum_fieldsGenqlSelection {
  action_ordinal?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface actions_updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: actions_append_input | null
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: actions_delete_at_path_input | null
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: actions_delete_elem_input | null
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: actions_delete_key_input | null
  /** increments the numeric columns with given value of the filtered values */
  _inc?: actions_inc_input | null
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: actions_prepend_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: actions_set_input | null
  where?: actions_bool_exp
}

/** aggregate var_pop on columns */
export interface actions_var_pop_fieldsGenqlSelection {
  action_ordinal?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface actions_var_samp_fieldsGenqlSelection {
  action_ordinal?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface actions_variance_fieldsGenqlSelection {
  action_ordinal?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "api_users" */
export interface api_usersGenqlSelection {
  account?: boolean | number
  api_key?: boolean | number
  created_at?: boolean | number
  domain_names?: boolean | number
  id?: boolean | number
  updated_at?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "api_users" */
export interface api_users_aggregateGenqlSelection {
  aggregate?: api_users_aggregate_fieldsGenqlSelection
  nodes?: api_usersGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "api_users" */
export interface api_users_aggregate_fieldsGenqlSelection {
  avg?: api_users_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: api_users_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: api_users_max_fieldsGenqlSelection
  min?: api_users_min_fieldsGenqlSelection
  stddev?: api_users_stddev_fieldsGenqlSelection
  stddev_pop?: api_users_stddev_pop_fieldsGenqlSelection
  stddev_samp?: api_users_stddev_samp_fieldsGenqlSelection
  sum?: api_users_sum_fieldsGenqlSelection
  var_pop?: api_users_var_pop_fieldsGenqlSelection
  var_samp?: api_users_var_samp_fieldsGenqlSelection
  variance?: api_users_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface api_users_avg_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "api_users". All fields are combined with a logical 'AND'. */
export interface api_users_bool_exp {
  _and?: api_users_bool_exp[] | null
  _not?: api_users_bool_exp | null
  _or?: api_users_bool_exp[] | null
  account?: String_comparison_exp | null
  api_key?: String_comparison_exp | null
  created_at?: timestamptz_comparison_exp | null
  domain_names?: String_comparison_exp | null
  id?: Int_comparison_exp | null
  updated_at?: timestamptz_comparison_exp | null
}

/** input type for incrementing numeric columns in table "api_users" */
export interface api_users_inc_input {
  id?: Scalars['Int'] | null
}

/** input type for inserting data into table "api_users" */
export interface api_users_insert_input {
  account?: Scalars['String'] | null
  api_key?: Scalars['String'] | null
  created_at?: Scalars['timestamptz'] | null
  domain_names?: Scalars['String'] | null
  id?: Scalars['Int'] | null
  updated_at?: Scalars['timestamptz'] | null
}

/** aggregate max on columns */
export interface api_users_max_fieldsGenqlSelection {
  account?: boolean | number
  api_key?: boolean | number
  created_at?: boolean | number
  domain_names?: boolean | number
  id?: boolean | number
  updated_at?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface api_users_min_fieldsGenqlSelection {
  account?: boolean | number
  api_key?: boolean | number
  created_at?: boolean | number
  domain_names?: boolean | number
  id?: boolean | number
  updated_at?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "api_users" */
export interface api_users_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: api_usersGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "api_users" */
export interface api_users_on_conflict {
  constraint?: api_users_constraint
  update_columns?: api_users_update_column[]
  where?: api_users_bool_exp | null
}

/** Ordering options when selecting data from "api_users". */
export interface api_users_order_by {
  account?: order_by | null
  api_key?: order_by | null
  created_at?: order_by | null
  domain_names?: order_by | null
  id?: order_by | null
  updated_at?: order_by | null
}

/** primary key columns input for table: api_users */
export interface api_users_pk_columns_input {
  id?: Scalars['Int']
}

/** input type for updating data in table "api_users" */
export interface api_users_set_input {
  account?: Scalars['String'] | null
  api_key?: Scalars['String'] | null
  created_at?: Scalars['timestamptz'] | null
  domain_names?: Scalars['String'] | null
  id?: Scalars['Int'] | null
  updated_at?: Scalars['timestamptz'] | null
}

/** aggregate stddev on columns */
export interface api_users_stddev_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface api_users_stddev_pop_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface api_users_stddev_samp_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Streaming cursor of the table "api_users" */
export interface api_users_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: api_users_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface api_users_stream_cursor_value_input {
  account?: Scalars['String'] | null
  api_key?: Scalars['String'] | null
  created_at?: Scalars['timestamptz'] | null
  domain_names?: Scalars['String'] | null
  id?: Scalars['Int'] | null
  updated_at?: Scalars['timestamptz'] | null
}

/** aggregate sum on columns */
export interface api_users_sum_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface api_users_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: api_users_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: api_users_set_input | null
  where?: api_users_bool_exp
}

/** aggregate var_pop on columns */
export interface api_users_var_pop_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface api_users_var_samp_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface api_users_variance_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "blocks" */
export interface blocksGenqlSelection {
  block_id?: boolean | number
  block_num?: boolean | number
  chain?: boolean | number
  /** An object relationship */
  chian?: chainsGenqlSelection
  producer?: boolean | number
  timestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "blocks" */
export interface blocks_aggregateGenqlSelection {
  aggregate?: blocks_aggregate_fieldsGenqlSelection
  nodes?: blocksGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface blocks_aggregate_bool_exp {
  count?: blocks_aggregate_bool_exp_count | null
}

export interface blocks_aggregate_bool_exp_count {
  arguments?: blocks_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: blocks_bool_exp | null
  predicate?: Int_comparison_exp
}

/** aggregate fields of "blocks" */
export interface blocks_aggregate_fieldsGenqlSelection {
  avg?: blocks_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: blocks_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: blocks_max_fieldsGenqlSelection
  min?: blocks_min_fieldsGenqlSelection
  stddev?: blocks_stddev_fieldsGenqlSelection
  stddev_pop?: blocks_stddev_pop_fieldsGenqlSelection
  stddev_samp?: blocks_stddev_samp_fieldsGenqlSelection
  sum?: blocks_sum_fieldsGenqlSelection
  var_pop?: blocks_var_pop_fieldsGenqlSelection
  var_samp?: blocks_var_samp_fieldsGenqlSelection
  variance?: blocks_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "blocks" */
export interface blocks_aggregate_order_by {
  avg?: blocks_avg_order_by | null
  count?: order_by | null
  max?: blocks_max_order_by | null
  min?: blocks_min_order_by | null
  stddev?: blocks_stddev_order_by | null
  stddev_pop?: blocks_stddev_pop_order_by | null
  stddev_samp?: blocks_stddev_samp_order_by | null
  sum?: blocks_sum_order_by | null
  var_pop?: blocks_var_pop_order_by | null
  var_samp?: blocks_var_samp_order_by | null
  variance?: blocks_variance_order_by | null
}

/** input type for inserting array relation for remote table "blocks" */
export interface blocks_arr_rel_insert_input {
  data?: blocks_insert_input[]
  /** upsert condition */
  on_conflict?: blocks_on_conflict | null
}

/** aggregate avg on columns */
export interface blocks_avg_fieldsGenqlSelection {
  block_num?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "blocks" */
export interface blocks_avg_order_by {
  block_num?: order_by | null
}

/** Boolean expression to filter rows from the table "blocks". All fields are combined with a logical 'AND'. */
export interface blocks_bool_exp {
  _and?: blocks_bool_exp[] | null
  _not?: blocks_bool_exp | null
  _or?: blocks_bool_exp[] | null
  block_id?: String_comparison_exp | null
  block_num?: Int_comparison_exp | null
  chain?: String_comparison_exp | null
  chian?: chains_bool_exp | null
  producer?: String_comparison_exp | null
  timestamp?: timestamptz_comparison_exp | null
}

/** input type for incrementing numeric columns in table "blocks" */
export interface blocks_inc_input {
  block_num?: Scalars['Int'] | null
}

/** input type for inserting data into table "blocks" */
export interface blocks_insert_input {
  block_id?: Scalars['String'] | null
  block_num?: Scalars['Int'] | null
  chain?: Scalars['String'] | null
  chian?: chains_obj_rel_insert_input | null
  producer?: Scalars['String'] | null
  timestamp?: Scalars['timestamptz'] | null
}

/** aggregate max on columns */
export interface blocks_max_fieldsGenqlSelection {
  block_id?: boolean | number
  block_num?: boolean | number
  chain?: boolean | number
  producer?: boolean | number
  timestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "blocks" */
export interface blocks_max_order_by {
  block_id?: order_by | null
  block_num?: order_by | null
  chain?: order_by | null
  producer?: order_by | null
  timestamp?: order_by | null
}

/** aggregate min on columns */
export interface blocks_min_fieldsGenqlSelection {
  block_id?: boolean | number
  block_num?: boolean | number
  chain?: boolean | number
  producer?: boolean | number
  timestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "blocks" */
export interface blocks_min_order_by {
  block_id?: order_by | null
  block_num?: order_by | null
  chain?: order_by | null
  producer?: order_by | null
  timestamp?: order_by | null
}

/** response of any mutation on the table "blocks" */
export interface blocks_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: blocksGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "blocks" */
export interface blocks_on_conflict {
  constraint?: blocks_constraint
  update_columns?: blocks_update_column[]
  where?: blocks_bool_exp | null
}

/** Ordering options when selecting data from "blocks". */
export interface blocks_order_by {
  block_id?: order_by | null
  block_num?: order_by | null
  chain?: order_by | null
  chian?: chains_order_by | null
  producer?: order_by | null
  timestamp?: order_by | null
}

/** primary key columns input for table: blocks */
export interface blocks_pk_columns_input {
  block_num?: Scalars['Int']
  chain?: Scalars['String']
}

/** input type for updating data in table "blocks" */
export interface blocks_set_input {
  block_id?: Scalars['String'] | null
  block_num?: Scalars['Int'] | null
  chain?: Scalars['String'] | null
  producer?: Scalars['String'] | null
  timestamp?: Scalars['timestamptz'] | null
}

/** aggregate stddev on columns */
export interface blocks_stddev_fieldsGenqlSelection {
  block_num?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "blocks" */
export interface blocks_stddev_order_by {
  block_num?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface blocks_stddev_pop_fieldsGenqlSelection {
  block_num?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "blocks" */
export interface blocks_stddev_pop_order_by {
  block_num?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface blocks_stddev_samp_fieldsGenqlSelection {
  block_num?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "blocks" */
export interface blocks_stddev_samp_order_by {
  block_num?: order_by | null
}

/** Streaming cursor of the table "blocks" */
export interface blocks_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: blocks_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface blocks_stream_cursor_value_input {
  block_id?: Scalars['String'] | null
  block_num?: Scalars['Int'] | null
  chain?: Scalars['String'] | null
  producer?: Scalars['String'] | null
  timestamp?: Scalars['timestamptz'] | null
}

/** aggregate sum on columns */
export interface blocks_sum_fieldsGenqlSelection {
  block_num?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "blocks" */
export interface blocks_sum_order_by {
  block_num?: order_by | null
}

export interface blocks_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: blocks_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: blocks_set_input | null
  where?: blocks_bool_exp
}

/** aggregate var_pop on columns */
export interface blocks_var_pop_fieldsGenqlSelection {
  block_num?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "blocks" */
export interface blocks_var_pop_order_by {
  block_num?: order_by | null
}

/** aggregate var_samp on columns */
export interface blocks_var_samp_fieldsGenqlSelection {
  block_num?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "blocks" */
export interface blocks_var_samp_order_by {
  block_num?: order_by | null
}

/** aggregate variance on columns */
export interface blocks_variance_fieldsGenqlSelection {
  block_num?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "blocks" */
export interface blocks_variance_order_by {
  block_num?: order_by | null
}

/** columns and relationships of "chains" */
export interface chainsGenqlSelection {
  /** An array relationship */
  blocks?: blocksGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: blocks_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: blocks_order_by[] | null
      /** filter the rows returned */
      where?: blocks_bool_exp | null
    }
  }
  /** An aggregate relationship */
  blocks_aggregate?: blocks_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: blocks_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: blocks_order_by[] | null
      /** filter the rows returned */
      where?: blocks_bool_exp | null
    }
  }
  chain_id?: boolean | number
  chain_name?: boolean | number
  rpc_endpoint?: boolean | number
  /** fetch data from the table: "table_rows" */
  table_rows?: table_rowsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: table_rows_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: table_rows_order_by[] | null
      /** filter the rows returned */
      where?: table_rows_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate?: table_rows_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: table_rows_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: table_rows_order_by[] | null
      /** filter the rows returned */
      where?: table_rows_bool_exp | null
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "chains" */
export interface chains_aggregateGenqlSelection {
  aggregate?: chains_aggregate_fieldsGenqlSelection
  nodes?: chainsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "chains" */
export interface chains_aggregate_fieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: chains_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: chains_max_fieldsGenqlSelection
  min?: chains_min_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "chains". All fields are combined with a logical 'AND'. */
export interface chains_bool_exp {
  _and?: chains_bool_exp[] | null
  _not?: chains_bool_exp | null
  _or?: chains_bool_exp[] | null
  blocks?: blocks_bool_exp | null
  blocks_aggregate?: blocks_aggregate_bool_exp | null
  chain_id?: String_comparison_exp | null
  chain_name?: String_comparison_exp | null
  rpc_endpoint?: String_comparison_exp | null
  table_rows?: table_rows_bool_exp | null
  table_rows_aggregate?: table_rows_aggregate_bool_exp | null
}

/** input type for inserting data into table "chains" */
export interface chains_insert_input {
  blocks?: blocks_arr_rel_insert_input | null
  chain_id?: Scalars['String'] | null
  chain_name?: Scalars['String'] | null
  rpc_endpoint?: Scalars['String'] | null
  table_rows?: table_rows_arr_rel_insert_input | null
}

/** aggregate max on columns */
export interface chains_max_fieldsGenqlSelection {
  chain_id?: boolean | number
  chain_name?: boolean | number
  rpc_endpoint?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface chains_min_fieldsGenqlSelection {
  chain_id?: boolean | number
  chain_name?: boolean | number
  rpc_endpoint?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "chains" */
export interface chains_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: chainsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "chains" */
export interface chains_obj_rel_insert_input {
  data?: chains_insert_input
  /** upsert condition */
  on_conflict?: chains_on_conflict | null
}

/** on_conflict condition type for table "chains" */
export interface chains_on_conflict {
  constraint?: chains_constraint
  update_columns?: chains_update_column[]
  where?: chains_bool_exp | null
}

/** Ordering options when selecting data from "chains". */
export interface chains_order_by {
  blocks_aggregate?: blocks_aggregate_order_by | null
  chain_id?: order_by | null
  chain_name?: order_by | null
  rpc_endpoint?: order_by | null
  table_rows_aggregate?: table_rows_aggregate_order_by | null
}

/** primary key columns input for table: chains */
export interface chains_pk_columns_input {
  chain_name?: Scalars['String']
}

/** input type for updating data in table "chains" */
export interface chains_set_input {
  chain_id?: Scalars['String'] | null
  chain_name?: Scalars['String'] | null
  rpc_endpoint?: Scalars['String'] | null
}

/** Streaming cursor of the table "chains" */
export interface chains_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: chains_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface chains_stream_cursor_value_input {
  chain_id?: Scalars['String'] | null
  chain_name?: Scalars['String'] | null
  rpc_endpoint?: Scalars['String'] | null
}

export interface chains_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: chains_set_input | null
  where?: chains_bool_exp
}

export interface jsonb_cast_exp {
  String?: String_comparison_exp | null
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {
  _cast?: jsonb_cast_exp | null
  /** is the column contained in the given json value */
  _contained_in?: Scalars['jsonb'] | null
  /** does the column contain the given json value at the top level */
  _contains?: Scalars['jsonb'] | null
  _eq?: Scalars['jsonb'] | null
  _gt?: Scalars['jsonb'] | null
  _gte?: Scalars['jsonb'] | null
  /** does the string exist as a top-level key in the column */
  _has_key?: Scalars['String'] | null
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Scalars['String'][] | null
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Scalars['String'][] | null
  _in?: Scalars['jsonb'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['jsonb'] | null
  _lte?: Scalars['jsonb'] | null
  _neq?: Scalars['jsonb'] | null
  _nin?: Scalars['jsonb'][] | null
}

/** columns and relationships of "manifests" */
export interface manifestsGenqlSelection {
  app_id?: boolean | number
  app_name?: boolean | number
  description?: boolean | number
  url?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "manifests" */
export interface manifests_aggregateGenqlSelection {
  aggregate?: manifests_aggregate_fieldsGenqlSelection
  nodes?: manifestsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "manifests" */
export interface manifests_aggregate_fieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: manifests_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: manifests_max_fieldsGenqlSelection
  min?: manifests_min_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "manifests". All fields are combined with a logical 'AND'. */
export interface manifests_bool_exp {
  _and?: manifests_bool_exp[] | null
  _not?: manifests_bool_exp | null
  _or?: manifests_bool_exp[] | null
  app_id?: uuid_comparison_exp | null
  app_name?: String_comparison_exp | null
  description?: String_comparison_exp | null
  url?: String_comparison_exp | null
}

/** input type for inserting data into table "manifests" */
export interface manifests_insert_input {
  app_id?: Scalars['uuid'] | null
  app_name?: Scalars['String'] | null
  description?: Scalars['String'] | null
  url?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface manifests_max_fieldsGenqlSelection {
  app_id?: boolean | number
  app_name?: boolean | number
  description?: boolean | number
  url?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface manifests_min_fieldsGenqlSelection {
  app_id?: boolean | number
  app_name?: boolean | number
  description?: boolean | number
  url?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "manifests" */
export interface manifests_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: manifestsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "manifests" */
export interface manifests_obj_rel_insert_input {
  data?: manifests_insert_input
  /** upsert condition */
  on_conflict?: manifests_on_conflict | null
}

/** on_conflict condition type for table "manifests" */
export interface manifests_on_conflict {
  constraint?: manifests_constraint
  update_columns?: manifests_update_column[]
  where?: manifests_bool_exp | null
}

/** Ordering options when selecting data from "manifests". */
export interface manifests_order_by {
  app_id?: order_by | null
  app_name?: order_by | null
  description?: order_by | null
  url?: order_by | null
}

/** primary key columns input for table: manifests */
export interface manifests_pk_columns_input {
  app_id?: Scalars['uuid']
}

/** input type for updating data in table "manifests" */
export interface manifests_set_input {
  app_id?: Scalars['uuid'] | null
  app_name?: Scalars['String'] | null
  description?: Scalars['String'] | null
  url?: Scalars['String'] | null
}

/** Streaming cursor of the table "manifests" */
export interface manifests_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: manifests_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface manifests_stream_cursor_value_input {
  app_id?: Scalars['uuid'] | null
  app_name?: Scalars['String'] | null
  description?: Scalars['String'] | null
  url?: Scalars['String'] | null
}

export interface manifests_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: manifests_set_input | null
  where?: manifests_bool_exp
}

/** columns and relationships of "mappings" */
export interface mappingsGenqlSelection {
  abi?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  chain?: boolean | number
  contract?: boolean | number
  contract_type?: boolean | number
  tables?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "mappings" */
export interface mappings_aggregateGenqlSelection {
  aggregate?: mappings_aggregate_fieldsGenqlSelection
  nodes?: mappingsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "mappings" */
export interface mappings_aggregate_fieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: mappings_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: mappings_max_fieldsGenqlSelection
  min?: mappings_min_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface mappings_append_input {
  abi?: Scalars['jsonb'] | null
  tables?: Scalars['jsonb'] | null
}

/** Boolean expression to filter rows from the table "mappings". All fields are combined with a logical 'AND'. */
export interface mappings_bool_exp {
  _and?: mappings_bool_exp[] | null
  _not?: mappings_bool_exp | null
  _or?: mappings_bool_exp[] | null
  abi?: jsonb_comparison_exp | null
  chain?: String_comparison_exp | null
  contract?: String_comparison_exp | null
  contract_type?: String_comparison_exp | null
  tables?: jsonb_comparison_exp | null
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface mappings_delete_at_path_input {
  abi?: Scalars['String'][] | null
  tables?: Scalars['String'][] | null
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface mappings_delete_elem_input {
  abi?: Scalars['Int'] | null
  tables?: Scalars['Int'] | null
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface mappings_delete_key_input {
  abi?: Scalars['String'] | null
  tables?: Scalars['String'] | null
}

/** input type for inserting data into table "mappings" */
export interface mappings_insert_input {
  abi?: Scalars['jsonb'] | null
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  contract_type?: Scalars['String'] | null
  tables?: Scalars['jsonb'] | null
}

/** aggregate max on columns */
export interface mappings_max_fieldsGenqlSelection {
  chain?: boolean | number
  contract?: boolean | number
  contract_type?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface mappings_min_fieldsGenqlSelection {
  chain?: boolean | number
  contract?: boolean | number
  contract_type?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "mappings" */
export interface mappings_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: mappingsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "mappings" */
export interface mappings_on_conflict {
  constraint?: mappings_constraint
  update_columns?: mappings_update_column[]
  where?: mappings_bool_exp | null
}

/** Ordering options when selecting data from "mappings". */
export interface mappings_order_by {
  abi?: order_by | null
  chain?: order_by | null
  contract?: order_by | null
  contract_type?: order_by | null
  tables?: order_by | null
}

/** primary key columns input for table: mappings */
export interface mappings_pk_columns_input {
  chain?: Scalars['String']
  contract?: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface mappings_prepend_input {
  abi?: Scalars['jsonb'] | null
  tables?: Scalars['jsonb'] | null
}

/** input type for updating data in table "mappings" */
export interface mappings_set_input {
  abi?: Scalars['jsonb'] | null
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  contract_type?: Scalars['String'] | null
  tables?: Scalars['jsonb'] | null
}

/** Streaming cursor of the table "mappings" */
export interface mappings_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: mappings_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface mappings_stream_cursor_value_input {
  abi?: Scalars['jsonb'] | null
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  contract_type?: Scalars['String'] | null
  tables?: Scalars['jsonb'] | null
}

export interface mappings_updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: mappings_append_input | null
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: mappings_delete_at_path_input | null
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: mappings_delete_elem_input | null
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: mappings_delete_key_input | null
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: mappings_prepend_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: mappings_set_input | null
  where?: mappings_bool_exp
}

/** mutation root */
export interface mutation_rootGenqlSelection {
  /** delete data from the table: "actions" */
  delete_actions?: actions_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: actions_bool_exp
    }
  }
  /** delete single row from the table: "actions" */
  delete_actions_by_pk?: actionsGenqlSelection & {
    __args: { chain: Scalars['String']; global_sequence: Scalars['String'] }
  }
  /** delete data from the table: "api_users" */
  delete_api_users?: api_users_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: api_users_bool_exp
    }
  }
  /** delete single row from the table: "api_users" */
  delete_api_users_by_pk?: api_usersGenqlSelection & {
    __args: { id: Scalars['Int'] }
  }
  /** delete data from the table: "blocks" */
  delete_blocks?: blocks_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: blocks_bool_exp
    }
  }
  /** delete single row from the table: "blocks" */
  delete_blocks_by_pk?: blocksGenqlSelection & {
    __args: { block_num: Scalars['Int']; chain: Scalars['String'] }
  }
  /** delete data from the table: "chains" */
  delete_chains?: chains_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: chains_bool_exp
    }
  }
  /** delete single row from the table: "chains" */
  delete_chains_by_pk?: chainsGenqlSelection & {
    __args: { chain_name: Scalars['String'] }
  }
  /** delete data from the table: "manifests" */
  delete_manifests?: manifests_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: manifests_bool_exp
    }
  }
  /** delete single row from the table: "manifests" */
  delete_manifests_by_pk?: manifestsGenqlSelection & {
    __args: { app_id: Scalars['uuid'] }
  }
  /** delete data from the table: "mappings" */
  delete_mappings?: mappings_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: mappings_bool_exp
    }
  }
  /** delete single row from the table: "mappings" */
  delete_mappings_by_pk?: mappingsGenqlSelection & {
    __args: { chain: Scalars['String']; contract: Scalars['String'] }
  }
  /** delete data from the table: "table_rows" */
  delete_table_rows?: table_rows_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: table_rows_bool_exp
    }
  }
  /** delete single row from the table: "table_rows" */
  delete_table_rows_by_pk?: table_rowsGenqlSelection & {
    __args: {
      chain: Scalars['String']
      contract: Scalars['String']
      primary_key: Scalars['String']
      scope: Scalars['String']
      table: Scalars['String']
    }
  }
  /** delete data from the table: "transactions" */
  delete_transactions?: transactions_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: transactions_bool_exp
    }
  }
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: transactionsGenqlSelection & {
    __args: { chain: Scalars['String']; transaction_id: Scalars['String'] }
  }
  /** delete data from the table: "whitelists" */
  delete_whitelists?: whitelists_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: whitelists_bool_exp
    }
  }
  /** delete single row from the table: "whitelists" */
  delete_whitelists_by_pk?: whitelistsGenqlSelection & {
    __args: {
      app_id: Scalars['uuid']
      chain: Scalars['String']
      contract: Scalars['String']
    }
  }
  /** insert data into the table: "actions" */
  insert_actions?: actions_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: actions_insert_input[]
      /** upsert condition */
      on_conflict?: actions_on_conflict | null
    }
  }
  /** insert a single row into the table: "actions" */
  insert_actions_one?: actionsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: actions_insert_input
      /** upsert condition */
      on_conflict?: actions_on_conflict | null
    }
  }
  /** insert data into the table: "api_users" */
  insert_api_users?: api_users_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: api_users_insert_input[]
      /** upsert condition */
      on_conflict?: api_users_on_conflict | null
    }
  }
  /** insert a single row into the table: "api_users" */
  insert_api_users_one?: api_usersGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: api_users_insert_input
      /** upsert condition */
      on_conflict?: api_users_on_conflict | null
    }
  }
  /** insert data into the table: "blocks" */
  insert_blocks?: blocks_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: blocks_insert_input[]
      /** upsert condition */
      on_conflict?: blocks_on_conflict | null
    }
  }
  /** insert a single row into the table: "blocks" */
  insert_blocks_one?: blocksGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: blocks_insert_input
      /** upsert condition */
      on_conflict?: blocks_on_conflict | null
    }
  }
  /** insert data into the table: "chains" */
  insert_chains?: chains_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: chains_insert_input[]
      /** upsert condition */
      on_conflict?: chains_on_conflict | null
    }
  }
  /** insert a single row into the table: "chains" */
  insert_chains_one?: chainsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: chains_insert_input
      /** upsert condition */
      on_conflict?: chains_on_conflict | null
    }
  }
  /** insert data into the table: "manifests" */
  insert_manifests?: manifests_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: manifests_insert_input[]
      /** upsert condition */
      on_conflict?: manifests_on_conflict | null
    }
  }
  /** insert a single row into the table: "manifests" */
  insert_manifests_one?: manifestsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: manifests_insert_input
      /** upsert condition */
      on_conflict?: manifests_on_conflict | null
    }
  }
  /** insert data into the table: "mappings" */
  insert_mappings?: mappings_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: mappings_insert_input[]
      /** upsert condition */
      on_conflict?: mappings_on_conflict | null
    }
  }
  /** insert a single row into the table: "mappings" */
  insert_mappings_one?: mappingsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: mappings_insert_input
      /** upsert condition */
      on_conflict?: mappings_on_conflict | null
    }
  }
  /** insert data into the table: "table_rows" */
  insert_table_rows?: table_rows_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: table_rows_insert_input[]
      /** upsert condition */
      on_conflict?: table_rows_on_conflict | null
    }
  }
  /** insert a single row into the table: "table_rows" */
  insert_table_rows_one?: table_rowsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: table_rows_insert_input
      /** upsert condition */
      on_conflict?: table_rows_on_conflict | null
    }
  }
  /** insert data into the table: "transactions" */
  insert_transactions?: transactions_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: transactions_insert_input[]
      /** upsert condition */
      on_conflict?: transactions_on_conflict | null
    }
  }
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: transactionsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: transactions_insert_input
      /** upsert condition */
      on_conflict?: transactions_on_conflict | null
    }
  }
  /** insert data into the table: "whitelists" */
  insert_whitelists?: whitelists_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: whitelists_insert_input[]
      /** upsert condition */
      on_conflict?: whitelists_on_conflict | null
    }
  }
  /** insert a single row into the table: "whitelists" */
  insert_whitelists_one?: whitelistsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: whitelists_insert_input
      /** upsert condition */
      on_conflict?: whitelists_on_conflict | null
    }
  }
  /** update data of the table: "actions" */
  update_actions?: actions_mutation_responseGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: actions_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: actions_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: actions_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: actions_delete_key_input | null
      /** increments the numeric columns with given value of the filtered values */
      _inc?: actions_inc_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: actions_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: actions_set_input | null
      /** filter the rows which have to be updated */
      where: actions_bool_exp
    }
  }
  /** update single row of the table: "actions" */
  update_actions_by_pk?: actionsGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: actions_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: actions_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: actions_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: actions_delete_key_input | null
      /** increments the numeric columns with given value of the filtered values */
      _inc?: actions_inc_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: actions_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: actions_set_input | null
      pk_columns: actions_pk_columns_input
    }
  }
  /** update multiples rows of table: "actions" */
  update_actions_many?: actions_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: actions_updates[]
    }
  }
  /** update data of the table: "api_users" */
  update_api_users?: api_users_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: api_users_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: api_users_set_input | null
      /** filter the rows which have to be updated */
      where: api_users_bool_exp
    }
  }
  /** update single row of the table: "api_users" */
  update_api_users_by_pk?: api_usersGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: api_users_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: api_users_set_input | null
      pk_columns: api_users_pk_columns_input
    }
  }
  /** update multiples rows of table: "api_users" */
  update_api_users_many?: api_users_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: api_users_updates[]
    }
  }
  /** update data of the table: "blocks" */
  update_blocks?: blocks_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: blocks_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: blocks_set_input | null
      /** filter the rows which have to be updated */
      where: blocks_bool_exp
    }
  }
  /** update single row of the table: "blocks" */
  update_blocks_by_pk?: blocksGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: blocks_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: blocks_set_input | null
      pk_columns: blocks_pk_columns_input
    }
  }
  /** update multiples rows of table: "blocks" */
  update_blocks_many?: blocks_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: blocks_updates[]
    }
  }
  /** update data of the table: "chains" */
  update_chains?: chains_mutation_responseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: chains_set_input | null
      /** filter the rows which have to be updated */
      where: chains_bool_exp
    }
  }
  /** update single row of the table: "chains" */
  update_chains_by_pk?: chainsGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: chains_set_input | null
      pk_columns: chains_pk_columns_input
    }
  }
  /** update multiples rows of table: "chains" */
  update_chains_many?: chains_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: chains_updates[]
    }
  }
  /** update data of the table: "manifests" */
  update_manifests?: manifests_mutation_responseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: manifests_set_input | null
      /** filter the rows which have to be updated */
      where: manifests_bool_exp
    }
  }
  /** update single row of the table: "manifests" */
  update_manifests_by_pk?: manifestsGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: manifests_set_input | null
      pk_columns: manifests_pk_columns_input
    }
  }
  /** update multiples rows of table: "manifests" */
  update_manifests_many?: manifests_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: manifests_updates[]
    }
  }
  /** update data of the table: "mappings" */
  update_mappings?: mappings_mutation_responseGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: mappings_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: mappings_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: mappings_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: mappings_delete_key_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: mappings_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: mappings_set_input | null
      /** filter the rows which have to be updated */
      where: mappings_bool_exp
    }
  }
  /** update single row of the table: "mappings" */
  update_mappings_by_pk?: mappingsGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: mappings_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: mappings_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: mappings_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: mappings_delete_key_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: mappings_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: mappings_set_input | null
      pk_columns: mappings_pk_columns_input
    }
  }
  /** update multiples rows of table: "mappings" */
  update_mappings_many?: mappings_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: mappings_updates[]
    }
  }
  /** update data of the table: "table_rows" */
  update_table_rows?: table_rows_mutation_responseGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: table_rows_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: table_rows_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: table_rows_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: table_rows_delete_key_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: table_rows_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: table_rows_set_input | null
      /** filter the rows which have to be updated */
      where: table_rows_bool_exp
    }
  }
  /** update single row of the table: "table_rows" */
  update_table_rows_by_pk?: table_rowsGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: table_rows_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: table_rows_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: table_rows_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: table_rows_delete_key_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: table_rows_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: table_rows_set_input | null
      pk_columns: table_rows_pk_columns_input
    }
  }
  /** update multiples rows of table: "table_rows" */
  update_table_rows_many?: table_rows_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: table_rows_updates[]
    }
  }
  /** update data of the table: "transactions" */
  update_transactions?: transactions_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: transactions_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: transactions_set_input | null
      /** filter the rows which have to be updated */
      where: transactions_bool_exp
    }
  }
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: transactionsGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: transactions_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: transactions_set_input | null
      pk_columns: transactions_pk_columns_input
    }
  }
  /** update multiples rows of table: "transactions" */
  update_transactions_many?: transactions_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: transactions_updates[]
    }
  }
  /** update data of the table: "whitelists" */
  update_whitelists?: whitelists_mutation_responseGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: whitelists_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: whitelists_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: whitelists_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: whitelists_delete_key_input | null
      /** increments the numeric columns with given value of the filtered values */
      _inc?: whitelists_inc_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: whitelists_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: whitelists_set_input | null
      /** filter the rows which have to be updated */
      where: whitelists_bool_exp
    }
  }
  /** update single row of the table: "whitelists" */
  update_whitelists_by_pk?: whitelistsGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: whitelists_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: whitelists_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: whitelists_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: whitelists_delete_key_input | null
      /** increments the numeric columns with given value of the filtered values */
      _inc?: whitelists_inc_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: whitelists_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: whitelists_set_input | null
      pk_columns: whitelists_pk_columns_input
    }
  }
  /** update multiples rows of table: "whitelists" */
  update_whitelists_many?: whitelists_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: whitelists_updates[]
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface query_rootGenqlSelection {
  /** fetch data from the table: "actions" */
  actions?: actionsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: actions_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: actions_order_by[] | null
      /** filter the rows returned */
      where?: actions_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate?: actions_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: actions_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: actions_order_by[] | null
      /** filter the rows returned */
      where?: actions_bool_exp | null
    }
  }
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: actionsGenqlSelection & {
    __args: { chain: Scalars['String']; global_sequence: Scalars['String'] }
  }
  /** fetch data from the table: "api_users" */
  api_users?: api_usersGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: api_users_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: api_users_order_by[] | null
      /** filter the rows returned */
      where?: api_users_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "api_users" */
  api_users_aggregate?: api_users_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: api_users_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: api_users_order_by[] | null
      /** filter the rows returned */
      where?: api_users_bool_exp | null
    }
  }
  /** fetch data from the table: "api_users" using primary key columns */
  api_users_by_pk?: api_usersGenqlSelection & { __args: { id: Scalars['Int'] } }
  /** An array relationship */
  blocks?: blocksGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: blocks_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: blocks_order_by[] | null
      /** filter the rows returned */
      where?: blocks_bool_exp | null
    }
  }
  /** An aggregate relationship */
  blocks_aggregate?: blocks_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: blocks_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: blocks_order_by[] | null
      /** filter the rows returned */
      where?: blocks_bool_exp | null
    }
  }
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: blocksGenqlSelection & {
    __args: { block_num: Scalars['Int']; chain: Scalars['String'] }
  }
  /** fetch data from the table: "chains" */
  chains?: chainsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: chains_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: chains_order_by[] | null
      /** filter the rows returned */
      where?: chains_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate?: chains_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: chains_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: chains_order_by[] | null
      /** filter the rows returned */
      where?: chains_bool_exp | null
    }
  }
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk?: chainsGenqlSelection & {
    __args: { chain_name: Scalars['String'] }
  }
  /** fetch data from the table: "manifests" */
  manifests?: manifestsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: manifests_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: manifests_order_by[] | null
      /** filter the rows returned */
      where?: manifests_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "manifests" */
  manifests_aggregate?: manifests_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: manifests_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: manifests_order_by[] | null
      /** filter the rows returned */
      where?: manifests_bool_exp | null
    }
  }
  /** fetch data from the table: "manifests" using primary key columns */
  manifests_by_pk?: manifestsGenqlSelection & {
    __args: { app_id: Scalars['uuid'] }
  }
  /** fetch data from the table: "mappings" */
  mappings?: mappingsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: mappings_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: mappings_order_by[] | null
      /** filter the rows returned */
      where?: mappings_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "mappings" */
  mappings_aggregate?: mappings_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: mappings_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: mappings_order_by[] | null
      /** filter the rows returned */
      where?: mappings_bool_exp | null
    }
  }
  /** fetch data from the table: "mappings" using primary key columns */
  mappings_by_pk?: mappingsGenqlSelection & {
    __args: { chain: Scalars['String']; contract: Scalars['String'] }
  }
  /** fetch data from the table: "table_rows" */
  table_rows?: table_rowsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: table_rows_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: table_rows_order_by[] | null
      /** filter the rows returned */
      where?: table_rows_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate?: table_rows_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: table_rows_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: table_rows_order_by[] | null
      /** filter the rows returned */
      where?: table_rows_bool_exp | null
    }
  }
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk?: table_rowsGenqlSelection & {
    __args: {
      chain: Scalars['String']
      contract: Scalars['String']
      primary_key: Scalars['String']
      scope: Scalars['String']
      table: Scalars['String']
    }
  }
  /** fetch data from the table: "transactions" */
  transactions?: transactionsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: transactions_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: transactions_order_by[] | null
      /** filter the rows returned */
      where?: transactions_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate?: transactions_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: transactions_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: transactions_order_by[] | null
      /** filter the rows returned */
      where?: transactions_bool_exp | null
    }
  }
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: transactionsGenqlSelection & {
    __args: { chain: Scalars['String']; transaction_id: Scalars['String'] }
  }
  /** fetch data from the table: "whitelists" */
  whitelists?: whitelistsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: whitelists_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: whitelists_order_by[] | null
      /** filter the rows returned */
      where?: whitelists_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "whitelists" */
  whitelists_aggregate?: whitelists_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: whitelists_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: whitelists_order_by[] | null
      /** filter the rows returned */
      where?: whitelists_bool_exp | null
    }
  }
  /** fetch data from the table: "whitelists" using primary key columns */
  whitelists_by_pk?: whitelistsGenqlSelection & {
    __args: {
      app_id: Scalars['uuid']
      chain: Scalars['String']
      contract: Scalars['String']
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection {
  /** fetch data from the table: "actions" */
  actions?: actionsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: actions_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: actions_order_by[] | null
      /** filter the rows returned */
      where?: actions_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate?: actions_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: actions_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: actions_order_by[] | null
      /** filter the rows returned */
      where?: actions_bool_exp | null
    }
  }
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: actionsGenqlSelection & {
    __args: { chain: Scalars['String']; global_sequence: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "actions" */
  actions_stream?: actionsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (actions_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: actions_bool_exp | null
    }
  }
  /** fetch data from the table: "api_users" */
  api_users?: api_usersGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: api_users_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: api_users_order_by[] | null
      /** filter the rows returned */
      where?: api_users_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "api_users" */
  api_users_aggregate?: api_users_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: api_users_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: api_users_order_by[] | null
      /** filter the rows returned */
      where?: api_users_bool_exp | null
    }
  }
  /** fetch data from the table: "api_users" using primary key columns */
  api_users_by_pk?: api_usersGenqlSelection & { __args: { id: Scalars['Int'] } }
  /** fetch data from the table in a streaming manner: "api_users" */
  api_users_stream?: api_usersGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (api_users_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: api_users_bool_exp | null
    }
  }
  /** An array relationship */
  blocks?: blocksGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: blocks_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: blocks_order_by[] | null
      /** filter the rows returned */
      where?: blocks_bool_exp | null
    }
  }
  /** An aggregate relationship */
  blocks_aggregate?: blocks_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: blocks_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: blocks_order_by[] | null
      /** filter the rows returned */
      where?: blocks_bool_exp | null
    }
  }
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: blocksGenqlSelection & {
    __args: { block_num: Scalars['Int']; chain: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "blocks" */
  blocks_stream?: blocksGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (blocks_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: blocks_bool_exp | null
    }
  }
  /** fetch data from the table: "chains" */
  chains?: chainsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: chains_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: chains_order_by[] | null
      /** filter the rows returned */
      where?: chains_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate?: chains_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: chains_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: chains_order_by[] | null
      /** filter the rows returned */
      where?: chains_bool_exp | null
    }
  }
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk?: chainsGenqlSelection & {
    __args: { chain_name: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "chains" */
  chains_stream?: chainsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (chains_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: chains_bool_exp | null
    }
  }
  /** fetch data from the table: "manifests" */
  manifests?: manifestsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: manifests_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: manifests_order_by[] | null
      /** filter the rows returned */
      where?: manifests_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "manifests" */
  manifests_aggregate?: manifests_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: manifests_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: manifests_order_by[] | null
      /** filter the rows returned */
      where?: manifests_bool_exp | null
    }
  }
  /** fetch data from the table: "manifests" using primary key columns */
  manifests_by_pk?: manifestsGenqlSelection & {
    __args: { app_id: Scalars['uuid'] }
  }
  /** fetch data from the table in a streaming manner: "manifests" */
  manifests_stream?: manifestsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (manifests_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: manifests_bool_exp | null
    }
  }
  /** fetch data from the table: "mappings" */
  mappings?: mappingsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: mappings_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: mappings_order_by[] | null
      /** filter the rows returned */
      where?: mappings_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "mappings" */
  mappings_aggregate?: mappings_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: mappings_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: mappings_order_by[] | null
      /** filter the rows returned */
      where?: mappings_bool_exp | null
    }
  }
  /** fetch data from the table: "mappings" using primary key columns */
  mappings_by_pk?: mappingsGenqlSelection & {
    __args: { chain: Scalars['String']; contract: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "mappings" */
  mappings_stream?: mappingsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (mappings_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: mappings_bool_exp | null
    }
  }
  /** fetch data from the table: "table_rows" */
  table_rows?: table_rowsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: table_rows_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: table_rows_order_by[] | null
      /** filter the rows returned */
      where?: table_rows_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate?: table_rows_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: table_rows_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: table_rows_order_by[] | null
      /** filter the rows returned */
      where?: table_rows_bool_exp | null
    }
  }
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk?: table_rowsGenqlSelection & {
    __args: {
      chain: Scalars['String']
      contract: Scalars['String']
      primary_key: Scalars['String']
      scope: Scalars['String']
      table: Scalars['String']
    }
  }
  /** fetch data from the table in a streaming manner: "table_rows" */
  table_rows_stream?: table_rowsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (table_rows_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: table_rows_bool_exp | null
    }
  }
  /** fetch data from the table: "transactions" */
  transactions?: transactionsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: transactions_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: transactions_order_by[] | null
      /** filter the rows returned */
      where?: transactions_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate?: transactions_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: transactions_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: transactions_order_by[] | null
      /** filter the rows returned */
      where?: transactions_bool_exp | null
    }
  }
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: transactionsGenqlSelection & {
    __args: { chain: Scalars['String']; transaction_id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "transactions" */
  transactions_stream?: transactionsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (transactions_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: transactions_bool_exp | null
    }
  }
  /** fetch data from the table: "whitelists" */
  whitelists?: whitelistsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: whitelists_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: whitelists_order_by[] | null
      /** filter the rows returned */
      where?: whitelists_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "whitelists" */
  whitelists_aggregate?: whitelists_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: whitelists_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: whitelists_order_by[] | null
      /** filter the rows returned */
      where?: whitelists_bool_exp | null
    }
  }
  /** fetch data from the table: "whitelists" using primary key columns */
  whitelists_by_pk?: whitelistsGenqlSelection & {
    __args: {
      app_id: Scalars['uuid']
      chain: Scalars['String']
      contract: Scalars['String']
    }
  }
  /** fetch data from the table in a streaming manner: "whitelists" */
  whitelists_stream?: whitelistsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (whitelists_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: whitelists_bool_exp | null
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "table_rows" */
export interface table_rowsGenqlSelection {
  chain?: boolean | number
  contract?: boolean | number
  data?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  primary_key?: boolean | number
  scope?: boolean | number
  table?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "table_rows" */
export interface table_rows_aggregateGenqlSelection {
  aggregate?: table_rows_aggregate_fieldsGenqlSelection
  nodes?: table_rowsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface table_rows_aggregate_bool_exp {
  count?: table_rows_aggregate_bool_exp_count | null
}

export interface table_rows_aggregate_bool_exp_count {
  arguments?: table_rows_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: table_rows_bool_exp | null
  predicate?: Int_comparison_exp
}

/** aggregate fields of "table_rows" */
export interface table_rows_aggregate_fieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: table_rows_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: table_rows_max_fieldsGenqlSelection
  min?: table_rows_min_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "table_rows" */
export interface table_rows_aggregate_order_by {
  count?: order_by | null
  max?: table_rows_max_order_by | null
  min?: table_rows_min_order_by | null
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface table_rows_append_input {
  data?: Scalars['jsonb'] | null
}

/** input type for inserting array relation for remote table "table_rows" */
export interface table_rows_arr_rel_insert_input {
  data?: table_rows_insert_input[]
  /** upsert condition */
  on_conflict?: table_rows_on_conflict | null
}

/** Boolean expression to filter rows from the table "table_rows". All fields are combined with a logical 'AND'. */
export interface table_rows_bool_exp {
  _and?: table_rows_bool_exp[] | null
  _not?: table_rows_bool_exp | null
  _or?: table_rows_bool_exp[] | null
  chain?: String_comparison_exp | null
  contract?: String_comparison_exp | null
  data?: jsonb_comparison_exp | null
  primary_key?: String_comparison_exp | null
  scope?: String_comparison_exp | null
  table?: String_comparison_exp | null
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface table_rows_delete_at_path_input {
  data?: Scalars['String'][] | null
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface table_rows_delete_elem_input {
  data?: Scalars['Int'] | null
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface table_rows_delete_key_input {
  data?: Scalars['String'] | null
}

/** input type for inserting data into table "table_rows" */
export interface table_rows_insert_input {
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  data?: Scalars['jsonb'] | null
  primary_key?: Scalars['String'] | null
  scope?: Scalars['String'] | null
  table?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface table_rows_max_fieldsGenqlSelection {
  chain?: boolean | number
  contract?: boolean | number
  primary_key?: boolean | number
  scope?: boolean | number
  table?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "table_rows" */
export interface table_rows_max_order_by {
  chain?: order_by | null
  contract?: order_by | null
  primary_key?: order_by | null
  scope?: order_by | null
  table?: order_by | null
}

/** aggregate min on columns */
export interface table_rows_min_fieldsGenqlSelection {
  chain?: boolean | number
  contract?: boolean | number
  primary_key?: boolean | number
  scope?: boolean | number
  table?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "table_rows" */
export interface table_rows_min_order_by {
  chain?: order_by | null
  contract?: order_by | null
  primary_key?: order_by | null
  scope?: order_by | null
  table?: order_by | null
}

/** response of any mutation on the table "table_rows" */
export interface table_rows_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: table_rowsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "table_rows" */
export interface table_rows_on_conflict {
  constraint?: table_rows_constraint
  update_columns?: table_rows_update_column[]
  where?: table_rows_bool_exp | null
}

/** Ordering options when selecting data from "table_rows". */
export interface table_rows_order_by {
  chain?: order_by | null
  contract?: order_by | null
  data?: order_by | null
  primary_key?: order_by | null
  scope?: order_by | null
  table?: order_by | null
}

/** primary key columns input for table: table_rows */
export interface table_rows_pk_columns_input {
  chain?: Scalars['String']
  contract?: Scalars['String']
  primary_key?: Scalars['String']
  scope?: Scalars['String']
  table?: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface table_rows_prepend_input {
  data?: Scalars['jsonb'] | null
}

/** input type for updating data in table "table_rows" */
export interface table_rows_set_input {
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  data?: Scalars['jsonb'] | null
  primary_key?: Scalars['String'] | null
  scope?: Scalars['String'] | null
  table?: Scalars['String'] | null
}

/** Streaming cursor of the table "table_rows" */
export interface table_rows_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: table_rows_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface table_rows_stream_cursor_value_input {
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  data?: Scalars['jsonb'] | null
  primary_key?: Scalars['String'] | null
  scope?: Scalars['String'] | null
  table?: Scalars['String'] | null
}

export interface table_rows_updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: table_rows_append_input | null
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: table_rows_delete_at_path_input | null
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: table_rows_delete_elem_input | null
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: table_rows_delete_key_input | null
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: table_rows_prepend_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: table_rows_set_input | null
  where?: table_rows_bool_exp
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: Scalars['timestamptz'] | null
  _gt?: Scalars['timestamptz'] | null
  _gte?: Scalars['timestamptz'] | null
  _in?: Scalars['timestamptz'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['timestamptz'] | null
  _lte?: Scalars['timestamptz'] | null
  _neq?: Scalars['timestamptz'] | null
  _nin?: Scalars['timestamptz'][] | null
}

/** columns and relationships of "transactions" */
export interface transactionsGenqlSelection {
  block_num?: boolean | number
  chain?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  transaction_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "transactions" */
export interface transactions_aggregateGenqlSelection {
  aggregate?: transactions_aggregate_fieldsGenqlSelection
  nodes?: transactionsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "transactions" */
export interface transactions_aggregate_fieldsGenqlSelection {
  avg?: transactions_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: transactions_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: transactions_max_fieldsGenqlSelection
  min?: transactions_min_fieldsGenqlSelection
  stddev?: transactions_stddev_fieldsGenqlSelection
  stddev_pop?: transactions_stddev_pop_fieldsGenqlSelection
  stddev_samp?: transactions_stddev_samp_fieldsGenqlSelection
  sum?: transactions_sum_fieldsGenqlSelection
  var_pop?: transactions_var_pop_fieldsGenqlSelection
  var_samp?: transactions_var_samp_fieldsGenqlSelection
  variance?: transactions_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface transactions_avg_fieldsGenqlSelection {
  block_num?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export interface transactions_bool_exp {
  _and?: transactions_bool_exp[] | null
  _not?: transactions_bool_exp | null
  _or?: transactions_bool_exp[] | null
  block_num?: Int_comparison_exp | null
  chain?: String_comparison_exp | null
  cpu_usage_us?: Int_comparison_exp | null
  net_usage?: Int_comparison_exp | null
  net_usage_words?: Int_comparison_exp | null
  transaction_id?: String_comparison_exp | null
}

/** input type for incrementing numeric columns in table "transactions" */
export interface transactions_inc_input {
  block_num?: Scalars['Int'] | null
  cpu_usage_us?: Scalars['Int'] | null
  net_usage?: Scalars['Int'] | null
  net_usage_words?: Scalars['Int'] | null
}

/** input type for inserting data into table "transactions" */
export interface transactions_insert_input {
  block_num?: Scalars['Int'] | null
  chain?: Scalars['String'] | null
  cpu_usage_us?: Scalars['Int'] | null
  net_usage?: Scalars['Int'] | null
  net_usage_words?: Scalars['Int'] | null
  transaction_id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface transactions_max_fieldsGenqlSelection {
  block_num?: boolean | number
  chain?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  transaction_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface transactions_min_fieldsGenqlSelection {
  block_num?: boolean | number
  chain?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  transaction_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "transactions" */
export interface transactions_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: transactionsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "transactions" */
export interface transactions_obj_rel_insert_input {
  data?: transactions_insert_input
  /** upsert condition */
  on_conflict?: transactions_on_conflict | null
}

/** on_conflict condition type for table "transactions" */
export interface transactions_on_conflict {
  constraint?: transactions_constraint
  update_columns?: transactions_update_column[]
  where?: transactions_bool_exp | null
}

/** Ordering options when selecting data from "transactions". */
export interface transactions_order_by {
  block_num?: order_by | null
  chain?: order_by | null
  cpu_usage_us?: order_by | null
  net_usage?: order_by | null
  net_usage_words?: order_by | null
  transaction_id?: order_by | null
}

/** primary key columns input for table: transactions */
export interface transactions_pk_columns_input {
  chain?: Scalars['String']
  transaction_id?: Scalars['String']
}

/** input type for updating data in table "transactions" */
export interface transactions_set_input {
  block_num?: Scalars['Int'] | null
  chain?: Scalars['String'] | null
  cpu_usage_us?: Scalars['Int'] | null
  net_usage?: Scalars['Int'] | null
  net_usage_words?: Scalars['Int'] | null
  transaction_id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface transactions_stddev_fieldsGenqlSelection {
  block_num?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface transactions_stddev_pop_fieldsGenqlSelection {
  block_num?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface transactions_stddev_samp_fieldsGenqlSelection {
  block_num?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Streaming cursor of the table "transactions" */
export interface transactions_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: transactions_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface transactions_stream_cursor_value_input {
  block_num?: Scalars['Int'] | null
  chain?: Scalars['String'] | null
  cpu_usage_us?: Scalars['Int'] | null
  net_usage?: Scalars['Int'] | null
  net_usage_words?: Scalars['Int'] | null
  transaction_id?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface transactions_sum_fieldsGenqlSelection {
  block_num?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface transactions_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: transactions_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: transactions_set_input | null
  where?: transactions_bool_exp
}

/** aggregate var_pop on columns */
export interface transactions_var_pop_fieldsGenqlSelection {
  block_num?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface transactions_var_samp_fieldsGenqlSelection {
  block_num?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface transactions_variance_fieldsGenqlSelection {
  block_num?: boolean | number
  cpu_usage_us?: boolean | number
  net_usage?: boolean | number
  net_usage_words?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: Scalars['uuid'] | null
  _gt?: Scalars['uuid'] | null
  _gte?: Scalars['uuid'] | null
  _in?: Scalars['uuid'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['uuid'] | null
  _lte?: Scalars['uuid'] | null
  _neq?: Scalars['uuid'] | null
  _nin?: Scalars['uuid'][] | null
}

/** columns and relationships of "whitelists" */
export interface whitelistsGenqlSelection {
  actions?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  app_id?: boolean | number
  chain?: boolean | number
  contract?: boolean | number
  history_ready?: boolean | number
  /** An object relationship */
  manifest?: manifestsGenqlSelection
  start_block?: boolean | number
  tables?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "whitelists" */
export interface whitelists_aggregateGenqlSelection {
  aggregate?: whitelists_aggregate_fieldsGenqlSelection
  nodes?: whitelistsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "whitelists" */
export interface whitelists_aggregate_fieldsGenqlSelection {
  avg?: whitelists_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: whitelists_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: whitelists_max_fieldsGenqlSelection
  min?: whitelists_min_fieldsGenqlSelection
  stddev?: whitelists_stddev_fieldsGenqlSelection
  stddev_pop?: whitelists_stddev_pop_fieldsGenqlSelection
  stddev_samp?: whitelists_stddev_samp_fieldsGenqlSelection
  sum?: whitelists_sum_fieldsGenqlSelection
  var_pop?: whitelists_var_pop_fieldsGenqlSelection
  var_samp?: whitelists_var_samp_fieldsGenqlSelection
  variance?: whitelists_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface whitelists_append_input {
  actions?: Scalars['jsonb'] | null
  tables?: Scalars['jsonb'] | null
}

/** aggregate avg on columns */
export interface whitelists_avg_fieldsGenqlSelection {
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "whitelists". All fields are combined with a logical 'AND'. */
export interface whitelists_bool_exp {
  _and?: whitelists_bool_exp[] | null
  _not?: whitelists_bool_exp | null
  _or?: whitelists_bool_exp[] | null
  actions?: jsonb_comparison_exp | null
  app_id?: uuid_comparison_exp | null
  chain?: String_comparison_exp | null
  contract?: String_comparison_exp | null
  history_ready?: Boolean_comparison_exp | null
  manifest?: manifests_bool_exp | null
  start_block?: Int_comparison_exp | null
  tables?: jsonb_comparison_exp | null
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface whitelists_delete_at_path_input {
  actions?: Scalars['String'][] | null
  tables?: Scalars['String'][] | null
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface whitelists_delete_elem_input {
  actions?: Scalars['Int'] | null
  tables?: Scalars['Int'] | null
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface whitelists_delete_key_input {
  actions?: Scalars['String'] | null
  tables?: Scalars['String'] | null
}

/** input type for incrementing numeric columns in table "whitelists" */
export interface whitelists_inc_input {
  start_block?: Scalars['Int'] | null
}

/** input type for inserting data into table "whitelists" */
export interface whitelists_insert_input {
  actions?: Scalars['jsonb'] | null
  app_id?: Scalars['uuid'] | null
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  history_ready?: Scalars['Boolean'] | null
  manifest?: manifests_obj_rel_insert_input | null
  start_block?: Scalars['Int'] | null
  tables?: Scalars['jsonb'] | null
}

/** aggregate max on columns */
export interface whitelists_max_fieldsGenqlSelection {
  app_id?: boolean | number
  chain?: boolean | number
  contract?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface whitelists_min_fieldsGenqlSelection {
  app_id?: boolean | number
  chain?: boolean | number
  contract?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "whitelists" */
export interface whitelists_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: whitelistsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "whitelists" */
export interface whitelists_on_conflict {
  constraint?: whitelists_constraint
  update_columns?: whitelists_update_column[]
  where?: whitelists_bool_exp | null
}

/** Ordering options when selecting data from "whitelists". */
export interface whitelists_order_by {
  actions?: order_by | null
  app_id?: order_by | null
  chain?: order_by | null
  contract?: order_by | null
  history_ready?: order_by | null
  manifest?: manifests_order_by | null
  start_block?: order_by | null
  tables?: order_by | null
}

/** primary key columns input for table: whitelists */
export interface whitelists_pk_columns_input {
  app_id?: Scalars['uuid']
  chain?: Scalars['String']
  contract?: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface whitelists_prepend_input {
  actions?: Scalars['jsonb'] | null
  tables?: Scalars['jsonb'] | null
}

/** input type for updating data in table "whitelists" */
export interface whitelists_set_input {
  actions?: Scalars['jsonb'] | null
  app_id?: Scalars['uuid'] | null
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  history_ready?: Scalars['Boolean'] | null
  start_block?: Scalars['Int'] | null
  tables?: Scalars['jsonb'] | null
}

/** aggregate stddev on columns */
export interface whitelists_stddev_fieldsGenqlSelection {
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface whitelists_stddev_pop_fieldsGenqlSelection {
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface whitelists_stddev_samp_fieldsGenqlSelection {
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Streaming cursor of the table "whitelists" */
export interface whitelists_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value?: whitelists_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface whitelists_stream_cursor_value_input {
  actions?: Scalars['jsonb'] | null
  app_id?: Scalars['uuid'] | null
  chain?: Scalars['String'] | null
  contract?: Scalars['String'] | null
  history_ready?: Scalars['Boolean'] | null
  start_block?: Scalars['Int'] | null
  tables?: Scalars['jsonb'] | null
}

/** aggregate sum on columns */
export interface whitelists_sum_fieldsGenqlSelection {
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface whitelists_updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: whitelists_append_input | null
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: whitelists_delete_at_path_input | null
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: whitelists_delete_elem_input | null
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: whitelists_delete_key_input | null
  /** increments the numeric columns with given value of the filtered values */
  _inc?: whitelists_inc_input | null
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: whitelists_prepend_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: whitelists_set_input | null
  where?: whitelists_bool_exp
}

/** aggregate var_pop on columns */
export interface whitelists_var_pop_fieldsGenqlSelection {
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface whitelists_var_samp_fieldsGenqlSelection {
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface whitelists_variance_fieldsGenqlSelection {
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection

const actions_possibleTypes: string[] = ['actions']
export const isactions = (obj?: { __typename?: any } | null): obj is actions => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions"')
  return actions_possibleTypes.includes(obj.__typename)
}

const actions_aggregate_possibleTypes: string[] = ['actions_aggregate']
export const isactions_aggregate = (obj?: { __typename?: any } | null): obj is actions_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_aggregate"')
  return actions_aggregate_possibleTypes.includes(obj.__typename)
}

const actions_aggregate_fields_possibleTypes: string[] = ['actions_aggregate_fields']
export const isactions_aggregate_fields = (obj?: { __typename?: any } | null): obj is actions_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_aggregate_fields"')
  return actions_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const actions_avg_fields_possibleTypes: string[] = ['actions_avg_fields']
export const isactions_avg_fields = (obj?: { __typename?: any } | null): obj is actions_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_avg_fields"')
  return actions_avg_fields_possibleTypes.includes(obj.__typename)
}

const actions_max_fields_possibleTypes: string[] = ['actions_max_fields']
export const isactions_max_fields = (obj?: { __typename?: any } | null): obj is actions_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_max_fields"')
  return actions_max_fields_possibleTypes.includes(obj.__typename)
}

const actions_min_fields_possibleTypes: string[] = ['actions_min_fields']
export const isactions_min_fields = (obj?: { __typename?: any } | null): obj is actions_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_min_fields"')
  return actions_min_fields_possibleTypes.includes(obj.__typename)
}

const actions_mutation_response_possibleTypes: string[] = ['actions_mutation_response']
export const isactions_mutation_response = (obj?: { __typename?: any } | null): obj is actions_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_mutation_response"')
  return actions_mutation_response_possibleTypes.includes(obj.__typename)
}

const actions_stddev_fields_possibleTypes: string[] = ['actions_stddev_fields']
export const isactions_stddev_fields = (obj?: { __typename?: any } | null): obj is actions_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_stddev_fields"')
  return actions_stddev_fields_possibleTypes.includes(obj.__typename)
}

const actions_stddev_pop_fields_possibleTypes: string[] = ['actions_stddev_pop_fields']
export const isactions_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is actions_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_stddev_pop_fields"')
  return actions_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const actions_stddev_samp_fields_possibleTypes: string[] = ['actions_stddev_samp_fields']
export const isactions_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is actions_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_stddev_samp_fields"')
  return actions_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const actions_sum_fields_possibleTypes: string[] = ['actions_sum_fields']
export const isactions_sum_fields = (obj?: { __typename?: any } | null): obj is actions_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_sum_fields"')
  return actions_sum_fields_possibleTypes.includes(obj.__typename)
}

const actions_var_pop_fields_possibleTypes: string[] = ['actions_var_pop_fields']
export const isactions_var_pop_fields = (obj?: { __typename?: any } | null): obj is actions_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_var_pop_fields"')
  return actions_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const actions_var_samp_fields_possibleTypes: string[] = ['actions_var_samp_fields']
export const isactions_var_samp_fields = (obj?: { __typename?: any } | null): obj is actions_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_var_samp_fields"')
  return actions_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const actions_variance_fields_possibleTypes: string[] = ['actions_variance_fields']
export const isactions_variance_fields = (obj?: { __typename?: any } | null): obj is actions_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isactions_variance_fields"')
  return actions_variance_fields_possibleTypes.includes(obj.__typename)
}

const api_users_possibleTypes: string[] = ['api_users']
export const isapi_users = (obj?: { __typename?: any } | null): obj is api_users => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users"')
  return api_users_possibleTypes.includes(obj.__typename)
}

const api_users_aggregate_possibleTypes: string[] = ['api_users_aggregate']
export const isapi_users_aggregate = (obj?: { __typename?: any } | null): obj is api_users_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_aggregate"')
  return api_users_aggregate_possibleTypes.includes(obj.__typename)
}

const api_users_aggregate_fields_possibleTypes: string[] = ['api_users_aggregate_fields']
export const isapi_users_aggregate_fields = (obj?: { __typename?: any } | null): obj is api_users_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_aggregate_fields"')
  return api_users_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const api_users_avg_fields_possibleTypes: string[] = ['api_users_avg_fields']
export const isapi_users_avg_fields = (obj?: { __typename?: any } | null): obj is api_users_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_avg_fields"')
  return api_users_avg_fields_possibleTypes.includes(obj.__typename)
}

const api_users_max_fields_possibleTypes: string[] = ['api_users_max_fields']
export const isapi_users_max_fields = (obj?: { __typename?: any } | null): obj is api_users_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_max_fields"')
  return api_users_max_fields_possibleTypes.includes(obj.__typename)
}

const api_users_min_fields_possibleTypes: string[] = ['api_users_min_fields']
export const isapi_users_min_fields = (obj?: { __typename?: any } | null): obj is api_users_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_min_fields"')
  return api_users_min_fields_possibleTypes.includes(obj.__typename)
}

const api_users_mutation_response_possibleTypes: string[] = ['api_users_mutation_response']
export const isapi_users_mutation_response = (
  obj?: { __typename?: any } | null
): obj is api_users_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_mutation_response"')
  return api_users_mutation_response_possibleTypes.includes(obj.__typename)
}

const api_users_stddev_fields_possibleTypes: string[] = ['api_users_stddev_fields']
export const isapi_users_stddev_fields = (obj?: { __typename?: any } | null): obj is api_users_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_stddev_fields"')
  return api_users_stddev_fields_possibleTypes.includes(obj.__typename)
}

const api_users_stddev_pop_fields_possibleTypes: string[] = ['api_users_stddev_pop_fields']
export const isapi_users_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is api_users_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_stddev_pop_fields"')
  return api_users_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const api_users_stddev_samp_fields_possibleTypes: string[] = ['api_users_stddev_samp_fields']
export const isapi_users_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is api_users_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_stddev_samp_fields"')
  return api_users_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const api_users_sum_fields_possibleTypes: string[] = ['api_users_sum_fields']
export const isapi_users_sum_fields = (obj?: { __typename?: any } | null): obj is api_users_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_sum_fields"')
  return api_users_sum_fields_possibleTypes.includes(obj.__typename)
}

const api_users_var_pop_fields_possibleTypes: string[] = ['api_users_var_pop_fields']
export const isapi_users_var_pop_fields = (obj?: { __typename?: any } | null): obj is api_users_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_var_pop_fields"')
  return api_users_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const api_users_var_samp_fields_possibleTypes: string[] = ['api_users_var_samp_fields']
export const isapi_users_var_samp_fields = (obj?: { __typename?: any } | null): obj is api_users_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_var_samp_fields"')
  return api_users_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const api_users_variance_fields_possibleTypes: string[] = ['api_users_variance_fields']
export const isapi_users_variance_fields = (obj?: { __typename?: any } | null): obj is api_users_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isapi_users_variance_fields"')
  return api_users_variance_fields_possibleTypes.includes(obj.__typename)
}

const blocks_possibleTypes: string[] = ['blocks']
export const isblocks = (obj?: { __typename?: any } | null): obj is blocks => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks"')
  return blocks_possibleTypes.includes(obj.__typename)
}

const blocks_aggregate_possibleTypes: string[] = ['blocks_aggregate']
export const isblocks_aggregate = (obj?: { __typename?: any } | null): obj is blocks_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_aggregate"')
  return blocks_aggregate_possibleTypes.includes(obj.__typename)
}

const blocks_aggregate_fields_possibleTypes: string[] = ['blocks_aggregate_fields']
export const isblocks_aggregate_fields = (obj?: { __typename?: any } | null): obj is blocks_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_aggregate_fields"')
  return blocks_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const blocks_avg_fields_possibleTypes: string[] = ['blocks_avg_fields']
export const isblocks_avg_fields = (obj?: { __typename?: any } | null): obj is blocks_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_avg_fields"')
  return blocks_avg_fields_possibleTypes.includes(obj.__typename)
}

const blocks_max_fields_possibleTypes: string[] = ['blocks_max_fields']
export const isblocks_max_fields = (obj?: { __typename?: any } | null): obj is blocks_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_max_fields"')
  return blocks_max_fields_possibleTypes.includes(obj.__typename)
}

const blocks_min_fields_possibleTypes: string[] = ['blocks_min_fields']
export const isblocks_min_fields = (obj?: { __typename?: any } | null): obj is blocks_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_min_fields"')
  return blocks_min_fields_possibleTypes.includes(obj.__typename)
}

const blocks_mutation_response_possibleTypes: string[] = ['blocks_mutation_response']
export const isblocks_mutation_response = (obj?: { __typename?: any } | null): obj is blocks_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_mutation_response"')
  return blocks_mutation_response_possibleTypes.includes(obj.__typename)
}

const blocks_stddev_fields_possibleTypes: string[] = ['blocks_stddev_fields']
export const isblocks_stddev_fields = (obj?: { __typename?: any } | null): obj is blocks_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_stddev_fields"')
  return blocks_stddev_fields_possibleTypes.includes(obj.__typename)
}

const blocks_stddev_pop_fields_possibleTypes: string[] = ['blocks_stddev_pop_fields']
export const isblocks_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is blocks_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_stddev_pop_fields"')
  return blocks_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const blocks_stddev_samp_fields_possibleTypes: string[] = ['blocks_stddev_samp_fields']
export const isblocks_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is blocks_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_stddev_samp_fields"')
  return blocks_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const blocks_sum_fields_possibleTypes: string[] = ['blocks_sum_fields']
export const isblocks_sum_fields = (obj?: { __typename?: any } | null): obj is blocks_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_sum_fields"')
  return blocks_sum_fields_possibleTypes.includes(obj.__typename)
}

const blocks_var_pop_fields_possibleTypes: string[] = ['blocks_var_pop_fields']
export const isblocks_var_pop_fields = (obj?: { __typename?: any } | null): obj is blocks_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_var_pop_fields"')
  return blocks_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const blocks_var_samp_fields_possibleTypes: string[] = ['blocks_var_samp_fields']
export const isblocks_var_samp_fields = (obj?: { __typename?: any } | null): obj is blocks_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_var_samp_fields"')
  return blocks_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const blocks_variance_fields_possibleTypes: string[] = ['blocks_variance_fields']
export const isblocks_variance_fields = (obj?: { __typename?: any } | null): obj is blocks_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isblocks_variance_fields"')
  return blocks_variance_fields_possibleTypes.includes(obj.__typename)
}

const chains_possibleTypes: string[] = ['chains']
export const ischains = (obj?: { __typename?: any } | null): obj is chains => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ischains"')
  return chains_possibleTypes.includes(obj.__typename)
}

const chains_aggregate_possibleTypes: string[] = ['chains_aggregate']
export const ischains_aggregate = (obj?: { __typename?: any } | null): obj is chains_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ischains_aggregate"')
  return chains_aggregate_possibleTypes.includes(obj.__typename)
}

const chains_aggregate_fields_possibleTypes: string[] = ['chains_aggregate_fields']
export const ischains_aggregate_fields = (obj?: { __typename?: any } | null): obj is chains_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ischains_aggregate_fields"')
  return chains_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const chains_max_fields_possibleTypes: string[] = ['chains_max_fields']
export const ischains_max_fields = (obj?: { __typename?: any } | null): obj is chains_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ischains_max_fields"')
  return chains_max_fields_possibleTypes.includes(obj.__typename)
}

const chains_min_fields_possibleTypes: string[] = ['chains_min_fields']
export const ischains_min_fields = (obj?: { __typename?: any } | null): obj is chains_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ischains_min_fields"')
  return chains_min_fields_possibleTypes.includes(obj.__typename)
}

const chains_mutation_response_possibleTypes: string[] = ['chains_mutation_response']
export const ischains_mutation_response = (obj?: { __typename?: any } | null): obj is chains_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ischains_mutation_response"')
  return chains_mutation_response_possibleTypes.includes(obj.__typename)
}

const manifests_possibleTypes: string[] = ['manifests']
export const ismanifests = (obj?: { __typename?: any } | null): obj is manifests => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismanifests"')
  return manifests_possibleTypes.includes(obj.__typename)
}

const manifests_aggregate_possibleTypes: string[] = ['manifests_aggregate']
export const ismanifests_aggregate = (obj?: { __typename?: any } | null): obj is manifests_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismanifests_aggregate"')
  return manifests_aggregate_possibleTypes.includes(obj.__typename)
}

const manifests_aggregate_fields_possibleTypes: string[] = ['manifests_aggregate_fields']
export const ismanifests_aggregate_fields = (obj?: { __typename?: any } | null): obj is manifests_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismanifests_aggregate_fields"')
  return manifests_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const manifests_max_fields_possibleTypes: string[] = ['manifests_max_fields']
export const ismanifests_max_fields = (obj?: { __typename?: any } | null): obj is manifests_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismanifests_max_fields"')
  return manifests_max_fields_possibleTypes.includes(obj.__typename)
}

const manifests_min_fields_possibleTypes: string[] = ['manifests_min_fields']
export const ismanifests_min_fields = (obj?: { __typename?: any } | null): obj is manifests_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismanifests_min_fields"')
  return manifests_min_fields_possibleTypes.includes(obj.__typename)
}

const manifests_mutation_response_possibleTypes: string[] = ['manifests_mutation_response']
export const ismanifests_mutation_response = (
  obj?: { __typename?: any } | null
): obj is manifests_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismanifests_mutation_response"')
  return manifests_mutation_response_possibleTypes.includes(obj.__typename)
}

const mappings_possibleTypes: string[] = ['mappings']
export const ismappings = (obj?: { __typename?: any } | null): obj is mappings => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismappings"')
  return mappings_possibleTypes.includes(obj.__typename)
}

const mappings_aggregate_possibleTypes: string[] = ['mappings_aggregate']
export const ismappings_aggregate = (obj?: { __typename?: any } | null): obj is mappings_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismappings_aggregate"')
  return mappings_aggregate_possibleTypes.includes(obj.__typename)
}

const mappings_aggregate_fields_possibleTypes: string[] = ['mappings_aggregate_fields']
export const ismappings_aggregate_fields = (obj?: { __typename?: any } | null): obj is mappings_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismappings_aggregate_fields"')
  return mappings_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const mappings_max_fields_possibleTypes: string[] = ['mappings_max_fields']
export const ismappings_max_fields = (obj?: { __typename?: any } | null): obj is mappings_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismappings_max_fields"')
  return mappings_max_fields_possibleTypes.includes(obj.__typename)
}

const mappings_min_fields_possibleTypes: string[] = ['mappings_min_fields']
export const ismappings_min_fields = (obj?: { __typename?: any } | null): obj is mappings_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismappings_min_fields"')
  return mappings_min_fields_possibleTypes.includes(obj.__typename)
}

const mappings_mutation_response_possibleTypes: string[] = ['mappings_mutation_response']
export const ismappings_mutation_response = (obj?: { __typename?: any } | null): obj is mappings_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismappings_mutation_response"')
  return mappings_mutation_response_possibleTypes.includes(obj.__typename)
}

const mutation_root_possibleTypes: string[] = ['mutation_root']
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}

const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}

const table_rows_possibleTypes: string[] = ['table_rows']
export const istable_rows = (obj?: { __typename?: any } | null): obj is table_rows => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istable_rows"')
  return table_rows_possibleTypes.includes(obj.__typename)
}

const table_rows_aggregate_possibleTypes: string[] = ['table_rows_aggregate']
export const istable_rows_aggregate = (obj?: { __typename?: any } | null): obj is table_rows_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istable_rows_aggregate"')
  return table_rows_aggregate_possibleTypes.includes(obj.__typename)
}

const table_rows_aggregate_fields_possibleTypes: string[] = ['table_rows_aggregate_fields']
export const istable_rows_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is table_rows_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istable_rows_aggregate_fields"')
  return table_rows_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const table_rows_max_fields_possibleTypes: string[] = ['table_rows_max_fields']
export const istable_rows_max_fields = (obj?: { __typename?: any } | null): obj is table_rows_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istable_rows_max_fields"')
  return table_rows_max_fields_possibleTypes.includes(obj.__typename)
}

const table_rows_min_fields_possibleTypes: string[] = ['table_rows_min_fields']
export const istable_rows_min_fields = (obj?: { __typename?: any } | null): obj is table_rows_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istable_rows_min_fields"')
  return table_rows_min_fields_possibleTypes.includes(obj.__typename)
}

const table_rows_mutation_response_possibleTypes: string[] = ['table_rows_mutation_response']
export const istable_rows_mutation_response = (
  obj?: { __typename?: any } | null
): obj is table_rows_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istable_rows_mutation_response"')
  return table_rows_mutation_response_possibleTypes.includes(obj.__typename)
}

const transactions_possibleTypes: string[] = ['transactions']
export const istransactions = (obj?: { __typename?: any } | null): obj is transactions => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions"')
  return transactions_possibleTypes.includes(obj.__typename)
}

const transactions_aggregate_possibleTypes: string[] = ['transactions_aggregate']
export const istransactions_aggregate = (obj?: { __typename?: any } | null): obj is transactions_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_aggregate"')
  return transactions_aggregate_possibleTypes.includes(obj.__typename)
}

const transactions_aggregate_fields_possibleTypes: string[] = ['transactions_aggregate_fields']
export const istransactions_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is transactions_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_aggregate_fields"')
  return transactions_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const transactions_avg_fields_possibleTypes: string[] = ['transactions_avg_fields']
export const istransactions_avg_fields = (obj?: { __typename?: any } | null): obj is transactions_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_avg_fields"')
  return transactions_avg_fields_possibleTypes.includes(obj.__typename)
}

const transactions_max_fields_possibleTypes: string[] = ['transactions_max_fields']
export const istransactions_max_fields = (obj?: { __typename?: any } | null): obj is transactions_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_max_fields"')
  return transactions_max_fields_possibleTypes.includes(obj.__typename)
}

const transactions_min_fields_possibleTypes: string[] = ['transactions_min_fields']
export const istransactions_min_fields = (obj?: { __typename?: any } | null): obj is transactions_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_min_fields"')
  return transactions_min_fields_possibleTypes.includes(obj.__typename)
}

const transactions_mutation_response_possibleTypes: string[] = ['transactions_mutation_response']
export const istransactions_mutation_response = (
  obj?: { __typename?: any } | null
): obj is transactions_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_mutation_response"')
  return transactions_mutation_response_possibleTypes.includes(obj.__typename)
}

const transactions_stddev_fields_possibleTypes: string[] = ['transactions_stddev_fields']
export const istransactions_stddev_fields = (obj?: { __typename?: any } | null): obj is transactions_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_stddev_fields"')
  return transactions_stddev_fields_possibleTypes.includes(obj.__typename)
}

const transactions_stddev_pop_fields_possibleTypes: string[] = ['transactions_stddev_pop_fields']
export const istransactions_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is transactions_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_stddev_pop_fields"')
  return transactions_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const transactions_stddev_samp_fields_possibleTypes: string[] = ['transactions_stddev_samp_fields']
export const istransactions_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is transactions_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_stddev_samp_fields"')
  return transactions_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const transactions_sum_fields_possibleTypes: string[] = ['transactions_sum_fields']
export const istransactions_sum_fields = (obj?: { __typename?: any } | null): obj is transactions_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_sum_fields"')
  return transactions_sum_fields_possibleTypes.includes(obj.__typename)
}

const transactions_var_pop_fields_possibleTypes: string[] = ['transactions_var_pop_fields']
export const istransactions_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is transactions_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_var_pop_fields"')
  return transactions_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const transactions_var_samp_fields_possibleTypes: string[] = ['transactions_var_samp_fields']
export const istransactions_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is transactions_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_var_samp_fields"')
  return transactions_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const transactions_variance_fields_possibleTypes: string[] = ['transactions_variance_fields']
export const istransactions_variance_fields = (
  obj?: { __typename?: any } | null
): obj is transactions_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_variance_fields"')
  return transactions_variance_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_possibleTypes: string[] = ['whitelists']
export const iswhitelists = (obj?: { __typename?: any } | null): obj is whitelists => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists"')
  return whitelists_possibleTypes.includes(obj.__typename)
}

const whitelists_aggregate_possibleTypes: string[] = ['whitelists_aggregate']
export const iswhitelists_aggregate = (obj?: { __typename?: any } | null): obj is whitelists_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_aggregate"')
  return whitelists_aggregate_possibleTypes.includes(obj.__typename)
}

const whitelists_aggregate_fields_possibleTypes: string[] = ['whitelists_aggregate_fields']
export const iswhitelists_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is whitelists_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_aggregate_fields"')
  return whitelists_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_avg_fields_possibleTypes: string[] = ['whitelists_avg_fields']
export const iswhitelists_avg_fields = (obj?: { __typename?: any } | null): obj is whitelists_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_avg_fields"')
  return whitelists_avg_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_max_fields_possibleTypes: string[] = ['whitelists_max_fields']
export const iswhitelists_max_fields = (obj?: { __typename?: any } | null): obj is whitelists_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_max_fields"')
  return whitelists_max_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_min_fields_possibleTypes: string[] = ['whitelists_min_fields']
export const iswhitelists_min_fields = (obj?: { __typename?: any } | null): obj is whitelists_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_min_fields"')
  return whitelists_min_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_mutation_response_possibleTypes: string[] = ['whitelists_mutation_response']
export const iswhitelists_mutation_response = (
  obj?: { __typename?: any } | null
): obj is whitelists_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_mutation_response"')
  return whitelists_mutation_response_possibleTypes.includes(obj.__typename)
}

const whitelists_stddev_fields_possibleTypes: string[] = ['whitelists_stddev_fields']
export const iswhitelists_stddev_fields = (obj?: { __typename?: any } | null): obj is whitelists_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_stddev_fields"')
  return whitelists_stddev_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_stddev_pop_fields_possibleTypes: string[] = ['whitelists_stddev_pop_fields']
export const iswhitelists_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is whitelists_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_stddev_pop_fields"')
  return whitelists_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_stddev_samp_fields_possibleTypes: string[] = ['whitelists_stddev_samp_fields']
export const iswhitelists_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is whitelists_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_stddev_samp_fields"')
  return whitelists_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_sum_fields_possibleTypes: string[] = ['whitelists_sum_fields']
export const iswhitelists_sum_fields = (obj?: { __typename?: any } | null): obj is whitelists_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_sum_fields"')
  return whitelists_sum_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_var_pop_fields_possibleTypes: string[] = ['whitelists_var_pop_fields']
export const iswhitelists_var_pop_fields = (obj?: { __typename?: any } | null): obj is whitelists_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_var_pop_fields"')
  return whitelists_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_var_samp_fields_possibleTypes: string[] = ['whitelists_var_samp_fields']
export const iswhitelists_var_samp_fields = (obj?: { __typename?: any } | null): obj is whitelists_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_var_samp_fields"')
  return whitelists_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const whitelists_variance_fields_possibleTypes: string[] = ['whitelists_variance_fields']
export const iswhitelists_variance_fields = (obj?: { __typename?: any } | null): obj is whitelists_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswhitelists_variance_fields"')
  return whitelists_variance_fields_possibleTypes.includes(obj.__typename)
}

export const enumActionsConstraint = {
  actions_pkey: 'actions_pkey' as const,
}

export const enumActionsSelectColumn = {
  account_disk_deltas: 'account_disk_deltas' as const,
  account_ram_deltas: 'account_ram_deltas' as const,
  action: 'action' as const,
  action_ordinal: 'action_ordinal' as const,
  authorization: 'authorization' as const,
  chain: 'chain' as const,
  console: 'console' as const,
  context_free: 'context_free' as const,
  contract: 'contract' as const,
  data: 'data' as const,
  global_sequence: 'global_sequence' as const,
  receipt: 'receipt' as const,
  receiver: 'receiver' as const,
  transaction_id: 'transaction_id' as const,
}

export const enumActionsUpdateColumn = {
  account_disk_deltas: 'account_disk_deltas' as const,
  account_ram_deltas: 'account_ram_deltas' as const,
  action: 'action' as const,
  action_ordinal: 'action_ordinal' as const,
  authorization: 'authorization' as const,
  chain: 'chain' as const,
  console: 'console' as const,
  context_free: 'context_free' as const,
  contract: 'contract' as const,
  data: 'data' as const,
  global_sequence: 'global_sequence' as const,
  receipt: 'receipt' as const,
  receiver: 'receiver' as const,
  transaction_id: 'transaction_id' as const,
}

export const enumApiUsersConstraint = {
  api_users_api_key_key: 'api_users_api_key_key' as const,
  api_users_pkey: 'api_users_pkey' as const,
}

export const enumApiUsersSelectColumn = {
  account: 'account' as const,
  api_key: 'api_key' as const,
  created_at: 'created_at' as const,
  domain_names: 'domain_names' as const,
  id: 'id' as const,
  updated_at: 'updated_at' as const,
}

export const enumApiUsersUpdateColumn = {
  account: 'account' as const,
  api_key: 'api_key' as const,
  created_at: 'created_at' as const,
  domain_names: 'domain_names' as const,
  id: 'id' as const,
  updated_at: 'updated_at' as const,
}

export const enumBlocksConstraint = {
  blocks_block_id_key: 'blocks_block_id_key' as const,
  blocks_pkey: 'blocks_pkey' as const,
}

export const enumBlocksSelectColumn = {
  block_id: 'block_id' as const,
  block_num: 'block_num' as const,
  chain: 'chain' as const,
  producer: 'producer' as const,
  timestamp: 'timestamp' as const,
}

export const enumBlocksUpdateColumn = {
  block_id: 'block_id' as const,
  block_num: 'block_num' as const,
  chain: 'chain' as const,
  producer: 'producer' as const,
  timestamp: 'timestamp' as const,
}

export const enumChainsConstraint = {
  chains_pkey: 'chains_pkey' as const,
}

export const enumChainsSelectColumn = {
  chain_id: 'chain_id' as const,
  chain_name: 'chain_name' as const,
  rpc_endpoint: 'rpc_endpoint' as const,
}

export const enumChainsUpdateColumn = {
  chain_id: 'chain_id' as const,
  chain_name: 'chain_name' as const,
  rpc_endpoint: 'rpc_endpoint' as const,
}

export const enumCursorOrdering = {
  ASC: 'ASC' as const,
  DESC: 'DESC' as const,
}

export const enumManifestsConstraint = {
  manifests_pkey: 'manifests_pkey' as const,
}

export const enumManifestsSelectColumn = {
  app_id: 'app_id' as const,
  app_name: 'app_name' as const,
  description: 'description' as const,
  url: 'url' as const,
}

export const enumManifestsUpdateColumn = {
  app_id: 'app_id' as const,
  app_name: 'app_name' as const,
  description: 'description' as const,
  url: 'url' as const,
}

export const enumMappingsConstraint = {
  mappings_pkey: 'mappings_pkey' as const,
}

export const enumMappingsSelectColumn = {
  abi: 'abi' as const,
  chain: 'chain' as const,
  contract: 'contract' as const,
  contract_type: 'contract_type' as const,
  tables: 'tables' as const,
}

export const enumMappingsUpdateColumn = {
  abi: 'abi' as const,
  chain: 'chain' as const,
  contract: 'contract' as const,
  contract_type: 'contract_type' as const,
  tables: 'tables' as const,
}

export const enumOrderBy = {
  asc: 'asc' as const,
  asc_nulls_first: 'asc_nulls_first' as const,
  asc_nulls_last: 'asc_nulls_last' as const,
  desc: 'desc' as const,
  desc_nulls_first: 'desc_nulls_first' as const,
  desc_nulls_last: 'desc_nulls_last' as const,
}

export const enumTableRowsConstraint = {
  tables_pkey: 'tables_pkey' as const,
}

export const enumTableRowsSelectColumn = {
  chain: 'chain' as const,
  contract: 'contract' as const,
  data: 'data' as const,
  primary_key: 'primary_key' as const,
  scope: 'scope' as const,
  table: 'table' as const,
}

export const enumTableRowsUpdateColumn = {
  chain: 'chain' as const,
  contract: 'contract' as const,
  data: 'data' as const,
  primary_key: 'primary_key' as const,
  scope: 'scope' as const,
  table: 'table' as const,
}

export const enumTransactionsConstraint = {
  transactions_pkey: 'transactions_pkey' as const,
}

export const enumTransactionsSelectColumn = {
  block_num: 'block_num' as const,
  chain: 'chain' as const,
  cpu_usage_us: 'cpu_usage_us' as const,
  net_usage: 'net_usage' as const,
  net_usage_words: 'net_usage_words' as const,
  transaction_id: 'transaction_id' as const,
}

export const enumTransactionsUpdateColumn = {
  block_num: 'block_num' as const,
  chain: 'chain' as const,
  cpu_usage_us: 'cpu_usage_us' as const,
  net_usage: 'net_usage' as const,
  net_usage_words: 'net_usage_words' as const,
  transaction_id: 'transaction_id' as const,
}

export const enumWhitelistsConstraint = {
  whitelists_pkey: 'whitelists_pkey' as const,
}

export const enumWhitelistsSelectColumn = {
  actions: 'actions' as const,
  app_id: 'app_id' as const,
  chain: 'chain' as const,
  contract: 'contract' as const,
  history_ready: 'history_ready' as const,
  start_block: 'start_block' as const,
  tables: 'tables' as const,
}

export const enumWhitelistsUpdateColumn = {
  actions: 'actions' as const,
  app_id: 'app_id' as const,
  chain: 'chain' as const,
  contract: 'contract' as const,
  history_ready: 'history_ready' as const,
  start_block: 'start_block' as const,
  tables: 'tables' as const,
}
