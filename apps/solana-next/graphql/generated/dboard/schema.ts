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

/** columns and relationships of "board_phase" */
export interface BoardPhase {
  /** An array relationship */
  boards: Boards[]
  /** An aggregate relationship */
  boardsAggregate: BoardsAggregate
  value: Scalars['String']
  __typename: 'BoardPhase'
}

/** aggregated selection of "board_phase" */
export interface BoardPhaseAggregate {
  aggregate: BoardPhaseAggregateFields | null
  nodes: BoardPhase[]
  __typename: 'BoardPhaseAggregate'
}

/** aggregate fields of "board_phase" */
export interface BoardPhaseAggregateFields {
  count: Scalars['Int']
  max: BoardPhaseMaxFields | null
  min: BoardPhaseMinFields | null
  __typename: 'BoardPhaseAggregateFields'
}

/** unique or primary key constraints on table "board_phase" */
export type BoardPhaseConstraint = 'board_phase_pkey'

export type BoardPhaseEnum = 'APPROVED' | 'DEBATE' | 'DISCUSSION' | 'PRE_VOTE' | 'REJECTED' | 'VOTING'

/** aggregate max on columns */
export interface BoardPhaseMaxFields {
  value: Scalars['String'] | null
  __typename: 'BoardPhaseMaxFields'
}

/** aggregate min on columns */
export interface BoardPhaseMinFields {
  value: Scalars['String'] | null
  __typename: 'BoardPhaseMinFields'
}

/** response of any mutation on the table "board_phase" */
export interface BoardPhaseMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: BoardPhase[]
  __typename: 'BoardPhaseMutationResponse'
}

/** select columns of table "board_phase" */
export type BoardPhaseSelectColumn = 'value'

/** update columns of table "board_phase" */
export type BoardPhaseUpdateColumn = 'value'

/** columns and relationships of "board_type" */
export interface BoardType {
  /** An array relationship */
  boards: Boards[]
  /** An aggregate relationship */
  boardsAggregate: BoardsAggregate
  value: Scalars['String']
  __typename: 'BoardType'
}

/** aggregated selection of "board_type" */
export interface BoardTypeAggregate {
  aggregate: BoardTypeAggregateFields | null
  nodes: BoardType[]
  __typename: 'BoardTypeAggregate'
}

/** aggregate fields of "board_type" */
export interface BoardTypeAggregateFields {
  count: Scalars['Int']
  max: BoardTypeMaxFields | null
  min: BoardTypeMinFields | null
  __typename: 'BoardTypeAggregateFields'
}

/** unique or primary key constraints on table "board_type" */
export type BoardTypeConstraint = 'board_type_pkey'

export type BoardTypeEnum = 'AMENDMENT_EDIT' | 'AMENDMENT_TIME' | 'DISCUSSION' | 'PROPOSAL'

/** aggregate max on columns */
export interface BoardTypeMaxFields {
  value: Scalars['String'] | null
  __typename: 'BoardTypeMaxFields'
}

/** aggregate min on columns */
export interface BoardTypeMinFields {
  value: Scalars['String'] | null
  __typename: 'BoardTypeMinFields'
}

/** response of any mutation on the table "board_type" */
export interface BoardTypeMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: BoardType[]
  __typename: 'BoardTypeMutationResponse'
}

/** select columns of table "board_type" */
export type BoardTypeSelectColumn = 'value'

/** update columns of table "board_type" */
export type BoardTypeUpdateColumn = 'value'

/** columns and relationships of "boards" */
export interface Boards {
  amendBoard: Scalars['uuid'] | null
  amendReason: Scalars['String'] | null
  author: Scalars['String']
  /** An object relationship */
  board_phase: BoardPhase
  /** An object relationship */
  board_type: BoardType
  /** An array relationship */
  boards: Boards[]
  /** An aggregate relationship */
  boardsAggregate: BoardsAggregate
  budget: Scalars['String'] | null
  /** An aggregate relationship */
  childBoardsRelAggregate: BoardsAggregate
  /** An array relationship */
  child_boards_rel: Boards[]
  /** An array relationship */
  comments: Comments[]
  /** An aggregate relationship */
  commentsAggregate: CommentsAggregate
  deadLine: Scalars['String'] | null
  description: Scalars['String']
  id: Scalars['uuid']
  kpi: Scalars['String'] | null
  newDate: Scalars['timestamptz'] | null
  parentBoard: Scalars['uuid'] | null
  /** An object relationship */
  parent_amend_rel: Boards | null
  /** An object relationship */
  parent_board_rel: Boards | null
  phase: BoardPhaseEnum
  publishDate: Scalars['timestamptz']
  time: Scalars['timestamptz']
  timeDecreasing: Scalars['Boolean'] | null
  title: Scalars['String']
  type: BoardTypeEnum
  /** An object relationship */
  user_activity: UserActivity | null
  __typename: 'Boards'
}

/** aggregated selection of "boards" */
export interface BoardsAggregate {
  aggregate: BoardsAggregateFields | null
  nodes: Boards[]
  __typename: 'BoardsAggregate'
}

/** aggregate fields of "boards" */
export interface BoardsAggregateFields {
  count: Scalars['Int']
  max: BoardsMaxFields | null
  min: BoardsMinFields | null
  __typename: 'BoardsAggregateFields'
}

/** unique or primary key constraints on table "boards" */
export type BoardsConstraint = 'boards_pkey'

/** aggregate max on columns */
export interface BoardsMaxFields {
  amendBoard: Scalars['uuid'] | null
  amendReason: Scalars['String'] | null
  author: Scalars['String'] | null
  budget: Scalars['String'] | null
  deadLine: Scalars['String'] | null
  description: Scalars['String'] | null
  id: Scalars['uuid'] | null
  kpi: Scalars['String'] | null
  newDate: Scalars['timestamptz'] | null
  parentBoard: Scalars['uuid'] | null
  publishDate: Scalars['timestamptz'] | null
  time: Scalars['timestamptz'] | null
  title: Scalars['String'] | null
  __typename: 'BoardsMaxFields'
}

/** aggregate min on columns */
export interface BoardsMinFields {
  amendBoard: Scalars['uuid'] | null
  amendReason: Scalars['String'] | null
  author: Scalars['String'] | null
  budget: Scalars['String'] | null
  deadLine: Scalars['String'] | null
  description: Scalars['String'] | null
  id: Scalars['uuid'] | null
  kpi: Scalars['String'] | null
  newDate: Scalars['timestamptz'] | null
  parentBoard: Scalars['uuid'] | null
  publishDate: Scalars['timestamptz'] | null
  time: Scalars['timestamptz'] | null
  title: Scalars['String'] | null
  __typename: 'BoardsMinFields'
}

/** response of any mutation on the table "boards" */
export interface BoardsMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Boards[]
  __typename: 'BoardsMutationResponse'
}

/** select columns of table "boards" */
export type BoardsSelectColumn =
  | 'amendBoard'
  | 'amendReason'
  | 'author'
  | 'budget'
  | 'deadLine'
  | 'description'
  | 'id'
  | 'kpi'
  | 'newDate'
  | 'parentBoard'
  | 'phase'
  | 'publishDate'
  | 'time'
  | 'timeDecreasing'
  | 'title'
  | 'type'

/** select "boardsAggregateBoolExpBool_andArgumentsColumns" columns of table "boards" */
export type BoardsSelectColumnBoardsAggregateBoolExpBool_andArgumentsColumns = 'timeDecreasing'

/** select "boardsAggregateBoolExpBool_orArgumentsColumns" columns of table "boards" */
export type BoardsSelectColumnBoardsAggregateBoolExpBool_orArgumentsColumns = 'timeDecreasing'

/** update columns of table "boards" */
export type BoardsUpdateColumn =
  | 'amendBoard'
  | 'amendReason'
  | 'author'
  | 'budget'
  | 'deadLine'
  | 'description'
  | 'id'
  | 'kpi'
  | 'newDate'
  | 'parentBoard'
  | 'phase'
  | 'publishDate'
  | 'time'
  | 'timeDecreasing'
  | 'title'
  | 'type'

/** columns and relationships of "comments" */
export interface Comments {
  author: Scalars['uuid']
  /** An object relationship */
  board: Boards
  boardId: Scalars['uuid']
  content: Scalars['String']
  createdAt: Scalars['timestamptz']
  id: Scalars['uuid']
  replyId: Scalars['uuid'] | null
  updatedAt: Scalars['timestamptz']
  upvote: Scalars['Int']
  /** An object relationship */
  user: User
  __typename: 'Comments'
}

/** aggregated selection of "comments" */
export interface CommentsAggregate {
  aggregate: CommentsAggregateFields | null
  nodes: Comments[]
  __typename: 'CommentsAggregate'
}

/** aggregate fields of "comments" */
export interface CommentsAggregateFields {
  avg: CommentsAvgFields | null
  count: Scalars['Int']
  max: CommentsMaxFields | null
  min: CommentsMinFields | null
  stddev: CommentsStddevFields | null
  stddevPop: CommentsStddevPopFields | null
  stddevSamp: CommentsStddevSampFields | null
  sum: CommentsSumFields | null
  varPop: CommentsVarPopFields | null
  varSamp: CommentsVarSampFields | null
  variance: CommentsVarianceFields | null
  __typename: 'CommentsAggregateFields'
}

/** aggregate avg on columns */
export interface CommentsAvgFields {
  upvote: Scalars['Float'] | null
  __typename: 'CommentsAvgFields'
}

/** unique or primary key constraints on table "comments" */
export type CommentsConstraint = 'comments_pkey'

/** aggregate max on columns */
export interface CommentsMaxFields {
  author: Scalars['uuid'] | null
  boardId: Scalars['uuid'] | null
  content: Scalars['String'] | null
  createdAt: Scalars['timestamptz'] | null
  id: Scalars['uuid'] | null
  replyId: Scalars['uuid'] | null
  updatedAt: Scalars['timestamptz'] | null
  upvote: Scalars['Int'] | null
  __typename: 'CommentsMaxFields'
}

/** aggregate min on columns */
export interface CommentsMinFields {
  author: Scalars['uuid'] | null
  boardId: Scalars['uuid'] | null
  content: Scalars['String'] | null
  createdAt: Scalars['timestamptz'] | null
  id: Scalars['uuid'] | null
  replyId: Scalars['uuid'] | null
  updatedAt: Scalars['timestamptz'] | null
  upvote: Scalars['Int'] | null
  __typename: 'CommentsMinFields'
}

/** response of any mutation on the table "comments" */
export interface CommentsMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Comments[]
  __typename: 'CommentsMutationResponse'
}

/** select columns of table "comments" */
export type CommentsSelectColumn =
  | 'author'
  | 'boardId'
  | 'content'
  | 'createdAt'
  | 'id'
  | 'replyId'
  | 'updatedAt'
  | 'upvote'

/** aggregate stddev on columns */
export interface CommentsStddevFields {
  upvote: Scalars['Float'] | null
  __typename: 'CommentsStddevFields'
}

/** aggregate stddevPop on columns */
export interface CommentsStddevPopFields {
  upvote: Scalars['Float'] | null
  __typename: 'CommentsStddevPopFields'
}

/** aggregate stddevSamp on columns */
export interface CommentsStddevSampFields {
  upvote: Scalars['Float'] | null
  __typename: 'CommentsStddevSampFields'
}

/** aggregate sum on columns */
export interface CommentsSumFields {
  upvote: Scalars['Int'] | null
  __typename: 'CommentsSumFields'
}

/** update columns of table "comments" */
export type CommentsUpdateColumn =
  | 'author'
  | 'boardId'
  | 'content'
  | 'createdAt'
  | 'id'
  | 'replyId'
  | 'updatedAt'
  | 'upvote'

/** aggregate varPop on columns */
export interface CommentsVarPopFields {
  upvote: Scalars['Float'] | null
  __typename: 'CommentsVarPopFields'
}

/** aggregate varSamp on columns */
export interface CommentsVarSampFields {
  upvote: Scalars['Float'] | null
  __typename: 'CommentsVarSampFields'
}

/** aggregate variance on columns */
export interface CommentsVarianceFields {
  upvote: Scalars['Float'] | null
  __typename: 'CommentsVarianceFields'
}

/** ordering argument of a cursor */
export type CursorOrdering = 'ASC' | 'DESC'

/** column ordering options */
export type OrderBy = 'ASC' | 'ASC_NULLS_FIRST' | 'ASC_NULLS_LAST' | 'DESC' | 'DESC_NULLS_FIRST' | 'DESC_NULLS_LAST'

/** columns and relationships of "user" */
export interface User {
  account: Scalars['String']
  address: Scalars['String']
  /** An array relationship */
  comments: Comments[]
  /** An aggregate relationship */
  commentsAggregate: CommentsAggregate
  id: Scalars['uuid'] | null
  preferences: Scalars['jsonb'] | null
  /** An object relationship */
  user_activity: UserActivity | null
  __typename: 'User'
}

/** columns and relationships of "user_activity" */
export interface UserActivity {
  activityId: Scalars['uuid']
  activityType: UserActivityTypeEnum
  /** An object relationship */
  board: Boards
  id: Scalars['uuid']
  /** An object relationship */
  user: User
  userId: Scalars['uuid']
  /** An object relationship */
  user_activity_type: UserActivityType
  __typename: 'UserActivity'
}

