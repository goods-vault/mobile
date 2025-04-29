import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import { useRootStore } from "../../hooks/useRootStore.tsx";
import Navigation from "../../base/Navigation.ts";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Text from "../Text.tsx";

type ProductCardProps = {
  code: string;
};

const ProductCard = observer(({ code }: ProductCardProps) => {
  const { productsStore } = useRootStore();
  const product = productsStore.getProductByCode(code);
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  const onProductClick = () => {
    Navigation.navigate("Tab", {
      screen: "GoodsStack",
      params: {
        screen: "Product",
        params: { code },
      },
    },
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onProductClick}>
      {product?.requestedItem && product?.requestedItem[0].fileFormatName.value === "IMAGE" &&
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: product.requestedItem[0].uniformResourceIdentifier }}
          />
        </View>
      }
      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          {product?.itemName}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const useStyles = (colors: IColors) => StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.backgroundTertiary,
    padding: 16,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.textPrimary,
    fontWeight: "700",
    fontFamily: "JetBrains Mono",
  },
  image: {
    height: 100,
    width: "100%",
  },
  imageContainer: {
    width: "25%",
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ProductCard;
