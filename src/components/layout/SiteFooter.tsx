import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { FooterColumn } from '@/components/layout/FooterColumn';
import { SiteLogo } from '@/components/layout/SiteLogo';
import { bestSellers } from '@/data/desserts';
import { navLinks } from '@/data/navigation';
import { shopInfo } from '@/data/shop-info';

const linkClass = 'hover:text-mung transition-colors';

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/75 relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <SiteLogo className="text-cream" />
          <p className="text-mung mt-5 font-semibold">{shopInfo.slogan}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Chè truyền thống Việt Nam, chế biến trong ngày từ nguyên liệu có
            nguồn gốc rõ ràng.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Món bán chạy">
            {bestSellers.map((dessert) => (
              <li key={dessert.slug}>
                <Link
                  href="/mon-dac-trung"
                  className="bg-cream/10 text-cream hover:bg-mung hover:text-ink inline-block rounded-full px-3 py-1 text-xs font-medium transition-colors"
                >
                  {dessert.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Khám phá">
          <nav aria-label="Điều hướng chân trang">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </FooterColumn>

        <FooterColumn title="Liên hệ">
          <address className="flex flex-col gap-3 not-italic">
            <a
              href={shopInfo.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {shopInfo.address}
            </a>
            <a
              href={shopInfo.phoneHref}
              className={`text-cream text-base font-semibold ${linkClass}`}
            >
              {shopInfo.phone}
            </a>
          </address>
        </FooterColumn>

        <FooterColumn title="Giờ mở cửa">
          <dl className="flex flex-col gap-3">
            {shopInfo.openingHours.map((slot) => (
              <div key={slot.label}>
                <dt>{slot.label}</dt>
                <dd className="text-cream font-semibold tabular-nums">
                  {slot.opens} – {slot.closes}
                </dd>
              </div>
            ))}
          </dl>
        </FooterColumn>
      </div>

      <div className="border-cream/10 border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs sm:flex-row sm:px-6">
          <p>© {shopInfo.name}. Bảo lưu mọi quyền.</p>
          <a
            href="#"
            className={`inline-flex items-center gap-1.5 ${linkClass}`}
          >
            Về đầu trang
            <ArrowUp aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="text-cream/[0.04] pointer-events-none -mb-[0.18em] text-center text-[13vw] leading-none font-black tracking-tighter whitespace-nowrap select-none"
      >
        {shopInfo.name}
      </p>
    </footer>
  );
}
