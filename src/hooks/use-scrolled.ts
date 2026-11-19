import { useSyncExternalStore } from 'react';

function subscribeToScroll(onChange: () => void): () => void {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

function getServerSnapshot(): boolean {
  return false;
}

export function useScrolled(threshold: number): boolean {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > threshold,
    getServerSnapshot,
  );
}
