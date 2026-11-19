'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { cn } from '@/lib/cn';

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  offset?: number;
}

export function ParallaxImage({
  src,
  alt,
  sizes,
  className,
  offset = 60,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Tắt parallax bằng CSS thay vì useReducedMotion để HTML server và client luôn khớp. */}
      <motion.div
        className="absolute inset-x-0 motion-reduce:transform-none!"
        style={{ y, top: -offset, bottom: -offset }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
