// @ts-nocheck
export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    jsonb: any,
    timestamptz: any,
    uuid: any,
}


/** columns and relationships of "account" */
export interface Account {
    /** An array relationship */
    balances: Balance[]
    /** An aggregate relationship */
    balancesAggregate: BalanceAggregate
    /** An array relationship */
    bids: Bid[]
    binaryParentId?: Scalars['uuid']
    binaryPlacement: Scalars['String']
    bio: Scalars['String']
    /** An object relationship */
    calendar?: Calendar
    createdAt: Scalars['timestamptz']
    email: Scalars['String']
    id: Scalars['uuid']
    image: Scalars['String']
    name: Scalars['String']
    /** An array relationship */
    notifications: Notification[]
    /** An array relationship */
    packages: AccountPackage[]
    /** An aggregate relationship */
    packagesAggregate: AccountPackageAggregate
    parentId?: Scalars['uuid']
    /** An array relationship */
    payments: Payments[]
    phone: Scalars['String']
    updatedAt: Scalars['timestamptz']
    username: Scalars['String']
    wallet: Scalars['String']
    __typename: 'Account'
}


/** unique or primary key constraints on table "account" */
export type AccountConstraint = 'account_email_key' | 'account_username_key' | 'account_wallet_key' | 'accounts_pkey'


/** response of any mutation on the table "account" */
export interface AccountMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Account[]
    __typename: 'AccountMutationResponse'
}


/** columns and relationships of "account_package" */
export interface AccountPackage {
    /** An object relationship */
    account: Account
    accountId: Scalars['uuid']
    createdAt: Scalars['timestamptz']
    id: Scalars['uuid']
    /** An object relationship */
    package: Package
    packageId: Scalars['Int']
    transaction: Scalars['String']
    __typename: 'AccountPackage'
}


/** aggregated selection of "account_package" */
export interface AccountPackageAggregate {
    aggregate?: AccountPackageAggregateFields
    nodes: AccountPackage[]
    __typename: 'AccountPackageAggregate'
}


/** aggregate fields of "account_package" */
export interface AccountPackageAggregateFields {
    avg?: AccountPackageAvgFields
    count: Scalars['Int']
    max?: AccountPackageMaxFields
    min?: AccountPackageMinFields
    stddev?: AccountPackageStddevFields
    stddevPop?: AccountPackageStddevPopFields
    stddevSamp?: AccountPackageStddevSampFields
    sum?: AccountPackageSumFields
    varPop?: AccountPackageVarPopFields
    varSamp?: AccountPackageVarSampFields
    variance?: AccountPackageVarianceFields
    __typename: 'AccountPackageAggregateFields'
}


/** aggregate avg on columns */
export interface AccountPackageAvgFields {
    packageId?: Scalars['Float']
    __typename: 'AccountPackageAvgFields'
}


/** unique or primary key constraints on table "account_package" */
export type AccountPackageConstraint = 'package_transactions_pkey'


/** aggregate max on columns */
export interface AccountPackageMaxFields {
    accountId?: Scalars['uuid']
    createdAt?: Scalars['timestamptz']
    id?: Scalars['uuid']
    packageId?: Scalars['Int']
    transaction?: Scalars['String']
    __typename: 'AccountPackageMaxFields'
}


/** aggregate min on columns */
export interface AccountPackageMinFields {
    accountId?: Scalars['uuid']
    createdAt?: Scalars['timestamptz']
    id?: Scalars['uuid']
    packageId?: Scalars['Int']
    transaction?: Scalars['String']
    __typename: 'AccountPackageMinFields'
}


/** response of any mutation on the table "account_package" */
export interface AccountPackageMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: AccountPackage[]
    __typename: 'AccountPackageMutationResponse'
}


/** select columns of table "account_package" */
export type AccountPackageSelectColumn = 'accountId' | 'createdAt' | 'id' | 'packageId' | 'transaction'


/** aggregate stddev on columns */
export interface AccountPackageStddevFields {
    packageId?: Scalars['Float']
    __typename: 'AccountPackageStddevFields'
}


/** aggregate stddevPop on columns */
export interface AccountPackageStddevPopFields {
    packageId?: Scalars['Float']
    __typename: 'AccountPackageStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface AccountPackageStddevSampFields {
    packageId?: Scalars['Float']
    __typename: 'AccountPackageStddevSampFields'
}


/** aggregate sum on columns */
export interface AccountPackageSumFields {
    packageId?: Scalars['Int']
    __typename: 'AccountPackageSumFields'
}


/** update columns of table "account_package" */
export type AccountPackageUpdateColumn = 'accountId' | 'createdAt' | 'id' | 'packageId' | 'transaction'


/** aggregate varPop on columns */
export interface AccountPackageVarPopFields {
    packageId?: Scalars['Float']
    __typename: 'AccountPackageVarPopFields'
}


/** aggregate varSamp on columns */
export interface AccountPackageVarSampFields {
    packageId?: Scalars['Float']
    __typename: 'AccountPackageVarSampFields'
}


/** aggregate variance on columns */
export interface AccountPackageVarianceFields {
    packageId?: Scalars['Float']
    __typename: 'AccountPackageVarianceFields'
}


/** select columns of table "account" */
export type AccountSelectColumn = 'binaryParentId' | 'binaryPlacement' | 'bio' | 'createdAt' | 'email' | 'id' | 'image' | 'name' | 'parentId' | 'phone' | 'updatedAt' | 'username' | 'wallet'


/** update columns of table "account" */
export type AccountUpdateColumn = 'binaryParentId' | 'binaryPlacement' | 'bio' | 'createdAt' | 'email' | 'id' | 'image' | 'name' | 'parentId' | 'phone' | 'updatedAt' | 'username' | 'wallet'


/** columns and relationships of "auction" */
export interface Auction {
    /** An array relationship */
    bids: Bid[]
    /** An object relationship */
    category: Category
    categoryId: Scalars['Int']
    createdAt?: Scalars['timestamptz']
    endTime?: Scalars['timestamptz']
    id: Scalars['Int']
    image?: Scalars['String']
    isActive: Scalars['Boolean']
    itemDescription: Scalars['String']
    itemName: Scalars['String']
    lastBidTime: Scalars['timestamptz']
    price: Scalars['Int']
    startTime?: Scalars['timestamptz']
    time?: Scalars['Int']
    updatedAt?: Scalars['timestamptz']
    __typename: 'Auction'
}


/** aggregated selection of "auction" */
export interface AuctionAggregate {
    aggregate?: AuctionAggregateFields
    nodes: Auction[]
    __typename: 'AuctionAggregate'
}


/** aggregate fields of "auction" */
export interface AuctionAggregateFields {
    avg?: AuctionAvgFields
    count: Scalars['Int']
    max?: AuctionMaxFields
    min?: AuctionMinFields
    stddev?: AuctionStddevFields
    stddevPop?: AuctionStddevPopFields
    stddevSamp?: AuctionStddevSampFields
    sum?: AuctionSumFields
    varPop?: AuctionVarPopFields
    varSamp?: AuctionVarSampFields
    variance?: AuctionVarianceFields
    __typename: 'AuctionAggregateFields'
}


/** aggregate avg on columns */
export interface AuctionAvgFields {
    categoryId?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    time?: Scalars['Float']
    __typename: 'AuctionAvgFields'
}


/** aggregate max on columns */
export interface AuctionMaxFields {
    categoryId?: Scalars['Int']
    createdAt?: Scalars['timestamptz']
    endTime?: Scalars['timestamptz']
    id?: Scalars['Int']
    image?: Scalars['String']
    itemDescription?: Scalars['String']
    itemName?: Scalars['String']
    lastBidTime?: Scalars['timestamptz']
    price?: Scalars['Int']
    startTime?: Scalars['timestamptz']
    time?: Scalars['Int']
    updatedAt?: Scalars['timestamptz']
    __typename: 'AuctionMaxFields'
}


/** aggregate min on columns */
export interface AuctionMinFields {
    categoryId?: Scalars['Int']
    createdAt?: Scalars['timestamptz']
    endTime?: Scalars['timestamptz']
    id?: Scalars['Int']
    image?: Scalars['String']
    itemDescription?: Scalars['String']
    itemName?: Scalars['String']
    lastBidTime?: Scalars['timestamptz']
    price?: Scalars['Int']
    startTime?: Scalars['timestamptz']
    time?: Scalars['Int']
    updatedAt?: Scalars['timestamptz']
    __typename: 'AuctionMinFields'
}


/** response of any mutation on the table "auction" */
export interface AuctionMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Auction[]
    __typename: 'AuctionMutationResponse'
}


/** select columns of table "auction" */
export type AuctionSelectColumn = 'categoryId' | 'createdAt' | 'endTime' | 'id' | 'image' | 'isActive' | 'itemDescription' | 'itemName' | 'lastBidTime' | 'price' | 'startTime' | 'time' | 'updatedAt'


/** select "auctionAggregateBoolExpBool_andArgumentsColumns" columns of table "auction" */
export type AuctionSelectColumnAuctionAggregateBoolExpBool_andArgumentsColumns = 'isActive'


/** select "auctionAggregateBoolExpBool_orArgumentsColumns" columns of table "auction" */
export type AuctionSelectColumnAuctionAggregateBoolExpBool_orArgumentsColumns = 'isActive'


/** aggregate stddev on columns */
export interface AuctionStddevFields {
    categoryId?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    time?: Scalars['Float']
    __typename: 'AuctionStddevFields'
}


/** aggregate stddevPop on columns */
export interface AuctionStddevPopFields {
    categoryId?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    time?: Scalars['Float']
    __typename: 'AuctionStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface AuctionStddevSampFields {
    categoryId?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    time?: Scalars['Float']
    __typename: 'AuctionStddevSampFields'
}


/** aggregate sum on columns */
export interface AuctionSumFields {
    categoryId?: Scalars['Int']
    id?: Scalars['Int']
    price?: Scalars['Int']
    time?: Scalars['Int']
    __typename: 'AuctionSumFields'
}


/** aggregate varPop on columns */
export interface AuctionVarPopFields {
    categoryId?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    time?: Scalars['Float']
    __typename: 'AuctionVarPopFields'
}


/** aggregate varSamp on columns */
export interface AuctionVarSampFields {
    categoryId?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    time?: Scalars['Float']
    __typename: 'AuctionVarSampFields'
}


/** aggregate variance on columns */
export interface AuctionVarianceFields {
    categoryId?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    time?: Scalars['Float']
    __typename: 'AuctionVarianceFields'
}


/** columns and relationships of "balance" */
export interface Balance {
    /** An object relationship */
    account: Account
    displayQuantity: Scalars['String']
    quantity: Scalars['Int']
    symbol: Scalars['String']
    wallet: Scalars['String']
    __typename: 'Balance'
}


/** aggregated selection of "balance" */
export interface BalanceAggregate {
    aggregate?: BalanceAggregateFields
    nodes: Balance[]
    __typename: 'BalanceAggregate'
}


/** aggregate fields of "balance" */
export interface BalanceAggregateFields {
    avg?: BalanceAvgFields
    count: Scalars['Int']
    max?: BalanceMaxFields
    min?: BalanceMinFields
    stddev?: BalanceStddevFields
    stddevPop?: BalanceStddevPopFields
    stddevSamp?: BalanceStddevSampFields
    sum?: BalanceSumFields
    varPop?: BalanceVarPopFields
    varSamp?: BalanceVarSampFields
    variance?: BalanceVarianceFields
    __typename: 'BalanceAggregateFields'
}


/** aggregate avg on columns */
export interface BalanceAvgFields {
    quantity?: Scalars['Float']
    __typename: 'BalanceAvgFields'
}


/** unique or primary key constraints on table "balance" */
export type BalanceConstraint = 'balance_pkey'


/** aggregate max on columns */
export interface BalanceMaxFields {
    displayQuantity?: Scalars['String']
    quantity?: Scalars['Int']
    symbol?: Scalars['String']
    wallet?: Scalars['String']
    __typename: 'BalanceMaxFields'
}


/** aggregate min on columns */
export interface BalanceMinFields {
    displayQuantity?: Scalars['String']
    quantity?: Scalars['Int']
    symbol?: Scalars['String']
    wallet?: Scalars['String']
    __typename: 'BalanceMinFields'
}


/** response of any mutation on the table "balance" */
export interface BalanceMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Balance[]
    __typename: 'BalanceMutationResponse'
}


/** select columns of table "balance" */
export type BalanceSelectColumn = 'displayQuantity' | 'quantity' | 'symbol' | 'wallet'


/** aggregate stddev on columns */
export interface BalanceStddevFields {
    quantity?: Scalars['Float']
    __typename: 'BalanceStddevFields'
}


/** aggregate stddevPop on columns */
export interface BalanceStddevPopFields {
    quantity?: Scalars['Float']
    __typename: 'BalanceStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface BalanceStddevSampFields {
    quantity?: Scalars['Float']
    __typename: 'BalanceStddevSampFields'
}


/** aggregate sum on columns */
export interface BalanceSumFields {
    quantity?: Scalars['Int']
    __typename: 'BalanceSumFields'
}


/** update columns of table "balance" */
export type BalanceUpdateColumn = 'displayQuantity' | 'quantity' | 'wallet'


