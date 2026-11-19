import { cn } from '@/lib/cn';

interface GrainOverlayProps {
  className?: string;
}

export function GrainOverlay({ className }: GrainOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('bg-grain pointer-events-none absolute inset-0', className)}
    />
  );
}
