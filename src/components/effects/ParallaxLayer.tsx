'use client';

import { motion, useTransform } from 'motion/react';
import type { ReactNode } from 'react';
import type { PointerParallax } from '@/types/pointer-parallax';

interface ParallaxLayerProps {
  pointer: PointerParallax;
  depth: number;
  className?: string;
  children: ReactNode;
}

export function ParallaxLayer({
  pointer,
  depth,
  className,
  children,
}: ParallaxLayerProps) {
  const x = useTransform(pointer.x, (value) => value * depth);
  const y = useTransform(pointer.y, (value) => value * depth);

  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}
