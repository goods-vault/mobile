import ProductsRepository from "./repositories/ProductsRepository.ts";
import { ProductsModel } from "./models/ProductsModel.ts";
import {LastChangeDate, Product, ProductFromBackend} from "./types/product";
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
        const product = await this.productsRepository.getProductFromApiByCode(code);
        console.log('API Response:', JSON.stringify(product, null, 2));

        if (!model) {
            model = new ProductsModel();
        }

        if (!product) {
            console.warn(`Product with code ${code} not found`);
            return model;
        }

        // такой нюанс:
        // для отправки кода EAN-13 нужен код без "0" в начале:
        // 4600494666612
        // но в ответе апи придет код c "0" в начале:
        // 04600494666612

        // не знаю, как именно нам нужно хранить
        // но пока вставила без "0", если надо, поменяй

        // и еще, я глянула сканнер
        // и там подставляется "0" в начало EAN-13 кода, по которому потом будет запрос
        // наверное надо убрать эту подстановку

        const preparedProduct: Product = {
            code: code, // код без "0", в локальном хранилище поиск соотвественно тоже нужно делать без "0"
            itemName: product.title,
            brandName: product.brand ?? 'Не указан',
            lastChangeDate: parseDate(product.updated_at),
            netContent: [{
                value: product.net_content.value,
                measurementUnitCode: product.net_content.unit
            }],
            tradeItemClassification: [{
                gpcCategoryCode: product.category_id.toString(),
                gpcCategoryName: product.category
            }],
            image_uri: product.image
        };

        const newModel = {
            ...model,
            products: [...model.products, preparedProduct]
        };

        await this.productsLocalRepository.set(newModel);
        return newModel;
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


function parseDate(isoString: string): LastChangeDate {
    const date = new Date(isoString);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        timezone: 0,
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        fractionalSecond: 0
    };
}