/** aggregated selection of "user_activity" */
export interface UserActivityAggregate {
  aggregate: UserActivityAggregateFields | null
  nodes: UserActivity[]
  __typename: 'UserActivityAggregate'
}

/** aggregate fields of "user_activity" */
export interface UserActivityAggregateFields {
  count: Scalars['Int']
  max: UserActivityMaxFields | null
  min: UserActivityMinFields | null
  __typename: 'UserActivityAggregateFields'
}

/** unique or primary key constraints on table "user_activity" */
export type UserActivityConstraint =
  | 'activity_pkey'
  | 'activity_user_id_key'
  | 'user_activity_activity_id_key'
  | 'user_activity_activity_type_key'

/** aggregate max on columns */
export interface UserActivityMaxFields {
  activityId: Scalars['uuid'] | null
  id: Scalars['uuid'] | null
  userId: Scalars['uuid'] | null
  __typename: 'UserActivityMaxFields'
}

/** aggregate min on columns */
export interface UserActivityMinFields {
  activityId: Scalars['uuid'] | null
  id: Scalars['uuid'] | null
  userId: Scalars['uuid'] | null
  __typename: 'UserActivityMinFields'
}

/** response of any mutation on the table "user_activity" */
export interface UserActivityMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: UserActivity[]
  __typename: 'UserActivityMutationResponse'
}

/** select columns of table "user_activity" */
export type UserActivitySelectColumn = 'activityId' | 'activityType' | 'id' | 'userId'

/** columns and relationships of "user_activity_type" */
export interface UserActivityType {
  /** An object relationship */
  user_activity: UserActivity | null
  value: Scalars['String']
  __typename: 'UserActivityType'
}

/** aggregated selection of "user_activity_type" */
export interface UserActivityTypeAggregate {
  aggregate: UserActivityTypeAggregateFields | null
  nodes: UserActivityType[]
  __typename: 'UserActivityTypeAggregate'
}

/** aggregate fields of "user_activity_type" */
export interface UserActivityTypeAggregateFields {
  count: Scalars['Int']
  max: UserActivityTypeMaxFields | null
  min: UserActivityTypeMinFields | null
  __typename: 'UserActivityTypeAggregateFields'
}

/** unique or primary key constraints on table "user_activity_type" */
export type UserActivityTypeConstraint = 'user_activity_type_pkey'

export type UserActivityTypeEnum = 'COMMENT' | 'CREATE_BOARD' | 'RANKING_UP'

/** aggregate max on columns */
export interface UserActivityTypeMaxFields {
  value: Scalars['String'] | null
  __typename: 'UserActivityTypeMaxFields'
}

/** aggregate min on columns */
export interface UserActivityTypeMinFields {
  value: Scalars['String'] | null
  __typename: 'UserActivityTypeMinFields'
}

/** response of any mutation on the table "user_activity_type" */
export interface UserActivityTypeMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: UserActivityType[]
  __typename: 'UserActivityTypeMutationResponse'
}

/** select columns of table "user_activity_type" */
export type UserActivityTypeSelectColumn = 'value'

/** update columns of table "user_activity_type" */
export type UserActivityTypeUpdateColumn = 'value'

/** update columns of table "user_activity" */
export type UserActivityUpdateColumn = 'activityId' | 'activityType' | 'id' | 'userId'

/** aggregated selection of "user" */
export interface UserAggregate {
  aggregate: UserAggregateFields | null
  nodes: User[]
  __typename: 'UserAggregate'
}

/** aggregate fields of "user" */
export interface UserAggregateFields {
  count: Scalars['Int']
  max: UserMaxFields | null
  min: UserMinFields | null
  __typename: 'UserAggregateFields'
}

/** unique or primary key constraints on table "user" */
export type UserConstraint = 'user_id_key' | 'user_pkey'

/** aggregate max on columns */
export interface UserMaxFields {
  account: Scalars['String'] | null
  address: Scalars['String'] | null
  id: Scalars['uuid'] | null
  __typename: 'UserMaxFields'
}

/** aggregate min on columns */
export interface UserMinFields {
  account: Scalars['String'] | null
  address: Scalars['String'] | null
  id: Scalars['uuid'] | null
  __typename: 'UserMinFields'
}

/** response of any mutation on the table "user" */
export interface UserMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: User[]
  __typename: 'UserMutationResponse'
}

/** select columns of table "user" */
export type UserSelectColumn = 'account' | 'address' | 'id' | 'preferences'

/** update columns of table "user" */
export type UserUpdateColumn = 'account' | 'address' | 'id' | 'preferences'

/** mutation root */
export interface mutation_root {
  /** delete data from the table: "board_phase" */
  deleteBoardPhase: BoardPhaseMutationResponse | null
  /** delete single row from the table: "board_phase" */
  deleteBoardPhaseByPk: BoardPhase | null
  /** delete data from the table: "board_type" */
  deleteBoardType: BoardTypeMutationResponse | null
  /** delete single row from the table: "board_type" */
  deleteBoardTypeByPk: BoardType | null
  /** delete data from the table: "boards" */
  deleteBoards: BoardsMutationResponse | null
  /** delete single row from the table: "boards" */
  deleteBoardsByPk: Boards | null
  /** delete data from the table: "comments" */
  deleteComments: CommentsMutationResponse | null
  /** delete single row from the table: "comments" */
  deleteCommentsByPk: Comments | null
  /** delete data from the table: "user" */
  deleteUser: UserMutationResponse | null
  /** delete data from the table: "user_activity" */
  deleteUserActivity: UserActivityMutationResponse | null
  /** delete single row from the table: "user_activity" */
  deleteUserActivityByPk: UserActivity | null
  /** delete data from the table: "user_activity_type" */
  deleteUserActivityType: UserActivityTypeMutationResponse | null
  /** delete single row from the table: "user_activity_type" */
  deleteUserActivityTypeByPk: UserActivityType | null
  /** delete single row from the table: "user" */
  deleteUserByPk: User | null
  /** insert data into the table: "board_phase" */
  insertBoardPhase: BoardPhaseMutationResponse | null
  /** insert a single row into the table: "board_phase" */
  insertBoardPhaseOne: BoardPhase | null
  /** insert data into the table: "board_type" */
  insertBoardType: BoardTypeMutationResponse | null
  /** insert a single row into the table: "board_type" */
  insertBoardTypeOne: BoardType | null
  /** insert data into the table: "boards" */
  insertBoards: BoardsMutationResponse | null
  /** insert a single row into the table: "boards" */
  insertBoardsOne: Boards | null
  /** insert data into the table: "comments" */
  insertComments: CommentsMutationResponse | null
  /** insert a single row into the table: "comments" */
  insertCommentsOne: Comments | null
  /** insert data into the table: "user" */
  insertUser: UserMutationResponse | null
  /** insert data into the table: "user_activity" */
  insertUserActivity: UserActivityMutationResponse | null
  /** insert a single row into the table: "user_activity" */
  insertUserActivityOne: UserActivity | null
  /** insert data into the table: "user_activity_type" */
  insertUserActivityType: UserActivityTypeMutationResponse | null
  /** insert a single row into the table: "user_activity_type" */
  insertUserActivityTypeOne: UserActivityType | null
  /** insert a single row into the table: "user" */
  insertUserOne: User | null
  /** update data of the table: "board_phase" */
  updateBoardPhase: BoardPhaseMutationResponse | null
  /** update single row of the table: "board_phase" */
  updateBoardPhaseByPk: BoardPhase | null
  /** update multiples rows of table: "board_phase" */
  updateBoardPhaseMany: (BoardPhaseMutationResponse | null)[] | null
  /** update data of the table: "board_type" */
  updateBoardType: BoardTypeMutationResponse | null
  /** update single row of the table: "board_type" */
  updateBoardTypeByPk: BoardType | null
  /** update multiples rows of table: "board_type" */
  updateBoardTypeMany: (BoardTypeMutationResponse | null)[] | null
  /** update data of the table: "boards" */
  updateBoards: BoardsMutationResponse | null
  /** update single row of the table: "boards" */
  updateBoardsByPk: Boards | null
  /** update multiples rows of table: "boards" */
  updateBoardsMany: (BoardsMutationResponse | null)[] | null
  /** update data of the table: "comments" */
  updateComments: CommentsMutationResponse | null
  /** update single row of the table: "comments" */
  updateCommentsByPk: Comments | null
  /** update multiples rows of table: "comments" */
  updateCommentsMany: (CommentsMutationResponse | null)[] | null
  /** update data of the table: "user" */
  updateUser: UserMutationResponse | null
  /** update data of the table: "user_activity" */
  updateUserActivity: UserActivityMutationResponse | null
  /** update single row of the table: "user_activity" */
  updateUserActivityByPk: UserActivity | null
  /** update multiples rows of table: "user_activity" */
  updateUserActivityMany: (UserActivityMutationResponse | null)[] | null
  /** update data of the table: "user_activity_type" */
  updateUserActivityType: UserActivityTypeMutationResponse | null
  /** update single row of the table: "user_activity_type" */
  updateUserActivityTypeByPk: UserActivityType | null
  /** update multiples rows of table: "user_activity_type" */
  updateUserActivityTypeMany: (UserActivityTypeMutationResponse | null)[] | null
  /** update single row of the table: "user" */
  updateUserByPk: User | null
  /** update multiples rows of table: "user" */
  updateUserMany: (UserMutationResponse | null)[] | null
  __typename: 'mutation_root'
}

export interface query_root {
  /** fetch data from the table: "board_phase" */
  boardPhase: BoardPhase[]
  /** fetch aggregated fields from the table: "board_phase" */
  boardPhaseAggregate: BoardPhaseAggregate
  /** fetch data from the table: "board_phase" using primary key columns */
  boardPhaseByPk: BoardPhase | null
  /** fetch data from the table: "board_type" */
  boardType: BoardType[]
  /** fetch aggregated fields from the table: "board_type" */
  boardTypeAggregate: BoardTypeAggregate
  /** fetch data from the table: "board_type" using primary key columns */
  boardTypeByPk: BoardType | null
  /** An array relationship */
  boards: Boards[]
  /** An aggregate relationship */
  boardsAggregate: BoardsAggregate
  /** fetch data from the table: "boards" using primary key columns */
  boardsByPk: Boards | null
  /** An array relationship */
  comments: Comments[]
  /** An aggregate relationship */
  commentsAggregate: CommentsAggregate
  /** fetch data from the table: "comments" using primary key columns */
  commentsByPk: Comments | null
  /** fetch data from the table: "user" */
  user: User[]
  /** fetch data from the table: "user_activity" */
  userActivity: UserActivity[]
  /** fetch aggregated fields from the table: "user_activity" */
  userActivityAggregate: UserActivityAggregate
  /** fetch data from the table: "user_activity" using primary key columns */
  userActivityByPk: UserActivity | null
  /** fetch data from the table: "user_activity_type" */
  userActivityType: UserActivityType[]
  /** fetch aggregated fields from the table: "user_activity_type" */
  userActivityTypeAggregate: UserActivityTypeAggregate
  /** fetch data from the table: "user_activity_type" using primary key columns */
  userActivityTypeByPk: UserActivityType | null
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  userByPk: User | null
  __typename: 'query_root'
}

