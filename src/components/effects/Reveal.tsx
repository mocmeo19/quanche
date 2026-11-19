'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { easeOutExpo } from '@/components/effects/motion-easing';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 40,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
