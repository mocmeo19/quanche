'use client';

import { AnimatePresence, motion } from 'motion/react';
import { easeOutExpo } from '@/components/effects/motion-easing';
import { categoryIcons } from '@/components/menu/category-icons';
import { MenuItemCard } from '@/components/menu-page/MenuItemCard';
import {
  categoryDescriptions,
  categoryLabels,
} from '@/data/dessert-categories';
import { getCategoryAnchorId } from '@/lib/category-anchor';
import type { Dessert, DessertCategory, DessertGroup } from '@/types/dessert';

interface MenuCategoryGroupProps {
  group: DessertGroup;
  onActivate: (category: DessertCategory) => void;
  onSelectDessert: (dessert: Dessert) => void;
}

export function MenuCategoryGroup({
  group,
  onActivate,
  onSelectDessert,
}: MenuCategoryGroupProps) {
  const anchorId = getCategoryAnchorId(group.category);
  const titleId = `${anchorId}-title`;
  const CategoryIcon = categoryIcons[group.category];

  return (
    <motion.section
      id={anchorId}
      aria-labelledby={titleId}
      layout="position"
      onViewportEnter={() => onActivate(group.category)}
      viewport={{ margin: '-35% 0px -60% 0px' }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      className="scroll-mt-36 pt-16"
    >
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        className="border-ink/10 flex flex-wrap items-end justify-between gap-4 border-b pb-6"
      >
        <div className="flex items-center gap-5">
          <span className="bg-pandan-light text-pandan grid size-16 shrink-0 place-items-center rounded-3xl">
            <CategoryIcon aria-hidden="true" className="size-8" />
          </span>
          <div>
            <h2
              id={titleId}
              className="text-ink text-3xl font-black tracking-tight sm:text-4xl"
            >
              {categoryLabels[group.category]}
            </h2>
            <p className="text-ink-soft mt-1 max-w-xl">
              {categoryDescriptions[group.category]}
            </p>
          </div>
        </div>
        <p className="text-ink-soft text-sm font-semibold">
          {group.desserts.length} món
        </p>
      </motion.header>

      <ul className="relative mt-8 grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {group.desserts.map((dessert, index) => (
            <motion.li
              key={dessert.slug}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  delay: (index % 2) * 0.08,
                  ease: easeOutExpo,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
              exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
              transition={{ layout: { duration: 0.45, ease: easeOutExpo } }}
            >
              <MenuItemCard dessert={dessert} onSelect={onSelectDessert} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.section>
  );
}