export interface subscription_root {
  /** fetch data from the table: "board_phase" */
  boardPhase: BoardPhase[]
  /** fetch aggregated fields from the table: "board_phase" */
  boardPhaseAggregate: BoardPhaseAggregate
  /** fetch data from the table: "board_phase" using primary key columns */
  boardPhaseByPk: BoardPhase | null
  /** fetch data from the table in a streaming manner: "board_phase" */
  boardPhaseStream: BoardPhase[]
  /** fetch data from the table: "board_type" */
  boardType: BoardType[]
  /** fetch aggregated fields from the table: "board_type" */
  boardTypeAggregate: BoardTypeAggregate
  /** fetch data from the table: "board_type" using primary key columns */
  boardTypeByPk: BoardType | null
  /** fetch data from the table in a streaming manner: "board_type" */
  boardTypeStream: BoardType[]
  /** An array relationship */
  boards: Boards[]
  /** An aggregate relationship */
  boardsAggregate: BoardsAggregate
  /** fetch data from the table: "boards" using primary key columns */
  boardsByPk: Boards | null
  /** fetch data from the table in a streaming manner: "boards" */
  boardsStream: Boards[]
  /** An array relationship */
  comments: Comments[]
  /** An aggregate relationship */
  commentsAggregate: CommentsAggregate
  /** fetch data from the table: "comments" using primary key columns */
  commentsByPk: Comments | null
  /** fetch data from the table in a streaming manner: "comments" */
  commentsStream: Comments[]
  /** fetch data from the table: "user" */
  user: User[]
  /** fetch data from the table: "user_activity" */
  userActivity: UserActivity[]
  /** fetch aggregated fields from the table: "user_activity" */
  userActivityAggregate: UserActivityAggregate
  /** fetch data from the table: "user_activity" using primary key columns */
  userActivityByPk: UserActivity | null
  /** fetch data from the table in a streaming manner: "user_activity" */
  userActivityStream: UserActivity[]
  /** fetch data from the table: "user_activity_type" */
  userActivityType: UserActivityType[]
  /** fetch aggregated fields from the table: "user_activity_type" */
  userActivityTypeAggregate: UserActivityTypeAggregate
  /** fetch data from the table: "user_activity_type" using primary key columns */
  userActivityTypeByPk: UserActivityType | null
  /** fetch data from the table in a streaming manner: "user_activity_type" */
  userActivityTypeStream: UserActivityType[]
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  userByPk: User | null
  /** fetch data from the table in a streaming manner: "user" */
  userStream: User[]
  __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root

/** columns and relationships of "board_phase" */
export interface BoardPhaseGenqlSelection {
  /** An array relationship */
  boards?: BoardsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** An aggregate relationship */
  boardsAggregate?: BoardsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "board_phase" */
export interface BoardPhaseAggregateGenqlSelection {
  aggregate?: BoardPhaseAggregateFieldsGenqlSelection
  nodes?: BoardPhaseGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "board_phase" */
export interface BoardPhaseAggregateFieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: BoardPhaseSelectColumn[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: BoardPhaseMaxFieldsGenqlSelection
  min?: BoardPhaseMinFieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "board_phase". All fields are combined with a logical 'AND'. */
export interface BoardPhaseBoolExp {
  _and?: BoardPhaseBoolExp[] | null
  _not?: BoardPhaseBoolExp | null
  _or?: BoardPhaseBoolExp[] | null
  boards?: BoardsBoolExp | null
  boardsAggregate?: BoardsAggregateBoolExp | null
  value?: StringComparisonExp | null
}

/** Boolean expression to compare columns of type "BoardPhaseEnum". All fields are combined with logical 'AND'. */
export interface BoardPhaseEnumComparisonExp {
  _eq?: BoardPhaseEnum | null
  _in?: BoardPhaseEnum[] | null
  _isNull?: Scalars['Boolean'] | null
  _neq?: BoardPhaseEnum | null
  _nin?: BoardPhaseEnum[] | null
}

/** input type for inserting data into table "board_phase" */
export interface BoardPhaseInsertInput {
  boards?: BoardsArrRelInsertInput | null
  value?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface BoardPhaseMaxFieldsGenqlSelection {
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface BoardPhaseMinFieldsGenqlSelection {
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "board_phase" */
export interface BoardPhaseMutationResponseGenqlSelection {
  /** number of rows affected by the mutation */
  affectedRows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: BoardPhaseGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "board_phase" */
export interface BoardPhaseObjRelInsertInput {
  data?: BoardPhaseInsertInput
  /** upsert condition */
  onConflict?: BoardPhaseOnConflict | null
}

/** on_conflict condition type for table "board_phase" */
export interface BoardPhaseOnConflict {
  constraint?: BoardPhaseConstraint
  updateColumns?: BoardPhaseUpdateColumn[]
  where?: BoardPhaseBoolExp | null
}

/** Ordering options when selecting data from "board_phase". */
export interface BoardPhaseOrderBy {
  boardsAggregate?: BoardsAggregateOrderBy | null
  value?: OrderBy | null
}

/** primary key columns input for table: board_phase */
export interface BoardPhasePkColumnsInput {
  value?: Scalars['String']
}

/** input type for updating data in table "board_phase" */
export interface BoardPhaseSetInput {
  value?: Scalars['String'] | null
}

/** Streaming cursor of the table "board_phase" */
export interface BoardPhaseStreamCursorInput {
  /** Stream column input with initial value */
  initialValue?: BoardPhaseStreamCursorValueInput
  /** cursor ordering */
  ordering?: CursorOrdering | null
}

/** Initial value of the column from where the streaming should start */
export interface BoardPhaseStreamCursorValueInput {
  value?: Scalars['String'] | null
}

export interface BoardPhaseUpdates {
  /** sets the columns of the filtered rows to the given values */
  _set?: BoardPhaseSetInput | null
  /** filter the rows which have to be updated */
  where?: BoardPhaseBoolExp
}

/** columns and relationships of "board_type" */
export interface BoardTypeGenqlSelection {
  /** An array relationship */
  boards?: BoardsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** An aggregate relationship */
  boardsAggregate?: BoardsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "board_type" */
export interface BoardTypeAggregateGenqlSelection {
  aggregate?: BoardTypeAggregateFieldsGenqlSelection
  nodes?: BoardTypeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "board_type" */
export interface BoardTypeAggregateFieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: BoardTypeSelectColumn[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: BoardTypeMaxFieldsGenqlSelection
  min?: BoardTypeMinFieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "board_type". All fields are combined with a logical 'AND'. */
export interface BoardTypeBoolExp {
  _and?: BoardTypeBoolExp[] | null
  _not?: BoardTypeBoolExp | null
  _or?: BoardTypeBoolExp[] | null
  boards?: BoardsBoolExp | null
  boardsAggregate?: BoardsAggregateBoolExp | null
  value?: StringComparisonExp | null
}

/** Boolean expression to compare columns of type "BoardTypeEnum". All fields are combined with logical 'AND'. */
export interface BoardTypeEnumComparisonExp {
  _eq?: BoardTypeEnum | null
  _in?: BoardTypeEnum[] | null
  _isNull?: Scalars['Boolean'] | null
  _neq?: BoardTypeEnum | null
  _nin?: BoardTypeEnum[] | null
}

/** input type for inserting data into table "board_type" */
export interface BoardTypeInsertInput {
  boards?: BoardsArrRelInsertInput | null
  value?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface BoardTypeMaxFieldsGenqlSelection {
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface BoardTypeMinFieldsGenqlSelection {
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "board_type" */
export interface BoardTypeMutationResponseGenqlSelection {
  /** number of rows affected by the mutation */
  affectedRows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: BoardTypeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "board_type" */
export interface BoardTypeObjRelInsertInput {
  data?: BoardTypeInsertInput
  /** upsert condition */
  onConflict?: BoardTypeOnConflict | null
}

/** on_conflict condition type for table "board_type" */
export interface BoardTypeOnConflict {
  constraint?: BoardTypeConstraint
  updateColumns?: BoardTypeUpdateColumn[]
  where?: BoardTypeBoolExp | null
}

/** Ordering options when selecting data from "board_type". */
export interface BoardTypeOrderBy {
  boardsAggregate?: BoardsAggregateOrderBy | null
  value?: OrderBy | null
}

/** primary key columns input for table: board_type */
export interface BoardTypePkColumnsInput {
  value?: Scalars['String']
}

/** input type for updating data in table "board_type" */
export interface BoardTypeSetInput {
  value?: Scalars['String'] | null
}

/** Streaming cursor of the table "board_type" */
export interface BoardTypeStreamCursorInput {
  /** Stream column input with initial value */
  initialValue?: BoardTypeStreamCursorValueInput
  /** cursor ordering */
  ordering?: CursorOrdering | null
}

/** Initial value of the column from where the streaming should start */
export interface BoardTypeStreamCursorValueInput {
  value?: Scalars['String'] | null
}

export interface BoardTypeUpdates {
  /** sets the columns of the filtered rows to the given values */
  _set?: BoardTypeSetInput | null
  /** filter the rows which have to be updated */
  where?: BoardTypeBoolExp
}

/** columns and relationships of "boards" */
export interface BoardsGenqlSelection {
  amendBoard?: boolean | number
  amendReason?: boolean | number
  author?: boolean | number
  /** An object relationship */
  board_phase?: BoardPhaseGenqlSelection
  /** An object relationship */
  board_type?: BoardTypeGenqlSelection
  /** An array relationship */
  boards?: BoardsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** An aggregate relationship */
  boardsAggregate?: BoardsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  budget?: boolean | number
  /** An aggregate relationship */
  childBoardsRelAggregate?: BoardsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** An array relationship */
  child_boards_rel?: BoardsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** An array relationship */
  comments?: CommentsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: CommentsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: CommentsOrderBy[] | null
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  /** An aggregate relationship */
  commentsAggregate?: CommentsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: CommentsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: CommentsOrderBy[] | null
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  deadLine?: boolean | number
  description?: boolean | number
  id?: boolean | number
  kpi?: boolean | number
  newDate?: boolean | number
  parentBoard?: boolean | number
  /** An object relationship */
  parent_amend_rel?: BoardsGenqlSelection
  /** An object relationship */
  parent_board_rel?: BoardsGenqlSelection
  phase?: boolean | number
  publishDate?: boolean | number
  time?: boolean | number
  timeDecreasing?: boolean | number
  title?: boolean | number
  type?: boolean | number
  /** An object relationship */
  user_activity?: UserActivityGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "boards" */
export interface BoardsAggregateGenqlSelection {
  aggregate?: BoardsAggregateFieldsGenqlSelection
  nodes?: BoardsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface BoardsAggregateBoolExp {
  bool_and?: boardsAggregateBoolExpBool_and | null
  bool_or?: boardsAggregateBoolExpBool_or | null
  count?: boardsAggregateBoolExpCount | null
}

/** aggregate fields of "boards" */
export interface BoardsAggregateFieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: BoardsSelectColumn[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: BoardsMaxFieldsGenqlSelection
  min?: BoardsMinFieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "boards" */
export interface BoardsAggregateOrderBy {
  count?: OrderBy | null
  max?: BoardsMaxOrderBy | null
  min?: BoardsMinOrderBy | null
}

/** input type for inserting array relation for remote table "boards" */
export interface BoardsArrRelInsertInput {
  data?: BoardsInsertInput[]
  /** upsert condition */
  onConflict?: BoardsOnConflict | null
}

/** Boolean expression to filter rows from the table "boards". All fields are combined with a logical 'AND'. */
export interface BoardsBoolExp {
  _and?: BoardsBoolExp[] | null
  _not?: BoardsBoolExp | null
  _or?: BoardsBoolExp[] | null
  amendBoard?: UuidComparisonExp | null
  amendReason?: StringComparisonExp | null
  author?: StringComparisonExp | null
  board_phase?: BoardPhaseBoolExp | null
  board_type?: BoardTypeBoolExp | null
  boards?: BoardsBoolExp | null
  boardsAggregate?: BoardsAggregateBoolExp | null
  budget?: StringComparisonExp | null
  child_boards_rel?: BoardsBoolExp | null
  child_boards_relAggregate?: BoardsAggregateBoolExp | null
  comments?: CommentsBoolExp | null
  commentsAggregate?: CommentsAggregateBoolExp | null
  deadLine?: StringComparisonExp | null
  description?: StringComparisonExp | null
  id?: UuidComparisonExp | null
  kpi?: StringComparisonExp | null
  newDate?: TimestamptzComparisonExp | null
  parentBoard?: UuidComparisonExp | null
  parent_amend_rel?: BoardsBoolExp | null
  parent_board_rel?: BoardsBoolExp | null
  phase?: BoardPhaseEnumComparisonExp | null
  publishDate?: TimestamptzComparisonExp | null
  time?: TimestamptzComparisonExp | null
  timeDecreasing?: BooleanComparisonExp | null
  title?: StringComparisonExp | null
  type?: BoardTypeEnumComparisonExp | null
  user_activity?: UserActivityBoolExp | null
}

/** input type for inserting data into table "boards" */
export interface BoardsInsertInput {
  amendBoard?: Scalars['uuid'] | null
  amendReason?: Scalars['String'] | null
  author?: Scalars['String'] | null
  board_phase?: BoardPhaseObjRelInsertInput | null
  board_type?: BoardTypeObjRelInsertInput | null
  boards?: BoardsArrRelInsertInput | null
  budget?: Scalars['String'] | null
  child_boards_rel?: BoardsArrRelInsertInput | null
  comments?: CommentsArrRelInsertInput | null
  deadLine?: Scalars['String'] | null
  description?: Scalars['String'] | null
  id?: Scalars['uuid'] | null
  kpi?: Scalars['String'] | null
  newDate?: Scalars['timestamptz'] | null
  parentBoard?: Scalars['uuid'] | null
  parent_amend_rel?: BoardsObjRelInsertInput | null
  parent_board_rel?: BoardsObjRelInsertInput | null
  phase?: BoardPhaseEnum | null
  publishDate?: Scalars['timestamptz'] | null
  time?: Scalars['timestamptz'] | null
  timeDecreasing?: Scalars['Boolean'] | null
  title?: Scalars['String'] | null
  type?: BoardTypeEnum | null
  user_activity?: UserActivityObjRelInsertInput | null
}

/** aggregate max on columns */
export interface BoardsMaxFieldsGenqlSelection {
  amendBoard?: boolean | number
  amendReason?: boolean | number
  author?: boolean | number
  budget?: boolean | number
  deadLine?: boolean | number
  description?: boolean | number
  id?: boolean | number
  kpi?: boolean | number
  newDate?: boolean | number
  parentBoard?: boolean | number
  publishDate?: boolean | number
  time?: boolean | number
  title?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "boards" */
export interface BoardsMaxOrderBy {
  amendBoard?: OrderBy | null
  amendReason?: OrderBy | null
  author?: OrderBy | null
  budget?: OrderBy | null
  deadLine?: OrderBy | null
  description?: OrderBy | null
  id?: OrderBy | null
  kpi?: OrderBy | null
  newDate?: OrderBy | null
  parentBoard?: OrderBy | null
  publishDate?: OrderBy | null
  time?: OrderBy | null
  title?: OrderBy | null
}

/** aggregate min on columns */
export interface BoardsMinFieldsGenqlSelection {
  amendBoard?: boolean | number
  amendReason?: boolean | number
  author?: boolean | number
  budget?: boolean | number
  deadLine?: boolean | number
  description?: boolean | number
  id?: boolean | number
  kpi?: boolean | number
  newDate?: boolean | number
  parentBoard?: boolean | number
  publishDate?: boolean | number
  time?: boolean | number
  title?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "boards" */
export interface BoardsMinOrderBy {
  amendBoard?: OrderBy | null
  amendReason?: OrderBy | null
  author?: OrderBy | null
  budget?: OrderBy | null
  deadLine?: OrderBy | null
  description?: OrderBy | null
  id?: OrderBy | null
  kpi?: OrderBy | null
  newDate?: OrderBy | null
  parentBoard?: OrderBy | null
  publishDate?: OrderBy | null
  time?: OrderBy | null
  title?: OrderBy | null
}

/** response of any mutation on the table "boards" */
export interface BoardsMutationResponseGenqlSelection {
  /** number of rows affected by the mutation */
  affectedRows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: BoardsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "boards" */
export interface BoardsObjRelInsertInput {
  data?: BoardsInsertInput
  /** upsert condition */
  onConflict?: BoardsOnConflict | null
}

/** on_conflict condition type for table "boards" */
export interface BoardsOnConflict {
  constraint?: BoardsConstraint
  updateColumns?: BoardsUpdateColumn[]
  where?: BoardsBoolExp | null
}

/** Ordering options when selecting data from "boards". */
export interface BoardsOrderBy {
  amendBoard?: OrderBy | null
  amendReason?: OrderBy | null
  author?: OrderBy | null
  board_phase?: BoardPhaseOrderBy | null
  board_type?: BoardTypeOrderBy | null
  boardsAggregate?: BoardsAggregateOrderBy | null
  budget?: OrderBy | null
  child_boards_relAggregate?: BoardsAggregateOrderBy | null
  commentsAggregate?: CommentsAggregateOrderBy | null
  deadLine?: OrderBy | null
  description?: OrderBy | null
  id?: OrderBy | null
  kpi?: OrderBy | null
  newDate?: OrderBy | null
  parentBoard?: OrderBy | null
  parent_amend_rel?: BoardsOrderBy | null
  parent_board_rel?: BoardsOrderBy | null
  phase?: OrderBy | null
  publishDate?: OrderBy | null
  time?: OrderBy | null
  timeDecreasing?: OrderBy | null
  title?: OrderBy | null
  type?: OrderBy | null
  user_activity?: UserActivityOrderBy | null
}

/** primary key columns input for table: boards */
export interface BoardsPkColumnsInput {
  id?: Scalars['uuid']
}

/** input type for updating data in table "boards" */
export interface BoardsSetInput {
  amendBoard?: Scalars['uuid'] | null
  amendReason?: Scalars['String'] | null
  author?: Scalars['String'] | null
  budget?: Scalars['String'] | null
  deadLine?: Scalars['String'] | null
  description?: Scalars['String'] | null
  id?: Scalars['uuid'] | null
  kpi?: Scalars['String'] | null
  newDate?: Scalars['timestamptz'] | null
  parentBoard?: Scalars['uuid'] | null
  phase?: BoardPhaseEnum | null
  publishDate?: Scalars['timestamptz'] | null
  time?: Scalars['timestamptz'] | null
  timeDecreasing?: Scalars['Boolean'] | null
  title?: Scalars['String'] | null
  type?: BoardTypeEnum | null
}

/** Streaming cursor of the table "boards" */
export interface BoardsStreamCursorInput {
  /** Stream column input with initial value */
  initialValue?: BoardsStreamCursorValueInput
  /** cursor ordering */
  ordering?: CursorOrdering | null
}

/** Initial value of the column from where the streaming should start */
export interface BoardsStreamCursorValueInput {
  amendBoard?: Scalars['uuid'] | null
  amendReason?: Scalars['String'] | null
  author?: Scalars['String'] | null
  budget?: Scalars['String'] | null
  deadLine?: Scalars['String'] | null
  description?: Scalars['String'] | null
  id?: Scalars['uuid'] | null
  kpi?: Scalars['String'] | null
  newDate?: Scalars['timestamptz'] | null
  parentBoard?: Scalars['uuid'] | null
  phase?: BoardPhaseEnum | null
  publishDate?: Scalars['timestamptz'] | null
  time?: Scalars['timestamptz'] | null
  timeDecreasing?: Scalars['Boolean'] | null
  title?: Scalars['String'] | null
  type?: BoardTypeEnum | null
}

export interface BoardsUpdates {
  /** sets the columns of the filtered rows to the given values */
  _set?: BoardsSetInput | null
  /** filter the rows which have to be updated */
  where?: BoardsBoolExp
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {
  _eq?: Scalars['Boolean'] | null
  _gt?: Scalars['Boolean'] | null
  _gte?: Scalars['Boolean'] | null
  _in?: Scalars['Boolean'][] | null
  _isNull?: Scalars['Boolean'] | null
  _lt?: Scalars['Boolean'] | null
  _lte?: Scalars['Boolean'] | null
  _neq?: Scalars['Boolean'] | null
  _nin?: Scalars['Boolean'][] | null
}

/** columns and relationships of "comments" */
export interface CommentsGenqlSelection {
  author?: boolean | number
  /** An object relationship */
  board?: BoardsGenqlSelection
  boardId?: boolean | number
  content?: boolean | number
  createdAt?: boolean | number
  id?: boolean | number
  replyId?: boolean | number
  updatedAt?: boolean | number
  upvote?: boolean | number
  /** An object relationship */
  user?: UserGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "comments" */
export interface CommentsAggregateGenqlSelection {
  aggregate?: CommentsAggregateFieldsGenqlSelection
  nodes?: CommentsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CommentsAggregateBoolExp {
  count?: commentsAggregateBoolExpCount | null
}

/** aggregate fields of "comments" */
export interface CommentsAggregateFieldsGenqlSelection {
  avg?: CommentsAvgFieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: CommentsSelectColumn[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: CommentsMaxFieldsGenqlSelection
  min?: CommentsMinFieldsGenqlSelection
  stddev?: CommentsStddevFieldsGenqlSelection
  stddevPop?: CommentsStddevPopFieldsGenqlSelection
  stddevSamp?: CommentsStddevSampFieldsGenqlSelection
  sum?: CommentsSumFieldsGenqlSelection
  varPop?: CommentsVarPopFieldsGenqlSelection
  varSamp?: CommentsVarSampFieldsGenqlSelection
  variance?: CommentsVarianceFieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "comments" */
export interface CommentsAggregateOrderBy {
  avg?: CommentsAvgOrderBy | null
  count?: OrderBy | null
  max?: CommentsMaxOrderBy | null
  min?: CommentsMinOrderBy | null
  stddev?: CommentsStddevOrderBy | null
  stddevPop?: CommentsStddevPopOrderBy | null
  stddevSamp?: CommentsStddevSampOrderBy | null
  sum?: CommentsSumOrderBy | null
  varPop?: CommentsVarPopOrderBy | null
  varSamp?: CommentsVarSampOrderBy | null
  variance?: CommentsVarianceOrderBy | null
}

/** input type for inserting array relation for remote table "comments" */
export interface CommentsArrRelInsertInput {
  data?: CommentsInsertInput[]
  /** upsert condition */
  onConflict?: CommentsOnConflict | null
}

/** aggregate avg on columns */
export interface CommentsAvgFieldsGenqlSelection {
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "comments" */
export interface CommentsAvgOrderBy {
  upvote?: OrderBy | null
}

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export interface CommentsBoolExp {
  _and?: CommentsBoolExp[] | null
  _not?: CommentsBoolExp | null
  _or?: CommentsBoolExp[] | null
  author?: UuidComparisonExp | null
  board?: BoardsBoolExp | null
  boardId?: UuidComparisonExp | null
  content?: StringComparisonExp | null
  createdAt?: TimestamptzComparisonExp | null
  id?: UuidComparisonExp | null
  replyId?: UuidComparisonExp | null
  updatedAt?: TimestamptzComparisonExp | null
  upvote?: IntComparisonExp | null
  user?: UserBoolExp | null
}

/** input type for incrementing numeric columns in table "comments" */
export interface CommentsIncInput {
  upvote?: Scalars['Int'] | null
}

/** input type for inserting data into table "comments" */
export interface CommentsInsertInput {
  author?: Scalars['uuid'] | null
  board?: BoardsObjRelInsertInput | null
  boardId?: Scalars['uuid'] | null
  content?: Scalars['String'] | null
  createdAt?: Scalars['timestamptz'] | null
  id?: Scalars['uuid'] | null
  replyId?: Scalars['uuid'] | null
  updatedAt?: Scalars['timestamptz'] | null
  upvote?: Scalars['Int'] | null
  user?: UserObjRelInsertInput | null
}

/** aggregate max on columns */
export interface CommentsMaxFieldsGenqlSelection {
  author?: boolean | number
  boardId?: boolean | number
  content?: boolean | number
  createdAt?: boolean | number
  id?: boolean | number
  replyId?: boolean | number
  updatedAt?: boolean | number
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "comments" */
export interface CommentsMaxOrderBy {
  author?: OrderBy | null
  boardId?: OrderBy | null
  content?: OrderBy | null
  createdAt?: OrderBy | null
  id?: OrderBy | null
  replyId?: OrderBy | null
  updatedAt?: OrderBy | null
  upvote?: OrderBy | null
}

/** aggregate min on columns */
export interface CommentsMinFieldsGenqlSelection {
  author?: boolean | number
  boardId?: boolean | number
  content?: boolean | number
  createdAt?: boolean | number
  id?: boolean | number
  replyId?: boolean | number
  updatedAt?: boolean | number
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "comments" */
export interface CommentsMinOrderBy {
  author?: OrderBy | null
  boardId?: OrderBy | null
  content?: OrderBy | null
  createdAt?: OrderBy | null
  id?: OrderBy | null
  replyId?: OrderBy | null
  updatedAt?: OrderBy | null
  upvote?: OrderBy | null
}

/** response of any mutation on the table "comments" */
export interface CommentsMutationResponseGenqlSelection {
  /** number of rows affected by the mutation */
  affectedRows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: CommentsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "comments" */
export interface CommentsOnConflict {
  constraint?: CommentsConstraint
  updateColumns?: CommentsUpdateColumn[]
  where?: CommentsBoolExp | null
}

/** Ordering options when selecting data from "comments". */
export interface CommentsOrderBy {
  author?: OrderBy | null
  board?: BoardsOrderBy | null
  boardId?: OrderBy | null
  content?: OrderBy | null
  createdAt?: OrderBy | null
  id?: OrderBy | null
  replyId?: OrderBy | null
  updatedAt?: OrderBy | null
  upvote?: OrderBy | null
  user?: UserOrderBy | null
}

/** primary key columns input for table: comments */
export interface CommentsPkColumnsInput {
  id?: Scalars['uuid']
}

/** input type for updating data in table "comments" */
export interface CommentsSetInput {
  author?: Scalars['uuid'] | null
  boardId?: Scalars['uuid'] | null
  content?: Scalars['String'] | null
  createdAt?: Scalars['timestamptz'] | null
  id?: Scalars['uuid'] | null
  replyId?: Scalars['uuid'] | null
  updatedAt?: Scalars['timestamptz'] | null
  upvote?: Scalars['Int'] | null
}

/** aggregate stddev on columns */
export interface CommentsStddevFieldsGenqlSelection {
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "comments" */
export interface CommentsStddevOrderBy {
  upvote?: OrderBy | null
}

/** aggregate stddevPop on columns */
export interface CommentsStddevPopFieldsGenqlSelection {
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddevPop() on columns of table "comments" */
export interface CommentsStddevPopOrderBy {
  upvote?: OrderBy | null
}

/** aggregate stddevSamp on columns */
export interface CommentsStddevSampFieldsGenqlSelection {
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddevSamp() on columns of table "comments" */
export interface CommentsStddevSampOrderBy {
  upvote?: OrderBy | null
}

/** Streaming cursor of the table "comments" */
export interface CommentsStreamCursorInput {
  /** Stream column input with initial value */
  initialValue?: CommentsStreamCursorValueInput
  /** cursor ordering */
  ordering?: CursorOrdering | null
}

/** Initial value of the column from where the streaming should start */
export interface CommentsStreamCursorValueInput {
  author?: Scalars['uuid'] | null
  boardId?: Scalars['uuid'] | null
  content?: Scalars['String'] | null
  createdAt?: Scalars['timestamptz'] | null
  id?: Scalars['uuid'] | null
  replyId?: Scalars['uuid'] | null
  updatedAt?: Scalars['timestamptz'] | null
  upvote?: Scalars['Int'] | null
}

/** aggregate sum on columns */
export interface CommentsSumFieldsGenqlSelection {
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "comments" */
export interface CommentsSumOrderBy {
  upvote?: OrderBy | null
}

export interface CommentsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: CommentsIncInput | null
  /** sets the columns of the filtered rows to the given values */
  _set?: CommentsSetInput | null
  /** filter the rows which have to be updated */
  where?: CommentsBoolExp
}

/** aggregate varPop on columns */
export interface CommentsVarPopFieldsGenqlSelection {
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by varPop() on columns of table "comments" */
export interface CommentsVarPopOrderBy {
  upvote?: OrderBy | null
}

/** aggregate varSamp on columns */
export interface CommentsVarSampFieldsGenqlSelection {
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by varSamp() on columns of table "comments" */
export interface CommentsVarSampOrderBy {
  upvote?: OrderBy | null
}

/** aggregate variance on columns */
export interface CommentsVarianceFieldsGenqlSelection {
  upvote?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "comments" */
export interface CommentsVarianceOrderBy {
  upvote?: OrderBy | null
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: Scalars['Int'] | null
  _gt?: Scalars['Int'] | null
  _gte?: Scalars['Int'] | null
  _in?: Scalars['Int'][] | null
  _isNull?: Scalars['Boolean'] | null
  _lt?: Scalars['Int'] | null
  _lte?: Scalars['Int'] | null
  _neq?: Scalars['Int'] | null
  _nin?: Scalars['Int'][] | null
}

export interface JsonbCastExp {
  String?: StringComparisonExp | null
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface JsonbComparisonExp {
  _cast?: JsonbCastExp | null
  /** is the column contained in the given json value */
  _containedIn?: Scalars['jsonb'] | null
  /** does the column contain the given json value at the top level */
  _contains?: Scalars['jsonb'] | null
  _eq?: Scalars['jsonb'] | null
  _gt?: Scalars['jsonb'] | null
  _gte?: Scalars['jsonb'] | null
  /** does the string exist as a top-level key in the column */
  _hasKey?: Scalars['String'] | null
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: Scalars['String'][] | null
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: Scalars['String'][] | null
  _in?: Scalars['jsonb'][] | null
  _isNull?: Scalars['Boolean'] | null
  _lt?: Scalars['jsonb'] | null
  _lte?: Scalars['jsonb'] | null
  _neq?: Scalars['jsonb'] | null
  _nin?: Scalars['jsonb'][] | null
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: Scalars['String'] | null
  _gt?: Scalars['String'] | null
  _gte?: Scalars['String'] | null
  /** does the column match the given case-insensitive pattern */
  _ilike?: Scalars['String'] | null
  _in?: Scalars['String'][] | null
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Scalars['String'] | null
  _isNull?: Scalars['Boolean'] | null
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

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: Scalars['timestamptz'] | null
  _gt?: Scalars['timestamptz'] | null
  _gte?: Scalars['timestamptz'] | null
  _in?: Scalars['timestamptz'][] | null
  _isNull?: Scalars['Boolean'] | null
  _lt?: Scalars['timestamptz'] | null
  _lte?: Scalars['timestamptz'] | null
  _neq?: Scalars['timestamptz'] | null
  _nin?: Scalars['timestamptz'][] | null
}

/** columns and relationships of "user" */
export interface UserGenqlSelection {
  account?: boolean | number
  address?: boolean | number
  /** An array relationship */
  comments?: CommentsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: CommentsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: CommentsOrderBy[] | null
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  /** An aggregate relationship */
  commentsAggregate?: CommentsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: CommentsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: CommentsOrderBy[] | null
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  id?: boolean | number
  preferences?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  /** An object relationship */
  user_activity?: UserActivityGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "user_activity" */
export interface UserActivityGenqlSelection {
  activityId?: boolean | number
  activityType?: boolean | number
  /** An object relationship */
  board?: BoardsGenqlSelection
  id?: boolean | number
  /** An object relationship */
  user?: UserGenqlSelection
  userId?: boolean | number
  /** An object relationship */
  user_activity_type?: UserActivityTypeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "user_activity" */
export interface UserActivityAggregateGenqlSelection {
  aggregate?: UserActivityAggregateFieldsGenqlSelection
  nodes?: UserActivityGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "user_activity" */
export interface UserActivityAggregateFieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: UserActivitySelectColumn[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: UserActivityMaxFieldsGenqlSelection
  min?: UserActivityMinFieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "user_activity". All fields are combined with a logical 'AND'. */
export interface UserActivityBoolExp {
  _and?: UserActivityBoolExp[] | null
  _not?: UserActivityBoolExp | null
  _or?: UserActivityBoolExp[] | null
  activityId?: UuidComparisonExp | null
  activityType?: UserActivityTypeEnumComparisonExp | null
  board?: BoardsBoolExp | null
  id?: UuidComparisonExp | null
  user?: UserBoolExp | null
  userId?: UuidComparisonExp | null
  user_activity_type?: UserActivityTypeBoolExp | null
}

/** input type for inserting data into table "user_activity" */
export interface UserActivityInsertInput {
  activityId?: Scalars['uuid'] | null
  activityType?: UserActivityTypeEnum | null
  board?: BoardsObjRelInsertInput | null
  id?: Scalars['uuid'] | null
  user?: UserObjRelInsertInput | null
  userId?: Scalars['uuid'] | null
  user_activity_type?: UserActivityTypeObjRelInsertInput | null
}

/** aggregate max on columns */
export interface UserActivityMaxFieldsGenqlSelection {
  activityId?: boolean | number
  id?: boolean | number
  userId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface UserActivityMinFieldsGenqlSelection {
  activityId?: boolean | number
  id?: boolean | number
  userId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "user_activity" */
export interface UserActivityMutationResponseGenqlSelection {
  /** number of rows affected by the mutation */
  affectedRows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: UserActivityGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "user_activity" */
export interface UserActivityObjRelInsertInput {
  data?: UserActivityInsertInput
  /** upsert condition */
  onConflict?: UserActivityOnConflict | null
}

/** on_conflict condition type for table "user_activity" */
export interface UserActivityOnConflict {
  constraint?: UserActivityConstraint
  updateColumns?: UserActivityUpdateColumn[]
  where?: UserActivityBoolExp | null
}

/** Ordering options when selecting data from "user_activity". */
export interface UserActivityOrderBy {
  activityId?: OrderBy | null
  activityType?: OrderBy | null
  board?: BoardsOrderBy | null
  id?: OrderBy | null
  user?: UserOrderBy | null
  userId?: OrderBy | null
  user_activity_type?: UserActivityTypeOrderBy | null
}

/** primary key columns input for table: user_activity */
export interface UserActivityPkColumnsInput {
  id?: Scalars['uuid']
}

/** input type for updating data in table "user_activity" */
export interface UserActivitySetInput {
  activityId?: Scalars['uuid'] | null
  activityType?: UserActivityTypeEnum | null
  id?: Scalars['uuid'] | null
  userId?: Scalars['uuid'] | null
}

/** Streaming cursor of the table "user_activity" */
export interface UserActivityStreamCursorInput {
  /** Stream column input with initial value */
  initialValue?: UserActivityStreamCursorValueInput
  /** cursor ordering */
  ordering?: CursorOrdering | null
}

/** Initial value of the column from where the streaming should start */
export interface UserActivityStreamCursorValueInput {
  activityId?: Scalars['uuid'] | null
  activityType?: UserActivityTypeEnum | null
  id?: Scalars['uuid'] | null
  userId?: Scalars['uuid'] | null
}

/** columns and relationships of "user_activity_type" */
export interface UserActivityTypeGenqlSelection {
  /** An object relationship */
  user_activity?: UserActivityGenqlSelection
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "user_activity_type" */
export interface UserActivityTypeAggregateGenqlSelection {
  aggregate?: UserActivityTypeAggregateFieldsGenqlSelection
  nodes?: UserActivityTypeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "user_activity_type" */
export interface UserActivityTypeAggregateFieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: UserActivityTypeSelectColumn[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: UserActivityTypeMaxFieldsGenqlSelection
  min?: UserActivityTypeMinFieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "user_activity_type". All fields are combined with a logical 'AND'. */
export interface UserActivityTypeBoolExp {
  _and?: UserActivityTypeBoolExp[] | null
  _not?: UserActivityTypeBoolExp | null
  _or?: UserActivityTypeBoolExp[] | null
  user_activity?: UserActivityBoolExp | null
  value?: StringComparisonExp | null
}

/** Boolean expression to compare columns of type "UserActivityTypeEnum". All fields are combined with logical 'AND'. */
export interface UserActivityTypeEnumComparisonExp {
  _eq?: UserActivityTypeEnum | null
  _in?: UserActivityTypeEnum[] | null
  _isNull?: Scalars['Boolean'] | null
  _neq?: UserActivityTypeEnum | null
  _nin?: UserActivityTypeEnum[] | null
}

/** input type for inserting data into table "user_activity_type" */
export interface UserActivityTypeInsertInput {
  user_activity?: UserActivityObjRelInsertInput | null
  value?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface UserActivityTypeMaxFieldsGenqlSelection {
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface UserActivityTypeMinFieldsGenqlSelection {
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "user_activity_type" */
export interface UserActivityTypeMutationResponseGenqlSelection {
  /** number of rows affected by the mutation */
  affectedRows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: UserActivityTypeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "user_activity_type" */
export interface UserActivityTypeObjRelInsertInput {
  data?: UserActivityTypeInsertInput
  /** upsert condition */
  onConflict?: UserActivityTypeOnConflict | null
}

/** on_conflict condition type for table "user_activity_type" */
export interface UserActivityTypeOnConflict {
  constraint?: UserActivityTypeConstraint
  updateColumns?: UserActivityTypeUpdateColumn[]
  where?: UserActivityTypeBoolExp | null
}

/** Ordering options when selecting data from "user_activity_type". */
export interface UserActivityTypeOrderBy {
  user_activity?: UserActivityOrderBy | null
  value?: OrderBy | null
}

/** primary key columns input for table: user_activity_type */
export interface UserActivityTypePkColumnsInput {
  value?: Scalars['String']
}

/** input type for updating data in table "user_activity_type" */
export interface UserActivityTypeSetInput {
  value?: Scalars['String'] | null
}

/** Streaming cursor of the table "user_activity_type" */
export interface UserActivityTypeStreamCursorInput {
  /** Stream column input with initial value */
  initialValue?: UserActivityTypeStreamCursorValueInput
  /** cursor ordering */
  ordering?: CursorOrdering | null
}

/** Initial value of the column from where the streaming should start */
export interface UserActivityTypeStreamCursorValueInput {
  value?: Scalars['String'] | null
}

export interface UserActivityTypeUpdates {
  /** sets the columns of the filtered rows to the given values */
  _set?: UserActivityTypeSetInput | null
  /** filter the rows which have to be updated */
  where?: UserActivityTypeBoolExp
}

export interface UserActivityUpdates {
  /** sets the columns of the filtered rows to the given values */
  _set?: UserActivitySetInput | null
  /** filter the rows which have to be updated */
  where?: UserActivityBoolExp
}

/** aggregated selection of "user" */
export interface UserAggregateGenqlSelection {
  aggregate?: UserAggregateFieldsGenqlSelection
  nodes?: UserGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "user" */
export interface UserAggregateFieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: UserSelectColumn[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: UserMaxFieldsGenqlSelection
  min?: UserMinFieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface UserAppendInput {
  preferences?: Scalars['jsonb'] | null
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface UserBoolExp {
  _and?: UserBoolExp[] | null
  _not?: UserBoolExp | null
  _or?: UserBoolExp[] | null
  account?: StringComparisonExp | null
  address?: StringComparisonExp | null
  comments?: CommentsBoolExp | null
  commentsAggregate?: CommentsAggregateBoolExp | null
  id?: UuidComparisonExp | null
  preferences?: JsonbComparisonExp | null
  user_activity?: UserActivityBoolExp | null
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface UserDeleteAtPathInput {
  preferences?: Scalars['String'][] | null
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface UserDeleteElemInput {
  preferences?: Scalars['Int'] | null
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface UserDeleteKeyInput {
  preferences?: Scalars['String'] | null
}

/** input type for inserting data into table "user" */
export interface UserInsertInput {
  account?: Scalars['String'] | null
  address?: Scalars['String'] | null
  comments?: CommentsArrRelInsertInput | null
  id?: Scalars['uuid'] | null
  preferences?: Scalars['jsonb'] | null
  user_activity?: UserActivityObjRelInsertInput | null
}

/** aggregate max on columns */
export interface UserMaxFieldsGenqlSelection {
  account?: boolean | number
  address?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface UserMinFieldsGenqlSelection {
  account?: boolean | number
  address?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "user" */
export interface UserMutationResponseGenqlSelection {
  /** number of rows affected by the mutation */
  affectedRows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: UserGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "user" */
export interface UserObjRelInsertInput {
  data?: UserInsertInput
  /** upsert condition */
  onConflict?: UserOnConflict | null
}

/** on_conflict condition type for table "user" */
export interface UserOnConflict {
  constraint?: UserConstraint
  updateColumns?: UserUpdateColumn[]
  where?: UserBoolExp | null
}

/** Ordering options when selecting data from "user". */
export interface UserOrderBy {
  account?: OrderBy | null
  address?: OrderBy | null
  commentsAggregate?: CommentsAggregateOrderBy | null
  id?: OrderBy | null
  preferences?: OrderBy | null
  user_activity?: UserActivityOrderBy | null
}

/** primary key columns input for table: user */
export interface UserPkColumnsInput {
  account?: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface UserPrependInput {
  preferences?: Scalars['jsonb'] | null
}

/** input type for updating data in table "user" */
export interface UserSetInput {
  account?: Scalars['String'] | null
  address?: Scalars['String'] | null
  id?: Scalars['uuid'] | null
  preferences?: Scalars['jsonb'] | null
}

/** Streaming cursor of the table "user" */
export interface UserStreamCursorInput {
  /** Stream column input with initial value */
  initialValue?: UserStreamCursorValueInput
  /** cursor ordering */
  ordering?: CursorOrdering | null
}

/** Initial value of the column from where the streaming should start */
export interface UserStreamCursorValueInput {
  account?: Scalars['String'] | null
  address?: Scalars['String'] | null
  id?: Scalars['uuid'] | null
  preferences?: Scalars['jsonb'] | null
}

export interface UserUpdates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: UserAppendInput | null
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: UserDeleteAtPathInput | null
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: UserDeleteElemInput | null
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: UserDeleteKeyInput | null
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: UserPrependInput | null
  /** sets the columns of the filtered rows to the given values */
  _set?: UserSetInput | null
  /** filter the rows which have to be updated */
  where?: UserBoolExp
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {
  _eq?: Scalars['uuid'] | null
  _gt?: Scalars['uuid'] | null
  _gte?: Scalars['uuid'] | null
  _in?: Scalars['uuid'][] | null
  _isNull?: Scalars['Boolean'] | null
  _lt?: Scalars['uuid'] | null
  _lte?: Scalars['uuid'] | null
  _neq?: Scalars['uuid'] | null
  _nin?: Scalars['uuid'][] | null
}

export interface boardsAggregateBoolExpBool_and {
  arguments?: BoardsSelectColumnBoardsAggregateBoolExpBool_andArgumentsColumns
  distinct?: Scalars['Boolean'] | null
  filter?: BoardsBoolExp | null
  predicate?: BooleanComparisonExp
}

export interface boardsAggregateBoolExpBool_or {
  arguments?: BoardsSelectColumnBoardsAggregateBoolExpBool_orArgumentsColumns
  distinct?: Scalars['Boolean'] | null
  filter?: BoardsBoolExp | null
  predicate?: BooleanComparisonExp
}

export interface boardsAggregateBoolExpCount {
  arguments?: BoardsSelectColumn[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: BoardsBoolExp | null
  predicate?: IntComparisonExp
}

export interface commentsAggregateBoolExpCount {
  arguments?: CommentsSelectColumn[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: CommentsBoolExp | null
  predicate?: IntComparisonExp
}

/** mutation root */
export interface mutation_rootGenqlSelection {
  /** delete data from the table: "board_phase" */
  deleteBoardPhase?: BoardPhaseMutationResponseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: BoardPhaseBoolExp
    }
  }
  /** delete single row from the table: "board_phase" */
  deleteBoardPhaseByPk?: BoardPhaseGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** delete data from the table: "board_type" */
  deleteBoardType?: BoardTypeMutationResponseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: BoardTypeBoolExp
    }
  }
  /** delete single row from the table: "board_type" */
  deleteBoardTypeByPk?: BoardTypeGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** delete data from the table: "boards" */
  deleteBoards?: BoardsMutationResponseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: BoardsBoolExp
    }
  }
  /** delete single row from the table: "boards" */
  deleteBoardsByPk?: BoardsGenqlSelection & { __args: { id: Scalars['uuid'] } }
  /** delete data from the table: "comments" */
  deleteComments?: CommentsMutationResponseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: CommentsBoolExp
    }
  }
  /** delete single row from the table: "comments" */
  deleteCommentsByPk?: CommentsGenqlSelection & {
    __args: { id: Scalars['uuid'] }
  }
  /** delete data from the table: "user" */
  deleteUser?: UserMutationResponseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: UserBoolExp
    }
  }
  /** delete data from the table: "user_activity" */
  deleteUserActivity?: UserActivityMutationResponseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: UserActivityBoolExp
    }
  }
  /** delete single row from the table: "user_activity" */
  deleteUserActivityByPk?: UserActivityGenqlSelection & {
    __args: { id: Scalars['uuid'] }
  }
  /** delete data from the table: "user_activity_type" */
  deleteUserActivityType?: UserActivityTypeMutationResponseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: UserActivityTypeBoolExp
    }
  }
  /** delete single row from the table: "user_activity_type" */
  deleteUserActivityTypeByPk?: UserActivityTypeGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** delete single row from the table: "user" */
  deleteUserByPk?: UserGenqlSelection & {
    __args: { account: Scalars['String'] }
  }
  /** insert data into the table: "board_phase" */
  insertBoardPhase?: BoardPhaseMutationResponseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: BoardPhaseInsertInput[]
      /** upsert condition */
      onConflict?: BoardPhaseOnConflict | null
    }
  }
  /** insert a single row into the table: "board_phase" */
  insertBoardPhaseOne?: BoardPhaseGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: BoardPhaseInsertInput
      /** upsert condition */
      onConflict?: BoardPhaseOnConflict | null
    }
  }
  /** insert data into the table: "board_type" */
  insertBoardType?: BoardTypeMutationResponseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: BoardTypeInsertInput[]
      /** upsert condition */
      onConflict?: BoardTypeOnConflict | null
    }
  }
  /** insert a single row into the table: "board_type" */
  insertBoardTypeOne?: BoardTypeGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: BoardTypeInsertInput
      /** upsert condition */
      onConflict?: BoardTypeOnConflict | null
    }
  }
  /** insert data into the table: "boards" */
  insertBoards?: BoardsMutationResponseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: BoardsInsertInput[]
      /** upsert condition */
      onConflict?: BoardsOnConflict | null
    }
  }
  /** insert a single row into the table: "boards" */
  insertBoardsOne?: BoardsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: BoardsInsertInput
      /** upsert condition */
      onConflict?: BoardsOnConflict | null
    }
  }
  /** insert data into the table: "comments" */
  insertComments?: CommentsMutationResponseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: CommentsInsertInput[]
      /** upsert condition */
      onConflict?: CommentsOnConflict | null
    }
  }
  /** insert a single row into the table: "comments" */
  insertCommentsOne?: CommentsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: CommentsInsertInput
      /** upsert condition */
      onConflict?: CommentsOnConflict | null
    }
  }
  /** insert data into the table: "user" */
  insertUser?: UserMutationResponseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: UserInsertInput[]
      /** upsert condition */
      onConflict?: UserOnConflict | null
    }
  }
  /** insert data into the table: "user_activity" */
  insertUserActivity?: UserActivityMutationResponseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: UserActivityInsertInput[]
      /** upsert condition */
      onConflict?: UserActivityOnConflict | null
    }
  }
  /** insert a single row into the table: "user_activity" */
  insertUserActivityOne?: UserActivityGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: UserActivityInsertInput
      /** upsert condition */
      onConflict?: UserActivityOnConflict | null
    }
  }
  /** insert data into the table: "user_activity_type" */
  insertUserActivityType?: UserActivityTypeMutationResponseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: UserActivityTypeInsertInput[]
      /** upsert condition */
      onConflict?: UserActivityTypeOnConflict | null
    }
  }
  /** insert a single row into the table: "user_activity_type" */
  insertUserActivityTypeOne?: UserActivityTypeGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: UserActivityTypeInsertInput
      /** upsert condition */
      onConflict?: UserActivityTypeOnConflict | null
    }
  }
  /** insert a single row into the table: "user" */
  insertUserOne?: UserGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: UserInsertInput
      /** upsert condition */
      onConflict?: UserOnConflict | null
    }
  }
  /** update data of the table: "board_phase" */
  updateBoardPhase?: BoardPhaseMutationResponseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: BoardPhaseSetInput | null
      /** filter the rows which have to be updated */
      where: BoardPhaseBoolExp
    }
  }
  /** update single row of the table: "board_phase" */
  updateBoardPhaseByPk?: BoardPhaseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: BoardPhaseSetInput | null
      pkColumns: BoardPhasePkColumnsInput
    }
  }
  /** update multiples rows of table: "board_phase" */
  updateBoardPhaseMany?: BoardPhaseMutationResponseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: BoardPhaseUpdates[]
    }
  }
  /** update data of the table: "board_type" */
  updateBoardType?: BoardTypeMutationResponseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: BoardTypeSetInput | null
      /** filter the rows which have to be updated */
      where: BoardTypeBoolExp
    }
  }
  /** update single row of the table: "board_type" */
  updateBoardTypeByPk?: BoardTypeGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: BoardTypeSetInput | null
      pkColumns: BoardTypePkColumnsInput
    }
  }
  /** update multiples rows of table: "board_type" */
  updateBoardTypeMany?: BoardTypeMutationResponseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: BoardTypeUpdates[]
    }
  }
  /** update data of the table: "boards" */
  updateBoards?: BoardsMutationResponseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: BoardsSetInput | null
      /** filter the rows which have to be updated */
      where: BoardsBoolExp
    }
  }
  /** update single row of the table: "boards" */
  updateBoardsByPk?: BoardsGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: BoardsSetInput | null
      pkColumns: BoardsPkColumnsInput
    }
  }
  /** update multiples rows of table: "boards" */
  updateBoardsMany?: BoardsMutationResponseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: BoardsUpdates[]
    }
  }
  /** update data of the table: "comments" */
  updateComments?: CommentsMutationResponseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: CommentsIncInput | null
      /** sets the columns of the filtered rows to the given values */
      _set?: CommentsSetInput | null
      /** filter the rows which have to be updated */
      where: CommentsBoolExp
    }
  }
  /** update single row of the table: "comments" */
  updateCommentsByPk?: CommentsGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: CommentsIncInput | null
      /** sets the columns of the filtered rows to the given values */
      _set?: CommentsSetInput | null
      pkColumns: CommentsPkColumnsInput
    }
  }
  /** update multiples rows of table: "comments" */
  updateCommentsMany?: CommentsMutationResponseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: CommentsUpdates[]
    }
  }
  /** update data of the table: "user" */
  updateUser?: UserMutationResponseGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: UserAppendInput | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _deleteAtPath?: UserDeleteAtPathInput | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _deleteElem?: UserDeleteElemInput | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _deleteKey?: UserDeleteKeyInput | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: UserPrependInput | null
      /** sets the columns of the filtered rows to the given values */
      _set?: UserSetInput | null
      /** filter the rows which have to be updated */
      where: UserBoolExp
    }
  }
  /** update data of the table: "user_activity" */
  updateUserActivity?: UserActivityMutationResponseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: UserActivitySetInput | null
      /** filter the rows which have to be updated */
      where: UserActivityBoolExp
    }
  }
  /** update single row of the table: "user_activity" */
  updateUserActivityByPk?: UserActivityGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: UserActivitySetInput | null
      pkColumns: UserActivityPkColumnsInput
    }
  }
  /** update multiples rows of table: "user_activity" */
  updateUserActivityMany?: UserActivityMutationResponseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: UserActivityUpdates[]
    }
  }
  /** update data of the table: "user_activity_type" */
  updateUserActivityType?: UserActivityTypeMutationResponseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: UserActivityTypeSetInput | null
      /** filter the rows which have to be updated */
      where: UserActivityTypeBoolExp
    }
  }
  /** update single row of the table: "user_activity_type" */
  updateUserActivityTypeByPk?: UserActivityTypeGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: UserActivityTypeSetInput | null
      pkColumns: UserActivityTypePkColumnsInput
    }
  }
  /** update multiples rows of table: "user_activity_type" */
  updateUserActivityTypeMany?: UserActivityTypeMutationResponseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: UserActivityTypeUpdates[]
    }
  }
  /** update single row of the table: "user" */
  updateUserByPk?: UserGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: UserAppendInput | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _deleteAtPath?: UserDeleteAtPathInput | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _deleteElem?: UserDeleteElemInput | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _deleteKey?: UserDeleteKeyInput | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: UserPrependInput | null
      /** sets the columns of the filtered rows to the given values */
      _set?: UserSetInput | null
      pkColumns: UserPkColumnsInput
    }
  }
  /** update multiples rows of table: "user" */
  updateUserMany?: UserMutationResponseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: UserUpdates[]
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface query_rootGenqlSelection {
  /** fetch data from the table: "board_phase" */
  boardPhase?: BoardPhaseGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardPhaseSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardPhaseOrderBy[] | null
      /** filter the rows returned */
      where?: BoardPhaseBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "board_phase" */
  boardPhaseAggregate?: BoardPhaseAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardPhaseSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardPhaseOrderBy[] | null
      /** filter the rows returned */
      where?: BoardPhaseBoolExp | null
    }
  }
  /** fetch data from the table: "board_phase" using primary key columns */
  boardPhaseByPk?: BoardPhaseGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** fetch data from the table: "board_type" */
  boardType?: BoardTypeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardTypeSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardTypeOrderBy[] | null
      /** filter the rows returned */
      where?: BoardTypeBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "board_type" */
  boardTypeAggregate?: BoardTypeAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardTypeSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardTypeOrderBy[] | null
      /** filter the rows returned */
      where?: BoardTypeBoolExp | null
    }
  }
  /** fetch data from the table: "board_type" using primary key columns */
  boardTypeByPk?: BoardTypeGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** An array relationship */
  boards?: BoardsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** An aggregate relationship */
  boardsAggregate?: BoardsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** fetch data from the table: "boards" using primary key columns */
  boardsByPk?: BoardsGenqlSelection & { __args: { id: Scalars['uuid'] } }
  /** An array relationship */
  comments?: CommentsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: CommentsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: CommentsOrderBy[] | null
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  /** An aggregate relationship */
  commentsAggregate?: CommentsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: CommentsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: CommentsOrderBy[] | null
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  /** fetch data from the table: "comments" using primary key columns */
  commentsByPk?: CommentsGenqlSelection & { __args: { id: Scalars['uuid'] } }
  /** fetch data from the table: "user" */
  user?: UserGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserOrderBy[] | null
      /** filter the rows returned */
      where?: UserBoolExp | null
    }
  }
  /** fetch data from the table: "user_activity" */
  userActivity?: UserActivityGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserActivitySelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserActivityOrderBy[] | null
      /** filter the rows returned */
      where?: UserActivityBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "user_activity" */
  userActivityAggregate?: UserActivityAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserActivitySelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserActivityOrderBy[] | null
      /** filter the rows returned */
      where?: UserActivityBoolExp | null
    }
  }
  /** fetch data from the table: "user_activity" using primary key columns */
  userActivityByPk?: UserActivityGenqlSelection & {
    __args: { id: Scalars['uuid'] }
  }
  /** fetch data from the table: "user_activity_type" */
  userActivityType?: UserActivityTypeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserActivityTypeSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserActivityTypeOrderBy[] | null
      /** filter the rows returned */
      where?: UserActivityTypeBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "user_activity_type" */
  userActivityTypeAggregate?: UserActivityTypeAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserActivityTypeSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserActivityTypeOrderBy[] | null
      /** filter the rows returned */
      where?: UserActivityTypeBoolExp | null
    }
  }
  /** fetch data from the table: "user_activity_type" using primary key columns */
  userActivityTypeByPk?: UserActivityTypeGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** fetch aggregated fields from the table: "user" */
  userAggregate?: UserAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserOrderBy[] | null
      /** filter the rows returned */
      where?: UserBoolExp | null
    }
  }
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: UserGenqlSelection & { __args: { account: Scalars['String'] } }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection {
  /** fetch data from the table: "board_phase" */
  boardPhase?: BoardPhaseGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardPhaseSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardPhaseOrderBy[] | null
      /** filter the rows returned */
      where?: BoardPhaseBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "board_phase" */
  boardPhaseAggregate?: BoardPhaseAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardPhaseSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardPhaseOrderBy[] | null
      /** filter the rows returned */
      where?: BoardPhaseBoolExp | null
    }
  }
  /** fetch data from the table: "board_phase" using primary key columns */
  boardPhaseByPk?: BoardPhaseGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "board_phase" */
  boardPhaseStream?: BoardPhaseGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batchSize: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (BoardPhaseStreamCursorInput | null)[]
      /** filter the rows returned */
      where?: BoardPhaseBoolExp | null
    }
  }
  /** fetch data from the table: "board_type" */
  boardType?: BoardTypeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardTypeSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardTypeOrderBy[] | null
      /** filter the rows returned */
      where?: BoardTypeBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "board_type" */
  boardTypeAggregate?: BoardTypeAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardTypeSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardTypeOrderBy[] | null
      /** filter the rows returned */
      where?: BoardTypeBoolExp | null
    }
  }
  /** fetch data from the table: "board_type" using primary key columns */
  boardTypeByPk?: BoardTypeGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "board_type" */
  boardTypeStream?: BoardTypeGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batchSize: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (BoardTypeStreamCursorInput | null)[]
      /** filter the rows returned */
      where?: BoardTypeBoolExp | null
    }
  }
  /** An array relationship */
  boards?: BoardsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** An aggregate relationship */
  boardsAggregate?: BoardsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: BoardsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: BoardsOrderBy[] | null
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** fetch data from the table: "boards" using primary key columns */
  boardsByPk?: BoardsGenqlSelection & { __args: { id: Scalars['uuid'] } }
  /** fetch data from the table in a streaming manner: "boards" */
  boardsStream?: BoardsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batchSize: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (BoardsStreamCursorInput | null)[]
      /** filter the rows returned */
      where?: BoardsBoolExp | null
    }
  }
  /** An array relationship */
  comments?: CommentsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: CommentsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: CommentsOrderBy[] | null
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  /** An aggregate relationship */
  commentsAggregate?: CommentsAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: CommentsSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: CommentsOrderBy[] | null
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  /** fetch data from the table: "comments" using primary key columns */
  commentsByPk?: CommentsGenqlSelection & { __args: { id: Scalars['uuid'] } }
  /** fetch data from the table in a streaming manner: "comments" */
  commentsStream?: CommentsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batchSize: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (CommentsStreamCursorInput | null)[]
      /** filter the rows returned */
      where?: CommentsBoolExp | null
    }
  }
  /** fetch data from the table: "user" */
  user?: UserGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserOrderBy[] | null
      /** filter the rows returned */
      where?: UserBoolExp | null
    }
  }
  /** fetch data from the table: "user_activity" */
  userActivity?: UserActivityGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserActivitySelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserActivityOrderBy[] | null
      /** filter the rows returned */
      where?: UserActivityBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "user_activity" */
  userActivityAggregate?: UserActivityAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserActivitySelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserActivityOrderBy[] | null
      /** filter the rows returned */
      where?: UserActivityBoolExp | null
    }
  }
  /** fetch data from the table: "user_activity" using primary key columns */
  userActivityByPk?: UserActivityGenqlSelection & {
    __args: { id: Scalars['uuid'] }
  }
  /** fetch data from the table in a streaming manner: "user_activity" */
  userActivityStream?: UserActivityGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batchSize: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (UserActivityStreamCursorInput | null)[]
      /** filter the rows returned */
      where?: UserActivityBoolExp | null
    }
  }
  /** fetch data from the table: "user_activity_type" */
  userActivityType?: UserActivityTypeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserActivityTypeSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserActivityTypeOrderBy[] | null
      /** filter the rows returned */
      where?: UserActivityTypeBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "user_activity_type" */
  userActivityTypeAggregate?: UserActivityTypeAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserActivityTypeSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserActivityTypeOrderBy[] | null
      /** filter the rows returned */
      where?: UserActivityTypeBoolExp | null
    }
  }
  /** fetch data from the table: "user_activity_type" using primary key columns */
  userActivityTypeByPk?: UserActivityTypeGenqlSelection & {
    __args: { value: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "user_activity_type" */
  userActivityTypeStream?: UserActivityTypeGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batchSize: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (UserActivityTypeStreamCursorInput | null)[]
      /** filter the rows returned */
      where?: UserActivityTypeBoolExp | null
    }
  }
  /** fetch aggregated fields from the table: "user" */
  userAggregate?: UserAggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinctOn?: UserSelectColumn[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      orderBy?: UserOrderBy[] | null
      /** filter the rows returned */
      where?: UserBoolExp | null
    }
  }
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: UserGenqlSelection & { __args: { account: Scalars['String'] } }
  /** fetch data from the table in a streaming manner: "user" */
  userStream?: UserGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batchSize: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (UserStreamCursorInput | null)[]
      /** filter the rows returned */
      where?: UserBoolExp | null
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection

