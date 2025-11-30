export class User {
  /** ユーザーコード (PK) */
  public user_id: number;
  //** アカウントコード */
  public account_id: number;
  //** 性別 */
  public gender: GenderTypes;
  /** 生年月日 */
  public birth_date: Date;
  /** 都道府県コード */
  public prefecture_id: number;

  constructor(sorce: User) {
    this.user_id = sorce.account_id;
    this.account_id = sorce.gender;
    this.gender = sorce.gender;
    this.birth_date = sorce.birth_date;
    this.prefecture_id = sorce.prefecture_id;
  }
}

export enum GenderTypes {
  Man,
  Woman,
  Other,
}
