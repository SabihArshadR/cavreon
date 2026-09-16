type Props = {
  title: string;
  lede?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  lede,
  tone = "light",
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className ?? ""}`}
    >
      <h2
        className={`text-display-md font-display font-extrabold ${
          tone === "dark" ? "text-bone" : "text-turf-deep"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 max-w-prose2 text-[1.02rem] leading-relaxed ${
            tone === "dark" ? "text-bone/65" : "text-slate2"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