/** aggregate varPop on columns */
export interface BalanceVarPopFields {
    quantity?: Scalars['Float']
    __typename: 'BalanceVarPopFields'
}


/** aggregate varSamp on columns */
export interface BalanceVarSampFields {
    quantity?: Scalars['Float']
    __typename: 'BalanceVarSampFields'
}


/** aggregate variance on columns */
export interface BalanceVarianceFields {
    quantity?: Scalars['Float']
    __typename: 'BalanceVarianceFields'
}


/** columns and relationships of "bid" */
export interface Bid {
    /** An object relationship */
    account: Account
    accountId: Scalars['uuid']
    amount: Scalars['String']
    /** An object relationship */
    auction: Auction
    auctionId: Scalars['Int']
    createdAt: Scalars['timestamptz']
    id: Scalars['uuid']
    transaction: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'Bid'
}


/** unique or primary key constraints on table "bid" */
export type BidConstraint = 'bids_pkey'


/** response of any mutation on the table "bid" */
export interface BidMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Bid[]
    __typename: 'BidMutationResponse'
}


/** select columns of table "bid" */
export type BidSelectColumn = 'accountId' | 'amount' | 'auctionId' | 'createdAt' | 'id' | 'transaction' | 'updatedAt'


/** placeholder for update columns of table "bid" (current role has no relevant permissions) */
export type BidUpdateColumn = '_PLACEHOLDER'


/** columns and relationships of "calendar" */
export interface Calendar {
    accountId: Scalars['uuid']
    date: Scalars['timestamptz']
    eventDescription: Scalars['String']
    eventTitle: Scalars['String']
    eventType: Scalars['String']
    id: Scalars['uuid']
    __typename: 'Calendar'
}


/** unique or primary key constraints on table "calendar" */
export type CalendarConstraint = 'calendar_pkey'


/** response of any mutation on the table "calendar" */
export interface CalendarMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Calendar[]
    __typename: 'CalendarMutationResponse'
}


/** select columns of table "calendar" */
export type CalendarSelectColumn = 'accountId' | 'date' | 'eventDescription' | 'eventTitle' | 'eventType' | 'id'


/** placeholder for update columns of table "calendar" (current role has no relevant permissions) */
export type CalendarUpdateColumn = '_PLACEHOLDER'


/** columns and relationships of "category" */
export interface Category {
    /** An array relationship */
    auctions: Auction[]
    /** An aggregate relationship */
    auctionsAggregate: AuctionAggregate
    id: Scalars['Int']
    name: Scalars['String']
    __typename: 'Category'
}


/** select columns of table "category" */
export type CategorySelectColumn = 'id' | 'name'


/** ordering argument of a cursor */
export type CursorOrdering = 'ASC' | 'DESC'


/** columns and relationships of "message" */
export interface Message {
    createdAt: Scalars['timestamptz']
    id: Scalars['uuid']
    isRead: Scalars['Boolean']
    message: Scalars['String']
    /** An object relationship */
    recipient: Account
    recipientId: Scalars['uuid']
    /** An object relationship */
    sender: Account
    senderId: Scalars['uuid']
    updatedAt: Scalars['timestamptz']
    __typename: 'Message'
}


/** aggregated selection of "message" */
export interface MessageAggregate {
    aggregate?: MessageAggregateFields
    nodes: Message[]
    __typename: 'MessageAggregate'
}


/** aggregate fields of "message" */
export interface MessageAggregateFields {
    count: Scalars['Int']
    max?: MessageMaxFields
    min?: MessageMinFields
    __typename: 'MessageAggregateFields'
}


/** unique or primary key constraints on table "message" */
export type MessageConstraint = 'message_pkey'


/** aggregate max on columns */
export interface MessageMaxFields {
    createdAt?: Scalars['timestamptz']
    id?: Scalars['uuid']
    message?: Scalars['String']
    recipientId?: Scalars['uuid']
    senderId?: Scalars['uuid']
    updatedAt?: Scalars['timestamptz']
    __typename: 'MessageMaxFields'
}


/** aggregate min on columns */
export interface MessageMinFields {
    createdAt?: Scalars['timestamptz']
    id?: Scalars['uuid']
    message?: Scalars['String']
    recipientId?: Scalars['uuid']
    senderId?: Scalars['uuid']
    updatedAt?: Scalars['timestamptz']
    __typename: 'MessageMinFields'
}


/** response of any mutation on the table "message" */
export interface MessageMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Message[]
    __typename: 'MessageMutationResponse'
}


/** select columns of table "message" */
export type MessageSelectColumn = 'createdAt' | 'id' | 'isRead' | 'message' | 'recipientId' | 'senderId' | 'updatedAt'


/** update columns of table "message" */
export type MessageUpdateColumn = 'createdAt' | 'id' | 'isRead' | 'message' | 'recipientId' | 'senderId' | 'updatedAt'


/** columns and relationships of "notification" */
export interface Notification {
    /** An object relationship */
    account?: Account
    createdAt?: Scalars['timestamptz']
    id: Scalars['uuid']
    isRead: Scalars['Boolean']
    message: Scalars['String']
    notifType: Scalars['String']
    updatedAt?: Scalars['timestamptz']
    userId?: Scalars['uuid']
    __typename: 'Notification'
}


/** response of any mutation on the table "notification" */
export interface NotificationMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Notification[]
    __typename: 'NotificationMutationResponse'
}


/** select columns of table "notification" */
export type NotificationSelectColumn = 'createdAt' | 'id' | 'isRead' | 'message' | 'notifType' | 'updatedAt' | 'userId'


/** column ordering options */
export type OrderBy = 'ASC' | 'ASC_NULLS_FIRST' | 'ASC_NULLS_LAST' | 'DESC' | 'DESC_NULLS_FIRST' | 'DESC_NULLS_LAST'


/** columns and relationships of "package" */
export interface Package {
    benefits?: Scalars['jsonb']
    description: Scalars['String']
    id: Scalars['Int']
    name: Scalars['String']
    price: Scalars['Int']
    /** An array relationship */
    transactions: AccountPackage[]
    /** An aggregate relationship */
    transactionsAggregate: AccountPackageAggregate
    __typename: 'Package'
}


/** select columns of table "package" */
export type PackageSelectColumn = 'benefits' | 'description' | 'id' | 'name' | 'price'


/** columns and relationships of "payments" */
export interface Payments {
    /** An object relationship */
    account: Account
    accountId: Scalars['uuid']
    date: Scalars['timestamptz']
    detail: Scalars['jsonb']
    id: Scalars['uuid']
    paymentType: Scalars['String']
    quantity: Scalars['Int']
    __typename: 'Payments'
}


/** select columns of table "payments" */
export type PaymentsSelectColumn = 'accountId' | 'date' | 'detail' | 'id' | 'paymentType' | 'quantity'


/** mutation root */
export interface mutation_root {
    /** insert data into the table: "account" */
    insertAccount?: AccountMutationResponse
    /** insert a single row into the table: "account" */
    insertAccountOne?: Account
    /** insert data into the table: "account_package" */
    insertAccountPackage?: AccountPackageMutationResponse
    /** insert a single row into the table: "account_package" */
    insertAccountPackageOne?: AccountPackage
    /** insert data into the table: "balance" */
    insertBalance?: BalanceMutationResponse
    /** insert a single row into the table: "balance" */
    insertBalanceOne?: Balance
    /** insert data into the table: "bid" */
    insertBid?: BidMutationResponse
    /** insert a single row into the table: "bid" */
    insertBidOne?: Bid
    /** insert data into the table: "calendar" */
    insertCalendar?: CalendarMutationResponse
    /** insert a single row into the table: "calendar" */
    insertCalendarOne?: Calendar
    /** insert data into the table: "message" */
    insertMessage?: MessageMutationResponse
    /** insert a single row into the table: "message" */
    insertMessageOne?: Message
    /** update data of the table: "account" */
    updateAccount?: AccountMutationResponse
    /** update single row of the table: "account" */
    updateAccountByPk?: Account
    /** update multiples rows of table: "account" */
    updateAccountMany?: (AccountMutationResponse | undefined)[]
    /** update data of the table: "account_package" */
    updateAccountPackage?: AccountPackageMutationResponse
    /** update single row of the table: "account_package" */
    updateAccountPackageByPk?: AccountPackage
    /** update multiples rows of table: "account_package" */
    updateAccountPackageMany?: (AccountPackageMutationResponse | undefined)[]
    /** update data of the table: "auction" */
    updateAuction?: AuctionMutationResponse
    /** update single row of the table: "auction" */
    updateAuctionByPk?: Auction
    /** update multiples rows of table: "auction" */
    updateAuctionMany?: (AuctionMutationResponse | undefined)[]
    /** update data of the table: "balance" */
    updateBalance?: BalanceMutationResponse
    /** update single row of the table: "balance" */
    updateBalanceByPk?: Balance
    /** update multiples rows of table: "balance" */
    updateBalanceMany?: (BalanceMutationResponse | undefined)[]
    /** update data of the table: "message" */
    updateMessage?: MessageMutationResponse
    /** update single row of the table: "message" */
    updateMessageByPk?: Message
    /** update multiples rows of table: "message" */
    updateMessageMany?: (MessageMutationResponse | undefined)[]
    /** update data of the table: "notification" */
    updateNotification?: NotificationMutationResponse
    /** update single row of the table: "notification" */
    updateNotificationByPk?: Notification
    /** update multiples rows of table: "notification" */
    updateNotificationMany?: (NotificationMutationResponse | undefined)[]
    __typename: 'mutation_root'
}

export interface query_root {
    /** fetch data from the table: "account" */
    account: Account[]
    /** fetch data from the table: "account" using primary key columns */
    accountByPk?: Account
    /** fetch data from the table: "account_package" */
    accountPackage: AccountPackage[]
    /** fetch aggregated fields from the table: "account_package" */
    accountPackageAggregate: AccountPackageAggregate
    /** fetch data from the table: "account_package" using primary key columns */
    accountPackageByPk?: AccountPackage
    /** fetch data from the table: "auction" */
    auction: Auction[]
    /** fetch aggregated fields from the table: "auction" */
    auctionAggregate: AuctionAggregate
    /** fetch data from the table: "auction" using primary key columns */
    auctionByPk?: Auction
    /** fetch data from the table: "balance" */
    balance: Balance[]
    /** fetch aggregated fields from the table: "balance" */
    balanceAggregate: BalanceAggregate
    /** fetch data from the table: "balance" using primary key columns */
    balanceByPk?: Balance
    /** fetch data from the table: "bid" */
    bid: Bid[]
    /** fetch data from the table: "bid" using primary key columns */
    bidByPk?: Bid
    /** fetch data from the table: "calendar" */
    calendar: Calendar[]
    /** fetch data from the table: "calendar" using primary key columns */
    calendarByPk?: Calendar
    /** fetch data from the table: "category" */
    category: Category[]
    /** fetch data from the table: "category" using primary key columns */
    categoryByPk?: Category
    /** fetch data from the table: "message" */
    message: Message[]
    /** fetch aggregated fields from the table: "message" */
    messageAggregate: MessageAggregate
    /** fetch data from the table: "message" using primary key columns */
    messageByPk?: Message
    /** fetch data from the table: "notification" */
    notification: Notification[]
    /** fetch data from the table: "notification" using primary key columns */
    notificationByPk?: Notification
    /** fetch data from the table: "package" */
    package: Package[]
    /** fetch data from the table: "package" using primary key columns */
    packageByPk?: Package
    /** An array relationship */
    payments: Payments[]
    /** fetch data from the table: "payments" using primary key columns */
    paymentsByPk?: Payments
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "account" */
    account: Account[]
    /** fetch data from the table: "account" using primary key columns */
    accountByPk?: Account
    /** fetch data from the table: "account_package" */
    accountPackage: AccountPackage[]
    /** fetch aggregated fields from the table: "account_package" */
    accountPackageAggregate: AccountPackageAggregate
    /** fetch data from the table: "account_package" using primary key columns */
    accountPackageByPk?: AccountPackage
    /** fetch data from the table in a streaming manner: "account_package" */
    accountPackageStream: AccountPackage[]
    /** fetch data from the table in a streaming manner: "account" */
    accountStream: Account[]
    /** fetch data from the table: "auction" */
    auction: Auction[]
    /** fetch aggregated fields from the table: "auction" */
    auctionAggregate: AuctionAggregate
    /** fetch data from the table: "auction" using primary key columns */
    auctionByPk?: Auction
    /** fetch data from the table in a streaming manner: "auction" */
    auctionStream: Auction[]
    /** fetch data from the table: "balance" */
    balance: Balance[]
    /** fetch aggregated fields from the table: "balance" */
    balanceAggregate: BalanceAggregate
    /** fetch data from the table: "balance" using primary key columns */
    balanceByPk?: Balance
    /** fetch data from the table in a streaming manner: "balance" */
    balanceStream: Balance[]
    /** fetch data from the table: "bid" */
    bid: Bid[]
    /** fetch data from the table: "bid" using primary key columns */
    bidByPk?: Bid
    /** fetch data from the table in a streaming manner: "bid" */
    bidStream: Bid[]
    /** fetch data from the table: "calendar" */
    calendar: Calendar[]
    /** fetch data from the table: "calendar" using primary key columns */
    calendarByPk?: Calendar
    /** fetch data from the table in a streaming manner: "calendar" */
    calendarStream: Calendar[]
    /** fetch data from the table: "category" */
    category: Category[]
    /** fetch data from the table: "category" using primary key columns */
    categoryByPk?: Category
    /** fetch data from the table in a streaming manner: "category" */
    categoryStream: Category[]
    /** fetch data from the table: "message" */
    message: Message[]
    /** fetch aggregated fields from the table: "message" */
    messageAggregate: MessageAggregate
    /** fetch data from the table: "message" using primary key columns */
    messageByPk?: Message
    /** fetch data from the table in a streaming manner: "message" */
    messageStream: Message[]
    /** fetch data from the table: "notification" */
    notification: Notification[]
    /** fetch data from the table: "notification" using primary key columns */
    notificationByPk?: Notification
    /** fetch data from the table in a streaming manner: "notification" */
    notificationStream: Notification[]
    /** fetch data from the table: "package" */
    package: Package[]
    /** fetch data from the table: "package" using primary key columns */
    packageByPk?: Package
    /** fetch data from the table in a streaming manner: "package" */
    packageStream: Package[]
    /** An array relationship */
    payments: Payments[]
    /** fetch data from the table: "payments" using primary key columns */
    paymentsByPk?: Payments
    /** fetch data from the table in a streaming manner: "payments" */
    paymentsStream: Payments[]
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** columns and relationships of "account" */
export interface AccountGenqlSelection{
    /** An array relationship */
    balances?: (BalanceGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BalanceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BalanceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BalanceBoolExp | null)} })
    /** An aggregate relationship */
    balancesAggregate?: (BalanceAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BalanceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BalanceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BalanceBoolExp | null)} })
    /** An array relationship */
    bids?: (BidGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BidSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BidOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BidBoolExp | null)} })
    binaryParentId?: boolean | number
    binaryPlacement?: boolean | number
    bio?: boolean | number
    /** An object relationship */
    calendar?: CalendarGenqlSelection
    createdAt?: boolean | number
    email?: boolean | number
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    /** An array relationship */
    notifications?: (NotificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (NotificationSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (NotificationOrderBy[] | null), 
    /** filter the rows returned */
    where?: (NotificationBoolExp | null)} })
    /** An array relationship */
    packages?: (AccountPackageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountPackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountPackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    /** An aggregate relationship */
    packagesAggregate?: (AccountPackageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountPackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountPackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    parentId?: boolean | number
    /** An array relationship */
    payments?: (PaymentsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PaymentsSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PaymentsOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PaymentsBoolExp | null)} })
    phone?: boolean | number
    updatedAt?: boolean | number
    username?: boolean | number
    wallet?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export interface AccountBoolExp {_and?: (AccountBoolExp[] | null),_not?: (AccountBoolExp | null),_or?: (AccountBoolExp[] | null),balances?: (BalanceBoolExp | null),balancesAggregate?: (BalanceAggregateBoolExp | null),bids?: (BidBoolExp | null),binaryParentId?: (UuidComparisonExp | null),binaryPlacement?: (StringComparisonExp | null),bio?: (StringComparisonExp | null),calendar?: (CalendarBoolExp | null),createdAt?: (TimestamptzComparisonExp | null),email?: (StringComparisonExp | null),id?: (UuidComparisonExp | null),image?: (StringComparisonExp | null),name?: (StringComparisonExp | null),notifications?: (NotificationBoolExp | null),packages?: (AccountPackageBoolExp | null),packagesAggregate?: (AccountPackageAggregateBoolExp | null),parentId?: (UuidComparisonExp | null),payments?: (PaymentsBoolExp | null),phone?: (StringComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null),username?: (StringComparisonExp | null),wallet?: (StringComparisonExp | null)}


