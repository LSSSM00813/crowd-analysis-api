| TABLE                                                    | テーブル名           |
| -------------------------------------------------------- | -------------------- |
| **[account](#table-account)**                            | アカウント管理マスタ |
| **[corporate](#table-corporate)**                        | 企業マスタ           |
| **[user](#table-user)**                                  | ユーザーマスタ       |
| **[store](#table-store)**                                | 店舗マスタ           |
| **[crowd_log](#table-crowd_log)**                       | 混雑ログマスタ       |
| **[store_crowd_setting](#table-store_crowd_setting)**    | 混雑設定マスタ       |
| **[favorite_store](#table-favorite_store)**              | お気に入り店舗マスタ |
| **[store_business_hours](#table-store_business_hours)** | 営業時間マスタ       |
| **[store_holiday](#table-store_holiday)**                | 休日マスタ           |
| **[store_special_open](#table-store_special_open)**     | 特別営業テーブル     |


### [TABLE] account
| FIELD_ID        | 項目名                     | 型       | SIZE | 主キー | 制約 |
| --------------- | -------------------------- | -------- | :--: | :----: | :--: |
| account_id      | アカウントコード           | int      |      |   1    |  NN  |
| email           | メールアドレス             | nvarchar |  50  |        |  NN  |
| password        | パスワード                 | nvarchar |  50  |        |  NN  |
| name            | 表示名(ユーザー名、企業名) | nvarchar |  50  |        |  NN  |
| state           | アカウント状態             | int      |      |        |  NN  |
| created_at      | 作成日時                   | datetime |      |        |  NN  |
| updated_at      | 更新日時                   | datetime |      |        |  NN  |
| latest_login_at | 最終ログイン日時           | datetime |      |        |  NN  |

```
■アカウント状態
　0:無効、1:有効、2:削除済み？
```

### [TABLE] corporate
| FIELD_ID     | 項目名           | 型       | SIZE | 主キー | 制約 |
| ------------ | ---------------- | -------- | :--: | :----: | :--: |
| company_id   | 企業コード       | int      |      |   1    |  NN  |
| account_id   | アカウントコード | int      |      |        |  NN  |
| address      | 住所             | nvarchar | 100  |        |  NN  |
| phone_number | 電話番号         | nvarchar |  30  |        |  NN  |


### [TABLE] user
| FIELD_ID           | 項目名           | 型       | SIZE | 主キー | 制約 |
| ------------------ | ---------------- | -------- | :--: | :----: | :--: |
| user_id            | ユーザーコード   | int      |      |   1    |  NN  |
| account_id (FK)    | アカウントコード | int      |      |        |  NN  |
| gender             | 性別             | int      |      |        |  NN  |
| birth_date         | 生年月日         | datetime |      |        |  NN  |
| prefecture_id (FK) | 都道府県コード   | int      |      |        |  NN  |

```
■性別
 0:男性、1:女性、2:その他
```

### [TABLE] store
| FIELD_ID        | 項目名           | 型       | SIZE | 主キー | 制約 |
| --------------- | ---------------- | -------- | :--: | :----: | :--: |
| store_id        | 店舗コード       | int      |      |   1    |  NN  |
| company_id      | 企業コード       | int      |      |        |  NN  |
| account_id (FK) | アカウントコード | int      |      |        |  NN  |
| address         | 住所             | nvarchar | 100  |        |  NN  |
| phone_number    | 電話番号         | nvarchar |  30  |        |  NN  |

### [TABLE] crowd_log
| FIELD_ID   | 項目名         | 型       | SIZE | 主キー | 制約 |
| ---------- | -------------- | -------- | :--: | :----: | :--: |
| log_id     | 混雑ログコード | int      |      |   1    |  NN  |
| store_id   | 店舗コード     | int      |      |        |  NN  |
| user_id    | ユーザーコード | int      |      |        |  NN  |
| event_type | 行動区分       | int      |      |        |  NN  |
| event_at   | 発生時刻       | datetime |      |        |  NN  |

```
■行動区分  
　0:入店、1:退店、(2:強制入店?、3:強制退店?)
```

### [TABLE] store_crowd_setting
| FIELD_ID          | 項目名     | 型    | SIZE | 主キー | 制約 |
| ----------------- | ---------- | ----- | :--: | :----: | :--: |
| store_id          | 店舗コード | int   |      |   1    |  NN  |
| setting_id        | 設定ID     | int   |      |   2    |  NN  |
| capacity          | 定員数     | int   |      |        |  NN  |
| threshold_percent | 閾値(%)    | float |      |        |  NN  |

### [TABLE] favorite_store
| FIELD_ID      | 項目名             | 型       | SIZE | 主キー | 制約 |
| ------------- | ------------------ | -------- | :--: | :----: | :--: |
| user_id       | ユーザーコード     | int      |      |   1    |  NN  |
| store_id      | 店舗コード         | int      |      |   2    |  NN  |
| registered_at | お気に入り登録日時 | datetime |      |        |  NN  |

### [TABLE] store_business_hours
| FIELD_ID        | 項目名           | 型      | SIZE | 主キー | 制約 |
| --------------- | ---------------- | ------- | :--: | :----: | :--: |
| store_id        | 店舗コード       | int     |      |   1    |  NN  |
| hours_id        | 営業時間コード   | int     |      |   2    |  NN  |
| day_of_week     | 曜日             | int     |      |        |  NN  |
| open_time       | 開店時刻         | time    |      |        |  NN  |
| close_time      | 閉店時刻         | time    |      |        |  NN  |
| last_entry_time | 最終入店可能時刻 | time    |      |        |  NN  |
| is_next_day     | 翌日営業フラグ   | boolean |      |        |  NN  |

### [TABLE] store_holiday
| FIELD_ID   | 項目名         | 型       | SIZE | 主キー | 制約 |
| ---------- | -------------- | -------- | :--: | :----: | :--: |
| store_id   | 店舗コード     | int      |      |   1    |  NN  |
| holiday_id | 特別休業コード | int      |      |   2    |  NN  |
| start      | 休業開始日付   | date     |      |        |  NN  |
| end        | 休業終了日付   | date     |      |        |  NN  |
| reason     | 休業理由       | nvarchar | 100  |        |  NN  |

### [TABLE] store_special_open
| FIELD_ID           | 項目名           | 型      | SIZE | 主キー | 制約 |
| ------------------ | ---------------- | ------- | :--: | :----: | :--: |
| store_id           | 店舗コード       | int     |      |   1    |  NN  |
| special_holiday_id | 特別営業コード   | int     |      |   2    |  NN  |
| open_time          | 開店時刻         | time    |      |        |  NN  |
| close_time         | 閉店時刻         | time    |      |        |  NN  |
| last_entry_time    | 最終入店可能時刻 | time    |      |        |  NN  |
| is_next_day        | 翌日営業フラグ   | boolean |      |        |  NN  |