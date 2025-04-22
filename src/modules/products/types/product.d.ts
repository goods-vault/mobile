export interface ProductFromApi {
    informationProvider: InformationProvider;
    responseHeader: ResponseHeader;
    gepirItem: GepirItem;
}

export interface InformationProvider {
    url: string;
    name: string;
}

export interface ResponseHeader {
    responderGLN: string;
    numberOfHits: number;
    gepirReturnCode: GepirReturnCode;
}

export interface GepirReturnCode {
    value: string; // "0"
}

export interface GepirItem {
    // itemDataLine: (ItemDataLine | EmptyItemDataLine)[];
    itemDataLine: ItemDataLine[];
}

export interface ItemDataLine {
    itemDataLanguage: ItemDataLanguage;
    lastChangeDate: LastChangeDate;
    netContent: NetContent[];
    returnCode: ReturnCode;
    tradeItemUnitDescriptor: TradeItemUnitDescriptor;
    itemName: string;
    brandName: string;
    tradeItemClassification: TradeItemClassification[];
    gepirRequestedKey: GepirRequestedKey;
    informationProvider?: Organization;
    manufacturer?: Organization;
    requestedItem: RequestedItem[];
}

export interface ItemDataLanguage {
    value: string; // "ru", "cs", "ko"
    codeListVersion: string; // "1.0"
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
    measurementUnitCode: "KGM" | "GRM" | "PCE" | "LTR" | "MLT";
    codeListVersion: string; // "1.0"
}

export interface ReturnCode {
    value: string; // "0", "8"
    codeListVersion: string; // "1.0"
}

export interface TradeItemUnitDescriptor {
    value: string; // "BASE_UNIT_OR_EACH"
    codeListVersion: string; // "1.0"
}

export interface TradeItemClassification {
    gpcCategoryCode: string;
    gpcCategoryName?: string;
}

export interface GepirRequestedKey {
    requestedKeyCode: RequestedKeyCode;
    requestedKeyValue: string;
    requestedLanguage: RequestedLanguage;
}

export interface RequestedKeyCode {
    value: string; // "GTIN"
    codeListVersion: string; // "1.0"
}

export interface RequestedLanguage {
    value: string; // "ru"
    codeListVersion: string; // "1.0"
}

export interface Organization {
    gln: string;
    partyName: string[];
    partyRole: PartyRole[];
}

export interface PartyRole {
    value: string; // "INFORMATION_PROVIDER", "MANUFACTURER_OF_GOODS", "MANUFACTURING_PLANT"
}

export interface RequestedItem {
    fileFormatName: FileFormatName;
    uniformResourceIdentifier: string;
}

export interface FileFormatName {
    value: string; // "HTML", "IMAGE"
    codeListVersion: string; // "1.0"
}

// export interface EmptyItemDataLine {
//   returnCode: ReturnCode;
//   informationProvider: Organization;
// }

export interface Product {
    code: string;
    itemName: string;
    brandName: string;
    lastChangeDate: LastChangeDate;
    netContent: Omit<NetContent, "codeListVersion">[] | [];
    tradeItemClassification: TradeItemClassification[];
    requestedItem?: RequestedItem[];
}

export interface ProductFromBackend extends Product {
    description: string;
}
