import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useRootStore } from "../../hooks/useRootStore.tsx";
import { DefaultStyles } from "../../styles/DefaultStyles.ts";
import { Colors } from "../../styles/Colors.ts";
import { Category } from "../../modules/products/types/category";

type CategoryFilterProps = {
  onSelectionChange?: (selectedCategories: Category[])=> void;
};

const CategoryFilter = ({ onSelectionChange }: CategoryFilterProps) => {
  const { productsStore } = useRootStore();
  const categories = productsStore.getCategories();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  useEffect(() => {
    productsStore.fetchCategories();
  }, []);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedCategories);
    }
  }, [selectedCategories, onSelectionChange]);

  if (productsStore.isLoading) {
    return <ActivityIndicator style={DefaultStyles.center} size={48} color={Colors.textPrimary} />;
  }
  return (
    <></>
  );
};

export default CategoryFilter;