const BoardPhase_possibleTypes: string[] = ['BoardPhase']
export const isBoardPhase = (obj?: { __typename?: any } | null): obj is BoardPhase => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardPhase"')
  return BoardPhase_possibleTypes.includes(obj.__typename)
}

const BoardPhaseAggregate_possibleTypes: string[] = ['BoardPhaseAggregate']
export const isBoardPhaseAggregate = (obj?: { __typename?: any } | null): obj is BoardPhaseAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardPhaseAggregate"')
  return BoardPhaseAggregate_possibleTypes.includes(obj.__typename)
}

const BoardPhaseAggregateFields_possibleTypes: string[] = ['BoardPhaseAggregateFields']
export const isBoardPhaseAggregateFields = (obj?: { __typename?: any } | null): obj is BoardPhaseAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardPhaseAggregateFields"')
  return BoardPhaseAggregateFields_possibleTypes.includes(obj.__typename)
}

const BoardPhaseMaxFields_possibleTypes: string[] = ['BoardPhaseMaxFields']
export const isBoardPhaseMaxFields = (obj?: { __typename?: any } | null): obj is BoardPhaseMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardPhaseMaxFields"')
  return BoardPhaseMaxFields_possibleTypes.includes(obj.__typename)
}

const BoardPhaseMinFields_possibleTypes: string[] = ['BoardPhaseMinFields']
export const isBoardPhaseMinFields = (obj?: { __typename?: any } | null): obj is BoardPhaseMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardPhaseMinFields"')
  return BoardPhaseMinFields_possibleTypes.includes(obj.__typename)
}

