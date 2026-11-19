'use client';

import { motion } from 'motion/react';
import { categoryIcons } from '@/components/menu/category-icons';
import { categoryLabels } from '@/data/dessert-categories';
import { getCategoryAnchorId } from '@/lib/category-anchor';
import type { DessertCategory, DessertGroup } from '@/types/dessert';

interface MenuCategoryNavProps {
  groups: DessertGroup[];
  activeCategory: DessertCategory | null;
}

export function MenuCategoryNav({
  groups,
  activeCategory,
}: MenuCategoryNavProps) {
  return (
    <div className="bg-cream/85 border-ink/5 sticky top-16 z-30 mt-12 border-y backdrop-blur-xl">
      <nav aria-label="Nhóm món" className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="-mx-1 flex [scrollbar-width:none] gap-1 overflow-x-auto [mask-image:linear-gradient(to_right,#000_80%,transparent)] py-3 sm:[mask-image:none]">
          {groups.map((group) => {
            const isActive = group.category === activeCategory;
            const isEmpty = group.desserts.length === 0;
            const CategoryIcon = categoryIcons[group.category];

            return (
              <li key={group.category} className="shrink-0">
                <a
                  href={`#${getCategoryAnchorId(group.category)}`}
                  aria-current={isActive ? 'location' : undefined}
                  aria-disabled={isEmpty}
                  tabIndex={isEmpty ? -1 : undefined}
                  data-active={isActive}
                  data-empty={isEmpty}
                  className="group text-ink-soft hover:text-ink data-[active=true]:text-coconut relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors data-[empty=true]:pointer-events-none data-[empty=true]:opacity-40"
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-category-pill"
                      className="bg-redbean shadow-redbean/30 absolute inset-0 rounded-full shadow-md"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <CategoryIcon
                    aria-hidden="true"
                    className="relative size-4"
                  />
                  <span className="relative">
                    {categoryLabels[group.category]}
                  </span>
                  <span className="bg-ink/5 group-data-[active=true]:bg-coconut/20 relative rounded-full px-2 py-0.5 text-xs tabular-nums">
                    {group.desserts.length}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
