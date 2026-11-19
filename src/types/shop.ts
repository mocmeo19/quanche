export interface OpeningSlot {
  label: string;
  /** Theo quy ước của `Date.getDay()`: 0 là Chủ Nhật, 6 là Thứ Bảy. */
  weekdays: number[];
  opens: string;
  closes: string;
}

export interface ShopClock {
  weekday: number;
  minutesOfDay: number;
}

export type OpeningStatus =
  | { state: 'open'; closes: string }
  | { state: 'opens-later'; opens: string }
  | { state: 'opens-tomorrow'; opens: string }
  | { state: 'closed' };

export type HighlightIconName = 'sun' | 'leaf' | 'droplet';

export interface ShopHighlight {
  title: string;
  description: string;
  icon: HighlightIconName;
}
