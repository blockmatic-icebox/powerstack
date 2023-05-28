export default {
    "scalars": [
        0,
        2,
        3,
        5,
        13,
        26,
        34,
        44,
        53,
        61,
        76,
        87,
        99,
        111,
        120,
        124,
        126,
        127,
        134,
        143,
        147,
        154,
        166,
        170,
        172,
        182,
        196,
        200,
        202,
        209,
        219,
        227,
        232,
        240,
        253,
        261
    ],
    "types": {
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_in": [
                3
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nin": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                5
            ],
            "_gt": [
                5
            ],
            "_gte": [
                5
            ],
            "_ilike": [
                5
            ],
            "_in": [
                5
            ],
            "_iregex": [
                5
            ],
            "_is_null": [
                0
            ],
            "_like": [
                5
            ],
            "_lt": [
                5
            ],
            "_lte": [
                5
            ],
            "_neq": [
                5
            ],
            "_nilike": [
                5
            ],
            "_nin": [
                5
            ],
            "_niregex": [
                5
            ],
            "_nlike": [
                5
            ],
            "_nregex": [
                5
            ],
            "_nsimilar": [
                5
            ],
            "_regex": [
                5
            ],
            "_similar": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions": {
            "account_disk_deltas": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "account_ram_deltas": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "action": [
                5
            ],
            "action_ordinal": [
                3
            ],
            "authorization": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "chain": [
                5
            ],
            "console": [
                5
            ],
            "context_free": [
                0
            ],
            "contract": [
                5
            ],
            "data": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "global_sequence": [
                5
            ],
            "receipt": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "receiver": [
                5
            ],
            "transaction": [
                204
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_aggregate": {
            "aggregate": [
                9
            ],
            "nodes": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "actions_aggregate_fields": {
            "avg": [
                11
            ],
            "count": [
                3,
                {
                    "columns": [
                        26,
                        "[actions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                19
            ],
            "min": [
                20
            ],
            "stddev": [
                28
            ],
            "stddev_pop": [
                29
            ],
            "stddev_samp": [
                30
            ],
            "sum": [
                33
            ],
            "var_pop": [
                36
            ],
            "var_samp": [
                37
            ],
            "variance": [
                38
            ],
            "__typename": [
                5
            ]
        },
        "actions_append_input": {
            "account_disk_deltas": [
                127
            ],
            "account_ram_deltas": [
                127
            ],
            "authorization": [
                127
            ],
            "data": [
                127
            ],
            "receipt": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "actions_avg_fields": {
            "action_ordinal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "actions_bool_exp": {
            "_and": [
                12
            ],
            "_not": [
                12
            ],
            "_or": [
                12
            ],
            "account_disk_deltas": [
                129
            ],
            "account_ram_deltas": [
                129
            ],
            "action": [
                6
            ],
            "action_ordinal": [
                4
            ],
            "authorization": [
                129
            ],
            "chain": [
                6
            ],
            "console": [
                6
            ],
            "context_free": [
                1
            ],
            "contract": [
                6
            ],
            "data": [
                129
            ],
            "global_sequence": [
                6
            ],
            "receipt": [
                129
            ],
            "receiver": [
                6
            ],
            "transaction": [
                208
            ],
            "transaction_id": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "actions_constraint": {},
        "actions_delete_at_path_input": {
            "account_disk_deltas": [
                5
            ],
            "account_ram_deltas": [
                5
            ],
            "authorization": [
                5
            ],
            "data": [
                5
            ],
            "receipt": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_delete_elem_input": {
            "account_disk_deltas": [
                3
            ],
            "account_ram_deltas": [
                3
            ],
            "authorization": [
                3
            ],
            "data": [
                3
            ],
            "receipt": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "actions_delete_key_input": {
            "account_disk_deltas": [
                5
            ],
            "account_ram_deltas": [
                5
            ],
            "authorization": [
                5
            ],
            "data": [
                5
            ],
            "receipt": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_inc_input": {
            "action_ordinal": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "actions_insert_input": {
            "account_disk_deltas": [
                127
            ],
            "account_ram_deltas": [
                127
            ],
            "action": [
                5
            ],
            "action_ordinal": [
                3
            ],
            "authorization": [
                127
            ],
            "chain": [
                5
            ],
            "console": [
                5
            ],
            "context_free": [
                0
            ],
            "contract": [
                5
            ],
            "data": [
                127
            ],
            "global_sequence": [
                5
            ],
            "receipt": [
                127
            ],
            "receiver": [
                5
            ],
            "transaction": [
                215
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_max_fields": {
            "action": [
                5
            ],
            "action_ordinal": [
                3
            ],
            "chain": [
                5
            ],
            "console": [
                5
            ],
            "contract": [
                5
            ],
            "global_sequence": [
                5
            ],
            "receiver": [
                5
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_min_fields": {
            "action": [
                5
            ],
            "action_ordinal": [
                3
            ],
            "chain": [
                5
            ],
            "console": [
                5
            ],
            "contract": [
                5
            ],
            "global_sequence": [
                5
            ],
            "receiver": [
                5
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "actions_on_conflict": {
            "constraint": [
                13
            ],
            "update_columns": [
                34
            ],
            "where": [
                12
            ],
            "__typename": [
                5
            ]
        },
        "actions_order_by": {
            "account_disk_deltas": [
                172
            ],
            "account_ram_deltas": [
                172
            ],
            "action": [
                172
            ],
            "action_ordinal": [
                172
            ],
            "authorization": [
                172
            ],
            "chain": [
                172
            ],
            "console": [
                172
            ],
            "context_free": [
                172
            ],
            "contract": [
                172
            ],
            "data": [
                172
            ],
            "global_sequence": [
                172
            ],
            "receipt": [
                172
            ],
            "receiver": [
                172
            ],
            "transaction": [
                217
            ],
            "transaction_id": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "actions_pk_columns_input": {
            "chain": [
                5
            ],
            "global_sequence": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_prepend_input": {
            "account_disk_deltas": [
                127
            ],
            "account_ram_deltas": [
                127
            ],
            "authorization": [
                127
            ],
            "data": [
                127
            ],
            "receipt": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "actions_select_column": {},
        "actions_set_input": {
            "account_disk_deltas": [
                127
            ],
            "account_ram_deltas": [
                127
            ],
            "action": [
                5
            ],
            "action_ordinal": [
                3
            ],
            "authorization": [
                127
            ],
            "chain": [
                5
            ],
            "console": [
                5
            ],
            "context_free": [
                0
            ],
            "contract": [
                5
            ],
            "data": [
                127
            ],
            "global_sequence": [
                5
            ],
            "receipt": [
                127
            ],
            "receiver": [
                5
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_stddev_fields": {
            "action_ordinal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "actions_stddev_pop_fields": {
            "action_ordinal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "actions_stddev_samp_fields": {
            "action_ordinal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "actions_stream_cursor_input": {
            "initial_value": [
                32
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "actions_stream_cursor_value_input": {
            "account_disk_deltas": [
                127
            ],
            "account_ram_deltas": [
                127
            ],
            "action": [
                5
            ],
            "action_ordinal": [
                3
            ],
            "authorization": [
                127
            ],
            "chain": [
                5
            ],
            "console": [
                5
            ],
            "context_free": [
                0
            ],
            "contract": [
                5
            ],
            "data": [
                127
            ],
            "global_sequence": [
                5
            ],
            "receipt": [
                127
            ],
            "receiver": [
                5
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "actions_sum_fields": {
            "action_ordinal": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "actions_update_column": {},
        "actions_updates": {
            "_append": [
                10
            ],
            "_delete_at_path": [
                14
            ],
            "_delete_elem": [
                15
            ],
            "_delete_key": [
                16
            ],
            "_inc": [
                17
            ],
            "_prepend": [
                25
            ],
            "_set": [
                27
            ],
            "where": [
                12
            ],
            "__typename": [
                5
            ]
        },
        "actions_var_pop_fields": {
            "action_ordinal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "actions_var_samp_fields": {
            "action_ordinal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "actions_variance_fields": {
            "action_ordinal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "api_users": {
            "account": [
                5
            ],
            "api_key": [
                5
            ],
            "created_at": [
                202
            ],
            "domain_names": [
                5
            ],
            "id": [
                3
            ],
            "updated_at": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "api_users_aggregate": {
            "aggregate": [
                41
            ],
            "nodes": [
                39
            ],
            "__typename": [
                5
            ]
        },
        "api_users_aggregate_fields": {
            "avg": [
                42
            ],
            "count": [
                3,
                {
                    "columns": [
                        53,
                        "[api_users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                47
            ],
            "min": [
                48
            ],
            "stddev": [
                55
            ],
            "stddev_pop": [
                56
            ],
            "stddev_samp": [
                57
            ],
            "sum": [
                60
            ],
            "var_pop": [
                63
            ],
            "var_samp": [
                64
            ],
            "variance": [
                65
            ],
            "__typename": [
                5
            ]
        },
        "api_users_avg_fields": {
            "id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "api_users_bool_exp": {
            "_and": [
                43
            ],
            "_not": [
                43
            ],
            "_or": [
                43
            ],
            "account": [
                6
            ],
            "api_key": [
                6
            ],
            "created_at": [
                203
            ],
            "domain_names": [
                6
            ],
            "id": [
                4
            ],
            "updated_at": [
                203
            ],
            "__typename": [
                5
            ]
        },
        "api_users_constraint": {},
        "api_users_inc_input": {
            "id": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "api_users_insert_input": {
            "account": [
                5
            ],
            "api_key": [
                5
            ],
            "created_at": [
                202
            ],
            "domain_names": [
                5
            ],
            "id": [
                3
            ],
            "updated_at": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "api_users_max_fields": {
            "account": [
                5
            ],
            "api_key": [
                5
            ],
            "created_at": [
                202
            ],
            "domain_names": [
                5
            ],
            "id": [
                3
            ],
            "updated_at": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "api_users_min_fields": {
            "account": [
                5
            ],
            "api_key": [
                5
            ],
            "created_at": [
                202
            ],
            "domain_names": [
                5
            ],
            "id": [
                3
            ],
            "updated_at": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "api_users_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                39
            ],
            "__typename": [
                5
            ]
        },
        "api_users_on_conflict": {
            "constraint": [
                44
            ],
            "update_columns": [
                61
            ],
            "where": [
                43
            ],
            "__typename": [
                5
            ]
        },
        "api_users_order_by": {
            "account": [
                172
            ],
            "api_key": [
                172
            ],
            "created_at": [
                172
            ],
            "domain_names": [
                172
            ],
            "id": [
                172
            ],
            "updated_at": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "api_users_pk_columns_input": {
            "id": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "api_users_select_column": {},
        "api_users_set_input": {
            "account": [
                5
            ],
            "api_key": [
                5
            ],
            "created_at": [
                202
            ],
            "domain_names": [
                5
            ],
            "id": [
                3
            ],
            "updated_at": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "api_users_stddev_fields": {
            "id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "api_users_stddev_pop_fields": {
            "id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "api_users_stddev_samp_fields": {
            "id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "api_users_stream_cursor_input": {
            "initial_value": [
                59
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "api_users_stream_cursor_value_input": {
            "account": [
                5
            ],
            "api_key": [
                5
            ],
            "created_at": [
                202
            ],
            "domain_names": [
                5
            ],
            "id": [
                3
            ],
            "updated_at": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "api_users_sum_fields": {
            "id": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "api_users_update_column": {},
        "api_users_updates": {
            "_inc": [
                45
            ],
            "_set": [
                54
            ],
            "where": [
                43
            ],
            "__typename": [
                5
            ]
        },
        "api_users_var_pop_fields": {
            "id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "api_users_var_samp_fields": {
            "id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "api_users_variance_fields": {
            "id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "blocks": {
            "block_id": [
                5
            ],
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "chian": [
                107
            ],
            "producer": [
                5
            ],
            "timestamp": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "blocks_aggregate": {
            "aggregate": [
                70
            ],
            "nodes": [
                66
            ],
            "__typename": [
                5
            ]
        },
        "blocks_aggregate_bool_exp": {
            "count": [
                69
            ],
            "__typename": [
                5
            ]
        },
        "blocks_aggregate_bool_exp_count": {
            "arguments": [
                87
            ],
            "distinct": [
                0
            ],
            "filter": [
                75
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "blocks_aggregate_fields": {
            "avg": [
                73
            ],
            "count": [
                3,
                {
                    "columns": [
                        87,
                        "[blocks_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                79
            ],
            "min": [
                81
            ],
            "stddev": [
                89
            ],
            "stddev_pop": [
                91
            ],
            "stddev_samp": [
                93
            ],
            "sum": [
                97
            ],
            "var_pop": [
                101
            ],
            "var_samp": [
                103
            ],
            "variance": [
                105
            ],
            "__typename": [
                5
            ]
        },
        "blocks_aggregate_order_by": {
            "avg": [
                74
            ],
            "count": [
                172
            ],
            "max": [
                80
            ],
            "min": [
                82
            ],
            "stddev": [
                90
            ],
            "stddev_pop": [
                92
            ],
            "stddev_samp": [
                94
            ],
            "sum": [
                98
            ],
            "var_pop": [
                102
            ],
            "var_samp": [
                104
            ],
            "variance": [
                106
            ],
            "__typename": [
                5
            ]
        },
        "blocks_arr_rel_insert_input": {
            "data": [
                78
            ],
            "on_conflict": [
                84
            ],
            "__typename": [
                5
            ]
        },
        "blocks_avg_fields": {
            "block_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "blocks_avg_order_by": {
            "block_num": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_bool_exp": {
            "_and": [
                75
            ],
            "_not": [
                75
            ],
            "_or": [
                75
            ],
            "block_id": [
                6
            ],
            "block_num": [
                4
            ],
            "chain": [
                6
            ],
            "chian": [
                110
            ],
            "producer": [
                6
            ],
            "timestamp": [
                203
            ],
            "__typename": [
                5
            ]
        },
        "blocks_constraint": {},
        "blocks_inc_input": {
            "block_num": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "blocks_insert_input": {
            "block_id": [
                5
            ],
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "chian": [
                116
            ],
            "producer": [
                5
            ],
            "timestamp": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "blocks_max_fields": {
            "block_id": [
                5
            ],
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "producer": [
                5
            ],
            "timestamp": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "blocks_max_order_by": {
            "block_id": [
                172
            ],
            "block_num": [
                172
            ],
            "chain": [
                172
            ],
            "producer": [
                172
            ],
            "timestamp": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_min_fields": {
            "block_id": [
                5
            ],
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "producer": [
                5
            ],
            "timestamp": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "blocks_min_order_by": {
            "block_id": [
                172
            ],
            "block_num": [
                172
            ],
            "chain": [
                172
            ],
            "producer": [
                172
            ],
            "timestamp": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                66
            ],
            "__typename": [
                5
            ]
        },
        "blocks_on_conflict": {
            "constraint": [
                76
            ],
            "update_columns": [
                99
            ],
            "where": [
                75
            ],
            "__typename": [
                5
            ]
        },
        "blocks_order_by": {
            "block_id": [
                172
            ],
            "block_num": [
                172
            ],
            "chain": [
                172
            ],
            "chian": [
                118
            ],
            "producer": [
                172
            ],
            "timestamp": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_pk_columns_input": {
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "blocks_select_column": {},
        "blocks_set_input": {
            "block_id": [
                5
            ],
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "producer": [
                5
            ],
            "timestamp": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "blocks_stddev_fields": {
            "block_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "blocks_stddev_order_by": {
            "block_num": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_stddev_pop_fields": {
            "block_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "blocks_stddev_pop_order_by": {
            "block_num": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_stddev_samp_fields": {
            "block_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "blocks_stddev_samp_order_by": {
            "block_num": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_stream_cursor_input": {
            "initial_value": [
                96
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "blocks_stream_cursor_value_input": {
            "block_id": [
                5
            ],
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "producer": [
                5
            ],
            "timestamp": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "blocks_sum_fields": {
            "block_num": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "blocks_sum_order_by": {
            "block_num": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_update_column": {},
        "blocks_updates": {
            "_inc": [
                77
            ],
            "_set": [
                88
            ],
            "where": [
                75
            ],
            "__typename": [
                5
            ]
        },
        "blocks_var_pop_fields": {
            "block_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "blocks_var_pop_order_by": {
            "block_num": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_var_samp_fields": {
            "block_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "blocks_var_samp_order_by": {
            "block_num": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "blocks_variance_fields": {
            "block_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "blocks_variance_order_by": {
            "block_num": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "chains": {
            "blocks": [
                66,
                {
                    "distinct_on": [
                        87,
                        "[blocks_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        85,
                        "[blocks_order_by!]"
                    ],
                    "where": [
                        75
                    ]
                }
            ],
            "blocks_aggregate": [
                67,
                {
                    "distinct_on": [
                        87,
                        "[blocks_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        85,
                        "[blocks_order_by!]"
                    ],
                    "where": [
                        75
                    ]
                }
            ],
            "chain_id": [
                5
            ],
            "chain_name": [
                5
            ],
            "rpc_endpoint": [
                5
            ],
            "table_rows": [
                173,
                {
                    "distinct_on": [
                        196,
                        "[table_rows_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        193,
                        "[table_rows_order_by!]"
                    ],
                    "where": [
                        181
                    ]
                }
            ],
            "table_rows_aggregate": [
                174,
                {
                    "distinct_on": [
                        196,
                        "[table_rows_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        193,
                        "[table_rows_order_by!]"
                    ],
                    "where": [
                        181
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "chains_aggregate": {
            "aggregate": [
                109
            ],
            "nodes": [
                107
            ],
            "__typename": [
                5
            ]
        },
        "chains_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        120,
                        "[chains_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                113
            ],
            "min": [
                114
            ],
            "__typename": [
                5
            ]
        },
        "chains_bool_exp": {
            "_and": [
                110
            ],
            "_not": [
                110
            ],
            "_or": [
                110
            ],
            "blocks": [
                75
            ],
            "blocks_aggregate": [
                68
            ],
            "chain_id": [
                6
            ],
            "chain_name": [
                6
            ],
            "rpc_endpoint": [
                6
            ],
            "table_rows": [
                181
            ],
            "table_rows_aggregate": [
                175
            ],
            "__typename": [
                5
            ]
        },
        "chains_constraint": {},
        "chains_insert_input": {
            "blocks": [
                72
            ],
            "chain_id": [
                5
            ],
            "chain_name": [
                5
            ],
            "rpc_endpoint": [
                5
            ],
            "table_rows": [
                180
            ],
            "__typename": [
                5
            ]
        },
        "chains_max_fields": {
            "chain_id": [
                5
            ],
            "chain_name": [
                5
            ],
            "rpc_endpoint": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "chains_min_fields": {
            "chain_id": [
                5
            ],
            "chain_name": [
                5
            ],
            "rpc_endpoint": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "chains_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                107
            ],
            "__typename": [
                5
            ]
        },
        "chains_obj_rel_insert_input": {
            "data": [
                112
            ],
            "on_conflict": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "chains_on_conflict": {
            "constraint": [
                111
            ],
            "update_columns": [
                124
            ],
            "where": [
                110
            ],
            "__typename": [
                5
            ]
        },
        "chains_order_by": {
            "blocks_aggregate": [
                71
            ],
            "chain_id": [
                172
            ],
            "chain_name": [
                172
            ],
            "rpc_endpoint": [
                172
            ],
            "table_rows_aggregate": [
                178
            ],
            "__typename": [
                5
            ]
        },
        "chains_pk_columns_input": {
            "chain_name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "chains_select_column": {},
        "chains_set_input": {
            "chain_id": [
                5
            ],
            "chain_name": [
                5
            ],
            "rpc_endpoint": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "chains_stream_cursor_input": {
            "initial_value": [
                123
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "chains_stream_cursor_value_input": {
            "chain_id": [
                5
            ],
            "chain_name": [
                5
            ],
            "rpc_endpoint": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "chains_update_column": {},
        "chains_updates": {
            "_set": [
                121
            ],
            "where": [
                110
            ],
            "__typename": [
                5
            ]
        },
        "cursor_ordering": {},
        "jsonb": {},
        "jsonb_cast_exp": {
            "String": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "jsonb_comparison_exp": {
            "_cast": [
                128
            ],
            "_contained_in": [
                127
            ],
            "_contains": [
                127
            ],
            "_eq": [
                127
            ],
            "_gt": [
                127
            ],
            "_gte": [
                127
            ],
            "_has_key": [
                5
            ],
            "_has_keys_all": [
                5
            ],
            "_has_keys_any": [
                5
            ],
            "_in": [
                127
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                127
            ],
            "_lte": [
                127
            ],
            "_neq": [
                127
            ],
            "_nin": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "manifests": {
            "app_id": [
                232
            ],
            "app_name": [
                5
            ],
            "description": [
                5
            ],
            "url": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "manifests_aggregate": {
            "aggregate": [
                132
            ],
            "nodes": [
                130
            ],
            "__typename": [
                5
            ]
        },
        "manifests_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        143,
                        "[manifests_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                136
            ],
            "min": [
                137
            ],
            "__typename": [
                5
            ]
        },
        "manifests_bool_exp": {
            "_and": [
                133
            ],
            "_not": [
                133
            ],
            "_or": [
                133
            ],
            "app_id": [
                233
            ],
            "app_name": [
                6
            ],
            "description": [
                6
            ],
            "url": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "manifests_constraint": {},
        "manifests_insert_input": {
            "app_id": [
                232
            ],
            "app_name": [
                5
            ],
            "description": [
                5
            ],
            "url": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "manifests_max_fields": {
            "app_id": [
                232
            ],
            "app_name": [
                5
            ],
            "description": [
                5
            ],
            "url": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "manifests_min_fields": {
            "app_id": [
                232
            ],
            "app_name": [
                5
            ],
            "description": [
                5
            ],
            "url": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "manifests_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                130
            ],
            "__typename": [
                5
            ]
        },
        "manifests_obj_rel_insert_input": {
            "data": [
                135
            ],
            "on_conflict": [
                140
            ],
            "__typename": [
                5
            ]
        },
        "manifests_on_conflict": {
            "constraint": [
                134
            ],
            "update_columns": [
                147
            ],
            "where": [
                133
            ],
            "__typename": [
                5
            ]
        },
        "manifests_order_by": {
            "app_id": [
                172
            ],
            "app_name": [
                172
            ],
            "description": [
                172
            ],
            "url": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "manifests_pk_columns_input": {
            "app_id": [
                232
            ],
            "__typename": [
                5
            ]
        },
        "manifests_select_column": {},
        "manifests_set_input": {
            "app_id": [
                232
            ],
            "app_name": [
                5
            ],
            "description": [
                5
            ],
            "url": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "manifests_stream_cursor_input": {
            "initial_value": [
                146
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "manifests_stream_cursor_value_input": {
            "app_id": [
                232
            ],
            "app_name": [
                5
            ],
            "description": [
                5
            ],
            "url": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "manifests_update_column": {},
        "manifests_updates": {
            "_set": [
                144
            ],
            "where": [
                133
            ],
            "__typename": [
                5
            ]
        },
        "mappings": {
            "abi": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "contract_type": [
                5
            ],
            "tables": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "mappings_aggregate": {
            "aggregate": [
                151
            ],
            "nodes": [
                149
            ],
            "__typename": [
                5
            ]
        },
        "mappings_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        166,
                        "[mappings_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                159
            ],
            "min": [
                160
            ],
            "__typename": [
                5
            ]
        },
        "mappings_append_input": {
            "abi": [
                127
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "mappings_bool_exp": {
            "_and": [
                153
            ],
            "_not": [
                153
            ],
            "_or": [
                153
            ],
            "abi": [
                129
            ],
            "chain": [
                6
            ],
            "contract": [
                6
            ],
            "contract_type": [
                6
            ],
            "tables": [
                129
            ],
            "__typename": [
                5
            ]
        },
        "mappings_constraint": {},
        "mappings_delete_at_path_input": {
            "abi": [
                5
            ],
            "tables": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "mappings_delete_elem_input": {
            "abi": [
                3
            ],
            "tables": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "mappings_delete_key_input": {
            "abi": [
                5
            ],
            "tables": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "mappings_insert_input": {
            "abi": [
                127
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "contract_type": [
                5
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "mappings_max_fields": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "contract_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "mappings_min_fields": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "contract_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "mappings_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                149
            ],
            "__typename": [
                5
            ]
        },
        "mappings_on_conflict": {
            "constraint": [
                154
            ],
            "update_columns": [
                170
            ],
            "where": [
                153
            ],
            "__typename": [
                5
            ]
        },
        "mappings_order_by": {
            "abi": [
                172
            ],
            "chain": [
                172
            ],
            "contract": [
                172
            ],
            "contract_type": [
                172
            ],
            "tables": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "mappings_pk_columns_input": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "mappings_prepend_input": {
            "abi": [
                127
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "mappings_select_column": {},
        "mappings_set_input": {
            "abi": [
                127
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "contract_type": [
                5
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "mappings_stream_cursor_input": {
            "initial_value": [
                169
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "mappings_stream_cursor_value_input": {
            "abi": [
                127
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "contract_type": [
                5
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "mappings_update_column": {},
        "mappings_updates": {
            "_append": [
                152
            ],
            "_delete_at_path": [
                155
            ],
            "_delete_elem": [
                156
            ],
            "_delete_key": [
                157
            ],
            "_prepend": [
                165
            ],
            "_set": [
                167
            ],
            "where": [
                153
            ],
            "__typename": [
                5
            ]
        },
        "order_by": {},
        "table_rows": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "data": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "primary_key": [
                5
            ],
            "scope": [
                5
            ],
            "table": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_aggregate": {
            "aggregate": [
                177
            ],
            "nodes": [
                173
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_aggregate_bool_exp": {
            "count": [
                176
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_aggregate_bool_exp_count": {
            "arguments": [
                196
            ],
            "distinct": [
                0
            ],
            "filter": [
                181
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        196,
                        "[table_rows_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                187
            ],
            "min": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_aggregate_order_by": {
            "count": [
                172
            ],
            "max": [
                188
            ],
            "min": [
                190
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_append_input": {
            "data": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_arr_rel_insert_input": {
            "data": [
                186
            ],
            "on_conflict": [
                192
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_bool_exp": {
            "_and": [
                181
            ],
            "_not": [
                181
            ],
            "_or": [
                181
            ],
            "chain": [
                6
            ],
            "contract": [
                6
            ],
            "data": [
                129
            ],
            "primary_key": [
                6
            ],
            "scope": [
                6
            ],
            "table": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_constraint": {},
        "table_rows_delete_at_path_input": {
            "data": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_delete_elem_input": {
            "data": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_delete_key_input": {
            "data": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_insert_input": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "data": [
                127
            ],
            "primary_key": [
                5
            ],
            "scope": [
                5
            ],
            "table": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_max_fields": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "primary_key": [
                5
            ],
            "scope": [
                5
            ],
            "table": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_max_order_by": {
            "chain": [
                172
            ],
            "contract": [
                172
            ],
            "primary_key": [
                172
            ],
            "scope": [
                172
            ],
            "table": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_min_fields": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "primary_key": [
                5
            ],
            "scope": [
                5
            ],
            "table": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_min_order_by": {
            "chain": [
                172
            ],
            "contract": [
                172
            ],
            "primary_key": [
                172
            ],
            "scope": [
                172
            ],
            "table": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                173
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_on_conflict": {
            "constraint": [
                182
            ],
            "update_columns": [
                200
            ],
            "where": [
                181
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_order_by": {
            "chain": [
                172
            ],
            "contract": [
                172
            ],
            "data": [
                172
            ],
            "primary_key": [
                172
            ],
            "scope": [
                172
            ],
            "table": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_pk_columns_input": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "primary_key": [
                5
            ],
            "scope": [
                5
            ],
            "table": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_prepend_input": {
            "data": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_select_column": {},
        "table_rows_set_input": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "data": [
                127
            ],
            "primary_key": [
                5
            ],
            "scope": [
                5
            ],
            "table": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_stream_cursor_input": {
            "initial_value": [
                199
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_stream_cursor_value_input": {
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "data": [
                127
            ],
            "primary_key": [
                5
            ],
            "scope": [
                5
            ],
            "table": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "table_rows_update_column": {},
        "table_rows_updates": {
            "_append": [
                179
            ],
            "_delete_at_path": [
                183
            ],
            "_delete_elem": [
                184
            ],
            "_delete_key": [
                185
            ],
            "_prepend": [
                195
            ],
            "_set": [
                197
            ],
            "where": [
                181
            ],
            "__typename": [
                5
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                202
            ],
            "_gt": [
                202
            ],
            "_gte": [
                202
            ],
            "_in": [
                202
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                202
            ],
            "_lte": [
                202
            ],
            "_neq": [
                202
            ],
            "_nin": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "transactions": {
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "cpu_usage_us": [
                3
            ],
            "net_usage": [
                3
            ],
            "net_usage_words": [
                3
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate": {
            "aggregate": [
                206
            ],
            "nodes": [
                204
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                207
            ],
            "count": [
                3,
                {
                    "columns": [
                        219,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                212
            ],
            "min": [
                213
            ],
            "stddev": [
                221
            ],
            "stddev_pop": [
                222
            ],
            "stddev_samp": [
                223
            ],
            "sum": [
                226
            ],
            "var_pop": [
                229
            ],
            "var_samp": [
                230
            ],
            "variance": [
                231
            ],
            "__typename": [
                5
            ]
        },
        "transactions_avg_fields": {
            "block_num": [
                2
            ],
            "cpu_usage_us": [
                2
            ],
            "net_usage": [
                2
            ],
            "net_usage_words": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_bool_exp": {
            "_and": [
                208
            ],
            "_not": [
                208
            ],
            "_or": [
                208
            ],
            "block_num": [
                4
            ],
            "chain": [
                6
            ],
            "cpu_usage_us": [
                4
            ],
            "net_usage": [
                4
            ],
            "net_usage_words": [
                4
            ],
            "transaction_id": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "transactions_constraint": {},
        "transactions_inc_input": {
            "block_num": [
                3
            ],
            "cpu_usage_us": [
                3
            ],
            "net_usage": [
                3
            ],
            "net_usage_words": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "transactions_insert_input": {
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "cpu_usage_us": [
                3
            ],
            "net_usage": [
                3
            ],
            "net_usage_words": [
                3
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_max_fields": {
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "cpu_usage_us": [
                3
            ],
            "net_usage": [
                3
            ],
            "net_usage_words": [
                3
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_min_fields": {
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "cpu_usage_us": [
                3
            ],
            "net_usage": [
                3
            ],
            "net_usage_words": [
                3
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                204
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                211
            ],
            "on_conflict": [
                216
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                209
            ],
            "update_columns": [
                227
            ],
            "where": [
                208
            ],
            "__typename": [
                5
            ]
        },
        "transactions_order_by": {
            "block_num": [
                172
            ],
            "chain": [
                172
            ],
            "cpu_usage_us": [
                172
            ],
            "net_usage": [
                172
            ],
            "net_usage_words": [
                172
            ],
            "transaction_id": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "transactions_pk_columns_input": {
            "chain": [
                5
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_select_column": {},
        "transactions_set_input": {
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "cpu_usage_us": [
                3
            ],
            "net_usage": [
                3
            ],
            "net_usage_words": [
                3
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_fields": {
            "block_num": [
                2
            ],
            "cpu_usage_us": [
                2
            ],
            "net_usage": [
                2
            ],
            "net_usage_words": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_pop_fields": {
            "block_num": [
                2
            ],
            "cpu_usage_us": [
                2
            ],
            "net_usage": [
                2
            ],
            "net_usage_words": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_samp_fields": {
            "block_num": [
                2
            ],
            "cpu_usage_us": [
                2
            ],
            "net_usage": [
                2
            ],
            "net_usage_words": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stream_cursor_input": {
            "initial_value": [
                225
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stream_cursor_value_input": {
            "block_num": [
                3
            ],
            "chain": [
                5
            ],
            "cpu_usage_us": [
                3
            ],
            "net_usage": [
                3
            ],
            "net_usage_words": [
                3
            ],
            "transaction_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_sum_fields": {
            "block_num": [
                3
            ],
            "cpu_usage_us": [
                3
            ],
            "net_usage": [
                3
            ],
            "net_usage_words": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "transactions_update_column": {},
        "transactions_updates": {
            "_inc": [
                210
            ],
            "_set": [
                220
            ],
            "where": [
                208
            ],
            "__typename": [
                5
            ]
        },
        "transactions_var_pop_fields": {
            "block_num": [
                2
            ],
            "cpu_usage_us": [
                2
            ],
            "net_usage": [
                2
            ],
            "net_usage_words": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_var_samp_fields": {
            "block_num": [
                2
            ],
            "cpu_usage_us": [
                2
            ],
            "net_usage": [
                2
            ],
            "net_usage_words": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_variance_fields": {
            "block_num": [
                2
            ],
            "cpu_usage_us": [
                2
            ],
            "net_usage": [
                2
            ],
            "net_usage_words": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                232
            ],
            "_gt": [
                232
            ],
            "_gte": [
                232
            ],
            "_in": [
                232
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                232
            ],
            "_lte": [
                232
            ],
            "_neq": [
                232
            ],
            "_nin": [
                232
            ],
            "__typename": [
                5
            ]
        },
        "whitelists": {
            "actions": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "app_id": [
                232
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "history_ready": [
                0
            ],
            "manifest": [
                130
            ],
            "start_block": [
                3
            ],
            "tables": [
                127,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_aggregate": {
            "aggregate": [
                236
            ],
            "nodes": [
                234
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_aggregate_fields": {
            "avg": [
                238
            ],
            "count": [
                3,
                {
                    "columns": [
                        253,
                        "[whitelists_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                246
            ],
            "min": [
                247
            ],
            "stddev": [
                255
            ],
            "stddev_pop": [
                256
            ],
            "stddev_samp": [
                257
            ],
            "sum": [
                260
            ],
            "var_pop": [
                263
            ],
            "var_samp": [
                264
            ],
            "variance": [
                265
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_append_input": {
            "actions": [
                127
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_avg_fields": {
            "start_block": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_bool_exp": {
            "_and": [
                239
            ],
            "_not": [
                239
            ],
            "_or": [
                239
            ],
            "actions": [
                129
            ],
            "app_id": [
                233
            ],
            "chain": [
                6
            ],
            "contract": [
                6
            ],
            "history_ready": [
                1
            ],
            "manifest": [
                133
            ],
            "start_block": [
                4
            ],
            "tables": [
                129
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_constraint": {},
        "whitelists_delete_at_path_input": {
            "actions": [
                5
            ],
            "tables": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_delete_elem_input": {
            "actions": [
                3
            ],
            "tables": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_delete_key_input": {
            "actions": [
                5
            ],
            "tables": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_inc_input": {
            "start_block": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_insert_input": {
            "actions": [
                127
            ],
            "app_id": [
                232
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "history_ready": [
                0
            ],
            "manifest": [
                139
            ],
            "start_block": [
                3
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_max_fields": {
            "app_id": [
                232
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "start_block": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_min_fields": {
            "app_id": [
                232
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "start_block": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                234
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_on_conflict": {
            "constraint": [
                240
            ],
            "update_columns": [
                261
            ],
            "where": [
                239
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_order_by": {
            "actions": [
                172
            ],
            "app_id": [
                172
            ],
            "chain": [
                172
            ],
            "contract": [
                172
            ],
            "history_ready": [
                172
            ],
            "manifest": [
                141
            ],
            "start_block": [
                172
            ],
            "tables": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_pk_columns_input": {
            "app_id": [
                232
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_prepend_input": {
            "actions": [
                127
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_select_column": {},
        "whitelists_set_input": {
            "actions": [
                127
            ],
            "app_id": [
                232
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "history_ready": [
                0
            ],
            "start_block": [
                3
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_stddev_fields": {
            "start_block": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_stddev_pop_fields": {
            "start_block": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_stddev_samp_fields": {
            "start_block": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_stream_cursor_input": {
            "initial_value": [
                259
            ],
            "ordering": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_stream_cursor_value_input": {
            "actions": [
                127
            ],
            "app_id": [
                232
            ],
            "chain": [
                5
            ],
            "contract": [
                5
            ],
            "history_ready": [
                0
            ],
            "start_block": [
                3
            ],
            "tables": [
                127
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_sum_fields": {
            "start_block": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_update_column": {},
        "whitelists_updates": {
            "_append": [
                237
            ],
            "_delete_at_path": [
                241
            ],
            "_delete_elem": [
                242
            ],
            "_delete_key": [
                243
            ],
            "_inc": [
                244
            ],
            "_prepend": [
                252
            ],
            "_set": [
                254
            ],
            "where": [
                239
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_var_pop_fields": {
            "start_block": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_var_samp_fields": {
            "start_block": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "whitelists_variance_fields": {
            "start_block": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "Query": {
            "actions": [
                7,
                {
                    "distinct_on": [
                        26,
                        "[actions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        23,
                        "[actions_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "actions_aggregate": [
                8,
                {
                    "distinct_on": [
                        26,
                        "[actions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        23,
                        "[actions_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "actions_by_pk": [
                7,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "global_sequence": [
                        5,
                        "String!"
                    ]
                }
            ],
            "api_users": [
                39,
                {
                    "distinct_on": [
                        53,
                        "[api_users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        51,
                        "[api_users_order_by!]"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "api_users_aggregate": [
                40,
                {
                    "distinct_on": [
                        53,
                        "[api_users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        51,
                        "[api_users_order_by!]"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "api_users_by_pk": [
                39,
                {
                    "id": [
                        3,
                        "Int!"
                    ]
                }
            ],
            "blocks": [
                66,
                {
                    "distinct_on": [
                        87,
                        "[blocks_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        85,
                        "[blocks_order_by!]"
                    ],
                    "where": [
                        75
                    ]
                }
            ],
            "blocks_aggregate": [
                67,
                {
                    "distinct_on": [
                        87,
                        "[blocks_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        85,
                        "[blocks_order_by!]"
                    ],
                    "where": [
                        75
                    ]
                }
            ],
            "blocks_by_pk": [
                66,
                {
                    "block_num": [
                        3,
                        "Int!"
                    ],
                    "chain": [
                        5,
                        "String!"
                    ]
                }
            ],
            "chains": [
                107,
                {
                    "distinct_on": [
                        120,
                        "[chains_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        118,
                        "[chains_order_by!]"
                    ],
                    "where": [
                        110
                    ]
                }
            ],
            "chains_aggregate": [
                108,
                {
                    "distinct_on": [
                        120,
                        "[chains_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        118,
                        "[chains_order_by!]"
                    ],
                    "where": [
                        110
                    ]
                }
            ],
            "chains_by_pk": [
                107,
                {
                    "chain_name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "manifests": [
                130,
                {
                    "distinct_on": [
                        143,
                        "[manifests_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[manifests_order_by!]"
                    ],
                    "where": [
                        133
                    ]
                }
            ],
            "manifests_aggregate": [
                131,
                {
                    "distinct_on": [
                        143,
                        "[manifests_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[manifests_order_by!]"
                    ],
                    "where": [
                        133
                    ]
                }
            ],
            "manifests_by_pk": [
                130,
                {
                    "app_id": [
                        232,
                        "uuid!"
                    ]
                }
            ],
            "mappings": [
                149,
                {
                    "distinct_on": [
                        166,
                        "[mappings_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        163,
                        "[mappings_order_by!]"
                    ],
                    "where": [
                        153
                    ]
                }
            ],
            "mappings_aggregate": [
                150,
                {
                    "distinct_on": [
                        166,
                        "[mappings_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        163,
                        "[mappings_order_by!]"
                    ],
                    "where": [
                        153
                    ]
                }
            ],
            "mappings_by_pk": [
                149,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ]
                }
            ],
            "table_rows": [
                173,
                {
                    "distinct_on": [
                        196,
                        "[table_rows_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        193,
                        "[table_rows_order_by!]"
                    ],
                    "where": [
                        181
                    ]
                }
            ],
            "table_rows_aggregate": [
                174,
                {
                    "distinct_on": [
                        196,
                        "[table_rows_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        193,
                        "[table_rows_order_by!]"
                    ],
                    "where": [
                        181
                    ]
                }
            ],
            "table_rows_by_pk": [
                173,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ],
                    "primary_key": [
                        5,
                        "String!"
                    ],
                    "scope": [
                        5,
                        "String!"
                    ],
                    "table": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                204,
                {
                    "distinct_on": [
                        219,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        217,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "transactions_aggregate": [
                205,
                {
                    "distinct_on": [
                        219,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        217,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "transactions_by_pk": [
                204,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "transaction_id": [
                        5,
                        "String!"
                    ]
                }
            ],
            "whitelists": [
                234,
                {
                    "distinct_on": [
                        253,
                        "[whitelists_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        250,
                        "[whitelists_order_by!]"
                    ],
                    "where": [
                        239
                    ]
                }
            ],
            "whitelists_aggregate": [
                235,
                {
                    "distinct_on": [
                        253,
                        "[whitelists_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        250,
                        "[whitelists_order_by!]"
                    ],
                    "where": [
                        239
                    ]
                }
            ],
            "whitelists_by_pk": [
                234,
                {
                    "app_id": [
                        232,
                        "uuid!"
                    ],
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "delete_actions": [
                21,
                {
                    "where": [
                        12,
                        "actions_bool_exp!"
                    ]
                }
            ],
            "delete_actions_by_pk": [
                7,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "global_sequence": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_api_users": [
                49,
                {
                    "where": [
                        43,
                        "api_users_bool_exp!"
                    ]
                }
            ],
            "delete_api_users_by_pk": [
                39,
                {
                    "id": [
                        3,
                        "Int!"
                    ]
                }
            ],
            "delete_blocks": [
                83,
                {
                    "where": [
                        75,
                        "blocks_bool_exp!"
                    ]
                }
            ],
            "delete_blocks_by_pk": [
                66,
                {
                    "block_num": [
                        3,
                        "Int!"
                    ],
                    "chain": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_chains": [
                115,
                {
                    "where": [
                        110,
                        "chains_bool_exp!"
                    ]
                }
            ],
            "delete_chains_by_pk": [
                107,
                {
                    "chain_name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_manifests": [
                138,
                {
                    "where": [
                        133,
                        "manifests_bool_exp!"
                    ]
                }
            ],
            "delete_manifests_by_pk": [
                130,
                {
                    "app_id": [
                        232,
                        "uuid!"
                    ]
                }
            ],
            "delete_mappings": [
                161,
                {
                    "where": [
                        153,
                        "mappings_bool_exp!"
                    ]
                }
            ],
            "delete_mappings_by_pk": [
                149,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_table_rows": [
                191,
                {
                    "where": [
                        181,
                        "table_rows_bool_exp!"
                    ]
                }
            ],
            "delete_table_rows_by_pk": [
                173,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ],
                    "primary_key": [
                        5,
                        "String!"
                    ],
                    "scope": [
                        5,
                        "String!"
                    ],
                    "table": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                214,
                {
                    "where": [
                        208,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                204,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "transaction_id": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_whitelists": [
                248,
                {
                    "where": [
                        239,
                        "whitelists_bool_exp!"
                    ]
                }
            ],
            "delete_whitelists_by_pk": [
                234,
                {
                    "app_id": [
                        232,
                        "uuid!"
                    ],
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ]
                }
            ],
            "insert_actions": [
                21,
                {
                    "objects": [
                        18,
                        "[actions_insert_input!]!"
                    ],
                    "on_conflict": [
                        22
                    ]
                }
            ],
            "insert_actions_one": [
                7,
                {
                    "object": [
                        18,
                        "actions_insert_input!"
                    ],
                    "on_conflict": [
                        22
                    ]
                }
            ],
            "insert_api_users": [
                49,
                {
                    "objects": [
                        46,
                        "[api_users_insert_input!]!"
                    ],
                    "on_conflict": [
                        50
                    ]
                }
            ],
            "insert_api_users_one": [
                39,
                {
                    "object": [
                        46,
                        "api_users_insert_input!"
                    ],
                    "on_conflict": [
                        50
                    ]
                }
            ],
            "insert_blocks": [
                83,
                {
                    "objects": [
                        78,
                        "[blocks_insert_input!]!"
                    ],
                    "on_conflict": [
                        84
                    ]
                }
            ],
            "insert_blocks_one": [
                66,
                {
                    "object": [
                        78,
                        "blocks_insert_input!"
                    ],
                    "on_conflict": [
                        84
                    ]
                }
            ],
            "insert_chains": [
                115,
                {
                    "objects": [
                        112,
                        "[chains_insert_input!]!"
                    ],
                    "on_conflict": [
                        117
                    ]
                }
            ],
            "insert_chains_one": [
                107,
                {
                    "object": [
                        112,
                        "chains_insert_input!"
                    ],
                    "on_conflict": [
                        117
                    ]
                }
            ],
            "insert_manifests": [
                138,
                {
                    "objects": [
                        135,
                        "[manifests_insert_input!]!"
                    ],
                    "on_conflict": [
                        140
                    ]
                }
            ],
            "insert_manifests_one": [
                130,
                {
                    "object": [
                        135,
                        "manifests_insert_input!"
                    ],
                    "on_conflict": [
                        140
                    ]
                }
            ],
            "insert_mappings": [
                161,
                {
                    "objects": [
                        158,
                        "[mappings_insert_input!]!"
                    ],
                    "on_conflict": [
                        162
                    ]
                }
            ],
            "insert_mappings_one": [
                149,
                {
                    "object": [
                        158,
                        "mappings_insert_input!"
                    ],
                    "on_conflict": [
                        162
                    ]
                }
            ],
            "insert_table_rows": [
                191,
                {
                    "objects": [
                        186,
                        "[table_rows_insert_input!]!"
                    ],
                    "on_conflict": [
                        192
                    ]
                }
            ],
            "insert_table_rows_one": [
                173,
                {
                    "object": [
                        186,
                        "table_rows_insert_input!"
                    ],
                    "on_conflict": [
                        192
                    ]
                }
            ],
            "insert_transactions": [
                214,
                {
                    "objects": [
                        211,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        216
                    ]
                }
            ],
            "insert_transactions_one": [
                204,
                {
                    "object": [
                        211,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        216
                    ]
                }
            ],
            "insert_whitelists": [
                248,
                {
                    "objects": [
                        245,
                        "[whitelists_insert_input!]!"
                    ],
                    "on_conflict": [
                        249
                    ]
                }
            ],
            "insert_whitelists_one": [
                234,
                {
                    "object": [
                        245,
                        "whitelists_insert_input!"
                    ],
                    "on_conflict": [
                        249
                    ]
                }
            ],
            "update_actions": [
                21,
                {
                    "_append": [
                        10
                    ],
                    "_delete_at_path": [
                        14
                    ],
                    "_delete_elem": [
                        15
                    ],
                    "_delete_key": [
                        16
                    ],
                    "_inc": [
                        17
                    ],
                    "_prepend": [
                        25
                    ],
                    "_set": [
                        27
                    ],
                    "where": [
                        12,
                        "actions_bool_exp!"
                    ]
                }
            ],
            "update_actions_by_pk": [
                7,
                {
                    "_append": [
                        10
                    ],
                    "_delete_at_path": [
                        14
                    ],
                    "_delete_elem": [
                        15
                    ],
                    "_delete_key": [
                        16
                    ],
                    "_inc": [
                        17
                    ],
                    "_prepend": [
                        25
                    ],
                    "_set": [
                        27
                    ],
                    "pk_columns": [
                        24,
                        "actions_pk_columns_input!"
                    ]
                }
            ],
            "update_actions_many": [
                21,
                {
                    "updates": [
                        35,
                        "[actions_updates!]!"
                    ]
                }
            ],
            "update_api_users": [
                49,
                {
                    "_inc": [
                        45
                    ],
                    "_set": [
                        54
                    ],
                    "where": [
                        43,
                        "api_users_bool_exp!"
                    ]
                }
            ],
            "update_api_users_by_pk": [
                39,
                {
                    "_inc": [
                        45
                    ],
                    "_set": [
                        54
                    ],
                    "pk_columns": [
                        52,
                        "api_users_pk_columns_input!"
                    ]
                }
            ],
            "update_api_users_many": [
                49,
                {
                    "updates": [
                        62,
                        "[api_users_updates!]!"
                    ]
                }
            ],
            "update_blocks": [
                83,
                {
                    "_inc": [
                        77
                    ],
                    "_set": [
                        88
                    ],
                    "where": [
                        75,
                        "blocks_bool_exp!"
                    ]
                }
            ],
            "update_blocks_by_pk": [
                66,
                {
                    "_inc": [
                        77
                    ],
                    "_set": [
                        88
                    ],
                    "pk_columns": [
                        86,
                        "blocks_pk_columns_input!"
                    ]
                }
            ],
            "update_blocks_many": [
                83,
                {
                    "updates": [
                        100,
                        "[blocks_updates!]!"
                    ]
                }
            ],
            "update_chains": [
                115,
                {
                    "_set": [
                        121
                    ],
                    "where": [
                        110,
                        "chains_bool_exp!"
                    ]
                }
            ],
            "update_chains_by_pk": [
                107,
                {
                    "_set": [
                        121
                    ],
                    "pk_columns": [
                        119,
                        "chains_pk_columns_input!"
                    ]
                }
            ],
            "update_chains_many": [
                115,
                {
                    "updates": [
                        125,
                        "[chains_updates!]!"
                    ]
                }
            ],
            "update_manifests": [
                138,
                {
                    "_set": [
                        144
                    ],
                    "where": [
                        133,
                        "manifests_bool_exp!"
                    ]
                }
            ],
            "update_manifests_by_pk": [
                130,
                {
                    "_set": [
                        144
                    ],
                    "pk_columns": [
                        142,
                        "manifests_pk_columns_input!"
                    ]
                }
            ],
            "update_manifests_many": [
                138,
                {
                    "updates": [
                        148,
                        "[manifests_updates!]!"
                    ]
                }
            ],
            "update_mappings": [
                161,
                {
                    "_append": [
                        152
                    ],
                    "_delete_at_path": [
                        155
                    ],
                    "_delete_elem": [
                        156
                    ],
                    "_delete_key": [
                        157
                    ],
                    "_prepend": [
                        165
                    ],
                    "_set": [
                        167
                    ],
                    "where": [
                        153,
                        "mappings_bool_exp!"
                    ]
                }
            ],
            "update_mappings_by_pk": [
                149,
                {
                    "_append": [
                        152
                    ],
                    "_delete_at_path": [
                        155
                    ],
                    "_delete_elem": [
                        156
                    ],
                    "_delete_key": [
                        157
                    ],
                    "_prepend": [
                        165
                    ],
                    "_set": [
                        167
                    ],
                    "pk_columns": [
                        164,
                        "mappings_pk_columns_input!"
                    ]
                }
            ],
            "update_mappings_many": [
                161,
                {
                    "updates": [
                        171,
                        "[mappings_updates!]!"
                    ]
                }
            ],
            "update_table_rows": [
                191,
                {
                    "_append": [
                        179
                    ],
                    "_delete_at_path": [
                        183
                    ],
                    "_delete_elem": [
                        184
                    ],
                    "_delete_key": [
                        185
                    ],
                    "_prepend": [
                        195
                    ],
                    "_set": [
                        197
                    ],
                    "where": [
                        181,
                        "table_rows_bool_exp!"
                    ]
                }
            ],
            "update_table_rows_by_pk": [
                173,
                {
                    "_append": [
                        179
                    ],
                    "_delete_at_path": [
                        183
                    ],
                    "_delete_elem": [
                        184
                    ],
                    "_delete_key": [
                        185
                    ],
                    "_prepend": [
                        195
                    ],
                    "_set": [
                        197
                    ],
                    "pk_columns": [
                        194,
                        "table_rows_pk_columns_input!"
                    ]
                }
            ],
            "update_table_rows_many": [
                191,
                {
                    "updates": [
                        201,
                        "[table_rows_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                214,
                {
                    "_inc": [
                        210
                    ],
                    "_set": [
                        220
                    ],
                    "where": [
                        208,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                204,
                {
                    "_inc": [
                        210
                    ],
                    "_set": [
                        220
                    ],
                    "pk_columns": [
                        218,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                214,
                {
                    "updates": [
                        228,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_whitelists": [
                248,
                {
                    "_append": [
                        237
                    ],
                    "_delete_at_path": [
                        241
                    ],
                    "_delete_elem": [
                        242
                    ],
                    "_delete_key": [
                        243
                    ],
                    "_inc": [
                        244
                    ],
                    "_prepend": [
                        252
                    ],
                    "_set": [
                        254
                    ],
                    "where": [
                        239,
                        "whitelists_bool_exp!"
                    ]
                }
            ],
            "update_whitelists_by_pk": [
                234,
                {
                    "_append": [
                        237
                    ],
                    "_delete_at_path": [
                        241
                    ],
                    "_delete_elem": [
                        242
                    ],
                    "_delete_key": [
                        243
                    ],
                    "_inc": [
                        244
                    ],
                    "_prepend": [
                        252
                    ],
                    "_set": [
                        254
                    ],
                    "pk_columns": [
                        251,
                        "whitelists_pk_columns_input!"
                    ]
                }
            ],
            "update_whitelists_many": [
                248,
                {
                    "updates": [
                        262,
                        "[whitelists_updates!]!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Subscription": {
            "actions": [
                7,
                {
                    "distinct_on": [
                        26,
                        "[actions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        23,
                        "[actions_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "actions_aggregate": [
                8,
                {
                    "distinct_on": [
                        26,
                        "[actions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        23,
                        "[actions_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "actions_by_pk": [
                7,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "global_sequence": [
                        5,
                        "String!"
                    ]
                }
            ],
            "actions_stream": [
                7,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        31,
                        "[actions_stream_cursor_input]!"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "api_users": [
                39,
                {
                    "distinct_on": [
                        53,
                        "[api_users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        51,
                        "[api_users_order_by!]"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "api_users_aggregate": [
                40,
                {
                    "distinct_on": [
                        53,
                        "[api_users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        51,
                        "[api_users_order_by!]"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "api_users_by_pk": [
                39,
                {
                    "id": [
                        3,
                        "Int!"
                    ]
                }
            ],
            "api_users_stream": [
                39,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        58,
                        "[api_users_stream_cursor_input]!"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "blocks": [
                66,
                {
                    "distinct_on": [
                        87,
                        "[blocks_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        85,
                        "[blocks_order_by!]"
                    ],
                    "where": [
                        75
                    ]
                }
            ],
            "blocks_aggregate": [
                67,
                {
                    "distinct_on": [
                        87,
                        "[blocks_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        85,
                        "[blocks_order_by!]"
                    ],
                    "where": [
                        75
                    ]
                }
            ],
            "blocks_by_pk": [
                66,
                {
                    "block_num": [
                        3,
                        "Int!"
                    ],
                    "chain": [
                        5,
                        "String!"
                    ]
                }
            ],
            "blocks_stream": [
                66,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        95,
                        "[blocks_stream_cursor_input]!"
                    ],
                    "where": [
                        75
                    ]
                }
            ],
            "chains": [
                107,
                {
                    "distinct_on": [
                        120,
                        "[chains_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        118,
                        "[chains_order_by!]"
                    ],
                    "where": [
                        110
                    ]
                }
            ],
            "chains_aggregate": [
                108,
                {
                    "distinct_on": [
                        120,
                        "[chains_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        118,
                        "[chains_order_by!]"
                    ],
                    "where": [
                        110
                    ]
                }
            ],
            "chains_by_pk": [
                107,
                {
                    "chain_name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "chains_stream": [
                107,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        122,
                        "[chains_stream_cursor_input]!"
                    ],
                    "where": [
                        110
                    ]
                }
            ],
            "manifests": [
                130,
                {
                    "distinct_on": [
                        143,
                        "[manifests_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[manifests_order_by!]"
                    ],
                    "where": [
                        133
                    ]
                }
            ],
            "manifests_aggregate": [
                131,
                {
                    "distinct_on": [
                        143,
                        "[manifests_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[manifests_order_by!]"
                    ],
                    "where": [
                        133
                    ]
                }
            ],
            "manifests_by_pk": [
                130,
                {
                    "app_id": [
                        232,
                        "uuid!"
                    ]
                }
            ],
            "manifests_stream": [
                130,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        145,
                        "[manifests_stream_cursor_input]!"
                    ],
                    "where": [
                        133
                    ]
                }
            ],
            "mappings": [
                149,
                {
                    "distinct_on": [
                        166,
                        "[mappings_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        163,
                        "[mappings_order_by!]"
                    ],
                    "where": [
                        153
                    ]
                }
            ],
            "mappings_aggregate": [
                150,
                {
                    "distinct_on": [
                        166,
                        "[mappings_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        163,
                        "[mappings_order_by!]"
                    ],
                    "where": [
                        153
                    ]
                }
            ],
            "mappings_by_pk": [
                149,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ]
                }
            ],
            "mappings_stream": [
                149,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        168,
                        "[mappings_stream_cursor_input]!"
                    ],
                    "where": [
                        153
                    ]
                }
            ],
            "table_rows": [
                173,
                {
                    "distinct_on": [
                        196,
                        "[table_rows_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        193,
                        "[table_rows_order_by!]"
                    ],
                    "where": [
                        181
                    ]
                }
            ],
            "table_rows_aggregate": [
                174,
                {
                    "distinct_on": [
                        196,
                        "[table_rows_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        193,
                        "[table_rows_order_by!]"
                    ],
                    "where": [
                        181
                    ]
                }
            ],
            "table_rows_by_pk": [
                173,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ],
                    "primary_key": [
                        5,
                        "String!"
                    ],
                    "scope": [
                        5,
                        "String!"
                    ],
                    "table": [
                        5,
                        "String!"
                    ]
                }
            ],
            "table_rows_stream": [
                173,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        198,
                        "[table_rows_stream_cursor_input]!"
                    ],
                    "where": [
                        181
                    ]
                }
            ],
            "transactions": [
                204,
                {
                    "distinct_on": [
                        219,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        217,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "transactions_aggregate": [
                205,
                {
                    "distinct_on": [
                        219,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        217,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "transactions_by_pk": [
                204,
                {
                    "chain": [
                        5,
                        "String!"
                    ],
                    "transaction_id": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                204,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        224,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "whitelists": [
                234,
                {
                    "distinct_on": [
                        253,
                        "[whitelists_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        250,
                        "[whitelists_order_by!]"
                    ],
                    "where": [
                        239
                    ]
                }
            ],
            "whitelists_aggregate": [
                235,
                {
                    "distinct_on": [
                        253,
                        "[whitelists_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        250,
                        "[whitelists_order_by!]"
                    ],
                    "where": [
                        239
                    ]
                }
            ],
            "whitelists_by_pk": [
                234,
                {
                    "app_id": [
                        232,
                        "uuid!"
                    ],
                    "chain": [
                        5,
                        "String!"
                    ],
                    "contract": [
                        5,
                        "String!"
                    ]
                }
            ],
            "whitelists_stream": [
                234,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        258,
                        "[whitelists_stream_cursor_input]!"
                    ],
                    "where": [
                        239
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}