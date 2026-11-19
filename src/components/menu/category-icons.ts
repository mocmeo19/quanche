import { Flame, Snowflake, Sparkles, type LucideIcon } from 'lucide-react';
import type { DessertCategory } from '@/types/dessert';

export const categoryIcons: Record<DessertCategory, LucideIcon> = {
  lanh: Snowflake,
  nong: Flame,
  'dac-biet': Sparkles,
};
