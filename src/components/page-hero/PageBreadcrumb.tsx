import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface PageBreadcrumbProps {
  currentLabel: string;
}

export function PageBreadcrumb({ currentLabel }: PageBreadcrumbProps) {
  return (
    <nav aria-label="Đường dẫn">
      <ol className="text-cream/60 flex items-center gap-2 text-sm font-medium">
        <li>
          <Link href="/" className="hover:text-mung transition-colors">
            Trang chủ
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-4" />
        </li>
        <li aria-current="page" className="text-cream">
          {currentLabel}
        </li>
      </ol>
    </nav>
  );
}
