type Props = {
  className?: string;
  /** Colour of the wordmark. The mark always uses aramid gold. */
  tone?: "light" | "dark";
  markOnly?: boolean;
};

/**
 * The mark is a C cut from a rounded square, with the opening shaped
 * like the hook of a hockey stick head — the one silhouette shared
 * across everything the factory makes.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="0" y="0" width="40" height="40" rx="11" fill="#E0B54A" />
      <path
        d="M28.5 13.2A9.6 9.6 0 0 0 20 8.6c-5.6 0-9.9 4.6-9.9 10.9 0 6.6 4.1 11.9 11.2 11.9 3 0 5.5-.9 7.2-2.3v-6.6h-7.7v4.3h3.2v1.6c-.7.3-1.6.5-2.6.5-3.9 0-6.4-3.2-6.4-7.5 0-4 2.3-6.7 5.7-6.7 2 0 3.6.8 4.8 2.2Z"
        fill="#071619"
      />
    </svg>
  );
}

export default function Logo({ className, tone = "light", markOnly = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      {!markOnly && (
        <span
          className={`font-display text-[1.32rem] font-extrabold leading-none tracking-[-0.045em] ${
            tone === "light" ? "text-bone" : "text-turf-deep"
          }`}
        >
          Cavreon
        </span>
      )}
    </span>
  );
}