/** input type for inserting data into table "account" */
export interface AccountInsertInput {balances?: (BalanceArrRelInsertInput | null),bids?: (BidArrRelInsertInput | null),binaryParentId?: (Scalars['uuid'] | null),binaryPlacement?: (Scalars['String'] | null),bio?: (Scalars['String'] | null),calendar?: (CalendarObjRelInsertInput | null),createdAt?: (Scalars['timestamptz'] | null),email?: (Scalars['String'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),packages?: (AccountPackageArrRelInsertInput | null),parentId?: (Scalars['uuid'] | null),phone?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null),wallet?: (Scalars['String'] | null)}


/** response of any mutation on the table "account" */
export interface AccountMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: AccountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "account" */
export interface AccountObjRelInsertInput {data: AccountInsertInput,
/** upsert condition */
onConflict?: (AccountOnConflict | null)}


/** on_conflict condition type for table "account" */
export interface AccountOnConflict {constraint: AccountConstraint,updateColumns: AccountUpdateColumn[],where?: (AccountBoolExp | null)}


/** Ordering options when selecting data from "account". */
export interface AccountOrderBy {balancesAggregate?: (BalanceAggregateOrderBy | null),bidsAggregate?: (BidAggregateOrderBy | null),binaryParentId?: (OrderBy | null),binaryPlacement?: (OrderBy | null),bio?: (OrderBy | null),calendar?: (CalendarOrderBy | null),createdAt?: (OrderBy | null),email?: (OrderBy | null),id?: (OrderBy | null),image?: (OrderBy | null),name?: (OrderBy | null),notificationsAggregate?: (NotificationAggregateOrderBy | null),packagesAggregate?: (AccountPackageAggregateOrderBy | null),parentId?: (OrderBy | null),paymentsAggregate?: (PaymentsAggregateOrderBy | null),phone?: (OrderBy | null),updatedAt?: (OrderBy | null),username?: (OrderBy | null),wallet?: (OrderBy | null)}


