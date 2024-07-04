import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
