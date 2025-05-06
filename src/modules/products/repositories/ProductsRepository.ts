import { ProductFromApi } from "../types/product";
import AxiosClient from "../../../base/api/axios/AxiosClient.ts";

export default class ProductsRepository {
  apiClient: AxiosClient;

  constructor() {
    this.apiClient = new AxiosClient();
  }

  // TODO: Get data from database from backend API
  getUserProductsWithDescriptions = () => {
    return [];
  };

  getProductFromApiByCode = (code: string) => {
    return this.apiClient.post<ProductFromApi>({
      url: "",
      data: { keyValue: code },
    });
  };

  fetchBrands = () => {
    return this.apiClient.get<Brand[]>({ url: "/brands" });
  };
}
