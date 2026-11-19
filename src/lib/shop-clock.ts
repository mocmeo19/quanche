import type { ShopClock } from '@/types/shop';

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

// Giờ mở cửa luôn tính theo giờ Việt Nam, bất kể khách đang xem trang ở múi giờ nào.
const shopClockFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Ho_Chi_Minh',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

export function getShopClock(date: Date): ShopClock {
  const parts = shopClockFormatter.formatToParts(date);
  const readPart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? '';

  return {
    weekday: WEEKDAY_INDEX[readPart('weekday')] ?? 0,
    minutesOfDay: Number(readPart('hour')) * 60 + Number(readPart('minute')),
  };
}
