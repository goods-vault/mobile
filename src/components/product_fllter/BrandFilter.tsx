import React, { useEffect, useState } from "react";
import { Text, ActivityIndicator, TouchableOpacity, View, StyleSheet } from "react-native";
import AxiosClient from "../../base/api/axios/AxiosClient.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import { IColors } from "../../modules/theme/ThemeTypes.ts";

type Brand = string;

const BrandFilter = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeBrands, setActiveBrands] = useState<Set<string | null>>(new Set());

  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  useEffect(() => {
    new AxiosClient().get<Brand[]>({ url: "/api/brands" })
      .then((response) => setBrands(response.data))
      .catch((error) => setError("Не удалось загрузить список брендов"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.accentDefault} />;
  }

  if (error) {
    return <Text>
      Error:
      {error}
    </Text>;
  }

  const handlePress = (brand: string | null) => {
    const newActiveBrands = new Set(activeBrands);
    if (newActiveBrands.has(brand)) {
      newActiveBrands.delete(brand);
    } else {
      newActiveBrands.add(brand);
    }
    setActiveBrands(newActiveBrands);
  };


  return (
    <View style={styles.pillsView}>
      {!(brands && brands.length > 0) ?
        <Text>Не удалось загрузить список брендов</Text>
        :
        brands.map((brand, i) => <TouchableOpacity
          key={i}
          style={[styles.pill, activeBrands.has(brand) && styles.activePill]}
          onPress={() => handlePress(brand)}
        >
          <Text style={styles.pillText}>
            {brand == null ? "Не указан" : brand}
          </Text>
        </TouchableOpacity>
        )}
    </View>
  );
};
export default BrandFilter;

const useStyles = (colors: IColors) => StyleSheet.create({
  pillsView: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  pill: { paddingVertical: 5, paddingHorizontal: 10, backgroundColor: colors.backgroundTertiary, borderRadius: 5 },
  activePill: { backgroundColor: colors.accentDefault },
  pillText: { fontFamily: "JetBrains Mono", color: colors.textPrimary },
});

