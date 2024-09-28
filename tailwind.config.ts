import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        normal: "#D9D9D9",
        fighting: "#D50032",
        flying: "#ADD8E6",
        poison: "#9B59B6",
        ground: "#8B4513",
        water: "#1E90FF",
        grass: "#2ECC71",
        fire: "#FF4500",
        bug: "#7FFF00",
        ghost: "#4B0082",
        ice: "#B0E0E6",
        dragon: "#00008B",
        dark: "#000000",
        psychic: "#FF69B4",
        rock: "#A9A9A9",
        steel: "#C0C0C0",
        electric: "#FFD700",
        fairy: "#FFB6C1",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
