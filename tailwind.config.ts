import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import containerQueries from "@tailwindcss/container-queries";

/**
 * Tailwind v4 still supports a config file for:
 * - custom design tokens (mocha vibes)
 * - plugins (animations, container queries)
 *
 * 80/20 note:
 * These tokens + plugins cover most "real job" UI work: consistent theming, dark mode,
 * responsive components, and motion polish.
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette (from spec)
        mocha: {
          primary: "#6F4E37",
          beige: "#D2B48C",
          cream: "#F5F5DC",
          orange: "#D2691E",
        },
        // shadcn-compatible tokens (driven by CSS variables in globals.css)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        mocha: "0 16px 40px rgba(111, 78, 55, 0.25)",
      },
      backgroundImage: {
        // subtle, reusable section background
        "mocha-gradient":
          "radial-gradient(1200px circle at 10% 10%, rgba(210,180,140,0.35), transparent 55%), radial-gradient(1200px circle at 90% 30%, rgba(210,105,30,0.18), transparent 55%), linear-gradient(135deg, rgba(111,78,55,0.10), rgba(245,245,220,0.65))",
      },
    },
  },
  plugins: [animate, containerQueries],
};

export default config;

