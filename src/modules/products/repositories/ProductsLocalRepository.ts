import LocalStorageClient from "../../../base/db/localStorage/LocalStorageClient.ts";

export default class ProductsLocalRepository {
  localClient: LocalStorageClient;
  tableName: string;

  constructor(tableName: string) {
    this.localClient = new LocalStorageClient();
    this.tableName = tableName;
  }

  get = async () => {
    return await this.localClient.get(this.tableName);
  };

  set = async (data: any) => {
    return await this.localClient.set(this.tableName, data);
  };

  removeAll = async () => {
    return await this.localClient.removeAll(this.tableName);
  };
}
