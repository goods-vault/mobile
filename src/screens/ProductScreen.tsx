import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import ProductProperties from "../components/products/ProductProperties.tsx";
import { GoodsStackParamList } from "../navigation/types.ts";
import { RouteProp } from "@react-navigation/native";
import ProductForm from "../components/products/ProductForm.tsx";
import { observer } from "mobx-react";
import { useRootStore } from "../hooks/useRootStore.tsx";
import { DefaultStyles } from "../styles/DefaultStyles.ts";
import { useEffect } from "react";
import { useTheme } from "../modules/theme/hooks/useTheme.ts";
import { IColors } from "../modules/theme/ThemeTypes.ts";

type ProductScreenProps = {
    route: RouteProp<GoodsStackParamList, "Product">;
};

const ProductScreen = observer(({ route }: ProductScreenProps) => {
    const { code } = route.params;
    const { productsStore } = useRootStore();
    const { Colors } = useTheme();
    const styles = useStyles(Colors);

    useEffect(() => {
        productsStore.handleBarcode(code);
    }, []);

    if (productsStore.isLoading) return <ActivityIndicator style={DefaultStyles.center} size={48} color={Colors.textPrimary}/>
    return (
        <ScrollView style={styles.container}>
            <ProductProperties code={code}/>
            <View style={styles.divider}/>
            <ProductForm code={code}/>
        </ScrollView>
    );
});

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        container: {
            padding: 16,
        },
        divider: {
            height: 1,
            backgroundColor: colors.backgroundSecondary,
            marginVertical: 16,
        },
    });

export default ProductScreen;
