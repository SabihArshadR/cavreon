import type { CategorySlug } from "@/data/products";

type Props = {
  category: CategorySlug;
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Evenly spaced holes across a racket or paddle face. */
function holes(
  cx: number,
  cy: number,
  cols: number,
  rows: number,
  gapX: number,
  gapY: number,
  r = 2.6,
) {
  const out: React.ReactNode[] = [];
  const startX = cx - ((cols - 1) * gapX) / 2;
  const startY = cy - ((rows - 1) * gapY) / 2;
  for (let c = 0; c < cols; c++) {
    for (let row = 0; row < rows; row++) {
      out.push(
        <circle
          key={`${c}-${row}`}
          cx={startX + c * gapX}
          cy={startY + row * gapY}
          r={r}
          fill="currentColor"
          opacity={0.32}
        />,
      );
    }
  }
  return out;
}

function HockeyStick() {
  return (
    <svg viewBox="0 0 240 160" role="presentation" className="h-full w-full">
      <g {...stroke} strokeWidth={2.2}>
        {/* shaft */}
        <path d="M206 20 L92 106" />
        <path d="M216 32 L108 114" />
        {/* head hook */}
        <path d="M92 106 C 66 126, 38 124, 34 104 C 31 88, 44 80, 56 84" />
        <path d="M108 114 C 82 138, 44 136, 40 106 C 37 88, 50 74, 66 78" />
        {/* toe cap */}
        <path d="M56 84 L66 78" />
        {/* butt end */}
        <path d="M206 20 L216 32" />
        {/* grip wrap */}
        <path d="M196 28 L205 39" opacity={0.55} />
        <path d="M186 36 L195 47" opacity={0.55} />
        <path d="M176 44 L185 55" opacity={0.55} />
        <path d="M166 51 L175 62" opacity={0.55} />
      </g>
    </svg>
  );
}

function PadelRacket() {
  return (
    <svg viewBox="0 0 160 240" role="presentation" className="h-full w-full">
      <g {...stroke} strokeWidth={2.2}>
        {/* diamond-leaning head */}
        <path d="M80 18 C 128 18, 146 52, 144 92 C 142 128, 118 152, 80 154 C 42 152, 18 128, 16 92 C 14 52, 32 18, 80 18 Z" />
        {/* inner face line */}
        <path
          d="M80 30 C 118 30, 134 58, 132 92 C 130 122, 110 142, 80 144 C 50 142, 30 122, 28 92 C 26 58, 42 30, 80 30 Z"
          opacity={0.35}
        />
        {/* heart / bridge */}
        <path d="M60 150 L64 176" />
        <path d="M100 150 L96 176" />
        {/* handle */}
        <path d="M64 176 L64 222 C 64 228, 68 230, 80 230 C 92 230, 96 228, 96 222 L96 176 Z" />
        {/* grip wrap */}
        <path d="M64 188 L96 182" opacity={0.5} />
        <path d="M64 200 L96 194" opacity={0.5} />
        <path d="M64 212 L96 206" opacity={0.5} />
      </g>
      {holes(80, 88, 5, 5, 20, 20)}
    </svg>
  );
}

function PickleballPaddle() {
  return (
    <svg viewBox="0 0 160 240" role="presentation" className="h-full w-full">
      <g {...stroke} strokeWidth={2.2}>
        {/* elongated face with edge guard */}
        <rect x="22" y="14" width="116" height="152" rx="26" />
        <rect x="30" y="22" width="100" height="136" rx="20" opacity={0.35} />
        {/* throat */}
        <path d="M62 166 L62 178" />
        <path d="M98 166 L98 178" />
        {/* handle */}
        <path d="M62 178 L62 224 C 62 229, 66 231, 80 231 C 94 231, 98 229, 98 224 L98 178 Z" />
        {/* butt flare */}
        <path d="M58 224 L102 224" />
        {/* perforated grip */}
        <circle cx="72" cy="192" r="1.8" fill="currentColor" stroke="none" opacity={0.6} />
        <circle cx="88" cy="192" r="1.8" fill="currentColor" stroke="none" opacity={0.6} />
        <circle cx="72" cy="206" r="1.8" fill="currentColor" stroke="none" opacity={0.6} />
        <circle cx="88" cy="206" r="1.8" fill="currentColor" stroke="none" opacity={0.6} />
      </g>
      {/* raw carbon face texture, drawn as weave hatching */}
      <g stroke="currentColor" strokeWidth={0.8} opacity={0.18}>
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`a${i}`} x1={32} y1={26 + i * 12} x2={128} y2={26 + i * 12} />
        ))}
      </g>
    </svg>
  );
}

function ShinGuard() {
  return (
    <svg viewBox="0 0 160 240" role="presentation" className="h-full w-full">
      <g {...stroke} strokeWidth={2.2}>
        {/* shell */}
        <path d="M80 16 C 112 16, 126 42, 126 82 L126 160 C 126 198, 108 220, 80 224 C 52 220, 34 198, 34 160 L34 82 C 34 42, 48 16, 80 16 Z" />
        {/* centre ridge */}
        <path d="M80 24 L80 216" opacity={0.4} />
        {/* liner edge */}
        <path
          d="M80 28 C 106 28, 118 48, 118 84 L118 158 C 118 190, 102 210, 80 214 C 58 210, 42 190, 42 158 L42 84 C 42 48, 54 28, 80 28 Z"
          opacity={0.3}
        />
        {/* straps */}
        <path d="M34 92 L18 92" />
        <path d="M126 92 L142 92" />
        <path d="M34 168 L18 168" />
        <path d="M126 168 L142 168" />
        {/* vents */}
        <path d="M62 60 L62 78" opacity={0.5} />
        <path d="M98 60 L98 78" opacity={0.5} />
        <path d="M62 116 L62 134" opacity={0.5} />
        <path d="M98 116 L98 134" opacity={0.5} />
      </g>
    </svg>
  );
}

function SportsBag() {
  return (
    <svg viewBox="0 0 240 160" role="presentation" className="h-full w-full">
      <g {...stroke} strokeWidth={2.2}>
        {/* body */}
        <path d="M28 54 C 28 44, 36 38, 48 38 L192 38 C 204 38, 212 44, 212 54 L212 118 C 212 128, 204 134, 192 134 L48 134 C 36 134, 28 128, 28 118 Z" />
        {/* top zip */}
        <path d="M40 52 L200 52" opacity={0.45} />
        {/* end panel */}
        <path d="M172 38 L172 134" opacity={0.35} />
        {/* handles */}
        <path d="M96 38 C 96 20, 144 20, 144 38" />
        <path d="M104 38 C 104 28, 136 28, 136 38" opacity={0.4} />
        {/* shoulder strap anchor */}
        <path d="M28 70 L14 78 L14 100" opacity={0.5} />
        {/* feet */}
        <path d="M60 134 L60 142" />
        <path d="M180 134 L180 142" />
        {/* branding panel */}
        <rect x="70" y="76" width="66" height="26" rx="4" opacity={0.3} />
      </g>
    </svg>
  );
}

export default function ProductDrawing({ category, className }: Props) {
  const map = {
    "hockey-sticks": HockeyStick,
    "padel-rackets": PadelRacket,
    "pickleball-paddles": PickleballPaddle,
    "shin-guards": ShinGuard,
    "sports-bags": SportsBag,
  } as const;

  const Drawing = map[category];

  return (
    <div className={className}>
      <Drawing />
    </div>
  );
}
