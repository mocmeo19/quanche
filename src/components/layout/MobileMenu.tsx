'use client';

import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { easeOutExpo } from '@/components/effects/motion-easing';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { OpenStatusBadge } from '@/components/ui/OpenStatusBadge';
import { shopInfo } from '@/data/shop-info';
import type { NavLink } from '@/types/navigation';

interface MobileMenuProps {
  links: NavLink[];
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const PANEL_ID = 'mobile-menu-panel';

export function MobileMenu({ links, isOpen, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const rootStyle = document.documentElement.style;
    const previousOverflow = rootStyle.overflow;
    rootStyle.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      rootStyle.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onOpenChange]);

  const closeMenu = () => onOpenChange(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        onClick={() => onOpenChange(!isOpen)}
        className="text-ink ring-ink/10 hover:bg-coconut grid size-11 place-items-center rounded-full ring-1 transition-colors lg:hidden"
      >
        <span className="sr-only">{isOpen ? 'Đóng menu' : 'Mở menu'}</span>
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={PANEL_ID}
            className="bg-cream fixed inset-x-0 top-0 -z-10 flex h-svh flex-col overflow-y-auto px-6 pt-28 pb-10 lg:hidden"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <nav aria-label="Điều hướng trên di động">
              <ul className="flex flex-col">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.06,
                      duration: 0.5,
                      ease: easeOutExpo,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={link.href === pathname ? 'page' : undefined}
                      className="group border-ink/10 text-ink hover:text-redbean aria-[current=page]:text-redbean flex items-center justify-between border-b py-5 text-3xl font-extrabold tracking-tight transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-6 transition-transform group-hover:rotate-45"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-4 pt-10">
              <OpenStatusBadge className="self-start" />
              <p className="text-ink-soft">{shopInfo.address}</p>
              <ButtonLink href={shopInfo.phoneHref} onClick={closeMenu}>
                <Phone aria-hidden="true" className="size-5" />
                Gọi {shopInfo.phone}
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
