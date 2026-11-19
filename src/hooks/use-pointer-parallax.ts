import { useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { useEffect } from 'react';
import type { PointerParallax } from '@/types/pointer-parallax';

const SPRING_OPTIONS = { stiffness: 60, damping: 20, mass: 0.6 };

export function usePointerParallax(): PointerParallax {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse') {
        return;
      }
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    }

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [pointerX, pointerY, prefersReducedMotion]);

  const x = useSpring(pointerX, SPRING_OPTIONS);
  const y = useSpring(pointerY, SPRING_OPTIONS);
  return { x, y };
}