const BoardPhaseMutationResponse_possibleTypes: string[] = ['BoardPhaseMutationResponse']
export const isBoardPhaseMutationResponse = (obj?: { __typename?: any } | null): obj is BoardPhaseMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardPhaseMutationResponse"')
  return BoardPhaseMutationResponse_possibleTypes.includes(obj.__typename)
}

const BoardType_possibleTypes: string[] = ['BoardType']
export const isBoardType = (obj?: { __typename?: any } | null): obj is BoardType => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardType"')
  return BoardType_possibleTypes.includes(obj.__typename)
}

const BoardTypeAggregate_possibleTypes: string[] = ['BoardTypeAggregate']
export const isBoardTypeAggregate = (obj?: { __typename?: any } | null): obj is BoardTypeAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardTypeAggregate"')
  return BoardTypeAggregate_possibleTypes.includes(obj.__typename)
}

const BoardTypeAggregateFields_possibleTypes: string[] = ['BoardTypeAggregateFields']
export const isBoardTypeAggregateFields = (obj?: { __typename?: any } | null): obj is BoardTypeAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardTypeAggregateFields"')
  return BoardTypeAggregateFields_possibleTypes.includes(obj.__typename)
}

const BoardTypeMaxFields_possibleTypes: string[] = ['BoardTypeMaxFields']
export const isBoardTypeMaxFields = (obj?: { __typename?: any } | null): obj is BoardTypeMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardTypeMaxFields"')
  return BoardTypeMaxFields_possibleTypes.includes(obj.__typename)
}

