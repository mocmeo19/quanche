import { Fragment, type CSSProperties, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
  reverse?: boolean;
  /** Số lần lặp nội dung trong mỗi nửa dải; tăng lên khi nội dung ngắn hơn màn hình rộng. */
  repeat?: number;
}

export function Marquee({
  children,
  className,
  durationSeconds = 40,
  reverse = false,
  repeat = 1,
}: MarqueeProps) {
  const trackStyle: CSSProperties = {
    animationDuration: `${durationSeconds}s`,
    animationDirection: reverse ? 'reverse' : 'normal',
  };
  const sequence = Array.from({ length: repeat }, (_, index) => (
    <Fragment key={index}>{children}</Fragment>
  ));

  return (
    <div className={cn('group/marquee flex overflow-hidden', className)}>
      <div
        className="animate-marquee flex w-max shrink-0 group-hover/marquee:[animation-play-state:paused]"
        style={trackStyle}
      >
        <div className="flex shrink-0 items-center">{sequence}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {sequence}
        </div>
      </div>
    </div>
  );
}
