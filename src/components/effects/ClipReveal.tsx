'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { easeOutExpo } from '@/components/effects/motion-easing';

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
}

export function ClipReveal({ children, className }: ClipRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: 'inset(8% 6% 8% 6% round 2.5rem)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 2.5rem)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
