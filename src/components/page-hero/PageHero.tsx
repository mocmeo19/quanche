import type { ReactNode } from 'react';
import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { RevealWords } from '@/components/effects/RevealWords';
import { PageBreadcrumb } from '@/components/page-hero/PageBreadcrumb';
import { OpenStatusBadge } from '@/components/ui/OpenStatusBadge';

interface PageHeroProps {
  pageLabel: string;
  title: string;
  highlight: string;
  description: string;
  /** Đặt cạnh đoạn mô tả trên màn hình lớn, ví dụ bảng số liệu. */
  aside?: ReactNode;
  /** Hiển thị tràn chiều ngang ở cuối hero, ví dụ dải ảnh chạy. */
  children?: ReactNode;
}

export function PageHero({
  pageLabel,
  title,
  highlight,
  description,
  aside,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-ink text-cream relative isolate overflow-hidden pt-32 pb-20 sm:pt-36">
      <GrainOverlay className="-z-10 opacity-[0.15] mix-blend-soft-light" />
      <div
        aria-hidden="true"
        className="animate-drift bg-redbean/45 absolute -top-40 -left-32 -z-10 size-[34rem] rounded-full blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="animate-drift bg-pandan/40 absolute top-24 -right-40 -z-10 size-[30rem] rounded-full blur-[130px] [animation-delay:-10s]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="animate-fade-up flex flex-wrap items-center justify-between gap-4">
          <PageBreadcrumb currentLabel={pageLabel} />
          <OpenStatusBadge tone="dark" />
        </div>

        <h1 className="mt-10 text-5xl leading-[1.18] font-black tracking-tight sm:text-7xl lg:text-[7.5rem]">
          <RevealWords text={title} />
          <RevealWords
            text={highlight}
            startDelayMs={180}
            className="text-mung block italic"
          />
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <p className="animate-fade-up text-cream/75 max-w-xl text-lg leading-relaxed [animation-delay:450ms] sm:text-xl">
            {description}
          </p>
          {aside}
        </div>
      </div>

      {children}
    </section>
  );
}
