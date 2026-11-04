"use client";

import { useState } from "react";
import type { CategoryOption, Dessert } from "@/types/dessert";
import { DessertCard } from "@/components/menu/DessertCard";

interface MenuBrowserProps {
  desserts: Dessert[];
  categories: CategoryOption[];
}

type CategoryFilter = CategoryOption["value"];

function filterDesserts(desserts: Dessert[], filter: CategoryFilter): Dessert[] {
  if (filter === "tat-ca") {
    return desserts;
  }
  return desserts.filter((dessert) => dessert.category === filter);
}

export function MenuBrowser({ desserts, categories }: MenuBrowserProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("tat-ca");
  const visibleDesserts = filterDesserts(desserts, activeFilter);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Lọc theo loại">
        {categories.map((category) => {
          const isActive = category.value === activeFilter;
          const stateClass = isActive
            ? "bg-pandan text-coconut"
            : "bg-coconut text-ink-soft hover:bg-pandan-light";

          return (
            <button
              key={category.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(category.value)}
              className={`ring-ink/10 rounded-full px-5 py-2 text-sm font-medium ring-1 transition ${stateClass}`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleDesserts.map((dessert) => (
          <DessertCard key={dessert.slug} dessert={dessert} />
        ))}
      </div>
    </div>
  );
}
