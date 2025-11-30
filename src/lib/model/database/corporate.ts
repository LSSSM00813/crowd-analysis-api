export class Corporate {
  /** 企業コード */
  companyId: number;
  /** アカウントコード */
  accountId: number;
  /** 住所 */
  address: string;
  /** 電話番号 */
  phoneNumber: string;

  constructor(sorce: Corporate) {
    this.companyId = sorce.companyId;
    this.accountId = sorce.accountId;
    this.address = sorce.address;
    this.phoneNumber = sorce.phoneNumber;
  }
}
