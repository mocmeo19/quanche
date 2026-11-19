import { Award, Check, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { categoryIcons } from '@/components/menu/category-icons';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { categoryLabels } from '@/data/dessert-categories';
import { shopInfo } from '@/data/shop-info';
import { getDessertImageSrc } from '@/lib/dessert-image';
import { formatPrice } from '@/lib/format-price';
import type { Dessert } from '@/types/dessert';

interface DessertDialogContentProps {
  dessert: Dessert;
  titleId: string;
  onClose: () => void;
}

export function DessertDialogContent({
  dessert,
  titleId,
  onClose,
}: DessertDialogContentProps) {
  const CategoryIcon = categoryIcons[dessert.category];

  return (
    <div className="grid max-h-[inherit] overflow-y-auto md:grid-cols-[1.05fr_1fr]">
      <button
        type="button"
        onClick={onClose}
        className="bg-coconut/90 text-ink hover:bg-coconut absolute top-4 right-4 z-10 grid size-11 place-items-center rounded-full shadow-lg backdrop-blur transition-colors"
      >
        <X aria-hidden="true" className="size-5" />
        <span className="sr-only">Đóng</span>
      </button>

      <div className="bg-pandan-light relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[34rem]">
        <Image
          src={getDessertImageSrc(dessert.slug)}
          alt={dessert.name}
          fill
          sizes="(min-width: 768px) 520px, 100vw"
          className="animate-zoom-in object-cover"
        />
        {dessert.isBestSeller && (
          <span className="bg-redbean text-coconut absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-lg">
            <Award aria-hidden="true" className="size-3.5" />
            Bán chạy
          </span>
        )}
      </div>

      <div className="flex flex-col gap-6 p-6 sm:p-10">
        <p className="text-pandan inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase">
          <CategoryIcon aria-hidden="true" className="size-4" />
          {categoryLabels[dessert.category]}
        </p>

        <div>
          <h2
            id={titleId}
            className="text-ink text-4xl leading-tight font-black tracking-tight"
          >
            {dessert.name}
          </h2>
          {dessert.tagline && (
            <p className="text-redbean mt-2 text-lg font-semibold italic">
              {dessert.tagline}
            </p>
          )}
        </div>

        <p className="text-ink-soft leading-relaxed">{dessert.description}</p>

        <div>
          <h3 className="text-ink text-sm font-bold tracking-widest uppercase">
            Thành phần
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {dessert.ingredients.map((ingredient) => (
              <li
                key={ingredient}
                className="text-ink flex items-center gap-2 text-sm"
              >
                <span className="bg-pandan-light text-pandan grid size-6 shrink-0 place-items-center rounded-full">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-ink/10 mt-auto flex flex-wrap items-center justify-between gap-4 border-t pt-6">
          <p className="text-redbean text-3xl font-black tabular-nums">
            {formatPrice(dessert.price)}
          </p>
          <ButtonLink href={shopInfo.phoneHref}>
            <Phone aria-hidden="true" className="size-5" />
            Gọi đặt món
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
