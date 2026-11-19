import type { Dessert } from '@/types/dessert';

export const desserts: Dessert[] = [
  {
    slug: 'che-ba-mau',
    name: 'Chè ba màu',
    tagline: 'Ba lớp nguyên liệu, hương vị cân bằng',
    description:
      'Đậu đỏ, đậu xanh và thạch lá dứa, dùng kèm nước cốt dừa và đá bào.',
    ingredients: ['Đậu đỏ', 'Đậu xanh', 'Thạch lá dứa', 'Nước cốt dừa'],
    price: 25000,
    category: 'lanh',
    isBestSeller: true,
  },
  {
    slug: 'che-thai',
    name: 'Chè Thái sầu riêng',
    tagline: 'Sầu riêng kết hợp sữa tươi',
    description:
      'Sầu riêng, mít, thạch dừa và trân châu, dùng lạnh cùng sữa tươi.',
    ingredients: ['Sầu riêng', 'Mít', 'Thạch dừa', 'Trân châu', 'Sữa tươi'],
    price: 35000,
    category: 'lanh',
    isBestSeller: true,
  },
  {
    slug: 'che-buoi',
    name: 'Chè bưởi',
    description:
      'Cùi bưởi áo bột năng, dùng kèm đậu xanh đánh nhuyễn và nước cốt dừa.',
    ingredients: ['Cùi bưởi', 'Đậu xanh', 'Bột năng', 'Nước cốt dừa'],
    price: 25000,
    category: 'lanh',
  },
  {
    slug: 'suong-sa-hat-luu',
    name: 'Sương sa hạt lựu',
    description: 'Hạt lựu, sương sa lá dứa và đậu xanh, dùng kèm dừa non.',
    ingredients: ['Hạt lựu', 'Sương sa', 'Đậu xanh', 'Dừa non'],
    price: 25000,
    category: 'lanh',
  },
  {
    slug: 'che-troi-nuoc',
    name: 'Chè trôi nước',
    tagline: 'Bánh nếp nhân đậu xanh, nước đường gừng',
    description:
      'Bánh nếp nhân đậu xanh, dùng nóng với nước đường gừng, mè rang và nước cốt dừa.',
    ingredients: ['Bột nếp', 'Đậu xanh', 'Gừng', 'Mè rang', 'Nước cốt dừa'],
    price: 25000,
    category: 'nong',
    isBestSeller: true,
  },
  {
    slug: 'che-bap',
    name: 'Chè bắp',
    description: 'Bắp nếp nấu cùng bột báng, dùng nóng với nước cốt dừa.',
    ingredients: ['Bắp nếp', 'Bột báng', 'Nước cốt dừa'],
    price: 20000,
    category: 'nong',
  },
  {
    slug: 'che-chuoi',
    name: 'Chè chuối',
    description:
      'Chuối sứ nấu cùng bột báng và nước cốt dừa, rắc đậu phộng rang.',
    ingredients: ['Chuối sứ', 'Bột báng', 'Nước cốt dừa', 'Đậu phộng'],
    price: 22000,
    category: 'nong',
  },
  {
    slug: 'che-dau-den',
    name: 'Chè đậu đen',
    description:
      'Đậu đen xanh lòng ninh mềm, giữ nguyên hạt, nấu với đường phèn. Phục vụ nóng hoặc lạnh.',
    ingredients: ['Đậu đen', 'Đường phèn', 'Nước cốt dừa'],
    price: 20000,
    category: 'nong',
  },
  {
    slug: 'che-sen-long-nhan',
    name: 'Chè sen long nhãn',
    tagline: 'Công thức theo phong cách cung đình Huế',
    description:
      'Hạt sen Huế bọc trong cùi nhãn lồng, dùng với nước đường phèn.',
    ingredients: ['Hạt sen Huế', 'Nhãn lồng', 'Đường phèn'],
    price: 40000,
    category: 'dac-biet',
    isBestSeller: true,
  },
  {
    slug: 'che-khuc-bach',
    name: 'Chè khúc bạch',
    description:
      'Khúc bạch vị sữa, trà xanh và lá dứa, dùng kèm nhãn, vải và hạnh nhân lát rang.',
    ingredients: ['Khúc bạch', 'Nhãn', 'Hạnh nhân', 'Vải'],
    price: 35000,
    category: 'dac-biet',
  },
];

export const bestSellers = desserts.filter((dessert) => dessert.isBestSeller);
