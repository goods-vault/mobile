import { Product } from "../types/product";
import { Category } from "../types/category";

export class ProductsModel {
  products: Product[] = [];
  descriptions: Record<string, string> = {};
  categories: Category[] = [];
}
