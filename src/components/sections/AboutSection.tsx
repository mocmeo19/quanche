import { Droplet, Leaf, Sun, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { CountUp } from '@/components/effects/CountUp';
import { ParallaxImage } from '@/components/effects/ParallaxImage';
import { Reveal } from '@/components/effects/Reveal';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { desserts } from '@/data/desserts';
import { shopHighlights, shopInfo } from '@/data/shop-info';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { findDessert } from '@/lib/find-dessert';
import { padNumber } from '@/lib/pad-number';
import type { HighlightIconName } from '@/types/shop';

const highlightIcons: Record<HighlightIconName, LucideIcon> = {
  sun: Sun,
  leaf: Leaf,
  droplet: Droplet,
};

const storyDessert = findDessert(desserts, 'che-troi-nuoc');
const insetDessert = findDessert(desserts, 'che-sen-long-nhan');

const storyStats = [
  { value: desserts.length, suffix: '', label: 'món chè ba miền' },
  { value: 4, suffix: 'h', label: 'giờ sáng bắt đầu chế biến' },
  { value: 100, suffix: '%', label: 'sản phẩm chế biến trong ngày' },
];

export function AboutSection() {
  return (
    <section className="bg-coconut relative overflow-clip py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ParallaxImage
            src={getDessertImageSrc(storyDessert.slug)}
            alt={`${storyDessert.name} chế biến theo công thức truyền thống`}
            sizes="(min-width: 1024px) 560px, 90vw"
            className="shadow-ink/20 aspect-[4/5] rounded-[2.5rem] shadow-2xl"
          />
          <div className="ring-coconut absolute -top-6 -right-3 w-[38%] overflow-hidden rounded-full shadow-xl ring-8 sm:-right-8">
            <div className="relative aspect-square">
              <Image
                src={getDessertImageSrc(insetDessert.slug)}
                alt={insetDessert.name}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-redbean text-coconut shadow-redbean/30 absolute -bottom-8 -left-3 -rotate-3 rounded-3xl px-6 py-5 shadow-2xl sm:-left-8">
            <p className="text-5xl leading-none font-black">
              <CountUp value={3} />
            </p>
            <p className="mt-2 text-sm font-semibold">miền Bắc – Trung – Nam</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Về chúng tôi"
            title="Tinh hoa chè ba miền trong một thực đơn"
          />

          <Reveal
            delay={0.1}
            className="text-ink-soft mt-8 flex flex-col gap-4 text-lg leading-relaxed"
          >
            <p>
              {shopInfo.name} được xây dựng với định hướng giới thiệu các món
              chè tiêu biểu của ba miền Bắc, Trung, Nam trong cùng một thực đơn.
              Mỗi món được lựa chọn dựa trên hương vị đặc trưng của từng vùng và
              điều chỉnh độ ngọt phù hợp với khẩu vị hiện nay.
            </p>
            <p>
              Toàn bộ quy trình từ sơ chế nguyên liệu, nấu đến bảo quản được
              chuẩn hóa nhằm bảo đảm chất lượng đồng nhất mỗi ngày. Quán phục vụ
              tại chỗ, bán mang về và giao hàng tận nơi.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <figure className="border-mung mt-10 border-l-4 pl-6">
              <blockquote className="text-ink text-xl leading-snug font-semibold italic sm:text-2xl">
                “Chúng tôi đặt chất lượng nguyên liệu và sự nhất quán của từng
                phần chè lên hàng đầu.”
              </blockquote>
              <figcaption className="text-ink-soft mt-3 text-sm font-medium">
                — Ban quản lý {shopInfo.name}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="border-ink/10 mt-12 grid grid-cols-3 gap-4 border-t pt-8 sm:gap-8">
              {storyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse justify-end gap-2"
                >
                  <dt className="text-ink-soft text-sm leading-snug">
                    {stat.label}
                  </dt>
                  <dd className="text-pandan text-4xl leading-none font-black sm:text-5xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <ul className="mx-auto mt-24 grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:mt-32">
        {shopHighlights.map((highlight, index) => {
          const HighlightIcon = highlightIcons[highlight.icon];

          return (
            <li key={highlight.title}>
              <Reveal delay={index * 0.12} className="h-full">
                <article className="group bg-cream hover:bg-pandan relative h-full overflow-hidden rounded-[2rem] p-8 transition-colors duration-500">
                  <span
                    aria-hidden="true"
                    className="text-ink/[0.06] group-hover:text-coconut/10 absolute top-6 right-7 text-7xl leading-none font-black transition-colors duration-500"
                  >
                    {padNumber(index + 1)}
                  </span>
                  <span className="bg-pandan-light text-pandan group-hover:bg-coconut/15 group-hover:text-mung grid size-14 place-items-center rounded-2xl transition duration-500 group-hover:-rotate-12">
                    <HighlightIcon aria-hidden="true" className="size-7" />
                  </span>
                  <h3 className="text-ink group-hover:text-coconut mt-6 text-xl font-bold transition-colors duration-500">
                    {highlight.title}
                  </h3>
                  <p className="text-ink-soft group-hover:text-coconut/80 mt-3 leading-relaxed transition-colors duration-500">
                    {highlight.description}
                  </p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
