import type { DessertCategory } from '@/types/dessert';

export function getCategoryAnchorId(category: DessertCategory): string {
  return `nhom-${category}`;
}
