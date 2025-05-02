import { ActivityIndicator, Alert, FlatList, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { useRootStore } from "../hooks/useRootStore.tsx";
import ProductCard from "../components/products/ProductCard.tsx";
import { DefaultStyles } from "../styles/DefaultStyles.ts";
import { useEffect } from "react";
import DeleteButton from "../components/buttons/DeleteButton.tsx";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types.ts";
import { useTheme } from "../modules/theme/hooks/useTheme.ts";
import ProductFilter from "../components/product_fllter/ProductFilter.tsx";

const GoodsListScreen = observer(() => {
  const { productsStore } = useRootStore();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { Colors } = useTheme();

  const handleDeleteAllProducts = () => {
    Alert.alert(
      "Подтверждение",
      "Вы уверены, что хотите удалить все продукты?",
      [
        {
          text: "Отмена",
        },
        {
          text: "Да",
          onPress: productsStore.handleDeleteAllProducts,
        },
      ],
      { cancelable: true },
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <DeleteButton onPress={handleDeleteAllProducts} />,

    });
  }, [navigation]);

  if (productsStore.isLoading) {
    return <ActivityIndicator style={DefaultStyles.center} size={48} color={Colors.textPrimary} />;
  }
  return (
    <>
      <ProductFilter />
      <FlatList
        style={styles.indent}
        data={productsStore.productsModel?.products}
        renderItem={({ item }) => <ProductCard code={item.code} />
        }
      />
    </>
  );
});

const styles = StyleSheet.create({
  indent: {
    margin: 8,
  },
});

export default GoodsListScreen;
