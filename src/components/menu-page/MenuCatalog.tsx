'use client';

import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { DessertDialog } from '@/components/menu-page/DessertDialog';
import { MenuCategoryGroup } from '@/components/menu-page/MenuCategoryGroup';
import { MenuCategoryNav } from '@/components/menu-page/MenuCategoryNav';
import { MenuEmptyState } from '@/components/menu-page/MenuEmptyState';
import { MenuSearch } from '@/components/menu-page/MenuSearch';
import { dessertCategoryOrder } from '@/data/dessert-categories';
import { groupDessertsByCategory } from '@/lib/dessert-filters';
import { searchDesserts } from '@/lib/dessert-search';
import type { Dessert, DessertCategory, DessertGroup } from '@/types/dessert';

interface MenuCatalogProps {
  desserts: Dessert[];
}

function resolveActiveCategory(
  visibleGroups: DessertGroup[],
  preferred: DessertCategory,
): DessertCategory | null {
  if (visibleGroups.some((group) => group.category === preferred)) {
    return preferred;
  }
  return visibleGroups[0]?.category ?? null;
}

export function MenuCatalog({ desserts }: MenuCatalogProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<DessertCategory>(
    dessertCategoryOrder[0],
  );
  const [selectedDessert, setSelectedDessert] = useState<Dessert | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const results = searchDesserts(desserts, query);
  const groups = groupDessertsByCategory(results, dessertCategoryOrder);
  const visibleGroups = groups.filter((group) => group.desserts.length > 0);
  const currentCategory = resolveActiveCategory(visibleGroups, activeCategory);

  const openDessert = (dessert: Dessert) => {
    setSelectedDessert(dessert);
    setIsDialogOpen(true);
  };

  return (
    <div className="relative">
      <div className="relative z-10 mx-auto -mt-16 max-w-4xl px-4 sm:px-6">
        <MenuSearch
          query={query}
          resultCount={results.length}
          onQueryChange={setQuery}
        />
      </div>

      <MenuCategoryNav groups={groups} activeCategory={currentCategory} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatePresence initial={false}>
          {visibleGroups.map((group) => (
            <MenuCategoryGroup
              key={group.category}
              group={group}
              onActivate={setActiveCategory}
              onSelectDessert={openDessert}
            />
          ))}
        </AnimatePresence>

        {visibleGroups.length === 0 && (
          <MenuEmptyState query={query} onReset={() => setQuery('')} />
        )}
      </div>

      <DessertDialog
        dessert={selectedDessert}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
