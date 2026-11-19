import type { OpeningSlot, ShopHighlight } from '@/types/shop';

const address = '86 Phan Đình Phùng, Quận Phú Nhuận, TP. Hồ Chí Minh';

const openingHours: OpeningSlot[] = [
  {
    label: 'Thứ Hai – Thứ Sáu',
    weekdays: [1, 2, 3, 4, 5],
    opens: '10:00',
    closes: '22:00',
  },
  {
    label: 'Thứ Bảy – Chủ Nhật',
    weekdays: [6, 0],
    opens: '09:00',
    closes: '23:00',
  },
];

export const shopInfo = {
  name: 'Chè Yang',
  slogan: 'Chè truyền thống Việt Nam',
  address,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  phone: '0909 123 456',
  phoneHref: 'tel:0909123456',
  openingHours,
} as const;

export const shopHighlights: ShopHighlight[] = [
  {
    title: 'Chế biến trong ngày',
    description:
      'Toàn bộ sản phẩm được chế biến trong ngày, không sử dụng lại hàng tồn.',
    icon: 'sun',
  },
  {
    title: 'Nguyên liệu rõ nguồn gốc',
    description:
      'Hạt sen Huế, bưởi da xanh Bến Tre, dừa xiêm Tam Quan được thu mua trực tiếp từ vùng trồng.',
    icon: 'leaf',
  },
  {
    title: 'Độ ngọt vừa phải',
    description:
      'Sử dụng đường phèn và đường thốt nốt, kiểm soát độ ngọt theo công thức chuẩn.',
    icon: 'droplet',
  },
];
