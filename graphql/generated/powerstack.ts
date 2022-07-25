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
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
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
  account: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  verified_email?: Maybe<Scalars['Boolean']>;
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
  account?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  verified_email?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  account?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  verified_email?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  account?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  account?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  account?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verified_email?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  account: Scalars['String'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VerifiedEmail = 'verified_email'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  account?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  verified_email?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VerifiedEmail = 'verified_email'
}

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "oauth" */
  delete_oauth?: Maybe<Oauth_Mutation_Response>;
  /** delete single row from the table: "oauth" */
  delete_oauth_by_pk?: Maybe<Oauth>;
  /** delete data from the table: "wallets" */
  delete_wallets?: Maybe<Wallets_Mutation_Response>;
  /** delete single row from the table: "wallets" */
  delete_wallets_by_pk?: Maybe<Wallets>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "oauth" */
  insert_oauth?: Maybe<Oauth_Mutation_Response>;
  /** insert a single row into the table: "oauth" */
  insert_oauth_one?: Maybe<Oauth>;
  /** insert data into the table: "wallets" */
  insert_wallets?: Maybe<Wallets_Mutation_Response>;
  /** insert a single row into the table: "wallets" */
  insert_wallets_one?: Maybe<Wallets>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "oauth" */
  update_oauth?: Maybe<Oauth_Mutation_Response>;
  /** update single row of the table: "oauth" */
  update_oauth_by_pk?: Maybe<Oauth>;
  /** update data of the table: "wallets" */
  update_wallets?: Maybe<Wallets_Mutation_Response>;
  /** update single row of the table: "wallets" */
  update_wallets_by_pk?: Maybe<Wallets>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  account: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OauthArgs = {
  where: Oauth_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Oauth_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_WalletsArgs = {
  where: Wallets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wallets_By_PkArgs = {
  account: Scalars['String'];
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
export type Mutation_RootInsert_OauthArgs = {
  objects: Array<Oauth_Insert_Input>;
  on_conflict?: InputMaybe<Oauth_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Oauth_OneArgs = {
  object: Oauth_Insert_Input;
  on_conflict?: InputMaybe<Oauth_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WalletsArgs = {
  objects: Array<Wallets_Insert_Input>;
  on_conflict?: InputMaybe<Wallets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wallets_OneArgs = {
  object: Wallets_Insert_Input;
  on_conflict?: InputMaybe<Wallets_On_Conflict>;
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
export type Mutation_RootUpdate_OauthArgs = {
  _inc?: InputMaybe<Oauth_Inc_Input>;
  _set?: InputMaybe<Oauth_Set_Input>;
  where: Oauth_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Oauth_By_PkArgs = {
  _inc?: InputMaybe<Oauth_Inc_Input>;
  _set?: InputMaybe<Oauth_Set_Input>;
  pk_columns: Oauth_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WalletsArgs = {
  _set?: InputMaybe<Wallets_Set_Input>;
  where: Wallets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wallets_By_PkArgs = {
  _set?: InputMaybe<Wallets_Set_Input>;
  pk_columns: Wallets_Pk_Columns_Input;
};

/** columns and relationships of "oauth" */
export type Oauth = {
  access_token: Scalars['String'];
  access_token_secret: Scalars['String'];
  account: Scalars['String'];
  id: Scalars['Int'];
  provider: Scalars['String'];
};

/** aggregated selection of "oauth" */
export type Oauth_Aggregate = {
  aggregate?: Maybe<Oauth_Aggregate_Fields>;
  nodes: Array<Oauth>;
};

/** aggregate fields of "oauth" */
export type Oauth_Aggregate_Fields = {
  avg?: Maybe<Oauth_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Oauth_Max_Fields>;
  min?: Maybe<Oauth_Min_Fields>;
  stddev?: Maybe<Oauth_Stddev_Fields>;
  stddev_pop?: Maybe<Oauth_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Oauth_Stddev_Samp_Fields>;
  sum?: Maybe<Oauth_Sum_Fields>;
  var_pop?: Maybe<Oauth_Var_Pop_Fields>;
  var_samp?: Maybe<Oauth_Var_Samp_Fields>;
  variance?: Maybe<Oauth_Variance_Fields>;
};


/** aggregate fields of "oauth" */
export type Oauth_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Oauth_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Oauth_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "oauth". All fields are combined with a logical 'AND'. */
export type Oauth_Bool_Exp = {
  _and?: InputMaybe<Array<Oauth_Bool_Exp>>;
  _not?: InputMaybe<Oauth_Bool_Exp>;
  _or?: InputMaybe<Array<Oauth_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  access_token_secret?: InputMaybe<String_Comparison_Exp>;
  account?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "oauth" */
export enum Oauth_Constraint {
  /** unique or primary key constraint */
  OauthAccountKey = 'oauth_account_key',
  /** unique or primary key constraint */
  OauthPkey = 'oauth_pkey'
}

/** input type for incrementing numeric columns in table "oauth" */
export type Oauth_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "oauth" */
export type Oauth_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  access_token_secret?: InputMaybe<Scalars['String']>;
  account?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Oauth_Max_Fields = {
  access_token?: Maybe<Scalars['String']>;
  access_token_secret?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Oauth_Min_Fields = {
  access_token?: Maybe<Scalars['String']>;
  access_token_secret?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "oauth" */
export type Oauth_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Oauth>;
};

/** on_conflict condition type for table "oauth" */
export type Oauth_On_Conflict = {
  constraint: Oauth_Constraint;
  update_columns?: Array<Oauth_Update_Column>;
  where?: InputMaybe<Oauth_Bool_Exp>;
};

/** Ordering options when selecting data from "oauth". */
export type Oauth_Order_By = {
  access_token?: InputMaybe<Order_By>;
  access_token_secret?: InputMaybe<Order_By>;
  account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
};

/** primary key columns input for table: oauth */
export type Oauth_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "oauth" */
export enum Oauth_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenSecret = 'access_token_secret',
  /** column name */
  Account = 'account',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "oauth" */
export type Oauth_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  access_token_secret?: InputMaybe<Scalars['String']>;
  account?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Oauth_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Oauth_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Oauth_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Oauth_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "oauth" */
export enum Oauth_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenSecret = 'access_token_secret',
  /** column name */
  Account = 'account',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider'
}

/** aggregate var_pop on columns */
export type Oauth_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Oauth_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Oauth_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table: "oauth" */
  oauth: Array<Oauth>;
  /** fetch aggregated fields from the table: "oauth" */
  oauth_aggregate: Oauth_Aggregate;
  /** fetch data from the table: "oauth" using primary key columns */
  oauth_by_pk?: Maybe<Oauth>;
  /** fetch data from the table: "wallets" */
  wallets: Array<Wallets>;
  /** fetch aggregated fields from the table: "wallets" */
  wallets_aggregate: Wallets_Aggregate;
  /** fetch data from the table: "wallets" using primary key columns */
  wallets_by_pk?: Maybe<Wallets>;
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
  account: Scalars['String'];
};


export type Query_RootOauthArgs = {
  distinct_on?: InputMaybe<Array<Oauth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Oauth_Order_By>>;
  where?: InputMaybe<Oauth_Bool_Exp>;
};


export type Query_RootOauth_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Oauth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Oauth_Order_By>>;
  where?: InputMaybe<Oauth_Bool_Exp>;
};


export type Query_RootOauth_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Query_RootWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Query_RootWallets_By_PkArgs = {
  account: Scalars['String'];
};

export type Subscription_Root = {
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "oauth" */
  oauth: Array<Oauth>;
  /** fetch aggregated fields from the table: "oauth" */
  oauth_aggregate: Oauth_Aggregate;
  /** fetch data from the table: "oauth" using primary key columns */
  oauth_by_pk?: Maybe<Oauth>;
  /** fetch data from the table: "wallets" */
  wallets: Array<Wallets>;
  /** fetch aggregated fields from the table: "wallets" */
  wallets_aggregate: Wallets_Aggregate;
  /** fetch data from the table: "wallets" using primary key columns */
  wallets_by_pk?: Maybe<Wallets>;
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
  account: Scalars['String'];
};


export type Subscription_RootOauthArgs = {
  distinct_on?: InputMaybe<Array<Oauth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Oauth_Order_By>>;
  where?: InputMaybe<Oauth_Bool_Exp>;
};


export type Subscription_RootOauth_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Oauth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Oauth_Order_By>>;
  where?: InputMaybe<Oauth_Bool_Exp>;
};


export type Subscription_RootOauth_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWallets_By_PkArgs = {
  account: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "wallets" */
export type Wallets = {
  account: Scalars['String'];
  address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  network: Scalars['String'];
};

/** aggregated selection of "wallets" */
export type Wallets_Aggregate = {
  aggregate?: Maybe<Wallets_Aggregate_Fields>;
  nodes: Array<Wallets>;
};

/** aggregate fields of "wallets" */
export type Wallets_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Wallets_Max_Fields>;
  min?: Maybe<Wallets_Min_Fields>;
};


/** aggregate fields of "wallets" */
export type Wallets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wallets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "wallets". All fields are combined with a logical 'AND'. */
export type Wallets_Bool_Exp = {
  _and?: InputMaybe<Array<Wallets_Bool_Exp>>;
  _not?: InputMaybe<Wallets_Bool_Exp>;
  _or?: InputMaybe<Array<Wallets_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  network?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "wallets" */
export enum Wallets_Constraint {
  /** unique or primary key constraint */
  WalletsPkey = 'wallets_pkey'
}

/** input type for inserting data into table "wallets" */
export type Wallets_Insert_Input = {
  account?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  network?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Wallets_Max_Fields = {
  account?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  network?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Wallets_Min_Fields = {
  account?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  network?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "wallets" */
export type Wallets_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wallets>;
};

/** on_conflict condition type for table "wallets" */
export type Wallets_On_Conflict = {
  constraint: Wallets_Constraint;
  update_columns?: Array<Wallets_Update_Column>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};

/** Ordering options when selecting data from "wallets". */
export type Wallets_Order_By = {
  account?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  network?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wallets */
export type Wallets_Pk_Columns_Input = {
  account: Scalars['String'];
};

/** select columns of table "wallets" */
export enum Wallets_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Network = 'network'
}

/** input type for updating data in table "wallets" */
export type Wallets_Set_Input = {
  account?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  network?: InputMaybe<Scalars['String']>;
};

/** update columns of table "wallets" */
export enum Wallets_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Network = 'network'
}

export type AccountSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AccountSubscription = { accounts: Array<{ account: string, email: string, first_name?: string | null }> };


export const AccountDocument = gql`
    subscription Account {
  accounts {
    account
    email
    first_name
  }
}
    `;

/**
 * __useAccountSubscription__
 *
 * To run a query within a React component, call `useAccountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAccountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountSubscription({
 *   variables: {
 *   },
 * });
 */
export function useAccountSubscription(baseOptions?: Apollo.SubscriptionHookOptions<AccountSubscription, AccountSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AccountSubscription, AccountSubscriptionVariables>(AccountDocument, options);
      }
export type AccountSubscriptionHookResult = ReturnType<typeof useAccountSubscription>;
export type AccountSubscriptionResult = Apollo.SubscriptionResult<AccountSubscription>;