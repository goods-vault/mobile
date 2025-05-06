import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useRootStore } from "../../hooks/useRootStore.tsx";
import { observer } from "mobx-react";

type BrandsFilterProps = {
  onSelectionChange?: (selectedBrands: Brand[])=> void;
};

const BrandsFilter = observer(({ onSelectionChange }: BrandsFilterProps) => {
  const { productsStore } = useRootStore();
  const brands = productsStore.getBrands();

  const [activeBrands, setActiveBrands] = useState<Set<Brand>>(new Set());

  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange([...activeBrands]);
    }
  }, [activeBrands, onSelectionChange]);

  if (productsStore.isLoading) {
    return <ActivityIndicator size="large" color={Colors.accentDefault} />;
  }

  const handlePress = (brand: string) => {
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
});
export default BrandsFilter;

const useStyles = (colors: IColors) => StyleSheet.create({
  pillsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  pill: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.backgroundTertiary,
    borderRadius: 5,
  },
  activePill: {
    backgroundColor: colors.accentDefault,
  },
  pillText: {
    fontFamily: "JetBrains Mono",
    color: colors.textPrimary,
  },
});
