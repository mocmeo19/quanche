import { Reveal } from '@/components/effects/Reveal';
import { ExploreCard } from '@/components/explore/ExploreCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { explorePages } from '@/data/explore-pages';
import { shopInfo } from '@/data/shop-info';

export function ExploreSection() {
  return (
    <section id="kham-pha" className="scroll-mt-16 pt-12 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Khám phá"
          title={`Tìm hiểu ${shopInfo.name}`}
          description="Thông tin về quán, các món đặc trưng, thực đơn đầy đủ và địa chỉ liên hệ."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {explorePages.map((page, index) => (
            <li key={page.href}>
              <Reveal delay={(index % 2) * 0.12} className="h-full">
                <ExploreCard page={page} index={index} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
