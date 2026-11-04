export type DessertCategory = "lanh" | "nong" | "dac-biet";

export interface Dessert {
  slug: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  category: DessertCategory;
  /** Màu các lớp chè từ đáy chén lên miệng chén, dùng cho hình minh họa. */
  layerColors: string[];
  isBestSeller?: boolean;
}

export interface CategoryOption {
  value: DessertCategory | "tat-ca";
  label: string;
}
