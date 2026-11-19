'use client';

import { shopInfo } from '@/data/shop-info';
import { useShopClock } from '@/hooks/use-shop-clock';
import { cn } from '@/lib/cn';
import { getOpeningStatus } from '@/lib/opening-status';
import type { OpeningStatus } from '@/types/shop';

type BadgeTone = 'light' | 'dark';
type StatusIndicator = 'open' | 'closed' | 'unknown';

interface StatusDescription {
  label: string;
  indicator: StatusIndicator;
}

interface OpenStatusBadgeProps {
  tone?: BadgeTone;
  className?: string;
}

const toneClasses: Record<BadgeTone, string> = {
  light: 'bg-coconut/80 text-ink ring-ink/10',
  dark: 'bg-coconut/10 text-coconut ring-coconut/20',
};

const indicatorClasses: Record<StatusIndicator, string> = {
  open: 'bg-emerald-500',
  closed: 'bg-redbean',
  unknown: 'bg-mung',
};

function describeStatus(status: OpeningStatus | null): StatusDescription {
  if (status === null) {
    return { label: 'Chè Việt nấu mới mỗi ngày', indicator: 'unknown' };
  }

  switch (status.state) {
    case 'open':
      return { label: `Đang mở cửa · đến ${status.closes}`, indicator: 'open' };
    case 'opens-later':
      return {
        label: `Chưa mở cửa · mở lúc ${status.opens}`,
        indicator: 'closed',
      };
    case 'opens-tomorrow':
      return {
        label: `Đã đóng cửa · mở lại ${status.opens} ngày mai`,
        indicator: 'closed',
      };
    case 'closed':
      return { label: 'Hôm nay quán nghỉ', indicator: 'closed' };
  }
}

export function OpenStatusBadge({
  tone = 'light',
  className,
}: OpenStatusBadgeProps) {
  const clock = useShopClock();
  const status = clock ? getOpeningStatus(clock, shopInfo.openingHours) : null;
  const { label, indicator } = describeStatus(status);

  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-semibold ring-1 backdrop-blur',
        toneClasses[tone],
        className,
      )}
    >
      <span className="relative flex size-2.5">
        {indicator === 'open' && (
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
        )}
        <span
          className={cn(
            'relative size-2.5 rounded-full',
            indicatorClasses[indicator],
          )}
        />
      </span>
      {label}
    </p>
  );
}
