import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { RevealWords } from '@/components/effects/RevealWords';
import { HeroCollage } from '@/components/hero/HeroCollage';
import { ScrollHint } from '@/components/hero/ScrollHint';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { OpenStatusBadge } from '@/components/ui/OpenStatusBadge';
import { desserts } from '@/data/desserts';
import { shopInfo } from '@/data/shop-info';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { findDessert } from '@/lib/find-dessert';

const featuredDessert = findDessert(desserts, 'che-ba-mau');
const leftAccent = findDessert(desserts, 'che-thai');
const rightAccent = findDessert(desserts, 'che-khuc-bach');
const previewDesserts = [
  'che-buoi',
  'che-troi-nuoc',
  'suong-sa-hat-luu',
  'che-sen-long-nhan',
].map((slug) => findDessert(desserts, slug));

export function HeroSection() {
  return (
    <section className="bg-cream relative isolate overflow-hidden pt-32 pb-24 lg:flex lg:min-h-svh lg:items-center lg:pt-28 lg:pb-32">
      <div
        aria-hidden="true"
        className="animate-drift bg-pandan-light absolute -top-40 -right-40 -z-10 size-[36rem] rounded-full opacity-80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift bg-mung/30 absolute -bottom-48 -left-40 -z-10 size-[32rem] rounded-full blur-3xl [animation-delay:-9s]"
      />
      <GrainOverlay className="-z-10 opacity-[0.08] mix-blend-multiply" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div>
          <div className="animate-fade-up">
            <OpenStatusBadge />
          </div>

          <h1 className="text-ink mt-7 text-[2.75rem] leading-[1.12] font-black tracking-tight text-balance sm:text-6xl xl:text-[4rem]">
            <RevealWords text="Chè truyền thống," />
            <RevealWords
              text="chế biến mỗi ngày."
              startDelayMs={270}
              className="text-redbean block italic"
            />
          </h1>

          <p className="animate-fade-up text-ink-soft mt-8 max-w-xl text-lg leading-relaxed [animation-delay:600ms] sm:text-xl">
            {shopInfo.name} phục vụ các món chè ba miền tại TP. Hồ Chí Minh, từ
            chè ba màu, chè Thái đến chè trôi nước và chè sen long nhãn. Toàn bộ
            sản phẩm được chế biến trong ngày.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-4 [animation-delay:750ms]">
            <ButtonLink href="/thuc-don">
              Xem thực đơn
              <ArrowRight
                aria-hidden="true"
                className="size-5 transition-transform group-hover/button:translate-x-1"
              />
            </ButtonLink>
            <ButtonLink href="/ghe-quan" variant="secondary">
              <MapPin aria-hidden="true" className="text-redbean size-5" />
              Xem địa chỉ
            </ButtonLink>
          </div>

          <div className="animate-fade-up mt-12 flex items-center gap-4 [animation-delay:900ms]">
            <div className="flex -space-x-3">
              {previewDesserts.map((dessert) => (
                <div
                  key={dessert.slug}
                  className="ring-cream relative size-12 overflow-hidden rounded-full ring-4"
                >
                  <Image
                    src={getDessertImageSrc(dessert.slug)}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-ink-soft text-sm leading-snug">
              <strong className="text-ink block text-base">
                {desserts.length} món chè ba miền
              </strong>
              gồm chè nóng, chè lạnh và chè đặc biệt
            </p>
          </div>
        </div>

        <HeroCollage
          featured={featuredDessert}
          leftAccent={leftAccent}
          rightAccent={rightAccent}
        />
      </div>

      <ScrollHint />
    </section>
  );
}
