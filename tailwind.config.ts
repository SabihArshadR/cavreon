import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        turf: {
          DEFAULT: "#0E2C30",
          light: "#14393E",
          deep: "#071619",
        },
        aramid: {
          DEFAULT: "#E0B54A",
          dim: "#B98F2E",
        },
        bone: {
          DEFAULT: "#F0EDE6",
          dim: "#E2DED4",
        },
        slate2: "#63797A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7vw, 5.75rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3.4vw, 2.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        prose2: "68ch",
      },
      keyframes: {
        draw: {
          from: { strokeDashoffset: "1400" },
          to: { strokeDashoffset: "0" },
        },
        riseIn: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        draw: "draw 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        riseIn: "riseIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        ticker: "ticker 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