const BoardTypeMinFields_possibleTypes: string[] = ['BoardTypeMinFields']
export const isBoardTypeMinFields = (obj?: { __typename?: any } | null): obj is BoardTypeMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardTypeMinFields"')
  return BoardTypeMinFields_possibleTypes.includes(obj.__typename)
}

const BoardTypeMutationResponse_possibleTypes: string[] = ['BoardTypeMutationResponse']
export const isBoardTypeMutationResponse = (obj?: { __typename?: any } | null): obj is BoardTypeMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardTypeMutationResponse"')
  return BoardTypeMutationResponse_possibleTypes.includes(obj.__typename)
}

const Boards_possibleTypes: string[] = ['Boards']
export const isBoards = (obj?: { __typename?: any } | null): obj is Boards => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoards"')
  return Boards_possibleTypes.includes(obj.__typename)
}

const BoardsAggregate_possibleTypes: string[] = ['BoardsAggregate']
export const isBoardsAggregate = (obj?: { __typename?: any } | null): obj is BoardsAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardsAggregate"')
  return BoardsAggregate_possibleTypes.includes(obj.__typename)
}

const BoardsAggregateFields_possibleTypes: string[] = ['BoardsAggregateFields']
export const isBoardsAggregateFields = (obj?: { __typename?: any } | null): obj is BoardsAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardsAggregateFields"')
  return BoardsAggregateFields_possibleTypes.includes(obj.__typename)
}

