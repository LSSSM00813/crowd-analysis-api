export class Store {
  /** 店舗コード */
  public store_id: number;
  /** 企業コード */
  public company_id: number;
  /** アカウントコード */
  public account_id: number;
  //** 住所 */
  public address: string;
  //** 電話番号 */
  public phone_number: string;

  constructor(sorce: Store) {
    this.store_id = sorce.store_id;
    this.company_id = sorce.company_id;
    this.account_id = sorce.account_id;
    this.address = sorce.address;
    this.phone_number = sorce.phone_number;
  }
}
