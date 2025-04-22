import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
    Tab: NavigatorScreenParams<TabStackParamList>;
};

export type TabStackParamList = {
    GoodsStack: NavigatorScreenParams<GoodsStackParamList>;
    ScannerStack: NavigatorScreenParams<ScannerStackParamList>;
    SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

export type GoodsStackParamList = {
    Product: { code: string };
    GoodsList: undefined;
};

export type ScannerStackParamList = {
    BarcodeScanner: undefined;
};

export type SettingsStackParamList = {
    Settings: undefined;
}
