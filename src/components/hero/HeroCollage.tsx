'use client';

import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { ParallaxLayer } from '@/components/effects/ParallaxLayer';
import { shopInfo } from '@/data/shop-info';
import { usePointerParallax } from '@/hooks/use-pointer-parallax';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { formatPrice } from '@/lib/format-price';
import type { Dessert } from '@/types/dessert';

interface HeroCollageProps {
  featured: Dessert;
  leftAccent: Dessert;
  rightAccent: Dessert;
}

const BADGE_PATH_ID = 'hero-badge-path';
const BADGE_CIRCUMFERENCE = 289;
const badgeText = `Nấu mới mỗi ngày • ${shopInfo.name} • `.toLocaleUpperCase(
  'vi-VN',
);

export function HeroCollage({
  featured,
  leftAccent,
  rightAccent,
}: HeroCollageProps) {
  const pointer = usePointerParallax();

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[32rem]">
      <ParallaxLayer
        pointer={pointer}
        depth={-12}
        className="absolute inset-[0%_2%_14%_20%]"
      >
        <div className="animate-zoom-in bg-pandan-light h-full rounded-t-full rounded-b-[3rem]" />
      </ParallaxLayer>

      <ParallaxLayer
        pointer={pointer}
        depth={16}
        className="absolute inset-[5%_12%_8%_6%]"
      >
        <div className="animate-zoom-in ring-coconut shadow-ink/25 relative h-full overflow-hidden rounded-t-full rounded-b-[3rem] shadow-2xl ring-8 [animation-delay:150ms]">
          <Image
            src={getDessertImageSrc(featured.slug)}
            alt={`${featured.name}: ${featured.ingredients.join(', ').toLowerCase()}`}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 420px, 80vw"
            className="object-cover"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        pointer={pointer}
        depth={40}
        className="absolute top-[22%] -left-[3%] w-[30%]"
      >
        <div className="animate-float">
          <div className="animate-zoom-in ring-coconut relative aspect-square overflow-hidden rounded-full shadow-xl ring-[6px] [animation-delay:300ms]">
            <Image
              src={getDessertImageSrc(leftAccent.slug)}
              alt={leftAccent.name}
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        pointer={pointer}
        depth={32}
        className="absolute -right-[3%] bottom-[16%] w-[34%]"
      >
        <div className="animate-float [animation-delay:-3.5s]">
          <div className="animate-zoom-in ring-coconut relative aspect-square overflow-hidden rounded-full shadow-xl ring-[6px] [animation-delay:450ms]">
            <Image
              src={getDessertImageSrc(rightAccent.slug)}
              alt={rightAccent.name}
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        pointer={pointer}
        depth={-28}
        className="absolute -top-[2%] right-[2%] w-[26%]"
      >
        <div className="animate-zoom-in relative aspect-square [animation-delay:600ms]">
          <svg
            viewBox="0 0 120 120"
            aria-hidden="true"
            className="animate-spin-slow text-ink absolute inset-0 size-full"
          >
            <defs>
              <path
                id={BADGE_PATH_ID}
                d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
              />
            </defs>
            <text className="fill-current text-[9px] font-bold">
              <textPath
                href={`#${BADGE_PATH_ID}`}
                textLength={BADGE_CIRCUMFERENCE}
                lengthAdjust="spacing"
              >
                {badgeText}
              </textPath>
            </text>
          </svg>
          <span className="bg-mung text-ink absolute inset-[26%] grid place-items-center rounded-full shadow-lg">
            <Sparkles aria-hidden="true" className="size-6" />
          </span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        pointer={pointer}
        depth={24}
        className="absolute bottom-[1%] left-0"
      >
        <div className="animate-float [animation-delay:-2s]">
          <div className="animate-fade-up bg-coconut/90 rounded-2xl px-5 py-4 shadow-xl backdrop-blur [animation-delay:800ms]">
            <p className="text-ink-soft text-[0.7rem] font-bold tracking-[0.2em] uppercase">
              Bán chạy nhất
            </p>
            <p className="text-ink mt-1 text-lg font-extrabold">
              {featured.name}
            </p>
            <p className="text-redbean text-sm font-bold">
              {formatPrice(featured.price)}
            </p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        pointer={pointer}
        depth={56}
        className="absolute top-[9%] left-[14%]"
      >
        <span className="animate-float bg-redbean block size-3 rounded-full [animation-delay:-1s]" />
      </ParallaxLayer>
      <ParallaxLayer
        pointer={pointer}
        depth={-44}
        className="absolute top-[60%] -left-[6%]"
      >
        <span className="animate-float bg-mung block size-5 rounded-full [animation-delay:-4s]" />
      </ParallaxLayer>
      <ParallaxLayer
        pointer={pointer}
        depth={48}
        className="absolute right-[36%] bottom-[5%]"
      >
        <span className="animate-float bg-pandan block size-4 rounded-full [animation-delay:-2.5s]" />
      </ParallaxLayer>
    </div>
  );
}
