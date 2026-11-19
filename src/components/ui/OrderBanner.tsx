import { Phone, type LucideIcon } from 'lucide-react';
import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { Reveal } from '@/components/effects/Reveal';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { OpenStatusBadge } from '@/components/ui/OpenStatusBadge';
import { shopInfo } from '@/data/shop-info';
import type { NavLink } from '@/types/navigation';

interface OrderBannerProps {
  title: string;
  secondaryLink: NavLink;
  secondaryIcon: LucideIcon;
}

export function OrderBanner({
  title,
  secondaryLink,
  secondaryIcon: SecondaryIcon,
}: OrderBannerProps) {
  return (
    <section className="px-4 py-24 sm:px-6 lg:py-32">
      <Reveal className="bg-pandan text-coconut relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 lg:px-20 lg:py-20">
        <GrainOverlay className="-z-10 opacity-15 mix-blend-soft-light" />
        <div
          aria-hidden="true"
          className="bg-mung/30 absolute -top-24 -right-24 -z-10 size-96 rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="bg-redbean/30 absolute -bottom-32 -left-24 -z-10 size-96 rounded-full blur-3xl"
        />

        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-mung flex items-center gap-3 text-sm font-bold tracking-[0.25em] uppercase">
              <span aria-hidden="true" className="h-px w-10 bg-current" />
              Đặt hàng
            </p>
            <h2 className="mt-5 text-4xl leading-[1.08] font-black tracking-tight text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="text-coconut/80 mt-5 max-w-xl text-lg leading-relaxed">
              Nhận đơn mang về và giao hàng tận nơi cho đơn từ 5 phần trở lên.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <OpenStatusBadge tone="dark" />
            <ButtonLink href={shopInfo.phoneHref} variant="accent">
              <Phone aria-hidden="true" className="size-5" />
              Gọi {shopInfo.phone}
            </ButtonLink>
            <ButtonLink href={secondaryLink.href} variant="ghost">
              <SecondaryIcon aria-hidden="true" className="size-5" />
              {secondaryLink.label}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
