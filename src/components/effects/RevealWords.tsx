import { Fragment } from 'react';

interface RevealWordsProps {
  text: string;
  className?: string;
  startDelayMs?: number;
  stepMs?: number;
}

export function RevealWords({
  text,
  className,
  startDelayMs = 0,
  stepMs = 90,
}: RevealWordsProps) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            className="animate-reveal-up inline-block"
            style={{ animationDelay: `${startDelayMs + index * stepMs}ms` }}
          >
            {word}
          </span>
          {index < words.length - 1 && ' '}
        </Fragment>
      ))}
    </span>
  );
}
