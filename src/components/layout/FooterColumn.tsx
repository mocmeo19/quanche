import type { ReactNode } from 'react';

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-mung text-sm font-semibold tracking-widest uppercase">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
