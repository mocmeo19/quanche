import Image from 'next/image';
import { Marquee } from '@/components/effects/Marquee';
import { cn } from '@/lib/cn';
import { getDessertImageSrc } from '@/lib/dessert-image';
import type { Dessert } from '@/types/dessert';

interface DessertMosaicProps {
  desserts: Dessert[];
  className?: string;
}

function buildRows(desserts: Dessert[]): Dessert[][] {
  const middle = Math.ceil(desserts.length / 2);
  const reversed = [...desserts].reverse();
  return [
    desserts.slice(0, middle),
    desserts.slice(middle),
    reversed.slice(0, middle),
    reversed.slice(middle),
  ];
}

export function DessertMosaic({ desserts, className }: DessertMosaicProps) {
  const rows = buildRows(desserts);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 flex scale-150 -rotate-6 flex-col justify-center gap-4 lg:scale-125',
        className,
      )}
    >
      {rows.map((row, rowIndex) => (
        <Marquee
          key={rowIndex}
          reverse={rowIndex % 2 === 1}
          durationSeconds={60 + rowIndex * 8}
          repeat={2}
        >
          {row.map((dessert) => (
            <div
              key={dessert.slug}
              className="relative mr-4 aspect-square w-36 shrink-0 overflow-hidden rounded-3xl sm:w-48"
            >
              <Image
                src={getDessertImageSrc(dessert.slug)}
                alt=""
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  );
}
