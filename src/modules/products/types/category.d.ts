export interface Category {
  id: number;
  title: string;
  children: Category[];
}

export interface FlattenCategory extends Category {
  level: number;
}
