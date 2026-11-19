export type DessertCategory = 'lanh' | 'nong' | 'dac-biet';

export interface Dessert {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  ingredients: string[];
  price: number;
  category: DessertCategory;
  isBestSeller?: boolean;
}

export interface DessertGroup {
  category: DessertCategory;
  desserts: Dessert[];
}
