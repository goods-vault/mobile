export interface ProductFromApi {
    gtin: string;
    brand: string | null;
    title: string;
    image: string;
    net_content: {
        unit: string;
        value: number;
    };
    category_id: number;
    category: string;
    updated_at: string;
}

export interface Product {
    code: string;
    itemName: string;
    brandName: string ;
    lastChangeDate: LastChangeDate;
    netContent: Omit<NetContent, "codeListVersion">[] | [];
    tradeItemClassification: TradeItemClassification[];
    image_uri: string;
}

export interface ProductFromBackend extends Product {
    description: string;
}


export interface LastChangeDate {
    year: number;
    month: number;
    day: number;
    timezone: number;
    hour: number;
    minute: number;
    second: number;
    fractionalSecond: number;
}

export interface NetContent {
    value: number;
    measurementUnitCode: string;
    codeListVersion: string; // "1.0"
}

