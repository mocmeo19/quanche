import Image from 'next/image';
import { Marquee } from '@/components/effects/Marquee';
import { PageHero } from '@/components/page-hero/PageHero';
import { bestSellers, desserts } from '@/data/desserts';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { formatPrice } from '@/lib/format-price';

const lowestPrice = Math.min(...desserts.map((dessert) => dessert.price));

const heroStats = [
  { label: 'Thực đơn có', value: `${desserts.length} món` },
  { label: 'Giá chỉ từ', value: formatPrice(lowestPrice) },
  { label: 'Bán chạy nhất', value: `${bestSellers.length} món` },
];

const statsList = (
  <dl className="animate-fade-up border-cream/15 grid grid-cols-3 gap-4 border-t pt-6 [animation-delay:600ms] sm:gap-6">
    {heroStats.map((stat) => (
      <div key={stat.label}>
        <dt className="text-cream/60 text-sm">{stat.label}</dt>
        <dd className="text-mung mt-2 text-xl leading-none font-black whitespace-nowrap sm:text-3xl">
          {stat.value}
        </dd>
      </div>
    ))}
  </dl>
);

export function MenuHero() {
  return (
    <PageHero
      pageLabel="Thực đơn"
      title="Thực đơn"
      highlight="chè ba miền."
      description="Thực đơn gồm các món chè nóng, chè lạnh và chè đặc biệt, được chế biến mới mỗi ngày. Chọn từng món để xem chi tiết thành phần và giá."
      aside={statsList}
    >
      {/* Chừa khoảng dưới để ô tìm kiếm của thực đơn đè lên mép hero. */}
      <div
        aria-hidden="true"
        className="animate-fade-up mt-10 pb-4 [animation-delay:750ms] lg:mt-14"
      >
        {/* Padding nằm trong vùng overflow-hidden để món lệch xuống (even:translate-y-8) và hiệu ứng hover không bị cắt. */}
        <Marquee durationSeconds={70} repeat={2} className="pt-6 pb-14">
          {desserts.map((dessert) => (
            <div
              key={dessert.slug}
              className="mr-6 flex w-32 shrink-0 flex-col items-center gap-3 even:translate-y-8 sm:mr-8 sm:w-44"
            >
              <div className="ring-cream/10 ease-out-expo relative aspect-square w-full overflow-hidden rounded-full shadow-2xl ring-4 shadow-black/50 transition duration-700 hover:scale-105 hover:rotate-6">
                <Image
                  src={getDessertImageSrc(dessert.slug)}
                  alt=""
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
              <span className="text-cream/60 text-sm font-semibold whitespace-nowrap">
                {dessert.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </PageHero>
  );
}
