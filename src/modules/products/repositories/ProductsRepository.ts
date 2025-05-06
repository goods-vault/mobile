import { ProductFromApi } from "../types/product";
import AxiosClient from "../../../base/api/axios/AxiosClient.ts";
import { Category } from "../types/category";

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

  fetchCategories = () => {
    return this.apiClient.get<Category[]>({ url: "/categories" });
  };

  fetchBrands = () => {
    return this.apiClient.get<Brand[]>({ url: "/brands" });
  };
}
