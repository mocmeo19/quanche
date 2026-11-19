import { normalizeSearchText } from '@/lib/search-text';
import type { Dessert } from '@/types/dessert';

function buildSearchableText(dessert: Dessert): string {
  return normalizeSearchText(
    [
      dessert.name,
      dessert.tagline ?? '',
      dessert.description,
      ...dessert.ingredients,
    ].join(' '),
  );
}

export function searchDesserts(desserts: Dessert[], query: string): Dessert[] {
  const normalizedQuery = normalizeSearchText(query);
  if (normalizedQuery === '') {
    return desserts;
  }

  // Khớp nguyên cụm để "đậu xanh" không lẫn sang món có "đậu đen xanh lòng".
  return desserts.filter((dessert) =>
    buildSearchableText(dessert).includes(normalizedQuery),
  );
}
