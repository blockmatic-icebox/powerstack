export default {
    "scalars": [
        2,
        17,
        28,
        40,
        49,
        53,
        71,
        72,
        73,
        101,
        112,
        124,
        137,
        144,
        151,
        155,
        159,
        165,
        168,
        172,
        175,
        176,
        177,
        185,
        193,
        197,
        207,
        212,
        216,
        226,
        236,
        245,
        246,
        247
    ],
    "types": {
        "Account": {
            "balances": [
                92,
                {
                    "distinctOn": [
                        112,
                        "[BalanceSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        110,
                        "[BalanceOrderBy!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "balancesAggregate": [
                93,
                {
                    "distinctOn": [
                        112,
                        "[BalanceSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        110,
                        "[BalanceOrderBy!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "bids": [
                132,
                {
                    "distinctOn": [
                        144,
                        "[BidSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        143,
                        "[BidOrderBy!]"
                    ],
                    "where": [
                        136
                    ]
                }
            ],
            "binaryParentId": [
                247
            ],
            "binaryPlacement": [
                236
            ],
            "bio": [
                236
            ],
            "calendar": [
                157
            ],
            "createdAt": [
                246
            ],
            "email": [
                236
            ],
            "id": [
                247
            ],
            "image": [
                236
            ],
            "name": [
                236
            ],
            "notifications": [
                199,
                {
                    "distinctOn": [
                        207,
                        "[NotificationSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        205,
                        "[NotificationOrderBy!]"
                    ],
                    "where": [
                        201
                    ]
                }
            ],
            "packages": [
                8,
                {
                    "distinctOn": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        26,
                        "[AccountPackageOrderBy!]"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "packagesAggregate": [
                9,
                {
                    "distinctOn": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        26,
                        "[AccountPackageOrderBy!]"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "parentId": [
                247
            ],
            "payments": [
                219,
                {
                    "distinctOn": [
                        226,
                        "[PaymentsSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        225,
                        "[PaymentsOrderBy!]"
                    ],
                    "where": [
                        222
                    ]
                }
            ],
            "phone": [
                236
            ],
            "updatedAt": [
                246
            ],
            "username": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountBoolExp": {
            "_and": [
                1
            ],
            "_not": [
                1
            ],
            "_or": [
                1
            ],
            "balances": [
                100
            ],
            "balancesAggregate": [
                94
            ],
            "bids": [
                136
            ],
            "binaryParentId": [
                239
            ],
            "binaryPlacement": [
                237
            ],
            "bio": [
                237
            ],
            "calendar": [
                158
            ],
            "createdAt": [
                238
            ],
            "email": [
                237
            ],
            "id": [
                239
            ],
            "image": [
                237
            ],
            "name": [
                237
            ],
            "notifications": [
                201
            ],
            "packages": [
                16
            ],
            "packagesAggregate": [
                10
            ],
            "parentId": [
                239
            ],
            "payments": [
                222
            ],
            "phone": [
                237
            ],
            "updatedAt": [
                238
            ],
            "username": [
                237
            ],
            "wallet": [
                237
            ],
            "__typename": [
                236
            ]
        },
        "AccountConstraint": {},
        "AccountInsertInput": {
            "balances": [
                97
            ],
            "bids": [
                134
            ],
            "binaryParentId": [
                247
            ],
            "binaryPlacement": [
                236
            ],
            "bio": [
                236
            ],
            "calendar": [
                162
            ],
            "createdAt": [
                246
            ],
            "email": [
                236
            ],
            "image": [
                236
            ],
            "name": [
                236
            ],
            "packages": [
                13
            ],
            "parentId": [
                247
            ],
            "phone": [
                236
            ],
            "updatedAt": [
                246
            ],
            "username": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountMutationResponse": {
            "affectedRows": [
                177
            ],
            "returning": [
                0
            ],
            "__typename": [
                236
            ]
        },
        "AccountObjRelInsertInput": {
            "data": [
                3
            ],
            "onConflict": [
                6
            ],
            "__typename": [
                236
            ]
        },
        "AccountOnConflict": {
            "constraint": [
                2
            ],
            "updateColumns": [
                53
            ],
            "where": [
                1
            ],
            "__typename": [
                236
            ]
        },
        "AccountOrderBy": {
            "balancesAggregate": [
                96
            ],
            "bidsAggregate": [
                133
            ],
            "binaryParentId": [
                212
            ],
            "binaryPlacement": [
                212
            ],
            "bio": [
                212
            ],
            "calendar": [
                164
            ],
            "createdAt": [
                212
            ],
            "email": [
                212
            ],
            "id": [
                212
            ],
            "image": [
                212
            ],
            "name": [
                212
            ],
            "notificationsAggregate": [
                200
            ],
            "packagesAggregate": [
                12
            ],
            "parentId": [
                212
            ],
            "paymentsAggregate": [
                220
            ],
            "phone": [
                212
            ],
            "updatedAt": [
                212
            ],
            "username": [
                212
            ],
            "wallet": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackage": {
            "account": [
                0
            ],
            "accountId": [
                247
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "package": [
                213
            ],
            "packageId": [
                177
            ],
            "transaction": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageAggregate": {
            "aggregate": [
                11
            ],
            "nodes": [
                8
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageAggregateBoolExp": {
            "count": [
                240
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageAggregateFields": {
            "avg": [
                14
            ],
            "count": [
                177,
                {
                    "columns": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "distinct": [
                        155
                    ]
                }
            ],
            "max": [
                20
            ],
            "min": [
                22
            ],
            "stddev": [
                30
            ],
            "stddevPop": [
                32
            ],
            "stddevSamp": [
                34
            ],
            "sum": [
                38
            ],
            "varPop": [
                42
            ],
            "varSamp": [
                44
            ],
            "variance": [
                46
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageAggregateOrderBy": {
            "avg": [
                15
            ],
            "count": [
                212
            ],
            "max": [
                21
            ],
            "min": [
                23
            ],
            "stddev": [
                31
            ],
            "stddevPop": [
                33
            ],
            "stddevSamp": [
                35
            ],
            "sum": [
                39
            ],
            "varPop": [
                43
            ],
            "varSamp": [
                45
            ],
            "variance": [
                47
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageArrRelInsertInput": {
            "data": [
                19
            ],
            "onConflict": [
                25
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageAvgFields": {
            "packageId": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageAvgOrderBy": {
            "packageId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageBoolExp": {
            "_and": [
                16
            ],
            "_not": [
                16
            ],
            "_or": [
                16
            ],
            "account": [
                1
            ],
            "accountId": [
                239
            ],
            "createdAt": [
                238
            ],
            "id": [
                239
            ],
            "package": [
                214
            ],
            "packageId": [
                178
            ],
            "transaction": [
                237
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageConstraint": {},
        "AccountPackageIncInput": {
            "packageId": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageInsertInput": {
            "account": [
                5
            ],
            "accountId": [
                247
            ],
            "createdAt": [
                246
            ],
            "packageId": [
                177
            ],
            "transaction": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageMaxFields": {
            "accountId": [
                247
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "packageId": [
                177
            ],
            "transaction": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageMaxOrderBy": {
            "accountId": [
                212
            ],
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "packageId": [
                212
            ],
            "transaction": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageMinFields": {
            "accountId": [
                247
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "packageId": [
                177
            ],
            "transaction": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageMinOrderBy": {
            "accountId": [
                212
            ],
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "packageId": [
                212
            ],
            "transaction": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageMutationResponse": {
            "affectedRows": [
                177
            ],
            "returning": [
                8
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageOnConflict": {
            "constraint": [
                17
            ],
            "updateColumns": [
                40
            ],
            "where": [
                16
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageOrderBy": {
            "account": [
                7
            ],
            "accountId": [
                212
            ],
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "package": [
                215
            ],
            "packageId": [
                212
            ],
            "transaction": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackagePkColumnsInput": {
            "id": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageSelectColumn": {},
        "AccountPackageSetInput": {
            "accountId": [
                247
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "packageId": [
                177
            ],
            "transaction": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageStddevFields": {
            "packageId": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageStddevOrderBy": {
            "packageId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageStddevPopFields": {
            "packageId": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageStddevPopOrderBy": {
            "packageId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageStddevSampFields": {
            "packageId": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageStddevSampOrderBy": {
            "packageId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageStreamCursorInput": {
            "initialValue": [
                37
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageStreamCursorValueInput": {
            "accountId": [
                247
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "packageId": [
                177
            ],
            "transaction": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageSumFields": {
            "packageId": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageSumOrderBy": {
            "packageId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageUpdateColumn": {},
        "AccountPackageUpdates": {
            "_inc": [
                18
            ],
            "_set": [
                29
            ],
            "where": [
                16
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageVarPopFields": {
            "packageId": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageVarPopOrderBy": {
            "packageId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageVarSampFields": {
            "packageId": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageVarSampOrderBy": {
            "packageId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageVarianceFields": {
            "packageId": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AccountPackageVarianceOrderBy": {
            "packageId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AccountPkColumnsInput": {
            "id": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "AccountSelectColumn": {},
        "AccountSetInput": {
            "binaryParentId": [
                247
            ],
            "binaryPlacement": [
                236
            ],
            "bio": [
                236
            ],
            "createdAt": [
                246
            ],
            "email": [
                236
            ],
            "id": [
                247
            ],
            "image": [
                236
            ],
            "name": [
                236
            ],
            "parentId": [
                247
            ],
            "phone": [
                236
            ],
            "updatedAt": [
                246
            ],
            "username": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountStreamCursorInput": {
            "initialValue": [
                52
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "AccountStreamCursorValueInput": {
            "binaryParentId": [
                247
            ],
            "binaryPlacement": [
                236
            ],
            "bio": [
                236
            ],
            "createdAt": [
                246
            ],
            "email": [
                236
            ],
            "id": [
                247
            ],
            "image": [
                236
            ],
            "name": [
                236
            ],
            "parentId": [
                247
            ],
            "phone": [
                236
            ],
            "updatedAt": [
                246
            ],
            "username": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "AccountUpdateColumn": {},
        "AccountUpdates": {
            "_set": [
                50
            ],
            "where": [
                1
            ],
            "__typename": [
                236
            ]
        },
        "Auction": {
            "bids": [
                132,
                {
                    "distinctOn": [
                        144,
                        "[BidSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        143,
                        "[BidOrderBy!]"
                    ],
                    "where": [
                        136
                    ]
                }
            ],
            "category": [
                169
            ],
            "categoryId": [
                177
            ],
            "createdAt": [
                246
            ],
            "endTime": [
                246
            ],
            "id": [
                177
            ],
            "image": [
                236
            ],
            "isActive": [
                155
            ],
            "itemDescription": [
                236
            ],
            "itemName": [
                236
            ],
            "lastBidTime": [
                246
            ],
            "price": [
                177
            ],
            "startTime": [
                246
            ],
            "time": [
                177
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "AuctionAggregate": {
            "aggregate": [
                58
            ],
            "nodes": [
                55
            ],
            "__typename": [
                236
            ]
        },
        "AuctionAggregateBoolExp": {
            "bool_and": [
                241
            ],
            "bool_or": [
                242
            ],
            "count": [
                243
            ],
            "__typename": [
                236
            ]
        },
        "AuctionAggregateFields": {
            "avg": [
                60
            ],
            "count": [
                177,
                {
                    "columns": [
                        71,
                        "[AuctionSelectColumn!]"
                    ],
                    "distinct": [
                        155
                    ]
                }
            ],
            "max": [
                64
            ],
            "min": [
                66
            ],
            "stddev": [
                75
            ],
            "stddevPop": [
                77
            ],
            "stddevSamp": [
                79
            ],
            "sum": [
                83
            ],
            "varPop": [
                86
            ],
            "varSamp": [
                88
            ],
            "variance": [
                90
            ],
            "__typename": [
                236
            ]
        },
        "AuctionAggregateOrderBy": {
            "avg": [
                61
            ],
            "count": [
                212
            ],
            "max": [
                65
            ],
            "min": [
                67
            ],
            "stddev": [
                76
            ],
            "stddevPop": [
                78
            ],
            "stddevSamp": [
                80
            ],
            "sum": [
                84
            ],
            "varPop": [
                87
            ],
            "varSamp": [
                89
            ],
            "variance": [
                91
            ],
            "__typename": [
                236
            ]
        },
        "AuctionAvgFields": {
            "categoryId": [
                176
            ],
            "id": [
                176
            ],
            "price": [
                176
            ],
            "time": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AuctionAvgOrderBy": {
            "categoryId": [
                212
            ],
            "id": [
                212
            ],
            "price": [
                212
            ],
            "time": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionBoolExp": {
            "_and": [
                62
            ],
            "_not": [
                62
            ],
            "_or": [
                62
            ],
            "bids": [
                136
            ],
            "category": [
                170
            ],
            "categoryId": [
                178
            ],
            "createdAt": [
                238
            ],
            "endTime": [
                238
            ],
            "id": [
                178
            ],
            "image": [
                237
            ],
            "isActive": [
                156
            ],
            "itemDescription": [
                237
            ],
            "itemName": [
                237
            ],
            "lastBidTime": [
                238
            ],
            "price": [
                178
            ],
            "startTime": [
                238
            ],
            "time": [
                178
            ],
            "updatedAt": [
                238
            ],
            "__typename": [
                236
            ]
        },
        "AuctionIncInput": {
            "categoryId": [
                177
            ],
            "price": [
                177
            ],
            "time": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "AuctionMaxFields": {
            "categoryId": [
                177
            ],
            "createdAt": [
                246
            ],
            "endTime": [
                246
            ],
            "id": [
                177
            ],
            "image": [
                236
            ],
            "itemDescription": [
                236
            ],
            "itemName": [
                236
            ],
            "lastBidTime": [
                246
            ],
            "price": [
                177
            ],
            "startTime": [
                246
            ],
            "time": [
                177
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "AuctionMaxOrderBy": {
            "categoryId": [
                212
            ],
            "createdAt": [
                212
            ],
            "endTime": [
                212
            ],
            "id": [
                212
            ],
            "image": [
                212
            ],
            "itemDescription": [
                212
            ],
            "itemName": [
                212
            ],
            "lastBidTime": [
                212
            ],
            "price": [
                212
            ],
            "startTime": [
                212
            ],
            "time": [
                212
            ],
            "updatedAt": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionMinFields": {
            "categoryId": [
                177
            ],
            "createdAt": [
                246
            ],
            "endTime": [
                246
            ],
            "id": [
                177
            ],
            "image": [
                236
            ],
            "itemDescription": [
                236
            ],
            "itemName": [
                236
            ],
            "lastBidTime": [
                246
            ],
            "price": [
                177
            ],
            "startTime": [
                246
            ],
            "time": [
                177
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "AuctionMinOrderBy": {
            "categoryId": [
                212
            ],
            "createdAt": [
                212
            ],
            "endTime": [
                212
            ],
            "id": [
                212
            ],
            "image": [
                212
            ],
            "itemDescription": [
                212
            ],
            "itemName": [
                212
            ],
            "lastBidTime": [
                212
            ],
            "price": [
                212
            ],
            "startTime": [
                212
            ],
            "time": [
                212
            ],
            "updatedAt": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionMutationResponse": {
            "affectedRows": [
                177
            ],
            "returning": [
                55
            ],
            "__typename": [
                236
            ]
        },
        "AuctionOrderBy": {
            "bidsAggregate": [
                133
            ],
            "category": [
                171
            ],
            "categoryId": [
                212
            ],
            "createdAt": [
                212
            ],
            "endTime": [
                212
            ],
            "id": [
                212
            ],
            "image": [
                212
            ],
            "isActive": [
                212
            ],
            "itemDescription": [
                212
            ],
            "itemName": [
                212
            ],
            "lastBidTime": [
                212
            ],
            "price": [
                212
            ],
            "startTime": [
                212
            ],
            "time": [
                212
            ],
            "updatedAt": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionPkColumnsInput": {
            "id": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "AuctionSelectColumn": {},
        "AuctionSelectColumnAuctionAggregateBoolExpBool_andArgumentsColumns": {},
        "AuctionSelectColumnAuctionAggregateBoolExpBool_orArgumentsColumns": {},
        "AuctionSetInput": {
            "categoryId": [
                177
            ],
            "createdAt": [
                246
            ],
            "endTime": [
                246
            ],
            "image": [
                236
            ],
            "isActive": [
                155
            ],
            "itemDescription": [
                236
            ],
            "itemName": [
                236
            ],
            "lastBidTime": [
                246
            ],
            "price": [
                177
            ],
            "time": [
                177
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "AuctionStddevFields": {
            "categoryId": [
                176
            ],
            "id": [
                176
            ],
            "price": [
                176
            ],
            "time": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AuctionStddevOrderBy": {
            "categoryId": [
                212
            ],
            "id": [
                212
            ],
            "price": [
                212
            ],
            "time": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionStddevPopFields": {
            "categoryId": [
                176
            ],
            "id": [
                176
            ],
            "price": [
                176
            ],
            "time": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AuctionStddevPopOrderBy": {
            "categoryId": [
                212
            ],
            "id": [
                212
            ],
            "price": [
                212
            ],
            "time": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionStddevSampFields": {
            "categoryId": [
                176
            ],
            "id": [
                176
            ],
            "price": [
                176
            ],
            "time": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AuctionStddevSampOrderBy": {
            "categoryId": [
                212
            ],
            "id": [
                212
            ],
            "price": [
                212
            ],
            "time": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionStreamCursorInput": {
            "initialValue": [
                82
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "AuctionStreamCursorValueInput": {
            "categoryId": [
                177
            ],
            "createdAt": [
                246
            ],
            "endTime": [
                246
            ],
            "id": [
                177
            ],
            "image": [
                236
            ],
            "isActive": [
                155
            ],
            "itemDescription": [
                236
            ],
            "itemName": [
                236
            ],
            "lastBidTime": [
                246
            ],
            "price": [
                177
            ],
            "startTime": [
                246
            ],
            "time": [
                177
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "AuctionSumFields": {
            "categoryId": [
                177
            ],
            "id": [
                177
            ],
            "price": [
                177
            ],
            "time": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "AuctionSumOrderBy": {
            "categoryId": [
                212
            ],
            "id": [
                212
            ],
            "price": [
                212
            ],
            "time": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionUpdates": {
            "_inc": [
                63
            ],
            "_set": [
                74
            ],
            "where": [
                62
            ],
            "__typename": [
                236
            ]
        },
        "AuctionVarPopFields": {
            "categoryId": [
                176
            ],
            "id": [
                176
            ],
            "price": [
                176
            ],
            "time": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AuctionVarPopOrderBy": {
            "categoryId": [
                212
            ],
            "id": [
                212
            ],
            "price": [
                212
            ],
            "time": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionVarSampFields": {
            "categoryId": [
                176
            ],
            "id": [
                176
            ],
            "price": [
                176
            ],
            "time": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AuctionVarSampOrderBy": {
            "categoryId": [
                212
            ],
            "id": [
                212
            ],
            "price": [
                212
            ],
            "time": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "AuctionVarianceFields": {
            "categoryId": [
                176
            ],
            "id": [
                176
            ],
            "price": [
                176
            ],
            "time": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "AuctionVarianceOrderBy": {
            "categoryId": [
                212
            ],
            "id": [
                212
            ],
            "price": [
                212
            ],
            "time": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "Balance": {
            "account": [
                0
            ],
            "displayQuantity": [
                236
            ],
            "quantity": [
                177
            ],
            "symbol": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "BalanceAggregate": {
            "aggregate": [
                95
            ],
            "nodes": [
                92
            ],
            "__typename": [
                236
            ]
        },
        "BalanceAggregateBoolExp": {
            "count": [
                244
            ],
            "__typename": [
                236
            ]
        },
        "BalanceAggregateFields": {
            "avg": [
                98
            ],
            "count": [
                177,
                {
                    "columns": [
                        112,
                        "[BalanceSelectColumn!]"
                    ],
                    "distinct": [
                        155
                    ]
                }
            ],
            "max": [
                104
            ],
            "min": [
                106
            ],
            "stddev": [
                114
            ],
            "stddevPop": [
                116
            ],
            "stddevSamp": [
                118
            ],
            "sum": [
                122
            ],
            "varPop": [
                126
            ],
            "varSamp": [
                128
            ],
            "variance": [
                130
            ],
            "__typename": [
                236
            ]
        },
        "BalanceAggregateOrderBy": {
            "avg": [
                99
            ],
            "count": [
                212
            ],
            "max": [
                105
            ],
            "min": [
                107
            ],
            "stddev": [
                115
            ],
            "stddevPop": [
                117
            ],
            "stddevSamp": [
                119
            ],
            "sum": [
                123
            ],
            "varPop": [
                127
            ],
            "varSamp": [
                129
            ],
            "variance": [
                131
            ],
            "__typename": [
                236
            ]
        },
        "BalanceArrRelInsertInput": {
            "data": [
                103
            ],
            "onConflict": [
                109
            ],
            "__typename": [
                236
            ]
        },
        "BalanceAvgFields": {
            "quantity": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "BalanceAvgOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceBoolExp": {
            "_and": [
                100
            ],
            "_not": [
                100
            ],
            "_or": [
                100
            ],
            "account": [
                1
            ],
            "displayQuantity": [
                237
            ],
            "quantity": [
                178
            ],
            "symbol": [
                237
            ],
            "wallet": [
                237
            ],
            "__typename": [
                236
            ]
        },
        "BalanceConstraint": {},
        "BalanceIncInput": {
            "quantity": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "BalanceInsertInput": {
            "account": [
                5
            ],
            "displayQuantity": [
                236
            ],
            "quantity": [
                177
            ],
            "symbol": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "BalanceMaxFields": {
            "displayQuantity": [
                236
            ],
            "quantity": [
                177
            ],
            "symbol": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "BalanceMaxOrderBy": {
            "displayQuantity": [
                212
            ],
            "quantity": [
                212
            ],
            "symbol": [
                212
            ],
            "wallet": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceMinFields": {
            "displayQuantity": [
                236
            ],
            "quantity": [
                177
            ],
            "symbol": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "BalanceMinOrderBy": {
            "displayQuantity": [
                212
            ],
            "quantity": [
                212
            ],
            "symbol": [
                212
            ],
            "wallet": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceMutationResponse": {
            "affectedRows": [
                177
            ],
            "returning": [
                92
            ],
            "__typename": [
                236
            ]
        },
        "BalanceOnConflict": {
            "constraint": [
                101
            ],
            "updateColumns": [
                124
            ],
            "where": [
                100
            ],
            "__typename": [
                236
            ]
        },
        "BalanceOrderBy": {
            "account": [
                7
            ],
            "displayQuantity": [
                212
            ],
            "quantity": [
                212
            ],
            "symbol": [
                212
            ],
            "wallet": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalancePkColumnsInput": {
            "symbol": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "BalanceSelectColumn": {},
        "BalanceSetInput": {
            "displayQuantity": [
                236
            ],
            "quantity": [
                177
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "BalanceStddevFields": {
            "quantity": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "BalanceStddevOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceStddevPopFields": {
            "quantity": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "BalanceStddevPopOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceStddevSampFields": {
            "quantity": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "BalanceStddevSampOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceStreamCursorInput": {
            "initialValue": [
                121
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "BalanceStreamCursorValueInput": {
            "displayQuantity": [
                236
            ],
            "quantity": [
                177
            ],
            "symbol": [
                236
            ],
            "wallet": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "BalanceSumFields": {
            "quantity": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "BalanceSumOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceUpdateColumn": {},
        "BalanceUpdates": {
            "_inc": [
                102
            ],
            "_set": [
                113
            ],
            "where": [
                100
            ],
            "__typename": [
                236
            ]
        },
        "BalanceVarPopFields": {
            "quantity": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "BalanceVarPopOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceVarSampFields": {
            "quantity": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "BalanceVarSampOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BalanceVarianceFields": {
            "quantity": [
                176
            ],
            "__typename": [
                236
            ]
        },
        "BalanceVarianceOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "Bid": {
            "account": [
                0
            ],
            "accountId": [
                247
            ],
            "amount": [
                236
            ],
            "auction": [
                55
            ],
            "auctionId": [
                177
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "transaction": [
                236
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "BidAggregateOrderBy": {
            "avg": [
                135
            ],
            "count": [
                212
            ],
            "max": [
                139
            ],
            "min": [
                140
            ],
            "stddev": [
                145
            ],
            "stddevPop": [
                146
            ],
            "stddevSamp": [
                147
            ],
            "sum": [
                150
            ],
            "varPop": [
                152
            ],
            "varSamp": [
                153
            ],
            "variance": [
                154
            ],
            "__typename": [
                236
            ]
        },
        "BidArrRelInsertInput": {
            "data": [
                138
            ],
            "onConflict": [
                142
            ],
            "__typename": [
                236
            ]
        },
        "BidAvgOrderBy": {
            "auctionId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidBoolExp": {
            "_and": [
                136
            ],
            "_not": [
                136
            ],
            "_or": [
                136
            ],
            "account": [
                1
            ],
            "accountId": [
                239
            ],
            "amount": [
                237
            ],
            "auction": [
                62
            ],
            "auctionId": [
                178
            ],
            "createdAt": [
                238
            ],
            "id": [
                239
            ],
            "transaction": [
                237
            ],
            "updatedAt": [
                238
            ],
            "__typename": [
                236
            ]
        },
        "BidConstraint": {},
        "BidInsertInput": {
            "account": [
                5
            ],
            "accountId": [
                247
            ],
            "amount": [
                236
            ],
            "auctionId": [
                177
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "transaction": [
                236
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "BidMaxOrderBy": {
            "accountId": [
                212
            ],
            "amount": [
                212
            ],
            "auctionId": [
                212
            ],
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "transaction": [
                212
            ],
            "updatedAt": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidMinOrderBy": {
            "accountId": [
                212
            ],
            "amount": [
                212
            ],
            "auctionId": [
                212
            ],
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "transaction": [
                212
            ],
            "updatedAt": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidMutationResponse": {
            "affectedRows": [
                177
            ],
            "returning": [
                132
            ],
            "__typename": [
                236
            ]
        },
        "BidOnConflict": {
            "constraint": [
                137
            ],
            "updateColumns": [
                151
            ],
            "where": [
                136
            ],
            "__typename": [
                236
            ]
        },
        "BidOrderBy": {
            "account": [
                7
            ],
            "accountId": [
                212
            ],
            "amount": [
                212
            ],
            "auction": [
                69
            ],
            "auctionId": [
                212
            ],
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "transaction": [
                212
            ],
            "updatedAt": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidSelectColumn": {},
        "BidStddevOrderBy": {
            "auctionId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidStddevPopOrderBy": {
            "auctionId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidStddevSampOrderBy": {
            "auctionId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidStreamCursorInput": {
            "initialValue": [
                149
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "BidStreamCursorValueInput": {
            "accountId": [
                247
            ],
            "amount": [
                236
            ],
            "auctionId": [
                177
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "transaction": [
                236
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "BidSumOrderBy": {
            "auctionId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidUpdateColumn": {},
        "BidVarPopOrderBy": {
            "auctionId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidVarSampOrderBy": {
            "auctionId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "BidVarianceOrderBy": {
            "auctionId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "Boolean": {},
        "BooleanComparisonExp": {
            "_eq": [
                155
            ],
            "_gt": [
                155
            ],
            "_gte": [
                155
            ],
            "_in": [
                155
            ],
            "_isNull": [
                155
            ],
            "_lt": [
                155
            ],
            "_lte": [
                155
            ],
            "_neq": [
                155
            ],
            "_nin": [
                155
            ],
            "__typename": [
                236
            ]
        },
        "Calendar": {
            "accountId": [
                247
            ],
            "date": [
                246
            ],
            "eventDescription": [
                236
            ],
            "eventTitle": [
                236
            ],
            "eventType": [
                236
            ],
            "id": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "CalendarBoolExp": {
            "_and": [
                158
            ],
            "_not": [
                158
            ],
            "_or": [
                158
            ],
            "accountId": [
                239
            ],
            "date": [
                238
            ],
            "eventDescription": [
                237
            ],
            "eventTitle": [
                237
            ],
            "eventType": [
                237
            ],
            "id": [
                239
            ],
            "__typename": [
                236
            ]
        },
        "CalendarConstraint": {},
        "CalendarInsertInput": {
            "accountId": [
                247
            ],
            "date": [
                246
            ],
            "eventDescription": [
                236
            ],
            "eventTitle": [
                236
            ],
            "eventType": [
                236
            ],
            "id": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "CalendarMutationResponse": {
            "affectedRows": [
                177
            ],
            "returning": [
                157
            ],
            "__typename": [
                236
            ]
        },
        "CalendarObjRelInsertInput": {
            "data": [
                160
            ],
            "onConflict": [
                163
            ],
            "__typename": [
                236
            ]
        },
        "CalendarOnConflict": {
            "constraint": [
                159
            ],
            "updateColumns": [
                168
            ],
            "where": [
                158
            ],
            "__typename": [
                236
            ]
        },
        "CalendarOrderBy": {
            "accountId": [
                212
            ],
            "date": [
                212
            ],
            "eventDescription": [
                212
            ],
            "eventTitle": [
                212
            ],
            "eventType": [
                212
            ],
            "id": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "CalendarSelectColumn": {},
        "CalendarStreamCursorInput": {
            "initialValue": [
                167
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "CalendarStreamCursorValueInput": {
            "accountId": [
                247
            ],
            "date": [
                246
            ],
            "eventDescription": [
                236
            ],
            "eventTitle": [
                236
            ],
            "eventType": [
                236
            ],
            "id": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "CalendarUpdateColumn": {},
        "Category": {
            "auctions": [
                55,
                {
                    "distinctOn": [
                        71,
                        "[AuctionSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        69,
                        "[AuctionOrderBy!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "auctionsAggregate": [
                56,
                {
                    "distinctOn": [
                        71,
                        "[AuctionSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        69,
                        "[AuctionOrderBy!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "id": [
                177
            ],
            "name": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "CategoryBoolExp": {
            "_and": [
                170
            ],
            "_not": [
                170
            ],
            "_or": [
                170
            ],
            "auctions": [
                62
            ],
            "auctionsAggregate": [
                57
            ],
            "id": [
                178
            ],
            "name": [
                237
            ],
            "__typename": [
                236
            ]
        },
        "CategoryOrderBy": {
            "auctionsAggregate": [
                59
            ],
            "id": [
                212
            ],
            "name": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "CategorySelectColumn": {},
        "CategoryStreamCursorInput": {
            "initialValue": [
                174
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "CategoryStreamCursorValueInput": {
            "id": [
                177
            ],
            "name": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "CursorOrdering": {},
        "Float": {},
        "Int": {},
        "IntComparisonExp": {
            "_eq": [
                177
            ],
            "_gt": [
                177
            ],
            "_gte": [
                177
            ],
            "_in": [
                177
            ],
            "_isNull": [
                155
            ],
            "_lt": [
                177
            ],
            "_lte": [
                177
            ],
            "_neq": [
                177
            ],
            "_nin": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "JsonbCastExp": {
            "String": [
                237
            ],
            "__typename": [
                236
            ]
        },
        "JsonbComparisonExp": {
            "_cast": [
                179
            ],
            "_containedIn": [
                245
            ],
            "_contains": [
                245
            ],
            "_eq": [
                245
            ],
            "_gt": [
                245
            ],
            "_gte": [
                245
            ],
            "_hasKey": [
                236
            ],
            "_hasKeysAll": [
                236
            ],
            "_hasKeysAny": [
                236
            ],
            "_in": [
                245
            ],
            "_isNull": [
                155
            ],
            "_lt": [
                245
            ],
            "_lte": [
                245
            ],
            "_neq": [
                245
            ],
            "_nin": [
                245
            ],
            "__typename": [
                236
            ]
        },
        "Message": {
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "isRead": [
                155
            ],
            "message": [
                236
            ],
            "recipient": [
                0
            ],
            "recipientId": [
                247
            ],
            "sender": [
                0
            ],
            "senderId": [
                247
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "MessageAggregate": {
            "aggregate": [
                183
            ],
            "nodes": [
                181
            ],
            "__typename": [
                236
            ]
        },
        "MessageAggregateFields": {
            "count": [
                177,
                {
                    "columns": [
                        193,
                        "[MessageSelectColumn!]"
                    ],
                    "distinct": [
                        155
                    ]
                }
            ],
            "max": [
                187
            ],
            "min": [
                188
            ],
            "__typename": [
                236
            ]
        },
        "MessageBoolExp": {
            "_and": [
                184
            ],
            "_not": [
                184
            ],
            "_or": [
                184
            ],
            "createdAt": [
                238
            ],
            "id": [
                239
            ],
            "isRead": [
                156
            ],
            "message": [
                237
            ],
            "recipient": [
                1
            ],
            "recipientId": [
                239
            ],
            "sender": [
                1
            ],
            "senderId": [
                239
            ],
            "updatedAt": [
                238
            ],
            "__typename": [
                236
            ]
        },
        "MessageConstraint": {},
        "MessageInsertInput": {
            "createdAt": [
                246
            ],
            "isRead": [
                155
            ],
            "message": [
                236
            ],
            "recipient": [
                5
            ],
            "recipientId": [
                247
            ],
            "sender": [
                5
            ],
            "senderId": [
                247
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "MessageMaxFields": {
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "message": [
                236
            ],
            "recipientId": [
                247
            ],
            "senderId": [
                247
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "MessageMinFields": {
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "message": [
                236
            ],
            "recipientId": [
                247
            ],
            "senderId": [
                247
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "MessageMutationResponse": {
            "affectedRows": [
                177
            ],
            "returning": [
                181
            ],
            "__typename": [
                236
            ]
        },
        "MessageOnConflict": {
            "constraint": [
                185
            ],
            "updateColumns": [
                197
            ],
            "where": [
                184
            ],
            "__typename": [
                236
            ]
        },
        "MessageOrderBy": {
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "isRead": [
                212
            ],
            "message": [
                212
            ],
            "recipient": [
                7
            ],
            "recipientId": [
                212
            ],
            "sender": [
                7
            ],
            "senderId": [
                212
            ],
            "updatedAt": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "MessagePkColumnsInput": {
            "id": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "MessageSelectColumn": {},
        "MessageSetInput": {
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "isRead": [
                155
            ],
            "message": [
                236
            ],
            "recipientId": [
                247
            ],
            "senderId": [
                247
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "MessageStreamCursorInput": {
            "initialValue": [
                196
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "MessageStreamCursorValueInput": {
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "isRead": [
                155
            ],
            "message": [
                236
            ],
            "recipientId": [
                247
            ],
            "senderId": [
                247
            ],
            "updatedAt": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "MessageUpdateColumn": {},
        "MessageUpdates": {
            "_set": [
                194
            ],
            "where": [
                184
            ],
            "__typename": [
                236
            ]
        },
        "Notification": {
            "account": [
                0
            ],
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "isRead": [
                155
            ],
            "message": [
                236
            ],
            "notifType": [
                236
            ],
            "updatedAt": [
                246
            ],
            "userId": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "NotificationAggregateOrderBy": {
            "count": [
                212
            ],
            "max": [
                202
            ],
            "min": [
                203
            ],
            "__typename": [
                236
            ]
        },
        "NotificationBoolExp": {
            "_and": [
                201
            ],
            "_not": [
                201
            ],
            "_or": [
                201
            ],
            "account": [
                1
            ],
            "createdAt": [
                238
            ],
            "id": [
                239
            ],
            "isRead": [
                156
            ],
            "message": [
                237
            ],
            "notifType": [
                237
            ],
            "updatedAt": [
                238
            ],
            "userId": [
                239
            ],
            "__typename": [
                236
            ]
        },
        "NotificationMaxOrderBy": {
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "message": [
                212
            ],
            "notifType": [
                212
            ],
            "updatedAt": [
                212
            ],
            "userId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "NotificationMinOrderBy": {
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "message": [
                212
            ],
            "notifType": [
                212
            ],
            "updatedAt": [
                212
            ],
            "userId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "NotificationMutationResponse": {
            "affectedRows": [
                177
            ],
            "returning": [
                199
            ],
            "__typename": [
                236
            ]
        },
        "NotificationOrderBy": {
            "account": [
                7
            ],
            "createdAt": [
                212
            ],
            "id": [
                212
            ],
            "isRead": [
                212
            ],
            "message": [
                212
            ],
            "notifType": [
                212
            ],
            "updatedAt": [
                212
            ],
            "userId": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "NotificationPkColumnsInput": {
            "id": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "NotificationSelectColumn": {},
        "NotificationSetInput": {
            "isRead": [
                155
            ],
            "__typename": [
                236
            ]
        },
        "NotificationStreamCursorInput": {
            "initialValue": [
                210
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "NotificationStreamCursorValueInput": {
            "createdAt": [
                246
            ],
            "id": [
                247
            ],
            "isRead": [
                155
            ],
            "message": [
                236
            ],
            "notifType": [
                236
            ],
            "updatedAt": [
                246
            ],
            "userId": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "NotificationUpdates": {
            "_set": [
                208
            ],
            "where": [
                201
            ],
            "__typename": [
                236
            ]
        },
        "OrderBy": {},
        "Package": {
            "benefits": [
                245,
                {
                    "path": [
                        236
                    ]
                }
            ],
            "description": [
                236
            ],
            "id": [
                177
            ],
            "name": [
                236
            ],
            "price": [
                177
            ],
            "transactions": [
                8,
                {
                    "distinctOn": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        26,
                        "[AccountPackageOrderBy!]"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "transactionsAggregate": [
                9,
                {
                    "distinctOn": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        26,
                        "[AccountPackageOrderBy!]"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "__typename": [
                236
            ]
        },
        "PackageBoolExp": {
            "_and": [
                214
            ],
            "_not": [
                214
            ],
            "_or": [
                214
            ],
            "benefits": [
                180
            ],
            "description": [
                237
            ],
            "id": [
                178
            ],
            "name": [
                237
            ],
            "price": [
                178
            ],
            "transactions": [
                16
            ],
            "transactionsAggregate": [
                10
            ],
            "__typename": [
                236
            ]
        },
        "PackageOrderBy": {
            "benefits": [
                212
            ],
            "description": [
                212
            ],
            "id": [
                212
            ],
            "name": [
                212
            ],
            "price": [
                212
            ],
            "transactionsAggregate": [
                12
            ],
            "__typename": [
                236
            ]
        },
        "PackageSelectColumn": {},
        "PackageStreamCursorInput": {
            "initialValue": [
                218
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "PackageStreamCursorValueInput": {
            "benefits": [
                245
            ],
            "description": [
                236
            ],
            "id": [
                177
            ],
            "name": [
                236
            ],
            "price": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "Payments": {
            "account": [
                0
            ],
            "accountId": [
                247
            ],
            "date": [
                246
            ],
            "detail": [
                245,
                {
                    "path": [
                        236
                    ]
                }
            ],
            "id": [
                247
            ],
            "paymentType": [
                236
            ],
            "quantity": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsAggregateOrderBy": {
            "avg": [
                221
            ],
            "count": [
                212
            ],
            "max": [
                223
            ],
            "min": [
                224
            ],
            "stddev": [
                227
            ],
            "stddevPop": [
                228
            ],
            "stddevSamp": [
                229
            ],
            "sum": [
                232
            ],
            "varPop": [
                233
            ],
            "varSamp": [
                234
            ],
            "variance": [
                235
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsAvgOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsBoolExp": {
            "_and": [
                222
            ],
            "_not": [
                222
            ],
            "_or": [
                222
            ],
            "account": [
                1
            ],
            "accountId": [
                239
            ],
            "date": [
                238
            ],
            "detail": [
                180
            ],
            "id": [
                239
            ],
            "paymentType": [
                237
            ],
            "quantity": [
                178
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsMaxOrderBy": {
            "accountId": [
                212
            ],
            "date": [
                212
            ],
            "id": [
                212
            ],
            "paymentType": [
                212
            ],
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsMinOrderBy": {
            "accountId": [
                212
            ],
            "date": [
                212
            ],
            "id": [
                212
            ],
            "paymentType": [
                212
            ],
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsOrderBy": {
            "account": [
                7
            ],
            "accountId": [
                212
            ],
            "date": [
                212
            ],
            "detail": [
                212
            ],
            "id": [
                212
            ],
            "paymentType": [
                212
            ],
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsSelectColumn": {},
        "PaymentsStddevOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsStddevPopOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsStddevSampOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsStreamCursorInput": {
            "initialValue": [
                231
            ],
            "ordering": [
                175
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsStreamCursorValueInput": {
            "accountId": [
                247
            ],
            "date": [
                246
            ],
            "detail": [
                245
            ],
            "id": [
                247
            ],
            "paymentType": [
                236
            ],
            "quantity": [
                177
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsSumOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsVarPopOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsVarSampOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "PaymentsVarianceOrderBy": {
            "quantity": [
                212
            ],
            "__typename": [
                236
            ]
        },
        "String": {},
        "StringComparisonExp": {
            "_eq": [
                236
            ],
            "_gt": [
                236
            ],
            "_gte": [
                236
            ],
            "_ilike": [
                236
            ],
            "_in": [
                236
            ],
            "_iregex": [
                236
            ],
            "_isNull": [
                155
            ],
            "_like": [
                236
            ],
            "_lt": [
                236
            ],
            "_lte": [
                236
            ],
            "_neq": [
                236
            ],
            "_nilike": [
                236
            ],
            "_nin": [
                236
            ],
            "_niregex": [
                236
            ],
            "_nlike": [
                236
            ],
            "_nregex": [
                236
            ],
            "_nsimilar": [
                236
            ],
            "_regex": [
                236
            ],
            "_similar": [
                236
            ],
            "__typename": [
                236
            ]
        },
        "TimestamptzComparisonExp": {
            "_eq": [
                246
            ],
            "_gt": [
                246
            ],
            "_gte": [
                246
            ],
            "_in": [
                246
            ],
            "_isNull": [
                155
            ],
            "_lt": [
                246
            ],
            "_lte": [
                246
            ],
            "_neq": [
                246
            ],
            "_nin": [
                246
            ],
            "__typename": [
                236
            ]
        },
        "UuidComparisonExp": {
            "_eq": [
                247
            ],
            "_gt": [
                247
            ],
            "_gte": [
                247
            ],
            "_in": [
                247
            ],
            "_isNull": [
                155
            ],
            "_lt": [
                247
            ],
            "_lte": [
                247
            ],
            "_neq": [
                247
            ],
            "_nin": [
                247
            ],
            "__typename": [
                236
            ]
        },
        "accountPackageAggregateBoolExpCount": {
            "arguments": [
                28
            ],
            "distinct": [
                155
            ],
            "filter": [
                16
            ],
            "predicate": [
                178
            ],
            "__typename": [
                236
            ]
        },
        "auctionAggregateBoolExpBool_and": {
            "arguments": [
                72
            ],
            "distinct": [
                155
            ],
            "filter": [
                62
            ],
            "predicate": [
                156
            ],
            "__typename": [
                236
            ]
        },
        "auctionAggregateBoolExpBool_or": {
            "arguments": [
                73
            ],
            "distinct": [
                155
            ],
            "filter": [
                62
            ],
            "predicate": [
                156
            ],
            "__typename": [
                236
            ]
        },
        "auctionAggregateBoolExpCount": {
            "arguments": [
                71
            ],
            "distinct": [
                155
            ],
            "filter": [
                62
            ],
            "predicate": [
                178
            ],
            "__typename": [
                236
            ]
        },
        "balanceAggregateBoolExpCount": {
            "arguments": [
                112
            ],
            "distinct": [
                155
            ],
            "filter": [
                100
            ],
            "predicate": [
                178
            ],
            "__typename": [
                236
            ]
        },
        "jsonb": {},
        "timestamptz": {},
        "uuid": {},
        "Query": {
            "account": [
                0,
                {
                    "distinctOn": [
                        49,
                        "[AccountSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        7,
                        "[AccountOrderBy!]"
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "accountByPk": [
                0,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "accountPackage": [
                8,
                {
                    "distinctOn": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        26,
                        "[AccountPackageOrderBy!]"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "accountPackageAggregate": [
                9,
                {
                    "distinctOn": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        26,
                        "[AccountPackageOrderBy!]"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "accountPackageByPk": [
                8,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "auction": [
                55,
                {
                    "distinctOn": [
                        71,
                        "[AuctionSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        69,
                        "[AuctionOrderBy!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "auctionAggregate": [
                56,
                {
                    "distinctOn": [
                        71,
                        "[AuctionSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        69,
                        "[AuctionOrderBy!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "auctionByPk": [
                55,
                {
                    "id": [
                        177,
                        "Int!"
                    ]
                }
            ],
            "balance": [
                92,
                {
                    "distinctOn": [
                        112,
                        "[BalanceSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        110,
                        "[BalanceOrderBy!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "balanceAggregate": [
                93,
                {
                    "distinctOn": [
                        112,
                        "[BalanceSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        110,
                        "[BalanceOrderBy!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "balanceByPk": [
                92,
                {
                    "symbol": [
                        236,
                        "String!"
                    ],
                    "wallet": [
                        236,
                        "String!"
                    ]
                }
            ],
            "bid": [
                132,
                {
                    "distinctOn": [
                        144,
                        "[BidSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        143,
                        "[BidOrderBy!]"
                    ],
                    "where": [
                        136
                    ]
                }
            ],
            "bidByPk": [
                132,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "calendar": [
                157,
                {
                    "distinctOn": [
                        165,
                        "[CalendarSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        164,
                        "[CalendarOrderBy!]"
                    ],
                    "where": [
                        158
                    ]
                }
            ],
            "calendarByPk": [
                157,
                {
                    "accountId": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "category": [
                169,
                {
                    "distinctOn": [
                        172,
                        "[CategorySelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        171,
                        "[CategoryOrderBy!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "categoryByPk": [
                169,
                {
                    "id": [
                        177,
                        "Int!"
                    ]
                }
            ],
            "message": [
                181,
                {
                    "distinctOn": [
                        193,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        191,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageAggregate": [
                182,
                {
                    "distinctOn": [
                        193,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        191,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageByPk": [
                181,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "notification": [
                199,
                {
                    "distinctOn": [
                        207,
                        "[NotificationSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        205,
                        "[NotificationOrderBy!]"
                    ],
                    "where": [
                        201
                    ]
                }
            ],
            "notificationByPk": [
                199,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "package": [
                213,
                {
                    "distinctOn": [
                        216,
                        "[PackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        215,
                        "[PackageOrderBy!]"
                    ],
                    "where": [
                        214
                    ]
                }
            ],
            "packageByPk": [
                213,
                {
                    "id": [
                        177,
                        "Int!"
                    ]
                }
            ],
            "payments": [
                219,
                {
                    "distinctOn": [
                        226,
                        "[PaymentsSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        225,
                        "[PaymentsOrderBy!]"
                    ],
                    "where": [
                        222
                    ]
                }
            ],
            "paymentsByPk": [
                219,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                236
            ]
        },
        "Mutation": {
            "insertAccount": [
                4,
                {
                    "objects": [
                        3,
                        "[AccountInsertInput!]!"
                    ],
                    "onConflict": [
                        6
                    ]
                }
            ],
            "insertAccountOne": [
                0,
                {
                    "object": [
                        3,
                        "AccountInsertInput!"
                    ],
                    "onConflict": [
                        6
                    ]
                }
            ],
            "insertAccountPackage": [
                24,
                {
                    "objects": [
                        19,
                        "[AccountPackageInsertInput!]!"
                    ],
                    "onConflict": [
                        25
                    ]
                }
            ],
            "insertAccountPackageOne": [
                8,
                {
                    "object": [
                        19,
                        "AccountPackageInsertInput!"
                    ],
                    "onConflict": [
                        25
                    ]
                }
            ],
            "insertBalance": [
                108,
                {
                    "objects": [
                        103,
                        "[BalanceInsertInput!]!"
                    ],
                    "onConflict": [
                        109
                    ]
                }
            ],
            "insertBalanceOne": [
                92,
                {
                    "object": [
                        103,
                        "BalanceInsertInput!"
                    ],
                    "onConflict": [
                        109
                    ]
                }
            ],
            "insertBid": [
                141,
                {
                    "objects": [
                        138,
                        "[BidInsertInput!]!"
                    ],
                    "onConflict": [
                        142
                    ]
                }
            ],
            "insertBidOne": [
                132,
                {
                    "object": [
                        138,
                        "BidInsertInput!"
                    ],
                    "onConflict": [
                        142
                    ]
                }
            ],
            "insertCalendar": [
                161,
                {
                    "objects": [
                        160,
                        "[CalendarInsertInput!]!"
                    ],
                    "onConflict": [
                        163
                    ]
                }
            ],
            "insertCalendarOne": [
                157,
                {
                    "object": [
                        160,
                        "CalendarInsertInput!"
                    ],
                    "onConflict": [
                        163
                    ]
                }
            ],
            "insertMessage": [
                189,
                {
                    "objects": [
                        186,
                        "[MessageInsertInput!]!"
                    ],
                    "onConflict": [
                        190
                    ]
                }
            ],
            "insertMessageOne": [
                181,
                {
                    "object": [
                        186,
                        "MessageInsertInput!"
                    ],
                    "onConflict": [
                        190
                    ]
                }
            ],
            "updateAccount": [
                4,
                {
                    "_set": [
                        50
                    ],
                    "where": [
                        1,
                        "AccountBoolExp!"
                    ]
                }
            ],
            "updateAccountByPk": [
                0,
                {
                    "_set": [
                        50
                    ],
                    "pkColumns": [
                        48,
                        "AccountPkColumnsInput!"
                    ]
                }
            ],
            "updateAccountMany": [
                4,
                {
                    "updates": [
                        54,
                        "[AccountUpdates!]!"
                    ]
                }
            ],
            "updateAccountPackage": [
                24,
                {
                    "_inc": [
                        18
                    ],
                    "_set": [
                        29
                    ],
                    "where": [
                        16,
                        "AccountPackageBoolExp!"
                    ]
                }
            ],
            "updateAccountPackageByPk": [
                8,
                {
                    "_inc": [
                        18
                    ],
                    "_set": [
                        29
                    ],
                    "pkColumns": [
                        27,
                        "AccountPackagePkColumnsInput!"
                    ]
                }
            ],
            "updateAccountPackageMany": [
                24,
                {
                    "updates": [
                        41,
                        "[AccountPackageUpdates!]!"
                    ]
                }
            ],
            "updateAuction": [
                68,
                {
                    "_inc": [
                        63
                    ],
                    "_set": [
                        74
                    ],
                    "where": [
                        62,
                        "AuctionBoolExp!"
                    ]
                }
            ],
            "updateAuctionByPk": [
                55,
                {
                    "_inc": [
                        63
                    ],
                    "_set": [
                        74
                    ],
                    "pkColumns": [
                        70,
                        "AuctionPkColumnsInput!"
                    ]
                }
            ],
            "updateAuctionMany": [
                68,
                {
                    "updates": [
                        85,
                        "[AuctionUpdates!]!"
                    ]
                }
            ],
            "updateBalance": [
                108,
                {
                    "_inc": [
                        102
                    ],
                    "_set": [
                        113
                    ],
                    "where": [
                        100,
                        "BalanceBoolExp!"
                    ]
                }
            ],
            "updateBalanceByPk": [
                92,
                {
                    "_inc": [
                        102
                    ],
                    "_set": [
                        113
                    ],
                    "pkColumns": [
                        111,
                        "BalancePkColumnsInput!"
                    ]
                }
            ],
            "updateBalanceMany": [
                108,
                {
                    "updates": [
                        125,
                        "[BalanceUpdates!]!"
                    ]
                }
            ],
            "updateMessage": [
                189,
                {
                    "_set": [
                        194
                    ],
                    "where": [
                        184,
                        "MessageBoolExp!"
                    ]
                }
            ],
            "updateMessageByPk": [
                181,
                {
                    "_set": [
                        194
                    ],
                    "pkColumns": [
                        192,
                        "MessagePkColumnsInput!"
                    ]
                }
            ],
            "updateMessageMany": [
                189,
                {
                    "updates": [
                        198,
                        "[MessageUpdates!]!"
                    ]
                }
            ],
            "updateNotification": [
                204,
                {
                    "_set": [
                        208
                    ],
                    "where": [
                        201,
                        "NotificationBoolExp!"
                    ]
                }
            ],
            "updateNotificationByPk": [
                199,
                {
                    "_set": [
                        208
                    ],
                    "pkColumns": [
                        206,
                        "NotificationPkColumnsInput!"
                    ]
                }
            ],
            "updateNotificationMany": [
                204,
                {
                    "updates": [
                        211,
                        "[NotificationUpdates!]!"
                    ]
                }
            ],
            "__typename": [
                236
            ]
        },
        "Subscription": {
            "account": [
                0,
                {
                    "distinctOn": [
                        49,
                        "[AccountSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        7,
                        "[AccountOrderBy!]"
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "accountByPk": [
                0,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "accountPackage": [
                8,
                {
                    "distinctOn": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        26,
                        "[AccountPackageOrderBy!]"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "accountPackageAggregate": [
                9,
                {
                    "distinctOn": [
                        28,
                        "[AccountPackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        26,
                        "[AccountPackageOrderBy!]"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "accountPackageByPk": [
                8,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "accountPackageStream": [
                8,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        36,
                        "[AccountPackageStreamCursorInput]!"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "accountStream": [
                0,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        51,
                        "[AccountStreamCursorInput]!"
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "auction": [
                55,
                {
                    "distinctOn": [
                        71,
                        "[AuctionSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        69,
                        "[AuctionOrderBy!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "auctionAggregate": [
                56,
                {
                    "distinctOn": [
                        71,
                        "[AuctionSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        69,
                        "[AuctionOrderBy!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "auctionByPk": [
                55,
                {
                    "id": [
                        177,
                        "Int!"
                    ]
                }
            ],
            "auctionStream": [
                55,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        81,
                        "[AuctionStreamCursorInput]!"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "balance": [
                92,
                {
                    "distinctOn": [
                        112,
                        "[BalanceSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        110,
                        "[BalanceOrderBy!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "balanceAggregate": [
                93,
                {
                    "distinctOn": [
                        112,
                        "[BalanceSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        110,
                        "[BalanceOrderBy!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "balanceByPk": [
                92,
                {
                    "symbol": [
                        236,
                        "String!"
                    ],
                    "wallet": [
                        236,
                        "String!"
                    ]
                }
            ],
            "balanceStream": [
                92,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        120,
                        "[BalanceStreamCursorInput]!"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "bid": [
                132,
                {
                    "distinctOn": [
                        144,
                        "[BidSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        143,
                        "[BidOrderBy!]"
                    ],
                    "where": [
                        136
                    ]
                }
            ],
            "bidByPk": [
                132,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "bidStream": [
                132,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        148,
                        "[BidStreamCursorInput]!"
                    ],
                    "where": [
                        136
                    ]
                }
            ],
            "calendar": [
                157,
                {
                    "distinctOn": [
                        165,
                        "[CalendarSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        164,
                        "[CalendarOrderBy!]"
                    ],
                    "where": [
                        158
                    ]
                }
            ],
            "calendarByPk": [
                157,
                {
                    "accountId": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "calendarStream": [
                157,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        166,
                        "[CalendarStreamCursorInput]!"
                    ],
                    "where": [
                        158
                    ]
                }
            ],
            "category": [
                169,
                {
                    "distinctOn": [
                        172,
                        "[CategorySelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        171,
                        "[CategoryOrderBy!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "categoryByPk": [
                169,
                {
                    "id": [
                        177,
                        "Int!"
                    ]
                }
            ],
            "categoryStream": [
                169,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        173,
                        "[CategoryStreamCursorInput]!"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "message": [
                181,
                {
                    "distinctOn": [
                        193,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        191,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageAggregate": [
                182,
                {
                    "distinctOn": [
                        193,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        191,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageByPk": [
                181,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "messageStream": [
                181,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        195,
                        "[MessageStreamCursorInput]!"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "notification": [
                199,
                {
                    "distinctOn": [
                        207,
                        "[NotificationSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        205,
                        "[NotificationOrderBy!]"
                    ],
                    "where": [
                        201
                    ]
                }
            ],
            "notificationByPk": [
                199,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "notificationStream": [
                199,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        209,
                        "[NotificationStreamCursorInput]!"
                    ],
                    "where": [
                        201
                    ]
                }
            ],
            "package": [
                213,
                {
                    "distinctOn": [
                        216,
                        "[PackageSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        215,
                        "[PackageOrderBy!]"
                    ],
                    "where": [
                        214
                    ]
                }
            ],
            "packageByPk": [
                213,
                {
                    "id": [
                        177,
                        "Int!"
                    ]
                }
            ],
            "packageStream": [
                213,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        217,
                        "[PackageStreamCursorInput]!"
                    ],
                    "where": [
                        214
                    ]
                }
            ],
            "payments": [
                219,
                {
                    "distinctOn": [
                        226,
                        "[PaymentsSelectColumn!]"
                    ],
                    "limit": [
                        177
                    ],
                    "offset": [
                        177
                    ],
                    "orderBy": [
                        225,
                        "[PaymentsOrderBy!]"
                    ],
                    "where": [
                        222
                    ]
                }
            ],
            "paymentsByPk": [
                219,
                {
                    "id": [
                        247,
                        "uuid!"
                    ]
                }
            ],
            "paymentsStream": [
                219,
                {
                    "batchSize": [
                        177,
                        "Int!"
                    ],
                    "cursor": [
                        230,
                        "[PaymentsStreamCursorInput]!"
                    ],
                    "where": [
                        222
                    ]
                }
            ],
            "__typename": [
                236
            ]
        }
    }
}