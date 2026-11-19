import { MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { MenuCatalog } from '@/components/menu-page/MenuCatalog';
import { MenuHero } from '@/components/menu-page/MenuHero';
import { OrderBanner } from '@/components/ui/OrderBanner';
import { desserts } from '@/data/desserts';

export const metadata: Metadata = {
  title: 'Thực đơn',
  description: `Thực đơn ${desserts.length} món chè truyền thống Việt Nam, chế biến trong ngày: ${desserts
    .map((dessert) => dessert.name)
    .join(', ')}.`,
};

export default function MenuPage() {
  return (
    <main className="flex-1">
      <MenuHero />
      <MenuCatalog desserts={desserts} />
      <OrderBanner
        title="Đặt món qua điện thoại"
        secondaryLink={{ href: '/ghe-quan', label: 'Xem địa chỉ' }}
        secondaryIcon={MapPin}
      />
    </main>
  );
}
