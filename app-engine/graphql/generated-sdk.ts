import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  account_id: Scalars['uuid'];
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  username: Scalars['String'];
};


/** columns and relationships of "accounts" */
export type AccountsAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  addresses?: InputMaybe<Addresses_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  addresses?: InputMaybe<Addresses_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  account_id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  account_id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  account_id?: InputMaybe<Order_By>;
  addresses_aggregate?: InputMaybe<Addresses_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  account_id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "addresses" */
export type Addresses = {
  account_id: Scalars['uuid'];
  address: Scalars['String'];
  network: Scalars['String'];
};

/** aggregated selection of "addresses" */
export type Addresses_Aggregate = {
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
};


/** aggregate fields of "addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Addresses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "addresses" */
export type Addresses_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Addresses_Max_Order_By>;
  min?: InputMaybe<Addresses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "addresses" */
export type Addresses_Arr_Rel_Insert_Input = {
  data: Array<Addresses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: InputMaybe<Array<Addresses_Bool_Exp>>;
  _not?: InputMaybe<Addresses_Bool_Exp>;
  _or?: InputMaybe<Array<Addresses_Bool_Exp>>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  network?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint */
  AddressesPkey = 'addresses_pkey'
}

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  address?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  account_id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "addresses" */
export type Addresses_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  network?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  account_id?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "addresses" */
export type Addresses_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  network?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "addresses" */
export type Addresses_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Addresses>;
};

/** on_conflict condition type for table "addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns?: Array<Addresses_Update_Column>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

/** Ordering options when selecting data from "addresses". */
export type Addresses_Order_By = {
  account_id?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  network?: InputMaybe<Order_By>;
};

/** primary key columns input for table: addresses */
export type Addresses_Pk_Columns_Input = {
  address: Scalars['String'];
  network: Scalars['String'];
};

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Address = 'address',
  /** column name */
  Network = 'network'
}

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  address?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
};

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Address = 'address',
  /** column name */
  Network = 'network'
}

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  account_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _set?: InputMaybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _set?: InputMaybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};

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
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  account_id: Scalars['uuid'];
};


export type Query_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_By_PkArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};

export type Subscription_Root = {
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  account_id: Scalars['uuid'];
};


export type Subscription_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_By_PkArgs = {
  address: Scalars['String'];
  network: Scalars['String'];
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type CreateUsernameMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type CreateUsernameMutation = { insert_accounts?: { affected_rows: number } | null };


export const CreateUsernameDocument = gql`
    mutation CreateUsername($username: String) {
  insert_accounts(objects: {username: $username}) {
    affected_rows
  }
}
    `;
export type CreateUsernameMutationFn = Apollo.MutationFunction<CreateUsernameMutation, CreateUsernameMutationVariables>;

/**
 * __useCreateUsernameMutation__
 *
 * To run a mutation, you first call `useCreateUsernameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsernameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsernameMutation, { data, loading, error }] = useCreateUsernameMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateUsernameMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsernameMutation, CreateUsernameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUsernameMutation, CreateUsernameMutationVariables>(CreateUsernameDocument, options);
      }
export type CreateUsernameMutationHookResult = ReturnType<typeof useCreateUsernameMutation>;
export type CreateUsernameMutationResult = Apollo.MutationResult<CreateUsernameMutation>;
export type CreateUsernameMutationOptions = Apollo.BaseMutationOptions<CreateUsernameMutation, CreateUsernameMutationVariables>;