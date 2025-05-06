import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useRootStore } from "../../hooks/useRootStore.tsx";
import CategoryItem from "./CategoryItem.tsx";
import { flattenCategories } from "../../modules/products/utils.ts";
import { DefaultStyles } from "../../styles/DefaultStyles.ts";
import { Colors } from "../../styles/Colors.ts";
import { observer } from "mobx-react";


type CategoryFilterProps = {
  onSelectionChange?: (selectedCategories: number[])=> void;
};


const CategoryFilter = observer(({ onSelectionChange }: CategoryFilterProps) => {
  const { productsStore } = useRootStore();
  const categories = productsStore.getCategories();
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const flatCategories = useMemo(() => flattenCategories(categories), [categories]);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedCategories);
    }
  }, [selectedCategories, onSelectionChange]);

  const handleSelect = (categoryId: number) => {
    setSelectedCategories((prev) => prev.includes(categoryId)
      ? prev.filter((id) => id !== categoryId)
      : [...prev, categoryId]);
  };

  const isSelected = (categoryId: number) => selectedCategories.includes(categoryId);

  if (productsStore.isLoading) {
    return <ActivityIndicator style={DefaultStyles.center} size={48} color={Colors.textPrimary} />;
  }
  return (
    <FlatList
      data={flatCategories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CategoryItem
        category={item}
        isSelected={isSelected(item.id)}
        onSelect={handleSelect}
      />
      }
    />
  );
});


export default CategoryFilter;
