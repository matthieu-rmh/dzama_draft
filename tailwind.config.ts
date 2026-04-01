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
        dzama: {
          dark: "#0f0e0e",
          "dark-2": "#1a1919",
          "dark-3": "#242323",
          gold: "#c9a347",
          "gold-light": "#e2bb65",
          teal: "#3d8a78",
          "teal-light": "#4da090",
          cream: "#f5f0e8",
          "cream-dark": "#e8dfc8",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        script: ["Great Vibes", "cursive"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
