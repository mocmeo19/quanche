import { desserts } from '@/data/desserts';
import { shopInfo } from '@/data/shop-info';
import type { ExplorePage } from '@/types/navigation';

export const explorePages: ExplorePage[] = [
  {
    href: '/gioi-thieu',
    label: 'Giới thiệu',
    title: `Về ${shopInfo.name}`,
    description:
      'Định hướng, quy trình chế biến và cam kết chất lượng của quán.',
    cta: 'Tìm hiểu thêm',
    imageSlug: 'che-troi-nuoc',
  },
  {
    href: '/mon-dac-trung',
    label: 'Món đặc trưng',
    title: 'Các món bán chạy',
    description: 'Những món được khách hàng lựa chọn nhiều nhất tại quán.',
    cta: 'Xem món đặc trưng',
    imageSlug: 'che-ba-mau',
  },
  {
    href: '/thuc-don',
    label: 'Thực đơn',
    title: `${desserts.length} món chè ba miền`,
    description:
      'Gồm chè nóng, chè lạnh và chè đặc biệt, hỗ trợ tìm kiếm theo tên món hoặc nguyên liệu.',
    cta: 'Xem thực đơn',
    imageSlug: 'che-thai',
  },
  {
    href: '/ghe-quan',
    label: 'Ghé quán',
    title: 'Địa chỉ và giờ mở cửa',
    description: `${shopInfo.address}. Phục vụ tại chỗ, bán mang về và giao hàng tận nơi.`,
    cta: 'Xem thông tin',
    imageSlug: 'che-sen-long-nhan',
  },
];
