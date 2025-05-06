import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { determineBarcodeType } from "../../base/utils/barcode.ts";
import Navigation from "../../base/Navigation.ts";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Text from "../Text.tsx";
import { useTranslation } from "react-i18next";

type BarcodeFormProps = {
  onSubmit: ()=> void;
};

const BarcodeForm = ({ onSubmit }: BarcodeFormProps) => {
  const [barcode, setBarcode] = useState("");
  const [error, setError] = useState("");
  const { Colors } = useTheme();
  const styles = useStyles(Colors);
  const { t } = useTranslation("scanner");

  const handleAddProduct = (code: string) => {
    const codeType = determineBarcodeType(code);
    if (codeType === null) {
      setError(t("invalid_code"));
      return;
    }

    let finalCode: string = "";
    if (codeType === "ean-13") {
      finalCode = `0${code}`;
    } else if (codeType === "ean-8") {
      finalCode = code;
    }

    Navigation.navigate("Tab", {
      screen: "GoodsStack",
      params: {
        screen: "Product",
        params: { code: finalCode },
      },
    });

    onSubmit();
  };

  return (
    <View style={styles["gap-24"]}>
      <Text style={styles.title}>
        {t("manual_barcode_entry")}
      </Text>
      <View style={styles["gap-12"]}>
        <View style={styles["gap-2"]}>
          <TextInput
            style={styles.input}
            value={barcode}
            keyboardType="numeric"
            onChangeText={setBarcode}
          />
          {error && <Text style={styles.error}>
            {error}
          </Text>}
        </View>
        <TouchableOpacity onPress={() => handleAddProduct(barcode)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {t("add_product")}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const useStyles = (colors: IColors) => StyleSheet.create({
  "gap-2": {
    gap: 2,
  },
  "gap-12": {
    gap: 12,
  },
  "gap-24": {
    gap: 24,
  },
  input: {
    borderRadius: 8,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    padding: 8,
    color: colors.textPrimary,
    fontFamily: "JetBrains Mono",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  error: {
    color: colors.error,
  },
  button: {
    backgroundColor: "#52ADD3FF",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default BarcodeForm;
