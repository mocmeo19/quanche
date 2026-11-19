'use client';

import { useState } from 'react';
import { SignatureGallery } from '@/components/signature/SignatureGallery';
import { SignatureStep } from '@/components/signature/SignatureStep';
import type { Dessert } from '@/types/dessert';

interface SignatureShowcaseProps {
  desserts: Dessert[];
}

export function SignatureShowcase({ desserts }: SignatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-20">
      <div className="hidden lg:block">
        <div className="sticky top-0 flex h-svh items-center justify-center py-24">
          <SignatureGallery desserts={desserts} activeIndex={activeIndex} />
        </div>
      </div>

      <ol>
        {desserts.map((dessert, index) => (
          <SignatureStep
            key={dessert.slug}
            dessert={dessert}
            index={index}
            isActive={index === activeIndex}
            onActivate={setActiveIndex}
          />
        ))}
      </ol>
    </div>
  );
}
