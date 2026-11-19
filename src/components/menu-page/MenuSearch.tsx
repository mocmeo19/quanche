'use client';

import { Search, X } from 'lucide-react';
import { useId } from 'react';
import { normalizeSearchText } from '@/lib/search-text';

interface MenuSearchProps {
  query: string;
  resultCount: number;
  onQueryChange: (query: string) => void;
}

const searchSuggestions = [
  'Sầu riêng',
  'Đậu xanh',
  'Hạt sen',
  'Gừng',
  'Nước cốt dừa',
];

export function MenuSearch({
  query,
  resultCount,
  onQueryChange,
}: MenuSearchProps) {
  const inputId = useId();
  const normalizedQuery = normalizeSearchText(query);
  const hasQuery = normalizedQuery !== '';

  return (
    <div
      role="search"
      className="animate-fade-up bg-coconut ring-ink/5 shadow-ink/15 rounded-[2rem] p-4 shadow-2xl ring-1 [animation-delay:850ms] sm:p-6"
    >
      <label htmlFor={inputId} className="sr-only">
        Tìm món chè theo tên hoặc nguyên liệu
      </label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="text-ink-soft pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2"
        />
        <input
          id={inputId}
          type="search"
          value={query}
          autoComplete="off"
          placeholder="Nhập tên món hoặc nguyên liệu, ví dụ: sầu riêng"
          onChange={(event) => onQueryChange(event.target.value)}
          className="bg-cream text-ink placeholder:text-ink-soft/70 ring-ink/10 focus:ring-pandan w-full rounded-full py-4 pr-14 pl-13 text-base ring-1 transition outline-none focus:ring-2 [&::-webkit-search-cancel-button]:appearance-none"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            className="bg-ink/5 text-ink-soft hover:bg-ink/10 hover:text-ink absolute top-1/2 right-3 grid size-9 -translate-y-1/2 place-items-center rounded-full transition-colors"
          >
            <X aria-hidden="true" className="size-4" />
            <span className="sr-only">Xóa từ khóa</span>
          </button>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-ink-soft text-sm">Gợi ý:</span>
        {searchSuggestions.map((suggestion) => {
          const isActive = normalizeSearchText(suggestion) === normalizedQuery;

          return (
            <button
              key={suggestion}
              type="button"
              aria-pressed={isActive}
              data-active={isActive}
              onClick={() => onQueryChange(isActive ? '' : suggestion)}
              className="bg-cream text-ink-soft ring-ink/5 hover:text-ink data-[active=true]:bg-pandan data-[active=true]:text-coconut rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 transition-colors"
            >
              {suggestion}
            </button>
          );
        })}
        <p
          aria-live="polite"
          className="text-ink ml-auto text-sm font-semibold"
        >
          {hasQuery && `Tìm thấy ${resultCount} món phù hợp`}
        </p>
      </div>
    </div>
  );
}
