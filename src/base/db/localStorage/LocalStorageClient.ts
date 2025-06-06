import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalStorageClient {
  get = async (tableName: string): Promise<any> => {
    const data = await AsyncStorage.getItem(tableName);
    return data ? JSON.parse(data) : null;
  };

  set = async (tableName: string, data: any): Promise<any> => {
    return AsyncStorage.setItem(tableName, JSON.stringify(data));
  };

  removeAll = async (tableName: string): Promise<any> => {
    return AsyncStorage.removeItem(tableName);
  };
}
