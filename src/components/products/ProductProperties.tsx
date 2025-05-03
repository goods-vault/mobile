import { useContext, useEffect } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import ProductProperty from "./ProductProperty.tsx";
import { dateObjectToString } from "../../base/utils/date.ts";
import { Product } from "../../modules/products/types/product";
import { useRootStore } from "../../hooks/useRootStore.tsx";
import { observer } from "mobx-react";
import { NavigationContext } from "@react-navigation/native";
import DeleteButton from "../buttons/DeleteButton.tsx";
import Navigation from "../../base/Navigation.ts";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Text from "../Text.tsx";

type ProductPropertiesProps = {
    code: string;
};

const ProductProperties = observer(({ code }: ProductPropertiesProps) => {
    const { productsStore } = useRootStore();
    const product = productsStore.getProductByCode(code);
    const navigation = useContext(NavigationContext);
    const { Colors } = useTheme();
    const styles = useStyles(Colors);

    const handleDeleteProduct = () => {
        Alert.alert(
            "Подтверждение",
            "Вы уверены, что хотите удалить этот товар?",
            [
                {
                    text: "Отмена",
                },
                {
                    text: "Да",
                    onPress: () => {
                        Navigation.navigate("Tab", {
                            screen: "GoodsStack",
                            params: {
                                screen: "GoodsList",
                            },
                        });
                        productsStore.handleDeleteProduct(code);
                    },
                },
            ],
            { cancelable: true },
        );
    };

    useEffect(() => {
        navigation?.setOptions({
            title: product?.itemName || "Товар",
            headerRight: () => <DeleteButton onPress={handleDeleteProduct} />,
    });
    }, [product]);

    const getQuantity = (product: Product | null) => {
        if (!product?.netContent?.length) {
            return "";
        }

        const value = product?.netContent[0].value;
        const unit = product?.netContent[0].measurementUnitCode;
        return `${value} ${unit}.`;
    };

    return (
        <View style={styles.container}>
            {product?.image_uri ? (
                <Image
                    style={styles.fullWidth}
                    resizeMode="contain"
                    source={{ uri: product.image_uri }}
                    onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
                />
            ) : (
                <Image
                    style={styles.fullWidth}
                    resizeMode="contain"
                    source={require("../../assets/images/no-image.jpeg")}
                />
            )}

            <Text style={styles.title}>{product?.itemName}</Text>
            <ProductProperty title="Бренд" value={product?.brandName}/>
            {product?.tradeItemClassification[0].gpcCategoryName &&
            <ProductProperty title="Категория" value={product?.tradeItemClassification[0].gpcCategoryName}/>
            }
            {getQuantity(product) && <ProductProperty title="Количество" value={getQuantity(product)}/>}
            <ProductProperty title="Последнее изменение" value={dateObjectToString(product?.lastChangeDate)}/>
        </View>
    );
});

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        fullWidth: {
            width: "100%",
            height: 400,
        },
        title: {
            fontSize: 18,
            fontWeight: "bold",
            color: colors.accentDefault,
            marginBottom: 8,
        },
        container: {
            gap: 2,
        },
    });

export default ProductProperties;
