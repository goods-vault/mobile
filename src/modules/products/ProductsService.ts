import ProductsRepository from "./repositories/ProductsRepository.ts";
import { ProductsModel } from "./models/ProductsModel.ts";
import { Product, ProductFromBackend } from "./types/product";
import { capitalize } from "../../base/utils/string.ts";
import ProductsLocalRepository from "./repositories/ProductsLocalRepository.ts";

export default class ProductsService {
    productsRepository;
    productsLocalRepository;

    constructor() {
        this.productsRepository = new ProductsRepository();
        this.productsLocalRepository = new ProductsLocalRepository("products");
    };

    getInitialProductsModel = async () => {
        let model: ProductsModel;
        model = await this.productsLocalRepository.get();

        if (!model) {
            const data = this.productsRepository.getUserProductsWithDescriptions();

            model = new ProductsModel();
            model.products = data.map((item: ProductFromBackend) => {
                const { description, ...rest } = item;
                return rest;
            });
            model.descriptions = data.reduce((acc, item) => {
                const { code, description } = item;
                return { ...acc, [code]: description };
            }, {});

            this.productsLocalRepository.set(model);
        }

        return model;
    };

    addPreparedProductByCode = async (model: ProductsModel | null, code: string) => {
        const response = await this.productsRepository.getProductFromApiByCode(code);
        const product = response.data.gepirItem.itemDataLine.find(itemDataLine => itemDataLine.itemName);

        if (!product || !model) {
            return model;
        }

        const preparedProduct: Product = {
            code: product.gepirRequestedKey.requestedKeyValue,
            itemName: capitalize(product.itemName),
            brandName: product.brandName,
            lastChangeDate: product.lastChangeDate,
            netContent: product.netContent.map(item => {
                const { codeListVersion, ...rest } = item;
                return rest;
            }),
            tradeItemClassification: product.tradeItemClassification,
            requestedItem: product.requestedItem,
        };

        model.products = [...model.products, preparedProduct];

        this.productsLocalRepository.set(model);
        return model;
    };

    addDescriptionToProduct = (model: ProductsModel | null, code: string | null, description: string) => {
        if (!code || !model) {
            return model;
        }

        model.descriptions[code] = description;

        this.productsLocalRepository.set(model);
        return model;
    };

    deleteProductByCode = (model: ProductsModel | null, code: string) => {
        if (!model) {
            return model;
        }

        model.products = model.products.filter(product => product.code !== code);
        delete model.descriptions[code];

        this.productsLocalRepository.set(model);
        return model;
    };

    deleteAllProducts = () => {
        this.productsLocalRepository.removeAll();
        return new ProductsModel();
    };
}
