import { Sparkle } from 'lucide-react';
import { Marquee } from '@/components/effects/Marquee';
import { desserts } from '@/data/desserts';
import { shopHighlights, shopInfo } from '@/data/shop-info';

const dessertNames = desserts.map((dessert) => dessert.name);
const shopPromises = [
  ...shopHighlights.map((highlight) => highlight.title),
  'Nhận đơn mang về',
  'Giao hàng cho đơn từ 5 phần',
  shopInfo.slogan,
];

export function MarqueeBand() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden py-12 lg:py-16">
      <div className="bg-redbean text-coconut shadow-redbean/30 relative z-10 -mx-6 -rotate-2 py-4 shadow-2xl sm:py-5">
        <Marquee durationSeconds={50}>
          {dessertNames.map((name) => (
            <span
              key={name}
              className="flex items-center gap-8 pr-8 text-2xl font-black tracking-tight whitespace-nowrap uppercase sm:text-4xl"
            >
              {name}
              <Sparkle className="text-mung size-6 shrink-0 fill-current sm:size-8" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="bg-mung text-ink -mx-6 -mt-4 rotate-[1.5deg] py-3">
        <Marquee durationSeconds={40} reverse repeat={2}>
          {shopPromises.map((promise) => (
            <span
              key={promise}
              className="flex items-center gap-6 pr-6 text-base font-bold whitespace-nowrap sm:text-lg"
            >
              {promise}
              <span className="bg-ink/40 size-1.5 shrink-0 rounded-full" />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
