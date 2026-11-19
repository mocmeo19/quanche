'use client';

import { useShopClock } from '@/hooks/use-shop-clock';
import type { OpeningSlot } from '@/types/shop';

interface OpeningHoursListProps {
  slots: OpeningSlot[];
}

export function OpeningHoursList({ slots }: OpeningHoursListProps) {
  const clock = useShopClock();

  return (
    <ul className="flex flex-col gap-1">
      {slots.map((slot) => {
        const isToday = clock !== null && slot.weekdays.includes(clock.weekday);

        return (
          <li
            key={slot.label}
            data-today={isToday}
            className="data-[today=true]:bg-coconut/10 -mx-3 flex items-center justify-between gap-4 rounded-xl px-3 py-2 transition-colors"
          >
            <span className="flex items-center gap-2">
              {slot.label}
              {isToday && (
                <span className="bg-mung text-ink rounded-full px-2 py-0.5 text-[0.65rem] font-bold tracking-wider uppercase">
                  Hôm nay
                </span>
              )}
            </span>
            <span className="font-semibold tabular-nums">
              {slot.opens} – {slot.closes}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
