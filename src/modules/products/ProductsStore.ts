import ProductsService from "./ProductsService.ts";
import { ProductsModel } from "./models/ProductsModel.ts";
import { makeAutoObservable } from "mobx";

export class ProductsStore {
  productsModel: ProductsModel | null = null;
  isLoading = false;

  productsService;

  constructor() {
    makeAutoObservable(this);

    this.productsService = new ProductsService();
  }

  initProductsModel = async () => {
    this.setProductsModel(await this.productsService.getInitialProductsModel());
  };

  handleBarcode = async (code: string) => {
    if (!this.getProductByCode(code)) {
      this.setIsLoading(true);
      const model = await this.productsService.addPreparedProductByCode(this.productsModel, code);
      this.setProductsModel(model);
      this.setIsLoading(false);
    }
  };

  handleDescription = (code: string, description: string) => {
    this.setIsLoading(true);
    this.setProductsModel(this.productsService.addDescriptionToProduct(this.productsModel, code, description));
    this.setIsLoading(false);
  };

  handleDeleteProduct = (code: string) => {
    this.setIsLoading(true);
    this.setProductsModel(this.productsService.deleteProductByCode(this.productsModel, code));
    this.setIsLoading(false);
  };

  handleDeleteAllProducts = () => {
    this.setIsLoading(true);
    this.setProductsModel(this.productsService.deleteAllProducts());
    this.setIsLoading(false);
  };

  fetchCategories = async () => {
    this.setIsLoading(true);
    this.setProductsModel(await this.productsService.fetchCategories(this.productsModel));
    this.setIsLoading(false);
  };

  getProductByCode = (code: string) => {
    return this.productsModel?.products.find((product) => product.code === code) || null;
  };

  getDescriptionByCode = (code: string) => {
    return this.productsModel?.descriptions[code] || "";
  };

  getCategories = () => {
    return this.productsModel?.categories || [];
  };

  setProductsModel = (value: ProductsModel | null) => {
    this.productsModel = value;
  };

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };
}
