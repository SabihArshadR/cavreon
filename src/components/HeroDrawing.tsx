/**
 * A drawn elevation of the Apex 95, with the callouts a buyer actually
 * asks about. This is the hero image — no photography needed, and it
 * says "we know the spec" faster than a product shot would.
 */
export default function HeroDrawing({ className }: { className?: string }) {
  const line = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 560 420"
      className={className}
      role="img"
      aria-label="Technical drawing of the Cavreon Apex 95 field hockey stick with dimensions"
    >
      {/* dimension and leader lines, aramid gold */}
      <g stroke="#E0B54A" strokeWidth={1} opacity={0.75} fill="none">
        {/* overall length dimension, parallel to the shaft */}
        <path d="M470 34 L206 232" strokeDasharray="4 4" />
        <path d="M470 34 l-4 8 l9 1 Z" fill="#E0B54A" stroke="none" />
        <path d="M206 232 l4 -8 l-9 -1 Z" fill="#E0B54A" stroke="none" />
        <path d="M486 56 L470 34" />
        <path d="M188 210 L206 232" />

        {/* bow leader */}
        <path d="M150 336 L196 300" />
        <circle cx="198" cy="299" r="2.4" fill="#E0B54A" stroke="none" />

        {/* carbon leader */}
        <path d="M400 150 L346 178" />
        <circle cx="344" cy="179" r="2.4" fill="#E0B54A" stroke="none" />

        {/* head width dimension */}
        <path d="M96 356 L176 356" />
        <path d="M96 348 L96 364" />
        <path d="M176 348 L176 364" />
      </g>

      {/* the stick */}
      <g className="text-bone">
        <g
          {...line}
          strokeWidth={2.4}
          strokeDasharray={1400}
          strokeDashoffset={1400}
          className="animate-draw"
        >
          <path d="M486 56 L214 258" />
          <path d="M502 78 L232 282" />
          <path d="M486 56 L502 78" />
          <path d="M214 258 C 168 292, 112 288, 104 250 C 98 218, 124 200, 150 208" />
          <path d="M232 282 C 182 322, 104 318, 96 256 C 90 214, 122 186, 158 194" />
          <path d="M150 208 L158 194" />
        </g>

        {/* grip wrap, drawn after the outline */}
        <g {...line} strokeWidth={1.4} opacity={0.5}>
          <path d="M470 68 L486 90" />
          <path d="M452 82 L468 104" />
          <path d="M434 96 L450 118" />
          <path d="M416 110 L432 132" />
          <path d="M398 124 L414 146" />
        </g>
      </g>

      {/* callout text */}
      <g fill="#E0B54A" fontSize="12.5" className="font-mono">
        <text x="352" y="142" textAnchor="start">
          95% carbon
        </text>
        <text x="352" y="158" fill="#F0EDE6" opacity={0.5} fontSize="11">
          4% aramid · 1% glass
        </text>

        <text x="38" y="332" textAnchor="start">
          24.75 mm bow
        </text>
        <text x="38" y="348" fill="#F0EDE6" opacity={0.5} fontSize="11">
          peak 200 mm from head
        </text>

        <text x="136" y="380" textAnchor="middle" fontSize="11" fill="#F0EDE6" opacity={0.5}>
          midi head
        </text>
      </g>

      <g fill="#E0B54A" fontSize="12.5" className="font-mono" transform="rotate(-36.8 350 145)">
        <text x="350" y="138" textAnchor="middle">
          36.5 in
        </text>
      </g>
    </svg>
  );
}
