import { Award, Plus } from 'lucide-react';
import Image from 'next/image';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { formatPrice } from '@/lib/format-price';
import type { Dessert } from '@/types/dessert';

interface MenuItemCardProps {
  dessert: Dessert;
  onSelect: (dessert: Dessert) => void;
}

export function MenuItemCard({ dessert, onSelect }: MenuItemCardProps) {
  return (
    <article className="group bg-coconut ring-ink/5 hover:shadow-redbean/10 ease-out-expo relative flex h-full gap-4 rounded-[1.75rem] p-3 shadow-sm ring-1 transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:gap-5 sm:p-4">
      <div className="bg-pandan-light relative size-24 shrink-0 overflow-hidden rounded-2xl sm:size-32">
        <Image
          src={getDessertImageSrc(dessert.slug)}
          alt={dessert.name}
          fill
          sizes="128px"
          className="ease-out-expo object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col py-1 pr-2">
        <div className="flex items-baseline gap-3">
          <h3 className="text-ink group-hover:text-redbean text-lg leading-snug font-bold transition-colors sm:text-xl">
            {dessert.name}
          </h3>
          <span
            aria-hidden="true"
            className="border-ink/20 mb-1 hidden min-w-4 flex-1 border-b-2 border-dotted sm:block"
          />
          <p className="text-redbean ml-auto shrink-0 font-extrabold tabular-nums sm:ml-0">
            {formatPrice(dessert.price)}
          </p>
        </div>

        {dessert.isBestSeller && (
          <p className="text-redbean mt-1 inline-flex items-center gap-1 text-xs font-bold">
            <Award aria-hidden="true" className="size-3.5" />
            Bán chạy
          </p>
        )}

        <p className="text-ink-soft mt-2 line-clamp-2 text-sm leading-relaxed">
          {dessert.description}
        </p>
        <p className="text-ink-soft/80 mt-auto pt-3 text-xs">
          {dessert.ingredients.join(' · ')}
        </p>
      </div>

      <span
        aria-hidden="true"
        className="bg-cream text-ink ease-out-expo absolute -top-2 -right-2 grid size-9 scale-75 place-items-center rounded-full opacity-0 shadow-md transition duration-300 group-hover:scale-100 group-hover:opacity-100"
      >
        <Plus className="size-4" />
      </span>

      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => onSelect(dessert)}
        className="absolute inset-0 rounded-[1.75rem]"
      >
        <span className="sr-only">Xem chi tiết {dessert.name}</span>
      </button>
    </article>
  );
}
