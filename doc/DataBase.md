| テーブル名 | 役割 |
| ---------- | ---- |
|            |      |



### アカウント管理テーブル
| カラム名        | 型       | 説明                       |
| --------------- | -------- | -------------------------- |
| account_id (PK) | INT      | アカウントID               |
| email           | VARCHAR  | メールアドレス（ユニーク） |
| password_hash   | VARCHAR  | ハッシュ化パスワード       |
| created_at      | DATETIME | 作成日時                   |
| updated_at      | DATETIME | 更新日時                   |
| last_login_at   | DATETIME | 最終ログイン日時           |

### 企業テーブル
| カラム名        | 型      | 説明         |
| --------------- | ------- | ------------ |
| company_id (PK) | INT     | 企業ID       |
| account_id (FK) | INT     | アカウントID |
| company_name    | VARCHAR | 企業名       |
| phone_number    | VARCHAR | 電話番号     |
| address         | VARCHAR | 住所         |


## ユーザーテーブル
| カラム名        | 型      | 説明                      |
| --------------- | ------- | ------------------------- |
| user_id (PK)    | INT     | ユーザーID                |
| account_id (FK) | INT     | アカウントID              |
| username        | VARCHAR | ユーザー名                |
| gender_code     | CHAR(1) | 性別コード（M/Fなど）     |
| birth_date      | DATE    | 生年月日                  |
| prefecture_code | VARCHAR | 都道府県コード（ISO準拠） |

### store 店舗情報
| カラム名        | 型      | 説明                       |
| --------------- | ------- | -------------------------- |
| store_id (PK)   | INT     | 店舗ID                     |
| company_id (FK) | INT     | 企業ID                     |
| account_id (FK) | INT     | アカウントID               |
| store_name      | VARCHAR | 店舗名                     |
| address         | VARCHAR | 住所                       |
| phone_number    | VARCHAR | 電話番号                   |
| category        | VARCHAR | 店舗カテゴリ（カフェ等）   |
| image_url       | VARCHAR | 店舗画像URL                |
| access_info     | VARCHAR | アクセス情報（最寄駅など） |

### store_crowed_log (店舗混雑ログ)
| カラム名      | 型       | 説明               |
| ------------- | -------- | ------------------ |
| log_id (PK)   | INT      | ログID             |
| user_id (FK)  | INT      | ユーザーID         |
| store_id (FK) | INT      | 店舗ID             |
| event_type    | ENUM     | 入店/退店 (IN/OUT) |
| event_at      | DATETIME | 入退店時刻         |

### store_crowed_setting (店舗混雑設定)
| カラム名          | 型  | 説明      |
| ----------------- | --- | --------- |
| setting_id (PK)   | INT | 設定ID    |
| store_id (FK)     | INT | 店舗ID    |
| capacity          | INT | 定員数    |
| threshold_percent | INT | 閾値（%） |

### favorite_store (お気に入り店舗)
|カラム名|型|説明|
|---|---|---|
|user_id (PK, FK)|INT|ユーザーID|
|store_id (PK, FK)|INT|店舗ID|
|registered_at|DATETIME|お気に入り登録時刻|

### store_hour (営業時間テーブル)
| カラム名        | 型      | 説明           |
| --------------- | ------- | -------------- |
| hours_id (PK)   | INT     | 営業時間ID     |
| store_id (FK)   | INT     | 店舗ID         |
| day_of_week     | ENUM    | 曜日 (月〜日)  |
| open_time       | TIME    | 開店時刻       |
| close_time      | TIME    | 閉店時刻       |
| last_entry_time | TIME    | 最終入場時刻   |
| is_next_day     | BOOLEAN | 翌日営業フラグ |

### store_holiday (特別休日)
| カラム名        | 型      | 説明     |
| --------------- | ------- | -------- |
| holiday_id (PK) | INT     | 休日ID   |
| store_id (FK)   | INT     | 店舗ID   |
| holiday_date    | DATE    | 休日日付 |
| reason          | VARCHAR | 休業理由 |