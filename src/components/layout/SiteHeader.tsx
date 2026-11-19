'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { SiteLogo } from '@/components/layout/SiteLogo';
import { navLinks } from '@/data/navigation';
import { shopInfo } from '@/data/shop-info';
import { useScrolled } from '@/hooks/use-scrolled';

export function SiteHeader() {
  const pathname = usePathname();
  const isScrolled = useScrolled(24);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Chỉ trang chủ có hero nền sáng phía sau header; các trang khác cần nền để chữ dễ đọc.
  const isSolid = isScrolled || isMenuOpen || pathname !== '/';

  return (
    <header
      data-solid={isSolid}
      className="group/header data-[solid=true]:bg-cream/85 fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 data-[solid=true]:shadow-[0_12px_40px_-24px_rgba(43,36,32,0.45)] data-[solid=true]:backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 transition-[padding] duration-500 group-data-[solid=true]/header:py-3 sm:px-6">
        <SiteLogo className="text-redbean" />

        <nav
          aria-label="Điều hướng chính"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.href === pathname ? 'page' : undefined}
              className="text-ink-soft hover:text-ink aria-[current=page]:text-ink after:bg-redbean relative rounded-full px-4 py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={shopInfo.phoneHref}
            className="bg-pandan text-coconut hover:bg-pandan-dark shadow-pandan/25 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg transition-colors"
          >
            <Phone aria-hidden="true" className="size-4" />
            <span className="sr-only sm:not-sr-only">Gọi đặt hàng</span>
          </a>
          <MobileMenu
            links={navLinks}
            isOpen={isMenuOpen}
            onOpenChange={setIsMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}
