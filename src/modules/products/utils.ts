import { Category, FlattenCategory } from "./types/category";

export const flattenCategories = (categories: Category[], level = 0) => {
  let flatList: FlattenCategory[] = [];

  categories.forEach((category) => {
    flatList.push({ ...category, level });
    if (category.children && category.children.length > 0) {
      flatList = flatList.concat(flattenCategories(category.children, level + 1));
    }
  });

  return flatList;
};
