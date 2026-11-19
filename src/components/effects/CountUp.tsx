'use client';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react';
import { useEffect, useRef } from 'react';
import { easeOutExpo } from '@/components/effects/motion-easing';

interface CountUpProps {
  value: number;
  suffix?: string;
  durationSeconds?: number;
}

export function CountUp({
  value,
  suffix = '',
  durationSeconds = 2,
}: CountUpProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.8 });
  const prefersReducedMotion = useReducedMotion();
  const current = useMotionValue(0);
  const rounded = useTransform(current, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) {
      return;
    }
    if (prefersReducedMotion) {
      current.set(value);
      return;
    }

    const controls = animate(current, value, {
      duration: durationSeconds,
      ease: easeOutExpo,
    });
    return () => controls.stop();
  }, [current, durationSeconds, isInView, prefersReducedMotion, value]);

  return (
    <span ref={containerRef}>
      <span className="sr-only">{`${value}${suffix}`}</span>
      <span aria-hidden="true">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
    </span>
  );
}
