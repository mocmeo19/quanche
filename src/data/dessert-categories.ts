import type { DessertCategory } from '@/types/dessert';

export const dessertCategoryOrder: DessertCategory[] = [
  'lanh',
  'nong',
  'dac-biet',
];

export const categoryLabels: Record<DessertCategory, string> = {
  lanh: 'Chè lạnh',
  nong: 'Chè nóng',
  'dac-biet': 'Đặc biệt',
};

export const categoryDescriptions: Record<DessertCategory, string> = {
  lanh: 'Phục vụ lạnh, dùng kèm đá bào và nước cốt dừa.',
  nong: 'Phục vụ nóng, nấu cùng gừng và nước cốt dừa.',
  'dac-biet': 'Nguyên liệu tuyển chọn, chế biến theo mẻ nhỏ trong ngày.',
};
