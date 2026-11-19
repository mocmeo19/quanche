import { Reveal } from '@/components/effects/Reveal';
import { cn } from '@/lib/cn';

type HeadingAlign = 'center' | 'left';
type HeadingTone = 'light' | 'dark';

interface HeadingColors {
  eyebrow: string;
  title: string;
  description: string;
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: HeadingAlign;
  tone?: HeadingTone;
}

const alignClasses: Record<HeadingAlign, string> = {
  center: 'mx-auto max-w-3xl items-center text-center',
  left: 'max-w-2xl items-start',
};

const toneColors: Record<HeadingTone, HeadingColors> = {
  light: {
    eyebrow: 'text-pandan',
    title: 'text-ink',
    description: 'text-ink-soft',
  },
  dark: {
    eyebrow: 'text-mung',
    title: 'text-cream',
    description: 'text-cream/70',
  },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const colors = toneColors[tone];

  return (
    <Reveal className={cn('flex flex-col', alignClasses[align])}>
      <p
        className={cn(
          'flex items-center gap-3 text-sm font-bold tracking-[0.25em] uppercase',
          colors.eyebrow,
        )}
      >
        <span aria-hidden="true" className="h-px w-10 bg-current" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-5 text-4xl leading-[1.08] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl',
          colors.title,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-6 text-lg leading-relaxed text-pretty',
            colors.description,
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
