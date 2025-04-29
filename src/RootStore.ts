import { createContext } from "react";
import { ProductsStore } from "./modules/products/ProductsStore.ts";

class RootStore {
  productsStore;

  constructor() {
    this.productsStore = new ProductsStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = createContext(rootStore);
