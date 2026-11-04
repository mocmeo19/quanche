interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-pandan text-sm font-semibold tracking-widest uppercase">{eyebrow}</p>
      <h2 className="font-display text-ink mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="text-ink-soft mt-4 text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
