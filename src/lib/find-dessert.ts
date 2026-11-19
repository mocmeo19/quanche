import type { Dessert } from '@/types/dessert';

export function findDessert(desserts: Dessert[], slug: string): Dessert {
  const dessert = desserts.find((item) => item.slug === slug);
  if (!dessert) {
    throw new Error(`Không tìm thấy món chè có slug "${slug}".`);
  }
  return dessert;
}
