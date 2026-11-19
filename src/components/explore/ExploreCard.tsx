import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { padNumber } from '@/lib/pad-number';
import type { ExplorePage } from '@/types/navigation';

interface ExploreCardProps {
  page: ExplorePage;
  index: number;
}

export function ExploreCard({ page, index }: ExploreCardProps) {
  return (
    <Link
      href={page.href}
      className="group bg-ink text-coconut shadow-ink/15 relative isolate flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] p-6 shadow-xl sm:min-h-[30rem] sm:p-8"
    >
      <Image
        src={getDessertImageSrc(page.imageSlug)}
        alt=""
        fill
        sizes="(min-width: 768px) 620px, 92vw"
        className="ease-out-expo -z-20 object-cover transition duration-1000 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="from-ink/95 via-ink/40 absolute inset-0 -z-10 bg-linear-to-t to-transparent"
      />
      <span
        aria-hidden="true"
        className="text-outline absolute top-4 right-6 text-7xl font-black"
      >
        {padNumber(index + 1)}
      </span>

      <p className="text-mung text-sm font-bold tracking-[0.25em] uppercase">
        {page.label}
      </p>
      <h3 className="mt-3 text-3xl font-black tracking-tight text-balance sm:text-4xl">
        {page.title}
      </h3>
      <p className="text-coconut/75 mt-3 max-w-md leading-relaxed">
        {page.description}
      </p>
      <span className="bg-coconut text-ink group-hover:bg-mung mt-6 inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold transition-colors">
        {page.cta}
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:rotate-45"
        />
      </span>
    </Link>
  );
}
