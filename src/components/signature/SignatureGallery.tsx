'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { easeOutExpo } from '@/components/effects/motion-easing';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { padNumber } from '@/lib/pad-number';
import type { Dessert } from '@/types/dessert';

interface SignatureGalleryProps {
  desserts: Dessert[];
  activeIndex: number;
}

const slideVariants = {
  active: { opacity: 1, scale: 1 },
  inactive: { opacity: 0, scale: 1.12 },
};

export function SignatureGallery({
  desserts,
  activeIndex,
}: SignatureGalleryProps) {
  const activeDessert = desserts[activeIndex];

  return (
    <div className="ring-cream/10 relative aspect-[4/5] h-full max-h-[46rem] max-w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 shadow-black/40">
      {desserts.map((dessert, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={dessert.slug}
            aria-hidden={!isActive}
            className="absolute inset-0"
            variants={slideVariants}
            initial={false}
            animate={isActive ? 'active' : 'inactive'}
            transition={{ duration: 1, ease: easeOutExpo }}
          >
            <Image
              src={getDessertImageSrc(dessert.slug)}
              alt={dessert.name}
              fill
              sizes="(min-width: 1280px) 580px, 45vw"
              className="object-cover"
            />
          </motion.div>
        );
      })}

      <div className="from-ink/90 absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent px-8 pt-28 pb-8">
        <div className="flex items-end justify-between gap-6">
          <p className="text-cream leading-none font-black tabular-nums">
            <span className="text-6xl">{padNumber(activeIndex + 1)}</span>
            <span className="text-cream/50 text-xl">
              {' '}
              / {padNumber(desserts.length)}
            </span>
          </p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={activeDessert.slug}
              className="text-mung text-right text-sm font-bold tracking-[0.2em] uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {activeDessert.name}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex gap-2">
          {desserts.map((dessert, index) => (
            <span
              key={dessert.slug}
              className="bg-cream/15 h-1 flex-1 overflow-hidden rounded-full"
            >
              <motion.span
                className="bg-mung block h-full origin-left rounded-full"
                initial={false}
                animate={{ scaleX: index <= activeIndex ? 1 : 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
