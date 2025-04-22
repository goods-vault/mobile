import { createContext } from "react";
import { ProductsStore } from "./modules/products/ProductsStore.ts";
import { LangStore } from "./modules/lang/LangStore.ts";

class RootStore {
    productsStore;
    langStore;

    constructor() {
        this.productsStore = new ProductsStore();
        this.langStore = new LangStore();
    };
}

export const rootStore = new RootStore();

export const storesContext = createContext(rootStore);
