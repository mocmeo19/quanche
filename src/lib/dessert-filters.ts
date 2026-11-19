import type { Dessert, DessertCategory, DessertGroup } from '@/types/dessert';

export function groupDessertsByCategory(
  desserts: Dessert[],
  categoryOrder: DessertCategory[],
): DessertGroup[] {
  return categoryOrder.map((category) => ({
    category,
    desserts: desserts.filter((dessert) => dessert.category === category),
  }));
}
