import type { OpeningSlot, OpeningStatus, ShopClock } from '@/types/shop';

function toMinutesOfDay(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function findSlot(
  slots: OpeningSlot[],
  weekday: number,
): OpeningSlot | undefined {
  return slots.find((slot) => slot.weekdays.includes(weekday));
}

export function getOpeningStatus(
  clock: ShopClock,
  slots: OpeningSlot[],
): OpeningStatus {
  const today = findSlot(slots, clock.weekday);

  if (today && clock.minutesOfDay < toMinutesOfDay(today.opens)) {
    return { state: 'opens-later', opens: today.opens };
  }
  if (today && clock.minutesOfDay < toMinutesOfDay(today.closes)) {
    return { state: 'open', closes: today.closes };
  }

  const tomorrow = findSlot(slots, (clock.weekday + 1) % 7);
  if (tomorrow) {
    return { state: 'opens-tomorrow', opens: tomorrow.opens };
  }
  return { state: 'closed' };
}
