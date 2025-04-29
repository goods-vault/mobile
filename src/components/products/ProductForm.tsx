import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";
import { observer } from "mobx-react";
import { useRootStore } from "../../hooks/useRootStore.tsx";
import { DefaultStyles } from "../../styles/DefaultStyles.ts";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Text from "../Text.tsx";

type ProductFormProps = {
  code: string;
};

const ProductForm = observer(({ code }: ProductFormProps) => {
  const { productsStore } = useRootStore();
  const description = productsStore.getDescriptionByCode(code);
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  if (productsStore.isLoading) {
    return <ActivityIndicator
      style={DefaultStyles.center} size={48}
      color={Colors.textPrimary}
    />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Заметки</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        value={description}
        onChangeText={(text) => productsStore.handleDescription(code, text)}
      />
    </View>
  );
});

const useStyles = (colors: IColors) => StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    padding: 8,
    color: colors.textPrimary,
    fontFamily: "JetBrains Mono",
  },
  text: {
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  container: {
    gap: 4,
    marginBottom: 32,
  },
});

export default ProductForm;
