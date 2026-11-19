import { BookOpen } from 'lucide-react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero/PageHero';
import { SignatureSection } from '@/components/sections/SignatureSection';
import { OrderBanner } from '@/components/ui/OrderBanner';
import { bestSellers } from '@/data/desserts';

export const metadata: Metadata = {
  title: 'Món đặc trưng',
  description: `Các món chè được khách hàng lựa chọn nhiều nhất: ${bestSellers
    .map((dessert) => dessert.name)
    .join(', ')}.`,
};

export default function SignaturePage() {
  return (
    <main className="flex-1">
      <PageHero
        pageLabel="Món đặc trưng"
        title="Món đặc trưng"
        highlight="của quán."
        description="Những món được khách hàng lựa chọn nhiều nhất, kèm thông tin thành phần và giá bán."
      />
      <SignatureSection />
      <OrderBanner
        title="Đặt các món đặc trưng"
        secondaryLink={{ href: '/thuc-don', label: 'Xem thực đơn đầy đủ' }}
        secondaryIcon={BookOpen}
      />
    </main>
  );
}
