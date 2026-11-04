import type { Dessert } from "@/types/dessert";
import Image from "next/image";
import { formatPrice } from "@/lib/format-price";

interface DessertCardProps {
  dessert: Dessert;
}

export function DessertCard({ dessert }: DessertCardProps) {
  return (
    <article className="group bg-coconut ring-ink/5 relative flex flex-col overflow-hidden rounded-3xl shadow-sm ring-1 transition hover:-translate-y-1 hover:shadow-lg">
      {dessert.isBestSeller && (
        <span className="bg-redbean text-coconut absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-semibold">
          Bán chạy
        </span>
      )}

      <div className="relative aspect-square overflow-hidden">
        <Image
          src={`/images/desserts/${dessert.slug}.png`}
          alt={dessert.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-ink text-xl font-semibold">{dessert.name}</h3>
          <p className="text-pandan shrink-0 font-semibold">{formatPrice(dessert.price)}</p>
        </div>
        <p className="text-ink-soft text-sm leading-relaxed">{dessert.description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Thành phần">
          {dessert.ingredients.map((ingredient) => (
            <li key={ingredient} className="bg-cream text-ink-soft rounded-full px-3 py-1 text-xs">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
