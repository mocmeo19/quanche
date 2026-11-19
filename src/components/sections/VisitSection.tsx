import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { ClipReveal } from '@/components/effects/ClipReveal';
import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { Reveal } from '@/components/effects/Reveal';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { OpeningHoursList } from '@/components/ui/OpeningHoursList';
import { OpenStatusBadge } from '@/components/ui/OpenStatusBadge';
import { DessertMosaic } from '@/components/visit/DessertMosaic';
import { desserts } from '@/data/desserts';
import { shopInfo } from '@/data/shop-info';

export function VisitSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:py-32">
      <ClipReveal className="bg-ink text-coconut relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
        <DessertMosaic desserts={desserts} className="-z-20 opacity-70" />
        <div
          aria-hidden="true"
          className="bg-ink/80 lg:from-ink lg:via-ink/85 lg:to-ink/30 absolute inset-0 -z-10 lg:bg-transparent lg:bg-linear-to-r"
        />
        <GrainOverlay className="-z-10 opacity-10 mix-blend-soft-light" />

        <div className="grid gap-12 px-6 py-14 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-20">
          <div>
            <SectionHeading
              tone="dark"
              align="left"
              eyebrow="Địa chỉ"
              title="Thông tin liên hệ"
              description="Quán phục vụ tại chỗ trong không gian thoáng mát, đồng thời nhận đơn mang về và giao hàng cho đơn từ 5 phần trở lên."
            />
            <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={shopInfo.phoneHref} variant="accent">
                <Phone aria-hidden="true" className="size-5" />
                Gọi {shopInfo.phone}
              </ButtonLink>
              <ButtonLink
                href={shopInfo.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                <Navigation aria-hidden="true" className="size-5" />
                Chỉ đường
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="self-center">
            <div className="bg-ink/40 ring-coconut/15 rounded-[2rem] p-6 ring-1 backdrop-blur-xl sm:p-8">
              <OpenStatusBadge tone="dark" />
              <dl className="mt-8 grid gap-8">
                <div className="flex gap-4">
                  <span className="bg-coconut/10 text-mung grid size-11 shrink-0 place-items-center rounded-2xl">
                    <MapPin aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <dt className="text-coconut/60 text-sm">Địa chỉ</dt>
                    <dd className="mt-1 text-lg font-semibold">
                      {shopInfo.address}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-coconut/10 text-mung grid size-11 shrink-0 place-items-center rounded-2xl">
                    <Clock aria-hidden="true" className="size-5" />
                  </span>
                  <div className="flex-1">
                    <dt className="text-coconut/60 text-sm">Giờ mở cửa</dt>
                    <dd className="mt-2">
                      <OpeningHoursList slots={shopInfo.openingHours} />
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </ClipReveal>
    </section>
  );
}
