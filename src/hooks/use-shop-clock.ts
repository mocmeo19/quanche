import { useCurrentMinute } from '@/hooks/use-current-minute';
import { getShopClock } from '@/lib/shop-clock';
import type { ShopClock } from '@/types/shop';

export function useShopClock(): ShopClock | null {
  const minuteTimestamp = useCurrentMinute();
  if (minuteTimestamp === null) {
    return null;
  }
  return getShopClock(new Date(minuteTimestamp));
}
