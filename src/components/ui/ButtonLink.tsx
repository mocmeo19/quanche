import Link from 'next/link';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

type ButtonLinkVariant = 'primary' | 'secondary' | 'accent' | 'ghost';

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonLinkVariant;
}

const baseClasses =
  'group/button relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-semibold transition duration-300 ease-out-expo hover:-translate-y-0.5';

const shineClasses =
  'before:absolute before:inset-y-0 before:-left-1/2 before:-z-10 before:w-1/3 before:-skew-x-12 before:bg-white/25 before:transition-[left] before:duration-700 hover:before:left-[130%]';

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    'bg-redbean text-coconut shadow-lg shadow-redbean/25 hover:shadow-xl hover:shadow-redbean/35',
  secondary: 'bg-coconut text-ink ring-1 ring-ink/10 hover:ring-ink/25',
  accent: 'bg-mung text-ink shadow-lg shadow-black/20 hover:shadow-xl',
  ghost: 'text-coconut ring-1 ring-coconut/30 hover:bg-coconut/10',
};

export function ButtonLink({
  variant = 'primary',
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        baseClasses,
        shineClasses,
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
