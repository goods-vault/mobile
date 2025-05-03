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

    async getProductFromApiByCode(code: string): Promise<ProductFromApi> {
        const url = `product?code=${code}`;
        const response = await this.apiClient.get<ProductFromApi>(url);
        return response;
    }
};