const BoardsMaxFields_possibleTypes: string[] = ['BoardsMaxFields']
export const isBoardsMaxFields = (obj?: { __typename?: any } | null): obj is BoardsMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardsMaxFields"')
  return BoardsMaxFields_possibleTypes.includes(obj.__typename)
}

const BoardsMinFields_possibleTypes: string[] = ['BoardsMinFields']
export const isBoardsMinFields = (obj?: { __typename?: any } | null): obj is BoardsMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardsMinFields"')
  return BoardsMinFields_possibleTypes.includes(obj.__typename)
}

const BoardsMutationResponse_possibleTypes: string[] = ['BoardsMutationResponse']
export const isBoardsMutationResponse = (obj?: { __typename?: any } | null): obj is BoardsMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBoardsMutationResponse"')
  return BoardsMutationResponse_possibleTypes.includes(obj.__typename)
}

const Comments_possibleTypes: string[] = ['Comments']
export const isComments = (obj?: { __typename?: any } | null): obj is Comments => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isComments"')
  return Comments_possibleTypes.includes(obj.__typename)
}

const CommentsAggregate_possibleTypes: string[] = ['CommentsAggregate']
export const isCommentsAggregate = (obj?: { __typename?: any } | null): obj is CommentsAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsAggregate"')
  return CommentsAggregate_possibleTypes.includes(obj.__typename)
}

const CommentsAggregateFields_possibleTypes: string[] = ['CommentsAggregateFields']
export const isCommentsAggregateFields = (obj?: { __typename?: any } | null): obj is CommentsAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsAggregateFields"')
  return CommentsAggregateFields_possibleTypes.includes(obj.__typename)
}

const CommentsAvgFields_possibleTypes: string[] = ['CommentsAvgFields']
export const isCommentsAvgFields = (obj?: { __typename?: any } | null): obj is CommentsAvgFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsAvgFields"')
  return CommentsAvgFields_possibleTypes.includes(obj.__typename)
}

const CommentsMaxFields_possibleTypes: string[] = ['CommentsMaxFields']
export const isCommentsMaxFields = (obj?: { __typename?: any } | null): obj is CommentsMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsMaxFields"')
  return CommentsMaxFields_possibleTypes.includes(obj.__typename)
}

const CommentsMinFields_possibleTypes: string[] = ['CommentsMinFields']
export const isCommentsMinFields = (obj?: { __typename?: any } | null): obj is CommentsMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsMinFields"')
  return CommentsMinFields_possibleTypes.includes(obj.__typename)
}

