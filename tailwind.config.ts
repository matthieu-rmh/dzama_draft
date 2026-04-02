import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "outline": "#9b8f78",
        "surface": "#07151b",
        "surface-dim": "#07151b",
        "surface-container-lowest": "#031016",
        "surface-container-low": "#0f1d24",
        "surface-container": "#132128",
        "surface-container-high": "#1e2c33",
        "surface-container-highest": "#29373e",
        "surface-bright": "#2d3b42",
        "on-surface": "#d6e5ee",
        "on-surface-variant": "#d3c5ab",
        "primary": "#ffe8b7",
        "primary-fixed": "#ffdf96",
        "primary-fixed-dim": "#f6bf00",
        "primary-container": "#ffc600",
        "on-primary": "#3e2e00",
        "secondary-container": "#0164b4",
        "outline-variant": "#4f4632",
        "background": "#07151b",
      },
      fontFamily: {
        headline: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Raleway", "system-ui", "sans-serif"],
        label: ["Raleway", "system-ui", "sans-serif"],
        sans: ["Raleway", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        md: "0.375rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
