import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette ported from prototype
        brand: {
          primary: "#1E5BAD",
          "primary-deep": "#164685",
          secondary: "#6FA8DC",
          accent: "#E8F1FA",
          "accent-deep": "#D6E6F5",
          navy: "#0F2C4D",
          slate: "#4A5B71",
          "slate-light": "#7C8AA0",
          divider: "#E1EAF3",
          bg: "#F4F8FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        thai: ["var(--font-noto-thai)", "var(--font-inter)", "sans-serif"],
        zh: ["var(--font-noto-sc)", "var(--font-inter)", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Brand radius scale: tag = 6px (chips), control = 10px (small buttons),
        // surface = 18px (cards/sheets), hero = 20px (large hero cards).
        tag: "6px",
        control: "10px",
        surface: "18px",
        hero: "20px",
      },
      boxShadow: {
        // Elevation scale: e1 = cards at rest, e2 = floating CTA / hover,
        // e3 = modals / focused overlays.
        e1: "0 4px 20px -8px rgba(15, 44, 77, 0.10)",
        e2: "0 8px 24px -8px rgba(30, 91, 173, 0.45)",
        e3: "0 12px 36px -10px rgba(15, 44, 77, 0.22)",
      },
      keyframes: {
        "pf-ripple": {
          "0%":   { transform: "scale(1)",    opacity: "0.6" },
          "100%": { transform: "scale(1.55)", opacity: "0" },
        },
        "pf-wave": {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%":      { transform: "scaleY(1.1)" },
        },
        "pf-flip-in": {
          "0%":   { opacity: "0", transform: "perspective(900px) rotateX(-22deg) scale(0.92) translateY(8px)" },
          "60%":  { opacity: "1" },
          "100%": { opacity: "1", transform: "perspective(900px) rotateX(0deg) scale(1) translateY(0)" },
        },
        "pf-rise": {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pf-ripple":  "pf-ripple 1s ease-out infinite",
        "pf-flip-in": "pf-flip-in 520ms cubic-bezier(.2,.8,.2,1) both",
        "pf-rise":    "pf-rise 360ms ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