const CommentsMutationResponse_possibleTypes: string[] = ['CommentsMutationResponse']
export const isCommentsMutationResponse = (obj?: { __typename?: any } | null): obj is CommentsMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsMutationResponse"')
  return CommentsMutationResponse_possibleTypes.includes(obj.__typename)
}

const CommentsStddevFields_possibleTypes: string[] = ['CommentsStddevFields']
export const isCommentsStddevFields = (obj?: { __typename?: any } | null): obj is CommentsStddevFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsStddevFields"')
  return CommentsStddevFields_possibleTypes.includes(obj.__typename)
}

const CommentsStddevPopFields_possibleTypes: string[] = ['CommentsStddevPopFields']
export const isCommentsStddevPopFields = (obj?: { __typename?: any } | null): obj is CommentsStddevPopFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsStddevPopFields"')
  return CommentsStddevPopFields_possibleTypes.includes(obj.__typename)
}

const CommentsStddevSampFields_possibleTypes: string[] = ['CommentsStddevSampFields']
export const isCommentsStddevSampFields = (obj?: { __typename?: any } | null): obj is CommentsStddevSampFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsStddevSampFields"')
  return CommentsStddevSampFields_possibleTypes.includes(obj.__typename)
}

const CommentsSumFields_possibleTypes: string[] = ['CommentsSumFields']
export const isCommentsSumFields = (obj?: { __typename?: any } | null): obj is CommentsSumFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsSumFields"')
  return CommentsSumFields_possibleTypes.includes(obj.__typename)
}

const CommentsVarPopFields_possibleTypes: string[] = ['CommentsVarPopFields']
export const isCommentsVarPopFields = (obj?: { __typename?: any } | null): obj is CommentsVarPopFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsVarPopFields"')
  return CommentsVarPopFields_possibleTypes.includes(obj.__typename)
}

const CommentsVarSampFields_possibleTypes: string[] = ['CommentsVarSampFields']
export const isCommentsVarSampFields = (obj?: { __typename?: any } | null): obj is CommentsVarSampFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsVarSampFields"')
  return CommentsVarSampFields_possibleTypes.includes(obj.__typename)
}

const CommentsVarianceFields_possibleTypes: string[] = ['CommentsVarianceFields']
export const isCommentsVarianceFields = (obj?: { __typename?: any } | null): obj is CommentsVarianceFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCommentsVarianceFields"')
  return CommentsVarianceFields_possibleTypes.includes(obj.__typename)
}

const User_possibleTypes: string[] = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}

const UserActivity_possibleTypes: string[] = ['UserActivity']
export const isUserActivity = (obj?: { __typename?: any } | null): obj is UserActivity => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivity"')
  return UserActivity_possibleTypes.includes(obj.__typename)
}

const UserActivityAggregate_possibleTypes: string[] = ['UserActivityAggregate']
export const isUserActivityAggregate = (obj?: { __typename?: any } | null): obj is UserActivityAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityAggregate"')
  return UserActivityAggregate_possibleTypes.includes(obj.__typename)
}

const UserActivityAggregateFields_possibleTypes: string[] = ['UserActivityAggregateFields']
export const isUserActivityAggregateFields = (
  obj?: { __typename?: any } | null
): obj is UserActivityAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityAggregateFields"')
  return UserActivityAggregateFields_possibleTypes.includes(obj.__typename)
}

const UserActivityMaxFields_possibleTypes: string[] = ['UserActivityMaxFields']
export const isUserActivityMaxFields = (obj?: { __typename?: any } | null): obj is UserActivityMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityMaxFields"')
  return UserActivityMaxFields_possibleTypes.includes(obj.__typename)
}

const UserActivityMinFields_possibleTypes: string[] = ['UserActivityMinFields']
export const isUserActivityMinFields = (obj?: { __typename?: any } | null): obj is UserActivityMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityMinFields"')
  return UserActivityMinFields_possibleTypes.includes(obj.__typename)
}

const UserActivityMutationResponse_possibleTypes: string[] = ['UserActivityMutationResponse']
export const isUserActivityMutationResponse = (
  obj?: { __typename?: any } | null
): obj is UserActivityMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityMutationResponse"')
  return UserActivityMutationResponse_possibleTypes.includes(obj.__typename)
}

const UserActivityType_possibleTypes: string[] = ['UserActivityType']
export const isUserActivityType = (obj?: { __typename?: any } | null): obj is UserActivityType => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityType"')
  return UserActivityType_possibleTypes.includes(obj.__typename)
}

const UserActivityTypeAggregate_possibleTypes: string[] = ['UserActivityTypeAggregate']
export const isUserActivityTypeAggregate = (obj?: { __typename?: any } | null): obj is UserActivityTypeAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityTypeAggregate"')
  return UserActivityTypeAggregate_possibleTypes.includes(obj.__typename)
}

const UserActivityTypeAggregateFields_possibleTypes: string[] = ['UserActivityTypeAggregateFields']
export const isUserActivityTypeAggregateFields = (
  obj?: { __typename?: any } | null
): obj is UserActivityTypeAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityTypeAggregateFields"')
  return UserActivityTypeAggregateFields_possibleTypes.includes(obj.__typename)
}

const UserActivityTypeMaxFields_possibleTypes: string[] = ['UserActivityTypeMaxFields']
export const isUserActivityTypeMaxFields = (obj?: { __typename?: any } | null): obj is UserActivityTypeMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityTypeMaxFields"')
  return UserActivityTypeMaxFields_possibleTypes.includes(obj.__typename)
}

const UserActivityTypeMinFields_possibleTypes: string[] = ['UserActivityTypeMinFields']
export const isUserActivityTypeMinFields = (obj?: { __typename?: any } | null): obj is UserActivityTypeMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityTypeMinFields"')
  return UserActivityTypeMinFields_possibleTypes.includes(obj.__typename)
}

const UserActivityTypeMutationResponse_possibleTypes: string[] = ['UserActivityTypeMutationResponse']
export const isUserActivityTypeMutationResponse = (
  obj?: { __typename?: any } | null
): obj is UserActivityTypeMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityTypeMutationResponse"')
  return UserActivityTypeMutationResponse_possibleTypes.includes(obj.__typename)
}

const UserAggregate_possibleTypes: string[] = ['UserAggregate']
export const isUserAggregate = (obj?: { __typename?: any } | null): obj is UserAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserAggregate"')
  return UserAggregate_possibleTypes.includes(obj.__typename)
}

const UserAggregateFields_possibleTypes: string[] = ['UserAggregateFields']
export const isUserAggregateFields = (obj?: { __typename?: any } | null): obj is UserAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserAggregateFields"')
  return UserAggregateFields_possibleTypes.includes(obj.__typename)
}

const UserMaxFields_possibleTypes: string[] = ['UserMaxFields']
export const isUserMaxFields = (obj?: { __typename?: any } | null): obj is UserMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserMaxFields"')
  return UserMaxFields_possibleTypes.includes(obj.__typename)
}

const UserMinFields_possibleTypes: string[] = ['UserMinFields']
export const isUserMinFields = (obj?: { __typename?: any } | null): obj is UserMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserMinFields"')
  return UserMinFields_possibleTypes.includes(obj.__typename)
}

const UserMutationResponse_possibleTypes: string[] = ['UserMutationResponse']
export const isUserMutationResponse = (obj?: { __typename?: any } | null): obj is UserMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserMutationResponse"')
  return UserMutationResponse_possibleTypes.includes(obj.__typename)
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

export const enumBoardPhaseConstraint = {
  board_phase_pkey: 'board_phase_pkey' as const,
}

export const enumBoardPhaseEnum = {
  APPROVED: 'APPROVED' as const,
  DEBATE: 'DEBATE' as const,
  DISCUSSION: 'DISCUSSION' as const,
  PRE_VOTE: 'PRE_VOTE' as const,
  REJECTED: 'REJECTED' as const,
  VOTING: 'VOTING' as const,
}

export const enumBoardPhaseSelectColumn = {
  value: 'value' as const,
}

export const enumBoardPhaseUpdateColumn = {
  value: 'value' as const,
}

export const enumBoardTypeConstraint = {
  board_type_pkey: 'board_type_pkey' as const,
}

export const enumBoardTypeEnum = {
  AMENDMENT_EDIT: 'AMENDMENT_EDIT' as const,
  AMENDMENT_TIME: 'AMENDMENT_TIME' as const,
  DISCUSSION: 'DISCUSSION' as const,
  PROPOSAL: 'PROPOSAL' as const,
}

export const enumBoardTypeSelectColumn = {
  value: 'value' as const,
}

export const enumBoardTypeUpdateColumn = {
  value: 'value' as const,
}

export const enumBoardsConstraint = {
  boards_pkey: 'boards_pkey' as const,
}

export const enumBoardsSelectColumn = {
  amendBoard: 'amendBoard' as const,
  amendReason: 'amendReason' as const,
  author: 'author' as const,
  budget: 'budget' as const,
  deadLine: 'deadLine' as const,
  description: 'description' as const,
  id: 'id' as const,
  kpi: 'kpi' as const,
  newDate: 'newDate' as const,
  parentBoard: 'parentBoard' as const,
  phase: 'phase' as const,
  publishDate: 'publishDate' as const,
  time: 'time' as const,
  timeDecreasing: 'timeDecreasing' as const,
  title: 'title' as const,
  type: 'type' as const,
}

export const enumBoardsSelectColumnBoardsAggregateBoolExpBoolAndArgumentsColumns = {
  timeDecreasing: 'timeDecreasing' as const,
}

export const enumBoardsSelectColumnBoardsAggregateBoolExpBoolOrArgumentsColumns = {
  timeDecreasing: 'timeDecreasing' as const,
}

export const enumBoardsUpdateColumn = {
  amendBoard: 'amendBoard' as const,
  amendReason: 'amendReason' as const,
  author: 'author' as const,
  budget: 'budget' as const,
  deadLine: 'deadLine' as const,
  description: 'description' as const,
  id: 'id' as const,
  kpi: 'kpi' as const,
  newDate: 'newDate' as const,
  parentBoard: 'parentBoard' as const,
  phase: 'phase' as const,
  publishDate: 'publishDate' as const,
  time: 'time' as const,
  timeDecreasing: 'timeDecreasing' as const,
  title: 'title' as const,
  type: 'type' as const,
}

export const enumCommentsConstraint = {
  comments_pkey: 'comments_pkey' as const,
}

export const enumCommentsSelectColumn = {
  author: 'author' as const,
  boardId: 'boardId' as const,
  content: 'content' as const,
  createdAt: 'createdAt' as const,
  id: 'id' as const,
  replyId: 'replyId' as const,
  updatedAt: 'updatedAt' as const,
  upvote: 'upvote' as const,
}

export const enumCommentsUpdateColumn = {
  author: 'author' as const,
  boardId: 'boardId' as const,
  content: 'content' as const,
  createdAt: 'createdAt' as const,
  id: 'id' as const,
  replyId: 'replyId' as const,
  updatedAt: 'updatedAt' as const,
  upvote: 'upvote' as const,
}

export const enumCursorOrdering = {
  ASC: 'ASC' as const,
  DESC: 'DESC' as const,
}

export const enumOrderBy = {
  ASC: 'ASC' as const,
  ASC_NULLS_FIRST: 'ASC_NULLS_FIRST' as const,
  ASC_NULLS_LAST: 'ASC_NULLS_LAST' as const,
  DESC: 'DESC' as const,
  DESC_NULLS_FIRST: 'DESC_NULLS_FIRST' as const,
  DESC_NULLS_LAST: 'DESC_NULLS_LAST' as const,
}

export const enumUserActivityConstraint = {
  activity_pkey: 'activity_pkey' as const,
  activity_user_id_key: 'activity_user_id_key' as const,
  user_activity_activity_id_key: 'user_activity_activity_id_key' as const,
  user_activity_activity_type_key: 'user_activity_activity_type_key' as const,
}

export const enumUserActivitySelectColumn = {
  activityId: 'activityId' as const,
  activityType: 'activityType' as const,
  id: 'id' as const,
  userId: 'userId' as const,
}

export const enumUserActivityTypeConstraint = {
  user_activity_type_pkey: 'user_activity_type_pkey' as const,
}

export const enumUserActivityTypeEnum = {
  COMMENT: 'COMMENT' as const,
  CREATE_BOARD: 'CREATE_BOARD' as const,
  RANKING_UP: 'RANKING_UP' as const,
}

export const enumUserActivityTypeSelectColumn = {
  value: 'value' as const,
}

export const enumUserActivityTypeUpdateColumn = {
  value: 'value' as const,
}

export const enumUserActivityUpdateColumn = {
  activityId: 'activityId' as const,
  activityType: 'activityType' as const,
  id: 'id' as const,
  userId: 'userId' as const,
}

export const enumUserConstraint = {
  user_id_key: 'user_id_key' as const,
  user_pkey: 'user_pkey' as const,
}

export const enumUserSelectColumn = {
  account: 'account' as const,
  address: 'address' as const,
  id: 'id' as const,
  preferences: 'preferences' as const,
}

export const enumUserUpdateColumn = {
  account: 'account' as const,
  address: 'address' as const,
  id: 'id' as const,
  preferences: 'preferences' as const,
}
