import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161A1E",
        charcoal: "#1C2126",
        charcoal2: "#262C32",
        paper: "#FAF9F5",
        paper2: "#F1EEE7",
        slate: "#5B6670",
        slateline: "#DEDAD0",
        steel: "#3E5C74",
        steellight: "#6E8CA0",
        accent: "#7C6A46",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,0.61,0.36,1) forwards",
        "fade-in": "fade-in 0.9s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