/** columns and relationships of "account_package" */
export interface AccountPackageGenqlSelection{
    /** An object relationship */
    account?: AccountGenqlSelection
    accountId?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    /** An object relationship */
    package?: PackageGenqlSelection
    packageId?: boolean | number
    transaction?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "account_package" */
export interface AccountPackageAggregateGenqlSelection{
    aggregate?: AccountPackageAggregateFieldsGenqlSelection
    nodes?: AccountPackageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountPackageAggregateBoolExp {count?: (accountPackageAggregateBoolExpCount | null)}


/** aggregate fields of "account_package" */
export interface AccountPackageAggregateFieldsGenqlSelection{
    avg?: AccountPackageAvgFieldsGenqlSelection
    count?: { __args: {columns?: (AccountPackageSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: AccountPackageMaxFieldsGenqlSelection
    min?: AccountPackageMinFieldsGenqlSelection
    stddev?: AccountPackageStddevFieldsGenqlSelection
    stddevPop?: AccountPackageStddevPopFieldsGenqlSelection
    stddevSamp?: AccountPackageStddevSampFieldsGenqlSelection
    sum?: AccountPackageSumFieldsGenqlSelection
    varPop?: AccountPackageVarPopFieldsGenqlSelection
    varSamp?: AccountPackageVarSampFieldsGenqlSelection
    variance?: AccountPackageVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "account_package" */
export interface AccountPackageAggregateOrderBy {avg?: (AccountPackageAvgOrderBy | null),count?: (OrderBy | null),max?: (AccountPackageMaxOrderBy | null),min?: (AccountPackageMinOrderBy | null),stddev?: (AccountPackageStddevOrderBy | null),stddevPop?: (AccountPackageStddevPopOrderBy | null),stddevSamp?: (AccountPackageStddevSampOrderBy | null),sum?: (AccountPackageSumOrderBy | null),varPop?: (AccountPackageVarPopOrderBy | null),varSamp?: (AccountPackageVarSampOrderBy | null),variance?: (AccountPackageVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "account_package" */
export interface AccountPackageArrRelInsertInput {data: AccountPackageInsertInput[],
/** upsert condition */
onConflict?: (AccountPackageOnConflict | null)}


/** aggregate avg on columns */
export interface AccountPackageAvgFieldsGenqlSelection{
    packageId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "account_package" */
export interface AccountPackageAvgOrderBy {packageId?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "account_package". All fields are combined with a logical 'AND'. */
export interface AccountPackageBoolExp {_and?: (AccountPackageBoolExp[] | null),_not?: (AccountPackageBoolExp | null),_or?: (AccountPackageBoolExp[] | null),account?: (AccountBoolExp | null),accountId?: (UuidComparisonExp | null),createdAt?: (TimestamptzComparisonExp | null),id?: (UuidComparisonExp | null),package?: (PackageBoolExp | null),packageId?: (IntComparisonExp | null),transaction?: (StringComparisonExp | null)}


/** input type for incrementing numeric columns in table "account_package" */
export interface AccountPackageIncInput {packageId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "account_package" */
export interface AccountPackageInsertInput {account?: (AccountObjRelInsertInput | null),accountId?: (Scalars['uuid'] | null),createdAt?: (Scalars['timestamptz'] | null),packageId?: (Scalars['Int'] | null),transaction?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface AccountPackageMaxFieldsGenqlSelection{
    accountId?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    packageId?: boolean | number
    transaction?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "account_package" */
export interface AccountPackageMaxOrderBy {accountId?: (OrderBy | null),createdAt?: (OrderBy | null),id?: (OrderBy | null),packageId?: (OrderBy | null),transaction?: (OrderBy | null)}


/** aggregate min on columns */
export interface AccountPackageMinFieldsGenqlSelection{
    accountId?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    packageId?: boolean | number
    transaction?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "account_package" */
export interface AccountPackageMinOrderBy {accountId?: (OrderBy | null),createdAt?: (OrderBy | null),id?: (OrderBy | null),packageId?: (OrderBy | null),transaction?: (OrderBy | null)}


/** response of any mutation on the table "account_package" */
export interface AccountPackageMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: AccountPackageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "account_package" */
export interface AccountPackageOnConflict {constraint: AccountPackageConstraint,updateColumns: AccountPackageUpdateColumn[],where?: (AccountPackageBoolExp | null)}


/** Ordering options when selecting data from "account_package". */
export interface AccountPackageOrderBy {account?: (AccountOrderBy | null),accountId?: (OrderBy | null),createdAt?: (OrderBy | null),id?: (OrderBy | null),package?: (PackageOrderBy | null),packageId?: (OrderBy | null),transaction?: (OrderBy | null)}


/** primary key columns input for table: account_package */
export interface AccountPackagePkColumnsInput {id: Scalars['uuid']}


/** input type for updating data in table "account_package" */
export interface AccountPackageSetInput {accountId?: (Scalars['uuid'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),packageId?: (Scalars['Int'] | null),transaction?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface AccountPackageStddevFieldsGenqlSelection{
    packageId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "account_package" */
export interface AccountPackageStddevOrderBy {packageId?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface AccountPackageStddevPopFieldsGenqlSelection{
    packageId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "account_package" */
export interface AccountPackageStddevPopOrderBy {packageId?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface AccountPackageStddevSampFieldsGenqlSelection{
    packageId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "account_package" */
export interface AccountPackageStddevSampOrderBy {packageId?: (OrderBy | null)}


/** Streaming cursor of the table "account_package" */
export interface AccountPackageStreamCursorInput {
/** Stream column input with initial value */
initialValue: AccountPackageStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface AccountPackageStreamCursorValueInput {accountId?: (Scalars['uuid'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),packageId?: (Scalars['Int'] | null),transaction?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface AccountPackageSumFieldsGenqlSelection{
    packageId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "account_package" */
export interface AccountPackageSumOrderBy {packageId?: (OrderBy | null)}

export interface AccountPackageUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (AccountPackageIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (AccountPackageSetInput | null),
/** filter the rows which have to be updated */
where: AccountPackageBoolExp}


/** aggregate varPop on columns */
export interface AccountPackageVarPopFieldsGenqlSelection{
    packageId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "account_package" */
export interface AccountPackageVarPopOrderBy {packageId?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface AccountPackageVarSampFieldsGenqlSelection{
    packageId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "account_package" */
export interface AccountPackageVarSampOrderBy {packageId?: (OrderBy | null)}


/** aggregate variance on columns */
export interface AccountPackageVarianceFieldsGenqlSelection{
    packageId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "account_package" */
export interface AccountPackageVarianceOrderBy {packageId?: (OrderBy | null)}


/** primary key columns input for table: account */
export interface AccountPkColumnsInput {id: Scalars['uuid']}


/** input type for updating data in table "account" */
export interface AccountSetInput {binaryParentId?: (Scalars['uuid'] | null),binaryPlacement?: (Scalars['String'] | null),bio?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),email?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),parentId?: (Scalars['uuid'] | null),phone?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null),wallet?: (Scalars['String'] | null)}


/** Streaming cursor of the table "account" */
export interface AccountStreamCursorInput {
/** Stream column input with initial value */
initialValue: AccountStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface AccountStreamCursorValueInput {binaryParentId?: (Scalars['uuid'] | null),binaryPlacement?: (Scalars['String'] | null),bio?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),email?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),parentId?: (Scalars['uuid'] | null),phone?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null),wallet?: (Scalars['String'] | null)}

export interface AccountUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (AccountSetInput | null),
/** filter the rows which have to be updated */
where: AccountBoolExp}


/** columns and relationships of "auction" */
export interface AuctionGenqlSelection{
    /** An array relationship */
    bids?: (BidGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BidSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BidOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BidBoolExp | null)} })
    /** An object relationship */
    category?: CategoryGenqlSelection
    categoryId?: boolean | number
    createdAt?: boolean | number
    endTime?: boolean | number
    id?: boolean | number
    image?: boolean | number
    isActive?: boolean | number
    itemDescription?: boolean | number
    itemName?: boolean | number
    lastBidTime?: boolean | number
    price?: boolean | number
    startTime?: boolean | number
    time?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auction" */
export interface AuctionAggregateGenqlSelection{
    aggregate?: AuctionAggregateFieldsGenqlSelection
    nodes?: AuctionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuctionAggregateBoolExp {bool_and?: (auctionAggregateBoolExpBool_and | null),bool_or?: (auctionAggregateBoolExpBool_or | null),count?: (auctionAggregateBoolExpCount | null)}


/** aggregate fields of "auction" */
export interface AuctionAggregateFieldsGenqlSelection{
    avg?: AuctionAvgFieldsGenqlSelection
    count?: { __args: {columns?: (AuctionSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: AuctionMaxFieldsGenqlSelection
    min?: AuctionMinFieldsGenqlSelection
    stddev?: AuctionStddevFieldsGenqlSelection
    stddevPop?: AuctionStddevPopFieldsGenqlSelection
    stddevSamp?: AuctionStddevSampFieldsGenqlSelection
    sum?: AuctionSumFieldsGenqlSelection
    varPop?: AuctionVarPopFieldsGenqlSelection
    varSamp?: AuctionVarSampFieldsGenqlSelection
    variance?: AuctionVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "auction" */
export interface AuctionAggregateOrderBy {avg?: (AuctionAvgOrderBy | null),count?: (OrderBy | null),max?: (AuctionMaxOrderBy | null),min?: (AuctionMinOrderBy | null),stddev?: (AuctionStddevOrderBy | null),stddevPop?: (AuctionStddevPopOrderBy | null),stddevSamp?: (AuctionStddevSampOrderBy | null),sum?: (AuctionSumOrderBy | null),varPop?: (AuctionVarPopOrderBy | null),varSamp?: (AuctionVarSampOrderBy | null),variance?: (AuctionVarianceOrderBy | null)}


/** aggregate avg on columns */
export interface AuctionAvgFieldsGenqlSelection{
    categoryId?: boolean | number
    id?: boolean | number
    price?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "auction" */
export interface AuctionAvgOrderBy {categoryId?: (OrderBy | null),id?: (OrderBy | null),price?: (OrderBy | null),time?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "auction". All fields are combined with a logical 'AND'. */
export interface AuctionBoolExp {_and?: (AuctionBoolExp[] | null),_not?: (AuctionBoolExp | null),_or?: (AuctionBoolExp[] | null),bids?: (BidBoolExp | null),category?: (CategoryBoolExp | null),categoryId?: (IntComparisonExp | null),createdAt?: (TimestamptzComparisonExp | null),endTime?: (TimestamptzComparisonExp | null),id?: (IntComparisonExp | null),image?: (StringComparisonExp | null),isActive?: (BooleanComparisonExp | null),itemDescription?: (StringComparisonExp | null),itemName?: (StringComparisonExp | null),lastBidTime?: (TimestamptzComparisonExp | null),price?: (IntComparisonExp | null),startTime?: (TimestamptzComparisonExp | null),time?: (IntComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null)}


/** input type for incrementing numeric columns in table "auction" */
export interface AuctionIncInput {categoryId?: (Scalars['Int'] | null),price?: (Scalars['Int'] | null),time?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface AuctionMaxFieldsGenqlSelection{
    categoryId?: boolean | number
    createdAt?: boolean | number
    endTime?: boolean | number
    id?: boolean | number
    image?: boolean | number
    itemDescription?: boolean | number
    itemName?: boolean | number
    lastBidTime?: boolean | number
    price?: boolean | number
    startTime?: boolean | number
    time?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "auction" */
export interface AuctionMaxOrderBy {categoryId?: (OrderBy | null),createdAt?: (OrderBy | null),endTime?: (OrderBy | null),id?: (OrderBy | null),image?: (OrderBy | null),itemDescription?: (OrderBy | null),itemName?: (OrderBy | null),lastBidTime?: (OrderBy | null),price?: (OrderBy | null),startTime?: (OrderBy | null),time?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** aggregate min on columns */
export interface AuctionMinFieldsGenqlSelection{
    categoryId?: boolean | number
    createdAt?: boolean | number
    endTime?: boolean | number
    id?: boolean | number
    image?: boolean | number
    itemDescription?: boolean | number
    itemName?: boolean | number
    lastBidTime?: boolean | number
    price?: boolean | number
    startTime?: boolean | number
    time?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "auction" */
export interface AuctionMinOrderBy {categoryId?: (OrderBy | null),createdAt?: (OrderBy | null),endTime?: (OrderBy | null),id?: (OrderBy | null),image?: (OrderBy | null),itemDescription?: (OrderBy | null),itemName?: (OrderBy | null),lastBidTime?: (OrderBy | null),price?: (OrderBy | null),startTime?: (OrderBy | null),time?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** response of any mutation on the table "auction" */
export interface AuctionMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: AuctionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "auction". */
export interface AuctionOrderBy {bidsAggregate?: (BidAggregateOrderBy | null),category?: (CategoryOrderBy | null),categoryId?: (OrderBy | null),createdAt?: (OrderBy | null),endTime?: (OrderBy | null),id?: (OrderBy | null),image?: (OrderBy | null),isActive?: (OrderBy | null),itemDescription?: (OrderBy | null),itemName?: (OrderBy | null),lastBidTime?: (OrderBy | null),price?: (OrderBy | null),startTime?: (OrderBy | null),time?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** primary key columns input for table: auction */
export interface AuctionPkColumnsInput {id: Scalars['Int']}


/** input type for updating data in table "auction" */
export interface AuctionSetInput {categoryId?: (Scalars['Int'] | null),createdAt?: (Scalars['timestamptz'] | null),endTime?: (Scalars['timestamptz'] | null),image?: (Scalars['String'] | null),isActive?: (Scalars['Boolean'] | null),itemDescription?: (Scalars['String'] | null),itemName?: (Scalars['String'] | null),lastBidTime?: (Scalars['timestamptz'] | null),price?: (Scalars['Int'] | null),time?: (Scalars['Int'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface AuctionStddevFieldsGenqlSelection{
    categoryId?: boolean | number
    id?: boolean | number
    price?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "auction" */
export interface AuctionStddevOrderBy {categoryId?: (OrderBy | null),id?: (OrderBy | null),price?: (OrderBy | null),time?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface AuctionStddevPopFieldsGenqlSelection{
    categoryId?: boolean | number
    id?: boolean | number
    price?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "auction" */
export interface AuctionStddevPopOrderBy {categoryId?: (OrderBy | null),id?: (OrderBy | null),price?: (OrderBy | null),time?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface AuctionStddevSampFieldsGenqlSelection{
    categoryId?: boolean | number
    id?: boolean | number
    price?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "auction" */
export interface AuctionStddevSampOrderBy {categoryId?: (OrderBy | null),id?: (OrderBy | null),price?: (OrderBy | null),time?: (OrderBy | null)}


/** Streaming cursor of the table "auction" */
export interface AuctionStreamCursorInput {
/** Stream column input with initial value */
initialValue: AuctionStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface AuctionStreamCursorValueInput {categoryId?: (Scalars['Int'] | null),createdAt?: (Scalars['timestamptz'] | null),endTime?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),image?: (Scalars['String'] | null),isActive?: (Scalars['Boolean'] | null),itemDescription?: (Scalars['String'] | null),itemName?: (Scalars['String'] | null),lastBidTime?: (Scalars['timestamptz'] | null),price?: (Scalars['Int'] | null),startTime?: (Scalars['timestamptz'] | null),time?: (Scalars['Int'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface AuctionSumFieldsGenqlSelection{
    categoryId?: boolean | number
    id?: boolean | number
    price?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "auction" */
export interface AuctionSumOrderBy {categoryId?: (OrderBy | null),id?: (OrderBy | null),price?: (OrderBy | null),time?: (OrderBy | null)}

export interface AuctionUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (AuctionIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (AuctionSetInput | null),
/** filter the rows which have to be updated */
where: AuctionBoolExp}


/** aggregate varPop on columns */
export interface AuctionVarPopFieldsGenqlSelection{
    categoryId?: boolean | number
    id?: boolean | number
    price?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "auction" */
export interface AuctionVarPopOrderBy {categoryId?: (OrderBy | null),id?: (OrderBy | null),price?: (OrderBy | null),time?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface AuctionVarSampFieldsGenqlSelection{
    categoryId?: boolean | number
    id?: boolean | number
    price?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "auction" */
export interface AuctionVarSampOrderBy {categoryId?: (OrderBy | null),id?: (OrderBy | null),price?: (OrderBy | null),time?: (OrderBy | null)}


/** aggregate variance on columns */
export interface AuctionVarianceFieldsGenqlSelection{
    categoryId?: boolean | number
    id?: boolean | number
    price?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "auction" */
export interface AuctionVarianceOrderBy {categoryId?: (OrderBy | null),id?: (OrderBy | null),price?: (OrderBy | null),time?: (OrderBy | null)}


/** columns and relationships of "balance" */
export interface BalanceGenqlSelection{
    /** An object relationship */
    account?: AccountGenqlSelection
    displayQuantity?: boolean | number
    quantity?: boolean | number
    symbol?: boolean | number
    wallet?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "balance" */
export interface BalanceAggregateGenqlSelection{
    aggregate?: BalanceAggregateFieldsGenqlSelection
    nodes?: BalanceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BalanceAggregateBoolExp {count?: (balanceAggregateBoolExpCount | null)}


/** aggregate fields of "balance" */
export interface BalanceAggregateFieldsGenqlSelection{
    avg?: BalanceAvgFieldsGenqlSelection
    count?: { __args: {columns?: (BalanceSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: BalanceMaxFieldsGenqlSelection
    min?: BalanceMinFieldsGenqlSelection
    stddev?: BalanceStddevFieldsGenqlSelection
    stddevPop?: BalanceStddevPopFieldsGenqlSelection
    stddevSamp?: BalanceStddevSampFieldsGenqlSelection
    sum?: BalanceSumFieldsGenqlSelection
    varPop?: BalanceVarPopFieldsGenqlSelection
    varSamp?: BalanceVarSampFieldsGenqlSelection
    variance?: BalanceVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "balance" */
export interface BalanceAggregateOrderBy {avg?: (BalanceAvgOrderBy | null),count?: (OrderBy | null),max?: (BalanceMaxOrderBy | null),min?: (BalanceMinOrderBy | null),stddev?: (BalanceStddevOrderBy | null),stddevPop?: (BalanceStddevPopOrderBy | null),stddevSamp?: (BalanceStddevSampOrderBy | null),sum?: (BalanceSumOrderBy | null),varPop?: (BalanceVarPopOrderBy | null),varSamp?: (BalanceVarSampOrderBy | null),variance?: (BalanceVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "balance" */
export interface BalanceArrRelInsertInput {data: BalanceInsertInput[],
/** upsert condition */
onConflict?: (BalanceOnConflict | null)}


/** aggregate avg on columns */
export interface BalanceAvgFieldsGenqlSelection{
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "balance" */
export interface BalanceAvgOrderBy {quantity?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "balance". All fields are combined with a logical 'AND'. */
export interface BalanceBoolExp {_and?: (BalanceBoolExp[] | null),_not?: (BalanceBoolExp | null),_or?: (BalanceBoolExp[] | null),account?: (AccountBoolExp | null),displayQuantity?: (StringComparisonExp | null),quantity?: (IntComparisonExp | null),symbol?: (StringComparisonExp | null),wallet?: (StringComparisonExp | null)}


/** input type for incrementing numeric columns in table "balance" */
export interface BalanceIncInput {quantity?: (Scalars['Int'] | null)}


/** input type for inserting data into table "balance" */
export interface BalanceInsertInput {account?: (AccountObjRelInsertInput | null),displayQuantity?: (Scalars['String'] | null),quantity?: (Scalars['Int'] | null),symbol?: (Scalars['String'] | null),wallet?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface BalanceMaxFieldsGenqlSelection{
    displayQuantity?: boolean | number
    quantity?: boolean | number
    symbol?: boolean | number
    wallet?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "balance" */
export interface BalanceMaxOrderBy {displayQuantity?: (OrderBy | null),quantity?: (OrderBy | null),symbol?: (OrderBy | null),wallet?: (OrderBy | null)}


/** aggregate min on columns */
export interface BalanceMinFieldsGenqlSelection{
    displayQuantity?: boolean | number
    quantity?: boolean | number
    symbol?: boolean | number
    wallet?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "balance" */
export interface BalanceMinOrderBy {displayQuantity?: (OrderBy | null),quantity?: (OrderBy | null),symbol?: (OrderBy | null),wallet?: (OrderBy | null)}


/** response of any mutation on the table "balance" */
export interface BalanceMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: BalanceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "balance" */
export interface BalanceOnConflict {constraint: BalanceConstraint,updateColumns: BalanceUpdateColumn[],where?: (BalanceBoolExp | null)}


/** Ordering options when selecting data from "balance". */
export interface BalanceOrderBy {account?: (AccountOrderBy | null),displayQuantity?: (OrderBy | null),quantity?: (OrderBy | null),symbol?: (OrderBy | null),wallet?: (OrderBy | null)}


/** primary key columns input for table: balance */
export interface BalancePkColumnsInput {symbol: Scalars['String'],wallet: Scalars['String']}


/** input type for updating data in table "balance" */
export interface BalanceSetInput {displayQuantity?: (Scalars['String'] | null),quantity?: (Scalars['Int'] | null),wallet?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface BalanceStddevFieldsGenqlSelection{
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "balance" */
export interface BalanceStddevOrderBy {quantity?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface BalanceStddevPopFieldsGenqlSelection{
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "balance" */
export interface BalanceStddevPopOrderBy {quantity?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface BalanceStddevSampFieldsGenqlSelection{
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "balance" */
export interface BalanceStddevSampOrderBy {quantity?: (OrderBy | null)}


/** Streaming cursor of the table "balance" */
export interface BalanceStreamCursorInput {
/** Stream column input with initial value */
initialValue: BalanceStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface BalanceStreamCursorValueInput {displayQuantity?: (Scalars['String'] | null),quantity?: (Scalars['Int'] | null),symbol?: (Scalars['String'] | null),wallet?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface BalanceSumFieldsGenqlSelection{
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "balance" */
export interface BalanceSumOrderBy {quantity?: (OrderBy | null)}

export interface BalanceUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (BalanceIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (BalanceSetInput | null),
/** filter the rows which have to be updated */
where: BalanceBoolExp}


/** aggregate varPop on columns */
export interface BalanceVarPopFieldsGenqlSelection{
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "balance" */
export interface BalanceVarPopOrderBy {quantity?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface BalanceVarSampFieldsGenqlSelection{
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "balance" */
export interface BalanceVarSampOrderBy {quantity?: (OrderBy | null)}


/** aggregate variance on columns */
export interface BalanceVarianceFieldsGenqlSelection{
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "balance" */
export interface BalanceVarianceOrderBy {quantity?: (OrderBy | null)}


/** columns and relationships of "bid" */
export interface BidGenqlSelection{
    /** An object relationship */
    account?: AccountGenqlSelection
    accountId?: boolean | number
    amount?: boolean | number
    /** An object relationship */
    auction?: AuctionGenqlSelection
    auctionId?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    transaction?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "bid" */
export interface BidAggregateOrderBy {avg?: (BidAvgOrderBy | null),count?: (OrderBy | null),max?: (BidMaxOrderBy | null),min?: (BidMinOrderBy | null),stddev?: (BidStddevOrderBy | null),stddevPop?: (BidStddevPopOrderBy | null),stddevSamp?: (BidStddevSampOrderBy | null),sum?: (BidSumOrderBy | null),varPop?: (BidVarPopOrderBy | null),varSamp?: (BidVarSampOrderBy | null),variance?: (BidVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "bid" */
export interface BidArrRelInsertInput {data: BidInsertInput[],
/** upsert condition */
onConflict?: (BidOnConflict | null)}


/** order by avg() on columns of table "bid" */
export interface BidAvgOrderBy {auctionId?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "bid". All fields are combined with a logical 'AND'. */
export interface BidBoolExp {_and?: (BidBoolExp[] | null),_not?: (BidBoolExp | null),_or?: (BidBoolExp[] | null),account?: (AccountBoolExp | null),accountId?: (UuidComparisonExp | null),amount?: (StringComparisonExp | null),auction?: (AuctionBoolExp | null),auctionId?: (IntComparisonExp | null),createdAt?: (TimestamptzComparisonExp | null),id?: (UuidComparisonExp | null),transaction?: (StringComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null)}


/** input type for inserting data into table "bid" */
export interface BidInsertInput {account?: (AccountObjRelInsertInput | null),accountId?: (Scalars['uuid'] | null),amount?: (Scalars['String'] | null),auctionId?: (Scalars['Int'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),transaction?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** order by max() on columns of table "bid" */
export interface BidMaxOrderBy {accountId?: (OrderBy | null),amount?: (OrderBy | null),auctionId?: (OrderBy | null),createdAt?: (OrderBy | null),id?: (OrderBy | null),transaction?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** order by min() on columns of table "bid" */
export interface BidMinOrderBy {accountId?: (OrderBy | null),amount?: (OrderBy | null),auctionId?: (OrderBy | null),createdAt?: (OrderBy | null),id?: (OrderBy | null),transaction?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** response of any mutation on the table "bid" */
export interface BidMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: BidGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "bid" */
export interface BidOnConflict {constraint: BidConstraint,updateColumns: BidUpdateColumn[],where?: (BidBoolExp | null)}


/** Ordering options when selecting data from "bid". */
export interface BidOrderBy {account?: (AccountOrderBy | null),accountId?: (OrderBy | null),amount?: (OrderBy | null),auction?: (AuctionOrderBy | null),auctionId?: (OrderBy | null),createdAt?: (OrderBy | null),id?: (OrderBy | null),transaction?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** order by stddev() on columns of table "bid" */
export interface BidStddevOrderBy {auctionId?: (OrderBy | null)}


/** order by stddevPop() on columns of table "bid" */
export interface BidStddevPopOrderBy {auctionId?: (OrderBy | null)}


/** order by stddevSamp() on columns of table "bid" */
export interface BidStddevSampOrderBy {auctionId?: (OrderBy | null)}


/** Streaming cursor of the table "bid" */
export interface BidStreamCursorInput {
/** Stream column input with initial value */
initialValue: BidStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface BidStreamCursorValueInput {accountId?: (Scalars['uuid'] | null),amount?: (Scalars['String'] | null),auctionId?: (Scalars['Int'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),transaction?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** order by sum() on columns of table "bid" */
export interface BidSumOrderBy {auctionId?: (OrderBy | null)}


/** order by varPop() on columns of table "bid" */
export interface BidVarPopOrderBy {auctionId?: (OrderBy | null)}


/** order by varSamp() on columns of table "bid" */
export interface BidVarSampOrderBy {auctionId?: (OrderBy | null)}


/** order by variance() on columns of table "bid" */
export interface BidVarianceOrderBy {auctionId?: (OrderBy | null)}


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** columns and relationships of "calendar" */
export interface CalendarGenqlSelection{
    accountId?: boolean | number
    date?: boolean | number
    eventDescription?: boolean | number
    eventTitle?: boolean | number
    eventType?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "calendar". All fields are combined with a logical 'AND'. */
export interface CalendarBoolExp {_and?: (CalendarBoolExp[] | null),_not?: (CalendarBoolExp | null),_or?: (CalendarBoolExp[] | null),accountId?: (UuidComparisonExp | null),date?: (TimestamptzComparisonExp | null),eventDescription?: (StringComparisonExp | null),eventTitle?: (StringComparisonExp | null),eventType?: (StringComparisonExp | null),id?: (UuidComparisonExp | null)}


/** input type for inserting data into table "calendar" */
export interface CalendarInsertInput {accountId?: (Scalars['uuid'] | null),date?: (Scalars['timestamptz'] | null),eventDescription?: (Scalars['String'] | null),eventTitle?: (Scalars['String'] | null),eventType?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null)}


/** response of any mutation on the table "calendar" */
export interface CalendarMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: CalendarGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "calendar" */
export interface CalendarObjRelInsertInput {data: CalendarInsertInput,
/** upsert condition */
onConflict?: (CalendarOnConflict | null)}


/** on_conflict condition type for table "calendar" */
export interface CalendarOnConflict {constraint: CalendarConstraint,updateColumns: CalendarUpdateColumn[],where?: (CalendarBoolExp | null)}


/** Ordering options when selecting data from "calendar". */
export interface CalendarOrderBy {accountId?: (OrderBy | null),date?: (OrderBy | null),eventDescription?: (OrderBy | null),eventTitle?: (OrderBy | null),eventType?: (OrderBy | null),id?: (OrderBy | null)}


/** Streaming cursor of the table "calendar" */
export interface CalendarStreamCursorInput {
/** Stream column input with initial value */
initialValue: CalendarStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface CalendarStreamCursorValueInput {accountId?: (Scalars['uuid'] | null),date?: (Scalars['timestamptz'] | null),eventDescription?: (Scalars['String'] | null),eventTitle?: (Scalars['String'] | null),eventType?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null)}


/** columns and relationships of "category" */
export interface CategoryGenqlSelection{
    /** An array relationship */
    auctions?: (AuctionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionBoolExp | null)} })
    /** An aggregate relationship */
    auctionsAggregate?: (AuctionAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionBoolExp | null)} })
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export interface CategoryBoolExp {_and?: (CategoryBoolExp[] | null),_not?: (CategoryBoolExp | null),_or?: (CategoryBoolExp[] | null),auctions?: (AuctionBoolExp | null),auctionsAggregate?: (AuctionAggregateBoolExp | null),id?: (IntComparisonExp | null),name?: (StringComparisonExp | null)}


/** Ordering options when selecting data from "category". */
export interface CategoryOrderBy {auctionsAggregate?: (AuctionAggregateOrderBy | null),id?: (OrderBy | null),name?: (OrderBy | null)}


/** Streaming cursor of the table "category" */
export interface CategoryStreamCursorInput {
/** Stream column input with initial value */
initialValue: CategoryStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface CategoryStreamCursorValueInput {id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}

export interface JsonbCastExp {String?: (StringComparisonExp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface JsonbComparisonExp {_cast?: (JsonbCastExp | null),
/** is the column contained in the given json value */
_containedIn?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_hasKey?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_hasKeysAll?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_hasKeysAny?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "message" */
export interface MessageGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    isRead?: boolean | number
    message?: boolean | number
    /** An object relationship */
    recipient?: AccountGenqlSelection
    recipientId?: boolean | number
    /** An object relationship */
    sender?: AccountGenqlSelection
    senderId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "message" */
export interface MessageAggregateGenqlSelection{
    aggregate?: MessageAggregateFieldsGenqlSelection
    nodes?: MessageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "message" */
export interface MessageAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (MessageSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: MessageMaxFieldsGenqlSelection
    min?: MessageMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export interface MessageBoolExp {_and?: (MessageBoolExp[] | null),_not?: (MessageBoolExp | null),_or?: (MessageBoolExp[] | null),createdAt?: (TimestamptzComparisonExp | null),id?: (UuidComparisonExp | null),isRead?: (BooleanComparisonExp | null),message?: (StringComparisonExp | null),recipient?: (AccountBoolExp | null),recipientId?: (UuidComparisonExp | null),sender?: (AccountBoolExp | null),senderId?: (UuidComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null)}


/** input type for inserting data into table "message" */
export interface MessageInsertInput {createdAt?: (Scalars['timestamptz'] | null),isRead?: (Scalars['Boolean'] | null),message?: (Scalars['String'] | null),recipient?: (AccountObjRelInsertInput | null),recipientId?: (Scalars['uuid'] | null),sender?: (AccountObjRelInsertInput | null),senderId?: (Scalars['uuid'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface MessageMaxFieldsGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    message?: boolean | number
    recipientId?: boolean | number
    senderId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface MessageMinFieldsGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    message?: boolean | number
    recipientId?: boolean | number
    senderId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "message" */
export interface MessageMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: MessageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "message" */
export interface MessageOnConflict {constraint: MessageConstraint,updateColumns: MessageUpdateColumn[],where?: (MessageBoolExp | null)}


/** Ordering options when selecting data from "message". */
export interface MessageOrderBy {createdAt?: (OrderBy | null),id?: (OrderBy | null),isRead?: (OrderBy | null),message?: (OrderBy | null),recipient?: (AccountOrderBy | null),recipientId?: (OrderBy | null),sender?: (AccountOrderBy | null),senderId?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** primary key columns input for table: message */
export interface MessagePkColumnsInput {id: Scalars['uuid']}


/** input type for updating data in table "message" */
export interface MessageSetInput {createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),isRead?: (Scalars['Boolean'] | null),message?: (Scalars['String'] | null),recipientId?: (Scalars['uuid'] | null),senderId?: (Scalars['uuid'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "message" */
export interface MessageStreamCursorInput {
/** Stream column input with initial value */
initialValue: MessageStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface MessageStreamCursorValueInput {createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),isRead?: (Scalars['Boolean'] | null),message?: (Scalars['String'] | null),recipientId?: (Scalars['uuid'] | null),senderId?: (Scalars['uuid'] | null),updatedAt?: (Scalars['timestamptz'] | null)}

export interface MessageUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (MessageSetInput | null),
/** filter the rows which have to be updated */
where: MessageBoolExp}


/** columns and relationships of "notification" */
export interface NotificationGenqlSelection{
    /** An object relationship */
    account?: AccountGenqlSelection
    createdAt?: boolean | number
    id?: boolean | number
    isRead?: boolean | number
    message?: boolean | number
    notifType?: boolean | number
    updatedAt?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "notification" */
export interface NotificationAggregateOrderBy {count?: (OrderBy | null),max?: (NotificationMaxOrderBy | null),min?: (NotificationMinOrderBy | null)}


/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export interface NotificationBoolExp {_and?: (NotificationBoolExp[] | null),_not?: (NotificationBoolExp | null),_or?: (NotificationBoolExp[] | null),account?: (AccountBoolExp | null),createdAt?: (TimestamptzComparisonExp | null),id?: (UuidComparisonExp | null),isRead?: (BooleanComparisonExp | null),message?: (StringComparisonExp | null),notifType?: (StringComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null),userId?: (UuidComparisonExp | null)}


/** order by max() on columns of table "notification" */
export interface NotificationMaxOrderBy {createdAt?: (OrderBy | null),id?: (OrderBy | null),message?: (OrderBy | null),notifType?: (OrderBy | null),updatedAt?: (OrderBy | null),userId?: (OrderBy | null)}


/** order by min() on columns of table "notification" */
export interface NotificationMinOrderBy {createdAt?: (OrderBy | null),id?: (OrderBy | null),message?: (OrderBy | null),notifType?: (OrderBy | null),updatedAt?: (OrderBy | null),userId?: (OrderBy | null)}


/** response of any mutation on the table "notification" */
export interface NotificationMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: NotificationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "notification". */
export interface NotificationOrderBy {account?: (AccountOrderBy | null),createdAt?: (OrderBy | null),id?: (OrderBy | null),isRead?: (OrderBy | null),message?: (OrderBy | null),notifType?: (OrderBy | null),updatedAt?: (OrderBy | null),userId?: (OrderBy | null)}


/** primary key columns input for table: notification */
export interface NotificationPkColumnsInput {id: Scalars['uuid']}


/** input type for updating data in table "notification" */
export interface NotificationSetInput {isRead?: (Scalars['Boolean'] | null)}


/** Streaming cursor of the table "notification" */
export interface NotificationStreamCursorInput {
/** Stream column input with initial value */
initialValue: NotificationStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface NotificationStreamCursorValueInput {createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),isRead?: (Scalars['Boolean'] | null),message?: (Scalars['String'] | null),notifType?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),userId?: (Scalars['uuid'] | null)}

export interface NotificationUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (NotificationSetInput | null),
/** filter the rows which have to be updated */
where: NotificationBoolExp}


/** columns and relationships of "package" */
export interface PackageGenqlSelection{
    benefits?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    description?: boolean | number
    id?: boolean | number
    name?: boolean | number
    price?: boolean | number
    /** An array relationship */
    transactions?: (AccountPackageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountPackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountPackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    /** An aggregate relationship */
    transactionsAggregate?: (AccountPackageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountPackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountPackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "package". All fields are combined with a logical 'AND'. */
export interface PackageBoolExp {_and?: (PackageBoolExp[] | null),_not?: (PackageBoolExp | null),_or?: (PackageBoolExp[] | null),benefits?: (JsonbComparisonExp | null),description?: (StringComparisonExp | null),id?: (IntComparisonExp | null),name?: (StringComparisonExp | null),price?: (IntComparisonExp | null),transactions?: (AccountPackageBoolExp | null),transactionsAggregate?: (AccountPackageAggregateBoolExp | null)}


/** Ordering options when selecting data from "package". */
export interface PackageOrderBy {benefits?: (OrderBy | null),description?: (OrderBy | null),id?: (OrderBy | null),name?: (OrderBy | null),price?: (OrderBy | null),transactionsAggregate?: (AccountPackageAggregateOrderBy | null)}


/** Streaming cursor of the table "package" */
export interface PackageStreamCursorInput {
/** Stream column input with initial value */
initialValue: PackageStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface PackageStreamCursorValueInput {benefits?: (Scalars['jsonb'] | null),description?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),price?: (Scalars['Int'] | null)}


/** columns and relationships of "payments" */
export interface PaymentsGenqlSelection{
    /** An object relationship */
    account?: AccountGenqlSelection
    accountId?: boolean | number
    date?: boolean | number
    detail?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    id?: boolean | number
    paymentType?: boolean | number
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "payments" */
export interface PaymentsAggregateOrderBy {avg?: (PaymentsAvgOrderBy | null),count?: (OrderBy | null),max?: (PaymentsMaxOrderBy | null),min?: (PaymentsMinOrderBy | null),stddev?: (PaymentsStddevOrderBy | null),stddevPop?: (PaymentsStddevPopOrderBy | null),stddevSamp?: (PaymentsStddevSampOrderBy | null),sum?: (PaymentsSumOrderBy | null),varPop?: (PaymentsVarPopOrderBy | null),varSamp?: (PaymentsVarSampOrderBy | null),variance?: (PaymentsVarianceOrderBy | null)}


/** order by avg() on columns of table "payments" */
export interface PaymentsAvgOrderBy {quantity?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export interface PaymentsBoolExp {_and?: (PaymentsBoolExp[] | null),_not?: (PaymentsBoolExp | null),_or?: (PaymentsBoolExp[] | null),account?: (AccountBoolExp | null),accountId?: (UuidComparisonExp | null),date?: (TimestamptzComparisonExp | null),detail?: (JsonbComparisonExp | null),id?: (UuidComparisonExp | null),paymentType?: (StringComparisonExp | null),quantity?: (IntComparisonExp | null)}


/** order by max() on columns of table "payments" */
export interface PaymentsMaxOrderBy {accountId?: (OrderBy | null),date?: (OrderBy | null),id?: (OrderBy | null),paymentType?: (OrderBy | null),quantity?: (OrderBy | null)}


/** order by min() on columns of table "payments" */
export interface PaymentsMinOrderBy {accountId?: (OrderBy | null),date?: (OrderBy | null),id?: (OrderBy | null),paymentType?: (OrderBy | null),quantity?: (OrderBy | null)}


/** Ordering options when selecting data from "payments". */
export interface PaymentsOrderBy {account?: (AccountOrderBy | null),accountId?: (OrderBy | null),date?: (OrderBy | null),detail?: (OrderBy | null),id?: (OrderBy | null),paymentType?: (OrderBy | null),quantity?: (OrderBy | null)}


/** order by stddev() on columns of table "payments" */
export interface PaymentsStddevOrderBy {quantity?: (OrderBy | null)}


/** order by stddevPop() on columns of table "payments" */
export interface PaymentsStddevPopOrderBy {quantity?: (OrderBy | null)}


/** order by stddevSamp() on columns of table "payments" */
export interface PaymentsStddevSampOrderBy {quantity?: (OrderBy | null)}


/** Streaming cursor of the table "payments" */
export interface PaymentsStreamCursorInput {
/** Stream column input with initial value */
initialValue: PaymentsStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface PaymentsStreamCursorValueInput {accountId?: (Scalars['uuid'] | null),date?: (Scalars['timestamptz'] | null),detail?: (Scalars['jsonb'] | null),id?: (Scalars['uuid'] | null),paymentType?: (Scalars['String'] | null),quantity?: (Scalars['Int'] | null)}


/** order by sum() on columns of table "payments" */
export interface PaymentsSumOrderBy {quantity?: (OrderBy | null)}


/** order by varPop() on columns of table "payments" */
export interface PaymentsVarPopOrderBy {quantity?: (OrderBy | null)}


/** order by varSamp() on columns of table "payments" */
export interface PaymentsVarSampOrderBy {quantity?: (OrderBy | null)}


/** order by variance() on columns of table "payments" */
export interface PaymentsVarianceOrderBy {quantity?: (OrderBy | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_isNull?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export interface accountPackageAggregateBoolExpCount {arguments?: (AccountPackageSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (AccountPackageBoolExp | null),predicate: IntComparisonExp}

export interface auctionAggregateBoolExpBool_and {arguments: AuctionSelectColumnAuctionAggregateBoolExpBool_andArgumentsColumns,distinct?: (Scalars['Boolean'] | null),filter?: (AuctionBoolExp | null),predicate: BooleanComparisonExp}

export interface auctionAggregateBoolExpBool_or {arguments: AuctionSelectColumnAuctionAggregateBoolExpBool_orArgumentsColumns,distinct?: (Scalars['Boolean'] | null),filter?: (AuctionBoolExp | null),predicate: BooleanComparisonExp}

export interface auctionAggregateBoolExpCount {arguments?: (AuctionSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (AuctionBoolExp | null),predicate: IntComparisonExp}

export interface balanceAggregateBoolExpCount {arguments?: (BalanceSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (BalanceBoolExp | null),predicate: IntComparisonExp}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** insert data into the table: "account" */
    insertAccount?: (AccountMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: AccountInsertInput[], 
    /** upsert condition */
    onConflict?: (AccountOnConflict | null)} })
    /** insert a single row into the table: "account" */
    insertAccountOne?: (AccountGenqlSelection & { __args: {
    /** the row to be inserted */
    object: AccountInsertInput, 
    /** upsert condition */
    onConflict?: (AccountOnConflict | null)} })
    /** insert data into the table: "account_package" */
    insertAccountPackage?: (AccountPackageMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: AccountPackageInsertInput[], 
    /** upsert condition */
    onConflict?: (AccountPackageOnConflict | null)} })
    /** insert a single row into the table: "account_package" */
    insertAccountPackageOne?: (AccountPackageGenqlSelection & { __args: {
    /** the row to be inserted */
    object: AccountPackageInsertInput, 
    /** upsert condition */
    onConflict?: (AccountPackageOnConflict | null)} })
    /** insert data into the table: "balance" */
    insertBalance?: (BalanceMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: BalanceInsertInput[], 
    /** upsert condition */
    onConflict?: (BalanceOnConflict | null)} })
    /** insert a single row into the table: "balance" */
    insertBalanceOne?: (BalanceGenqlSelection & { __args: {
    /** the row to be inserted */
    object: BalanceInsertInput, 
    /** upsert condition */
    onConflict?: (BalanceOnConflict | null)} })
    /** insert data into the table: "bid" */
    insertBid?: (BidMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: BidInsertInput[], 
    /** upsert condition */
    onConflict?: (BidOnConflict | null)} })
    /** insert a single row into the table: "bid" */
    insertBidOne?: (BidGenqlSelection & { __args: {
    /** the row to be inserted */
    object: BidInsertInput, 
    /** upsert condition */
    onConflict?: (BidOnConflict | null)} })
    /** insert data into the table: "calendar" */
    insertCalendar?: (CalendarMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: CalendarInsertInput[], 
    /** upsert condition */
    onConflict?: (CalendarOnConflict | null)} })
    /** insert a single row into the table: "calendar" */
    insertCalendarOne?: (CalendarGenqlSelection & { __args: {
    /** the row to be inserted */
    object: CalendarInsertInput, 
    /** upsert condition */
    onConflict?: (CalendarOnConflict | null)} })
    /** insert data into the table: "message" */
    insertMessage?: (MessageMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: MessageInsertInput[], 
    /** upsert condition */
    onConflict?: (MessageOnConflict | null)} })
    /** insert a single row into the table: "message" */
    insertMessageOne?: (MessageGenqlSelection & { __args: {
    /** the row to be inserted */
    object: MessageInsertInput, 
    /** upsert condition */
    onConflict?: (MessageOnConflict | null)} })
    /** update data of the table: "account" */
    updateAccount?: (AccountMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (AccountSetInput | null), 
    /** filter the rows which have to be updated */
    where: AccountBoolExp} })
    /** update single row of the table: "account" */
    updateAccountByPk?: (AccountGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (AccountSetInput | null), pkColumns: AccountPkColumnsInput} })
    /** update multiples rows of table: "account" */
    updateAccountMany?: (AccountMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: AccountUpdates[]} })
    /** update data of the table: "account_package" */
    updateAccountPackage?: (AccountPackageMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (AccountPackageIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (AccountPackageSetInput | null), 
    /** filter the rows which have to be updated */
    where: AccountPackageBoolExp} })
    /** update single row of the table: "account_package" */
    updateAccountPackageByPk?: (AccountPackageGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (AccountPackageIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (AccountPackageSetInput | null), pkColumns: AccountPackagePkColumnsInput} })
    /** update multiples rows of table: "account_package" */
    updateAccountPackageMany?: (AccountPackageMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: AccountPackageUpdates[]} })
    /** update data of the table: "auction" */
    updateAuction?: (AuctionMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (AuctionIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (AuctionSetInput | null), 
    /** filter the rows which have to be updated */
    where: AuctionBoolExp} })
    /** update single row of the table: "auction" */
    updateAuctionByPk?: (AuctionGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (AuctionIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (AuctionSetInput | null), pkColumns: AuctionPkColumnsInput} })
    /** update multiples rows of table: "auction" */
    updateAuctionMany?: (AuctionMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: AuctionUpdates[]} })
    /** update data of the table: "balance" */
    updateBalance?: (BalanceMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (BalanceIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (BalanceSetInput | null), 
    /** filter the rows which have to be updated */
    where: BalanceBoolExp} })
    /** update single row of the table: "balance" */
    updateBalanceByPk?: (BalanceGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (BalanceIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (BalanceSetInput | null), pkColumns: BalancePkColumnsInput} })
    /** update multiples rows of table: "balance" */
    updateBalanceMany?: (BalanceMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: BalanceUpdates[]} })
    /** update data of the table: "message" */
    updateMessage?: (MessageMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (MessageSetInput | null), 
    /** filter the rows which have to be updated */
    where: MessageBoolExp} })
    /** update single row of the table: "message" */
    updateMessageByPk?: (MessageGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (MessageSetInput | null), pkColumns: MessagePkColumnsInput} })
    /** update multiples rows of table: "message" */
    updateMessageMany?: (MessageMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: MessageUpdates[]} })
    /** update data of the table: "notification" */
    updateNotification?: (NotificationMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (NotificationSetInput | null), 
    /** filter the rows which have to be updated */
    where: NotificationBoolExp} })
    /** update single row of the table: "notification" */
    updateNotificationByPk?: (NotificationGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (NotificationSetInput | null), pkColumns: NotificationPkColumnsInput} })
    /** update multiples rows of table: "notification" */
    updateNotificationMany?: (NotificationMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: NotificationUpdates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "account" */
    account?: (AccountGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountBoolExp | null)} })
    /** fetch data from the table: "account" using primary key columns */
    accountByPk?: (AccountGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "account_package" */
    accountPackage?: (AccountPackageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountPackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountPackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    /** fetch aggregated fields from the table: "account_package" */
    accountPackageAggregate?: (AccountPackageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountPackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountPackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    /** fetch data from the table: "account_package" using primary key columns */
    accountPackageByPk?: (AccountPackageGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auction" */
    auction?: (AuctionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionBoolExp | null)} })
    /** fetch aggregated fields from the table: "auction" */
    auctionAggregate?: (AuctionAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionBoolExp | null)} })
    /** fetch data from the table: "auction" using primary key columns */
    auctionByPk?: (AuctionGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "balance" */
    balance?: (BalanceGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BalanceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BalanceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BalanceBoolExp | null)} })
    /** fetch aggregated fields from the table: "balance" */
    balanceAggregate?: (BalanceAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BalanceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BalanceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BalanceBoolExp | null)} })
    /** fetch data from the table: "balance" using primary key columns */
    balanceByPk?: (BalanceGenqlSelection & { __args: {symbol: Scalars['String'], wallet: Scalars['String']} })
    /** fetch data from the table: "bid" */
    bid?: (BidGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BidSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BidOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BidBoolExp | null)} })
    /** fetch data from the table: "bid" using primary key columns */
    bidByPk?: (BidGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "calendar" */
    calendar?: (CalendarGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (CalendarSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (CalendarOrderBy[] | null), 
    /** filter the rows returned */
    where?: (CalendarBoolExp | null)} })
    /** fetch data from the table: "calendar" using primary key columns */
    calendarByPk?: (CalendarGenqlSelection & { __args: {accountId: Scalars['uuid']} })
    /** fetch data from the table: "category" */
    category?: (CategoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (CategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (CategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (CategoryBoolExp | null)} })
    /** fetch data from the table: "category" using primary key columns */
    categoryByPk?: (CategoryGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "message" */
    message?: (MessageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch aggregated fields from the table: "message" */
    messageAggregate?: (MessageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch data from the table: "message" using primary key columns */
    messageByPk?: (MessageGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "notification" */
    notification?: (NotificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (NotificationSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (NotificationOrderBy[] | null), 
    /** filter the rows returned */
    where?: (NotificationBoolExp | null)} })
    /** fetch data from the table: "notification" using primary key columns */
    notificationByPk?: (NotificationGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "package" */
    package?: (PackageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PackageBoolExp | null)} })
    /** fetch data from the table: "package" using primary key columns */
    packageByPk?: (PackageGenqlSelection & { __args: {id: Scalars['Int']} })
    /** An array relationship */
    payments?: (PaymentsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PaymentsSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PaymentsOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PaymentsBoolExp | null)} })
    /** fetch data from the table: "payments" using primary key columns */
    paymentsByPk?: (PaymentsGenqlSelection & { __args: {id: Scalars['uuid']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "account" */
    account?: (AccountGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountBoolExp | null)} })
    /** fetch data from the table: "account" using primary key columns */
    accountByPk?: (AccountGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "account_package" */
    accountPackage?: (AccountPackageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountPackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountPackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    /** fetch aggregated fields from the table: "account_package" */
    accountPackageAggregate?: (AccountPackageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AccountPackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AccountPackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    /** fetch data from the table: "account_package" using primary key columns */
    accountPackageByPk?: (AccountPackageGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "account_package" */
    accountPackageStream?: (AccountPackageGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (AccountPackageStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (AccountPackageBoolExp | null)} })
    /** fetch data from the table in a streaming manner: "account" */
    accountStream?: (AccountGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (AccountStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (AccountBoolExp | null)} })
    /** fetch data from the table: "auction" */
    auction?: (AuctionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionBoolExp | null)} })
    /** fetch aggregated fields from the table: "auction" */
    auctionAggregate?: (AuctionAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (AuctionSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (AuctionOrderBy[] | null), 
    /** filter the rows returned */
    where?: (AuctionBoolExp | null)} })
    /** fetch data from the table: "auction" using primary key columns */
    auctionByPk?: (AuctionGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "auction" */
    auctionStream?: (AuctionGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (AuctionStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (AuctionBoolExp | null)} })
    /** fetch data from the table: "balance" */
    balance?: (BalanceGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BalanceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BalanceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BalanceBoolExp | null)} })
    /** fetch aggregated fields from the table: "balance" */
    balanceAggregate?: (BalanceAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BalanceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BalanceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BalanceBoolExp | null)} })
    /** fetch data from the table: "balance" using primary key columns */
    balanceByPk?: (BalanceGenqlSelection & { __args: {symbol: Scalars['String'], wallet: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "balance" */
    balanceStream?: (BalanceGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (BalanceStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (BalanceBoolExp | null)} })
    /** fetch data from the table: "bid" */
    bid?: (BidGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (BidSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (BidOrderBy[] | null), 
    /** filter the rows returned */
    where?: (BidBoolExp | null)} })
    /** fetch data from the table: "bid" using primary key columns */
    bidByPk?: (BidGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "bid" */
    bidStream?: (BidGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (BidStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (BidBoolExp | null)} })
    /** fetch data from the table: "calendar" */
    calendar?: (CalendarGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (CalendarSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (CalendarOrderBy[] | null), 
    /** filter the rows returned */
    where?: (CalendarBoolExp | null)} })
    /** fetch data from the table: "calendar" using primary key columns */
    calendarByPk?: (CalendarGenqlSelection & { __args: {accountId: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "calendar" */
    calendarStream?: (CalendarGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (CalendarStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (CalendarBoolExp | null)} })
    /** fetch data from the table: "category" */
    category?: (CategoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (CategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (CategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (CategoryBoolExp | null)} })
    /** fetch data from the table: "category" using primary key columns */
    categoryByPk?: (CategoryGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "category" */
    categoryStream?: (CategoryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (CategoryStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (CategoryBoolExp | null)} })
    /** fetch data from the table: "message" */
    message?: (MessageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch aggregated fields from the table: "message" */
    messageAggregate?: (MessageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch data from the table: "message" using primary key columns */
    messageByPk?: (MessageGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "message" */
    messageStream?: (MessageGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (MessageStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch data from the table: "notification" */
    notification?: (NotificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (NotificationSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (NotificationOrderBy[] | null), 
    /** filter the rows returned */
    where?: (NotificationBoolExp | null)} })
    /** fetch data from the table: "notification" using primary key columns */
    notificationByPk?: (NotificationGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "notification" */
    notificationStream?: (NotificationGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (NotificationStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (NotificationBoolExp | null)} })
    /** fetch data from the table: "package" */
    package?: (PackageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PackageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PackageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PackageBoolExp | null)} })
    /** fetch data from the table: "package" using primary key columns */
    packageByPk?: (PackageGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "package" */
    packageStream?: (PackageGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PackageStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (PackageBoolExp | null)} })
    /** An array relationship */
    payments?: (PaymentsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PaymentsSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PaymentsOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PaymentsBoolExp | null)} })
    /** fetch data from the table: "payments" using primary key columns */
    paymentsByPk?: (PaymentsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "payments" */
    paymentsStream?: (PaymentsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PaymentsStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (PaymentsBoolExp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const Account_possibleTypes: string[] = ['Account']
    export const isAccount = (obj?: { __typename?: any } | null): obj is Account => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccount"')
      return Account_possibleTypes.includes(obj.__typename)
    }
    


    const AccountMutationResponse_possibleTypes: string[] = ['AccountMutationResponse']
    export const isAccountMutationResponse = (obj?: { __typename?: any } | null): obj is AccountMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountMutationResponse"')
      return AccountMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackage_possibleTypes: string[] = ['AccountPackage']
    export const isAccountPackage = (obj?: { __typename?: any } | null): obj is AccountPackage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackage"')
      return AccountPackage_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageAggregate_possibleTypes: string[] = ['AccountPackageAggregate']
    export const isAccountPackageAggregate = (obj?: { __typename?: any } | null): obj is AccountPackageAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageAggregate"')
      return AccountPackageAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageAggregateFields_possibleTypes: string[] = ['AccountPackageAggregateFields']
    export const isAccountPackageAggregateFields = (obj?: { __typename?: any } | null): obj is AccountPackageAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageAggregateFields"')
      return AccountPackageAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageAvgFields_possibleTypes: string[] = ['AccountPackageAvgFields']
    export const isAccountPackageAvgFields = (obj?: { __typename?: any } | null): obj is AccountPackageAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageAvgFields"')
      return AccountPackageAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageMaxFields_possibleTypes: string[] = ['AccountPackageMaxFields']
    export const isAccountPackageMaxFields = (obj?: { __typename?: any } | null): obj is AccountPackageMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageMaxFields"')
      return AccountPackageMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageMinFields_possibleTypes: string[] = ['AccountPackageMinFields']
    export const isAccountPackageMinFields = (obj?: { __typename?: any } | null): obj is AccountPackageMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageMinFields"')
      return AccountPackageMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageMutationResponse_possibleTypes: string[] = ['AccountPackageMutationResponse']
    export const isAccountPackageMutationResponse = (obj?: { __typename?: any } | null): obj is AccountPackageMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageMutationResponse"')
      return AccountPackageMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageStddevFields_possibleTypes: string[] = ['AccountPackageStddevFields']
    export const isAccountPackageStddevFields = (obj?: { __typename?: any } | null): obj is AccountPackageStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageStddevFields"')
      return AccountPackageStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageStddevPopFields_possibleTypes: string[] = ['AccountPackageStddevPopFields']
    export const isAccountPackageStddevPopFields = (obj?: { __typename?: any } | null): obj is AccountPackageStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageStddevPopFields"')
      return AccountPackageStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageStddevSampFields_possibleTypes: string[] = ['AccountPackageStddevSampFields']
    export const isAccountPackageStddevSampFields = (obj?: { __typename?: any } | null): obj is AccountPackageStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageStddevSampFields"')
      return AccountPackageStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageSumFields_possibleTypes: string[] = ['AccountPackageSumFields']
    export const isAccountPackageSumFields = (obj?: { __typename?: any } | null): obj is AccountPackageSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageSumFields"')
      return AccountPackageSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageVarPopFields_possibleTypes: string[] = ['AccountPackageVarPopFields']
    export const isAccountPackageVarPopFields = (obj?: { __typename?: any } | null): obj is AccountPackageVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageVarPopFields"')
      return AccountPackageVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageVarSampFields_possibleTypes: string[] = ['AccountPackageVarSampFields']
    export const isAccountPackageVarSampFields = (obj?: { __typename?: any } | null): obj is AccountPackageVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageVarSampFields"')
      return AccountPackageVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const AccountPackageVarianceFields_possibleTypes: string[] = ['AccountPackageVarianceFields']
    export const isAccountPackageVarianceFields = (obj?: { __typename?: any } | null): obj is AccountPackageVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountPackageVarianceFields"')
      return AccountPackageVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const Auction_possibleTypes: string[] = ['Auction']
    export const isAuction = (obj?: { __typename?: any } | null): obj is Auction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuction"')
      return Auction_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionAggregate_possibleTypes: string[] = ['AuctionAggregate']
    export const isAuctionAggregate = (obj?: { __typename?: any } | null): obj is AuctionAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionAggregate"')
      return AuctionAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionAggregateFields_possibleTypes: string[] = ['AuctionAggregateFields']
    export const isAuctionAggregateFields = (obj?: { __typename?: any } | null): obj is AuctionAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionAggregateFields"')
      return AuctionAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionAvgFields_possibleTypes: string[] = ['AuctionAvgFields']
    export const isAuctionAvgFields = (obj?: { __typename?: any } | null): obj is AuctionAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionAvgFields"')
      return AuctionAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMaxFields_possibleTypes: string[] = ['AuctionMaxFields']
    export const isAuctionMaxFields = (obj?: { __typename?: any } | null): obj is AuctionMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMaxFields"')
      return AuctionMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMinFields_possibleTypes: string[] = ['AuctionMinFields']
    export const isAuctionMinFields = (obj?: { __typename?: any } | null): obj is AuctionMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMinFields"')
      return AuctionMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionMutationResponse_possibleTypes: string[] = ['AuctionMutationResponse']
    export const isAuctionMutationResponse = (obj?: { __typename?: any } | null): obj is AuctionMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionMutationResponse"')
      return AuctionMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStddevFields_possibleTypes: string[] = ['AuctionStddevFields']
    export const isAuctionStddevFields = (obj?: { __typename?: any } | null): obj is AuctionStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStddevFields"')
      return AuctionStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStddevPopFields_possibleTypes: string[] = ['AuctionStddevPopFields']
    export const isAuctionStddevPopFields = (obj?: { __typename?: any } | null): obj is AuctionStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStddevPopFields"')
      return AuctionStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionStddevSampFields_possibleTypes: string[] = ['AuctionStddevSampFields']
    export const isAuctionStddevSampFields = (obj?: { __typename?: any } | null): obj is AuctionStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionStddevSampFields"')
      return AuctionStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionSumFields_possibleTypes: string[] = ['AuctionSumFields']
    export const isAuctionSumFields = (obj?: { __typename?: any } | null): obj is AuctionSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionSumFields"')
      return AuctionSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionVarPopFields_possibleTypes: string[] = ['AuctionVarPopFields']
    export const isAuctionVarPopFields = (obj?: { __typename?: any } | null): obj is AuctionVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionVarPopFields"')
      return AuctionVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionVarSampFields_possibleTypes: string[] = ['AuctionVarSampFields']
    export const isAuctionVarSampFields = (obj?: { __typename?: any } | null): obj is AuctionVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionVarSampFields"')
      return AuctionVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionVarianceFields_possibleTypes: string[] = ['AuctionVarianceFields']
    export const isAuctionVarianceFields = (obj?: { __typename?: any } | null): obj is AuctionVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionVarianceFields"')
      return AuctionVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const Balance_possibleTypes: string[] = ['Balance']
    export const isBalance = (obj?: { __typename?: any } | null): obj is Balance => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalance"')
      return Balance_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceAggregate_possibleTypes: string[] = ['BalanceAggregate']
    export const isBalanceAggregate = (obj?: { __typename?: any } | null): obj is BalanceAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceAggregate"')
      return BalanceAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceAggregateFields_possibleTypes: string[] = ['BalanceAggregateFields']
    export const isBalanceAggregateFields = (obj?: { __typename?: any } | null): obj is BalanceAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceAggregateFields"')
      return BalanceAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceAvgFields_possibleTypes: string[] = ['BalanceAvgFields']
    export const isBalanceAvgFields = (obj?: { __typename?: any } | null): obj is BalanceAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceAvgFields"')
      return BalanceAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceMaxFields_possibleTypes: string[] = ['BalanceMaxFields']
    export const isBalanceMaxFields = (obj?: { __typename?: any } | null): obj is BalanceMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceMaxFields"')
      return BalanceMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceMinFields_possibleTypes: string[] = ['BalanceMinFields']
    export const isBalanceMinFields = (obj?: { __typename?: any } | null): obj is BalanceMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceMinFields"')
      return BalanceMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceMutationResponse_possibleTypes: string[] = ['BalanceMutationResponse']
    export const isBalanceMutationResponse = (obj?: { __typename?: any } | null): obj is BalanceMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceMutationResponse"')
      return BalanceMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceStddevFields_possibleTypes: string[] = ['BalanceStddevFields']
    export const isBalanceStddevFields = (obj?: { __typename?: any } | null): obj is BalanceStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceStddevFields"')
      return BalanceStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceStddevPopFields_possibleTypes: string[] = ['BalanceStddevPopFields']
    export const isBalanceStddevPopFields = (obj?: { __typename?: any } | null): obj is BalanceStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceStddevPopFields"')
      return BalanceStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceStddevSampFields_possibleTypes: string[] = ['BalanceStddevSampFields']
    export const isBalanceStddevSampFields = (obj?: { __typename?: any } | null): obj is BalanceStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceStddevSampFields"')
      return BalanceStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceSumFields_possibleTypes: string[] = ['BalanceSumFields']
    export const isBalanceSumFields = (obj?: { __typename?: any } | null): obj is BalanceSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceSumFields"')
      return BalanceSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceVarPopFields_possibleTypes: string[] = ['BalanceVarPopFields']
    export const isBalanceVarPopFields = (obj?: { __typename?: any } | null): obj is BalanceVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceVarPopFields"')
      return BalanceVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceVarSampFields_possibleTypes: string[] = ['BalanceVarSampFields']
    export const isBalanceVarSampFields = (obj?: { __typename?: any } | null): obj is BalanceVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceVarSampFields"')
      return BalanceVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const BalanceVarianceFields_possibleTypes: string[] = ['BalanceVarianceFields']
    export const isBalanceVarianceFields = (obj?: { __typename?: any } | null): obj is BalanceVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceVarianceFields"')
      return BalanceVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const Bid_possibleTypes: string[] = ['Bid']
    export const isBid = (obj?: { __typename?: any } | null): obj is Bid => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBid"')
      return Bid_possibleTypes.includes(obj.__typename)
    }
    


    const BidMutationResponse_possibleTypes: string[] = ['BidMutationResponse']
    export const isBidMutationResponse = (obj?: { __typename?: any } | null): obj is BidMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidMutationResponse"')
      return BidMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Calendar_possibleTypes: string[] = ['Calendar']
    export const isCalendar = (obj?: { __typename?: any } | null): obj is Calendar => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCalendar"')
      return Calendar_possibleTypes.includes(obj.__typename)
    }
    


    const CalendarMutationResponse_possibleTypes: string[] = ['CalendarMutationResponse']
    export const isCalendarMutationResponse = (obj?: { __typename?: any } | null): obj is CalendarMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCalendarMutationResponse"')
      return CalendarMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Category_possibleTypes: string[] = ['Category']
    export const isCategory = (obj?: { __typename?: any } | null): obj is Category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategory"')
      return Category_possibleTypes.includes(obj.__typename)
    }
    


    const Message_possibleTypes: string[] = ['Message']
    export const isMessage = (obj?: { __typename?: any } | null): obj is Message => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessage"')
      return Message_possibleTypes.includes(obj.__typename)
    }
    


    const MessageAggregate_possibleTypes: string[] = ['MessageAggregate']
    export const isMessageAggregate = (obj?: { __typename?: any } | null): obj is MessageAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageAggregate"')
      return MessageAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const MessageAggregateFields_possibleTypes: string[] = ['MessageAggregateFields']
    export const isMessageAggregateFields = (obj?: { __typename?: any } | null): obj is MessageAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageAggregateFields"')
      return MessageAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageMaxFields_possibleTypes: string[] = ['MessageMaxFields']
    export const isMessageMaxFields = (obj?: { __typename?: any } | null): obj is MessageMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageMaxFields"')
      return MessageMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageMinFields_possibleTypes: string[] = ['MessageMinFields']
    export const isMessageMinFields = (obj?: { __typename?: any } | null): obj is MessageMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageMinFields"')
      return MessageMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageMutationResponse_possibleTypes: string[] = ['MessageMutationResponse']
    export const isMessageMutationResponse = (obj?: { __typename?: any } | null): obj is MessageMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageMutationResponse"')
      return MessageMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Notification_possibleTypes: string[] = ['Notification']
    export const isNotification = (obj?: { __typename?: any } | null): obj is Notification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotification"')
      return Notification_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationMutationResponse_possibleTypes: string[] = ['NotificationMutationResponse']
    export const isNotificationMutationResponse = (obj?: { __typename?: any } | null): obj is NotificationMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationMutationResponse"')
      return NotificationMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Package_possibleTypes: string[] = ['Package']
    export const isPackage = (obj?: { __typename?: any } | null): obj is Package => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackage"')
      return Package_possibleTypes.includes(obj.__typename)
    }
    


    const Payments_possibleTypes: string[] = ['Payments']
    export const isPayments = (obj?: { __typename?: any } | null): obj is Payments => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPayments"')
      return Payments_possibleTypes.includes(obj.__typename)
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
    

export const enumAccountConstraint = {
   account_email_key: 'account_email_key' as const,
   account_username_key: 'account_username_key' as const,
   account_wallet_key: 'account_wallet_key' as const,
   accounts_pkey: 'accounts_pkey' as const
}

export const enumAccountPackageConstraint = {
   package_transactions_pkey: 'package_transactions_pkey' as const
}

export const enumAccountPackageSelectColumn = {
   accountId: 'accountId' as const,
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   packageId: 'packageId' as const,
   transaction: 'transaction' as const
}

export const enumAccountPackageUpdateColumn = {
   accountId: 'accountId' as const,
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   packageId: 'packageId' as const,
   transaction: 'transaction' as const
}

export const enumAccountSelectColumn = {
   binaryParentId: 'binaryParentId' as const,
   binaryPlacement: 'binaryPlacement' as const,
   bio: 'bio' as const,
   createdAt: 'createdAt' as const,
   email: 'email' as const,
   id: 'id' as const,
   image: 'image' as const,
   name: 'name' as const,
   parentId: 'parentId' as const,
   phone: 'phone' as const,
   updatedAt: 'updatedAt' as const,
   username: 'username' as const,
   wallet: 'wallet' as const
}

export const enumAccountUpdateColumn = {
   binaryParentId: 'binaryParentId' as const,
   binaryPlacement: 'binaryPlacement' as const,
   bio: 'bio' as const,
   createdAt: 'createdAt' as const,
   email: 'email' as const,
   id: 'id' as const,
   image: 'image' as const,
   name: 'name' as const,
   parentId: 'parentId' as const,
   phone: 'phone' as const,
   updatedAt: 'updatedAt' as const,
   username: 'username' as const,
   wallet: 'wallet' as const
}

export const enumAuctionSelectColumn = {
   categoryId: 'categoryId' as const,
   createdAt: 'createdAt' as const,
   endTime: 'endTime' as const,
   id: 'id' as const,
   image: 'image' as const,
   isActive: 'isActive' as const,
   itemDescription: 'itemDescription' as const,
   itemName: 'itemName' as const,
   lastBidTime: 'lastBidTime' as const,
   price: 'price' as const,
   startTime: 'startTime' as const,
   time: 'time' as const,
   updatedAt: 'updatedAt' as const
}

export const enumAuctionSelectColumnAuctionAggregateBoolExpBoolAndArgumentsColumns = {
   isActive: 'isActive' as const
}

export const enumAuctionSelectColumnAuctionAggregateBoolExpBoolOrArgumentsColumns = {
   isActive: 'isActive' as const
}

export const enumBalanceConstraint = {
   balance_pkey: 'balance_pkey' as const
}

export const enumBalanceSelectColumn = {
   displayQuantity: 'displayQuantity' as const,
   quantity: 'quantity' as const,
   symbol: 'symbol' as const,
   wallet: 'wallet' as const
}

export const enumBalanceUpdateColumn = {
   displayQuantity: 'displayQuantity' as const,
   quantity: 'quantity' as const,
   wallet: 'wallet' as const
}

export const enumBidConstraint = {
   bids_pkey: 'bids_pkey' as const
}

export const enumBidSelectColumn = {
   accountId: 'accountId' as const,
   amount: 'amount' as const,
   auctionId: 'auctionId' as const,
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   transaction: 'transaction' as const,
   updatedAt: 'updatedAt' as const
}

export const enumBidUpdateColumn = {
   _PLACEHOLDER: '_PLACEHOLDER' as const
}

export const enumCalendarConstraint = {
   calendar_pkey: 'calendar_pkey' as const
}

export const enumCalendarSelectColumn = {
   accountId: 'accountId' as const,
   date: 'date' as const,
   eventDescription: 'eventDescription' as const,
   eventTitle: 'eventTitle' as const,
   eventType: 'eventType' as const,
   id: 'id' as const
}

export const enumCalendarUpdateColumn = {
   _PLACEHOLDER: '_PLACEHOLDER' as const
}

export const enumCategorySelectColumn = {
   id: 'id' as const,
   name: 'name' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumMessageConstraint = {
   message_pkey: 'message_pkey' as const
}

export const enumMessageSelectColumn = {
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   isRead: 'isRead' as const,
   message: 'message' as const,
   recipientId: 'recipientId' as const,
   senderId: 'senderId' as const,
   updatedAt: 'updatedAt' as const
}

export const enumMessageUpdateColumn = {
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   isRead: 'isRead' as const,
   message: 'message' as const,
   recipientId: 'recipientId' as const,
   senderId: 'senderId' as const,
   updatedAt: 'updatedAt' as const
}

export const enumNotificationSelectColumn = {
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   isRead: 'isRead' as const,
   message: 'message' as const,
   notifType: 'notifType' as const,
   updatedAt: 'updatedAt' as const,
   userId: 'userId' as const
}

export const enumOrderBy = {
   ASC: 'ASC' as const,
   ASC_NULLS_FIRST: 'ASC_NULLS_FIRST' as const,
   ASC_NULLS_LAST: 'ASC_NULLS_LAST' as const,
   DESC: 'DESC' as const,
   DESC_NULLS_FIRST: 'DESC_NULLS_FIRST' as const,
   DESC_NULLS_LAST: 'DESC_NULLS_LAST' as const
}

export const enumPackageSelectColumn = {
   benefits: 'benefits' as const,
   description: 'description' as const,
   id: 'id' as const,
   name: 'name' as const,
   price: 'price' as const
}

export const enumPaymentsSelectColumn = {
   accountId: 'accountId' as const,
   date: 'date' as const,
   detail: 'detail' as const,
   id: 'id' as const,
   paymentType: 'paymentType' as const,
   quantity: 'quantity' as const
}
