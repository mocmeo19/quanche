import { SearchX } from 'lucide-react';

interface MenuEmptyStateProps {
  query: string;
  onReset: () => void;
}

export function MenuEmptyState({ query, onReset }: MenuEmptyStateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-24 text-center">
      <span className="bg-pandan-light text-pandan grid size-16 place-items-center rounded-3xl">
        <SearchX aria-hidden="true" className="size-8" />
      </span>
      <h2 className="text-ink mt-6 text-2xl font-black">
        Không tìm thấy món phù hợp với “{query.trim()}”
      </h2>
      <p className="text-ink-soft mt-3 leading-relaxed">
        Vui lòng thử lại với tên món hoặc nguyên liệu khác, ví dụ “dừa” hoặc
        “đậu đỏ”.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="bg-redbean text-coconut shadow-redbean/25 mt-8 rounded-full px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5"
      >
        Xem toàn bộ thực đơn
      </button>
    </div>
  );
}
