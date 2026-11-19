import { IceCreamBowl } from 'lucide-react';
import Link from 'next/link';
import { shopInfo } from '@/data/shop-info';
import { cn } from '@/lib/cn';

interface SiteLogoProps {
  className?: string;
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${shopInfo.name} – Trang chủ`}
      className={cn('group/logo inline-flex items-center gap-2.5', className)}
    >
      <span className="bg-redbean text-coconut shadow-redbean/30 grid size-10 place-items-center rounded-2xl shadow-md transition duration-500 group-hover/logo:-rotate-12">
        <IceCreamBowl aria-hidden="true" className="size-5" />
      </span>
      <span className="text-xl font-extrabold tracking-tight">
        {shopInfo.name}
      </span>
    </Link>
  );
}
