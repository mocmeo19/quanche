interface DessertBowlProps {
  /** Dùng để tạo id clipPath duy nhất khi nhiều chén cùng hiển thị trên trang. */
  id: string;
  layerColors: string[];
  className?: string;
}

const BOWL_TOP = 40;
const BOWL_BOTTOM = 112;
const BOWL_PATH = "M18 40 Q80 44 142 40 Q138 112 80 112 Q22 112 18 40 Z";

export function DessertBowl({ id, layerColors, className }: DessertBowlProps) {
  const clipId = `bowl-clip-${id}`;
  const layerHeight = (BOWL_BOTTOM - BOWL_TOP) / layerColors.length;

  return (
    <svg viewBox="0 0 160 140" aria-hidden="true" className={className}>
      <defs>
        <clipPath id={clipId}>
          <path d={BOWL_PATH} />
        </clipPath>
      </defs>

      <ellipse cx="80" cy="128" rx="44" ry="6" fill="#2b2420" opacity="0.08" />

      <g clipPath={`url(#${clipId})`}>
        {layerColors.map((color, index) => (
          <rect
            key={`${color}-${index}`}
            x="0"
            y={BOWL_BOTTOM - layerHeight * (index + 1)}
            width="160"
            height={layerHeight + 1}
            fill={color}
          />
        ))}
        <circle cx="58" cy="52" r="5" fill="#ffffff" opacity="0.55" />
        <circle cx="92" cy="58" r="4" fill="#ffffff" opacity="0.45" />
        <circle cx="110" cy="50" r="3" fill="#ffffff" opacity="0.5" />
      </g>

      <path d={BOWL_PATH} fill="none" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="3" />
      <ellipse cx="80" cy="40" rx="62" ry="6" fill="none" stroke="#ffffff" strokeWidth="3" />
      <path d="M62 112 L66 124 L94 124 L98 112" fill="#ffffff" opacity="0.8" />

      <path d="M104 6 L96 70" stroke="#8c2f39" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="95" cy="76" rx="6" ry="9" fill="#8c2f39" />
    </svg>
  );
}
