import { Product } from "../types/product";

export class ProductsModel {
  products: Product[] = [];
  descriptions: Record<string, string> = {};
  brands: Brand[] = [];
}
