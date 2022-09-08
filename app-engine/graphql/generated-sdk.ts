import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  uuid: any
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "accounts" */
export type Accounts = {
  account_id: Scalars['uuid']
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>
  username: Scalars['String']
}

/** columns and relationships of "accounts" */
export type AccountsAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Addresses_Order_By>>
  where?: InputMaybe<Addresses_Bool_Exp>
}

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>
  _not?: InputMaybe<Accounts_Bool_Exp>
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>
  account_id?: InputMaybe<Uuid_Comparison_Exp>
  addresses?: InputMaybe<Addresses_Bool_Exp>
  username?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  username?: InputMaybe<Scalars['String']>
}

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>
}

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint
  update_columns?: Array<Accounts_Update_Column>
  where?: InputMaybe<Accounts_Bool_Exp>
}

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  account_id?: InputMaybe<Order_By>
  addresses_aggregate?: InputMaybe<Addresses_Aggregate_Order_By>
  username?: InputMaybe<Order_By>
}

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  account_id: Scalars['uuid']
}

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  username?: InputMaybe<Scalars['String']>
}

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Username = 'username',
}

/** columns and relationships of "addresses" */
export type Addresses = {
  account_id: Scalars['uuid']
  address: Scalars['String']
  network: Scalars['String']
}

/** order by aggregate values of table "addresses" */
export type Addresses_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Addresses_Max_Order_By>
  min?: InputMaybe<Addresses_Min_Order_By>
}

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: InputMaybe<Array<Addresses_Bool_Exp>>
  _not?: InputMaybe<Addresses_Bool_Exp>
  _or?: InputMaybe<Array<Addresses_Bool_Exp>>
  account_id?: InputMaybe<Uuid_Comparison_Exp>
  address?: InputMaybe<String_Comparison_Exp>
  network?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "addresses" */
export type Addresses_Max_Order_By = {
  account_id?: InputMaybe<Order_By>
  address?: InputMaybe<Order_By>
  network?: InputMaybe<Order_By>
}

/** order by min() on columns of table "addresses" */
export type Addresses_Min_Order_By = {
  account_id?: InputMaybe<Order_By>
  address?: InputMaybe<Order_By>
  network?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "addresses". */
export type Addresses_Order_By = {
  account_id?: InputMaybe<Order_By>
  address?: InputMaybe<Order_By>
  network?: InputMaybe<Order_By>
}

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Address = 'address',
  /** column name */
  Network = 'network',
}

/** mutation root */
export type Mutation_Root = {
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>
}

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>
  on_conflict?: InputMaybe<Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input
  on_conflict?: InputMaybe<Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: InputMaybe<Accounts_Set_Input>
  where: Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: InputMaybe<Accounts_Set_Input>
  pk_columns: Accounts_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>
}

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Query_RootAccounts_By_PkArgs = {
  account_id: Scalars['uuid']
}

export type Query_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Addresses_Order_By>>
  where?: InputMaybe<Addresses_Bool_Exp>
}

export type Query_RootAddresses_By_PkArgs = {
  address: Scalars['String']
  network: Scalars['String']
}

export type Subscription_Root = {
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>
}

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Subscription_RootAccounts_By_PkArgs = {
  account_id: Scalars['uuid']
}

export type Subscription_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Addresses_Order_By>>
  where?: InputMaybe<Addresses_Bool_Exp>
}

export type Subscription_RootAddresses_By_PkArgs = {
  address: Scalars['String']
  network: Scalars['String']
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export type CreateUsernameMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>
}>

export type CreateUsernameMutation = { insert_accounts?: { affected_rows: number } | null }

export type AccountsQueryVariables = Exact<{
  where?: InputMaybe<Accounts_Bool_Exp>
}>

export type AccountsQuery = {
  accounts: Array<{
    account_id: any
    username: string
    addresses: Array<{ account_id: any; address: string; network: string }>
  }>
}

export const CreateUsernameDocument = gql`
  mutation CreateUsername($username: String) {
    insert_accounts(objects: { username: $username }) {
      affected_rows
    }
  }
`
export const AccountsDocument = gql`
  query Accounts($where: accounts_bool_exp = {}) {
    accounts(where: $where) {
      account_id
      username
      addresses {
        account_id
        address
        network
      }
    }
  }
`
export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C,
) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    CreateUsername(
      variables?: CreateUsernameMutationVariables,
      options?: C,
    ): Promise<CreateUsernameMutation> {
      return requester<CreateUsernameMutation, CreateUsernameMutationVariables>(
        CreateUsernameDocument,
        variables,
        options,
      ) as Promise<CreateUsernameMutation>
    },
    Accounts(variables?: AccountsQueryVariables, options?: C): Promise<AccountsQuery> {
      return requester<AccountsQuery, AccountsQueryVariables>(
        AccountsDocument,
        variables,
        options,
      ) as Promise<AccountsQuery>
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
