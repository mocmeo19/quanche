import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero/PageHero';
import { VisitSection } from '@/components/sections/VisitSection';
import { VisitGallery } from '@/components/visit/VisitGallery';
import { shopInfo } from '@/data/shop-info';

export const metadata: Metadata = {
  title: 'Ghé quán',
  description: `Địa chỉ, giờ mở cửa và số điện thoại đặt hàng của ${shopInfo.name} tại ${shopInfo.address}.`,
};

export default function VisitPage() {
  return (
    <main className="flex-1">
      <PageHero
        pageLabel="Ghé quán"
        title="Địa chỉ"
        highlight="và giờ mở cửa."
        description={`${shopInfo.name} tọa lạc tại ${shopInfo.address}. Quán phục vụ tại chỗ, bán mang về và giao hàng tận nơi.`}
      />
      <VisitGallery />
      <VisitSection />
    </main>
  );
}
