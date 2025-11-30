export class Account {
  public account_id: number;
  public email: string;
  public password: string;
  public name: string;
  public state: AccountStatus;
  public crated_at: Date;
  public updated_at: Date;
  public latest_login_at: Date;

  constructor(sorce: Account) {
    this.account_id = sorce.account_id;
    this.email = sorce.email;
    this.password = sorce.password;
    this.name = sorce.name;
    this.state = sorce.state;
    this.crated_at = sorce.crated_at;
    this.updated_at = sorce.updated_at;
    this.latest_login_at = sorce.latest_login_at;
  }
}

export enum AccountStatus {
  Enabled,
  Disabled,
  Deleted,
}
