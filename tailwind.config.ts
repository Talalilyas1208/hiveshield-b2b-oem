import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Industrial Workwear Palette (Inspired by Filson, Carhartt WIP, Patagonia Workwear)
        canvas: {
          DEFAULT: "#F4F1EA", // Unbleached raw cotton canvas background
          light: "#FAF8F4",   // Crisp technical specification paper
          aged: "#E8E3D8",    // Warm stone divider/table header surface
        },
        ink: {
          DEFAULT: "#141413", // Deep architectural carbon ink
          muted: "#575551",   // Warm technical graphite
          subtle: "#8C8881",  // Blueprint annotation grey
        },
        brass: {
          DEFAULT: "#9A6B26", // YKK #5 Antique Brass hardware tone
          dark: "#785118",    // Deep beeswax ochre
        },
        pine: {
          DEFAULT: "#1C352D", // Commercial Apiary Forest Green
          light: "#2B4C41",
        },
        rule: "#D8D2C5",      // 1px exposed architectural ledger hairline
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["var(--font-jetbrains-mono)", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
