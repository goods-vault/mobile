import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { FlattenCategory } from "../../modules/products/types/category";
import Text from "../Text";
import Checkbox from "../Checkbox.tsx";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";

type CategoryItemProps = {
  category: FlattenCategory;
  onSelect: (categoryId: number)=> void;
  isSelected: boolean;
};

const CategoryItem = ({ category, onSelect, isSelected }: CategoryItemProps) => {
  const indent = category.level * 16;
  const [isChecked, setIsChecked] = useState(isSelected);
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onSelect(category.id);
  };

  return (
    <View style={{ paddingLeft: indent }}>
      <View style={styles.categoryRow}>
        <Text style={styles.categoryText}>
          {category.title}
        </Text>
        <Checkbox isChecked={isChecked} onPress={handleCheckboxChange} />
      </View>
    </View>
  );
};

const useStyles = (colors: IColors) => StyleSheet.create({
  categoryRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary,
    justifyContent: "space-between",
  },
  categoryText: {
    color: colors.textPrimary,
    fontWeight: "bold",
    flexWrap: "wrap",
    alignSelf: "center",
    // TODO: костыль? поработать над стилями, исправить
    maxWidth: "90%",
  },
});

export default CategoryItem;
