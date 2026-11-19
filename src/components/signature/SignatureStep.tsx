'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { formatPrice } from '@/lib/format-price';
import { padNumber } from '@/lib/pad-number';
import type { Dessert } from '@/types/dessert';

interface SignatureStepProps {
  dessert: Dessert;
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
}

export function SignatureStep({
  dessert,
  index,
  isActive,
  onActivate,
}: SignatureStepProps) {
  return (
    <motion.li
      data-active={isActive}
      onViewportEnter={() => onActivate(index)}
      viewport={{ margin: '-45% 0px -45% 0px' }}
      className="flex flex-col justify-center gap-6 py-12 transition-opacity duration-700 lg:min-h-[80svh] lg:opacity-25 lg:data-[active=true]:opacity-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:hidden">
        <Image
          src={getDessertImageSrc(dessert.slug)}
          alt={dessert.name}
          fill
          sizes="(min-width: 640px) 600px, 100vw"
          className="object-cover"
        />
      </div>

      <span
        aria-hidden="true"
        className="text-outline text-7xl leading-none font-black sm:text-8xl"
      >
        {padNumber(index + 1)}
      </span>

      <div>
        <h3 className="text-mung text-sm font-bold tracking-[0.25em] uppercase">
          {dessert.name}
        </h3>
        {dessert.tagline && (
          <p className="text-cream mt-3 text-4xl leading-[1.1] font-black tracking-tight text-balance sm:text-5xl">
            {dessert.tagline}
          </p>
        )}
      </div>

      <p className="text-cream/70 max-w-lg text-lg leading-relaxed">
        {dessert.description}
      </p>

      <ul
        className="flex flex-wrap gap-2"
        aria-label={`Thành phần của ${dessert.name}`}
      >
        {dessert.ingredients.map((ingredient) => (
          <li
            key={ingredient}
            className="bg-cream/10 text-cream/85 ring-cream/10 rounded-full px-3.5 py-1.5 text-sm ring-1"
          >
            {ingredient}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <p className="text-mung text-3xl font-black">
          {formatPrice(dessert.price)}
        </p>
        <Link
          href="/thuc-don"
          className="group text-cream hover:text-mung inline-flex items-center gap-2 font-semibold transition-colors"
        >
          Xem thực đơn đầy đủ
          <ArrowRight
            aria-hidden="true"
            className="size-5 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.li>
  );
}
