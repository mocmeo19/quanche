import { BookOpen } from 'lucide-react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero/PageHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { OrderBanner } from '@/components/ui/OrderBanner';
import { shopInfo } from '@/data/shop-info';

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: `Giới thiệu ${shopInfo.name}: quán chè chuyên các món chè tiêu biểu của ba miền Bắc, Trung, Nam, chế biến trong ngày tại TP. Hồ Chí Minh.`,
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        pageLabel="Giới thiệu"
        title="Về"
        highlight={`${shopInfo.name}.`}
        description={`${shopInfo.name} giới thiệu các món chè tiêu biểu của ba miền Bắc, Trung, Nam, chế biến theo quy trình chuẩn hóa tại TP. Hồ Chí Minh.`}
      />
      <AboutSection />
      <OrderBanner
        title="Trải nghiệm các món chè tại quán"
        secondaryLink={{ href: '/thuc-don', label: 'Xem thực đơn' }}
        secondaryIcon={BookOpen}
      />
    </main>
  );
}
