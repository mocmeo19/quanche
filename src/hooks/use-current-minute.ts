import { useSyncExternalStore } from 'react';

const MINUTE_IN_MS = 60_000;
const REFRESH_INTERVAL_MS = 15_000;

function subscribeToClock(onChange: () => void): () => void {
  const intervalId = window.setInterval(onChange, REFRESH_INTERVAL_MS);
  return () => window.clearInterval(intervalId);
}

function getMinuteTimestamp(): number {
  return Math.floor(Date.now() / MINUTE_IN_MS) * MINUTE_IN_MS;
}

function getServerSnapshot(): null {
  return null;
}

/**
 * Trả về mốc thời gian (ms) của phút hiện tại, hoặc `null` khi render trên server
 * vì Cache Components không cho đọc giờ hiện tại lúc prerender.
 */
export function useCurrentMinute(): number | null {
  return useSyncExternalStore<number | null>(
    subscribeToClock,
    getMinuteTimestamp,
    getServerSnapshot,
  );
}
