export class ApiBase<TData> {
  public result: boolean;
  public data: TData;

  constructor(result: boolean, data: TData) {
    this.result = result;
    this.data = data;
  }
}
