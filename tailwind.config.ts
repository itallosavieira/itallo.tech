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
        sortsMillGoudy: ["var(--font-sorts)", "serif"],
        ptSerif: ["var(--font-pt-serif)", "serif"],
      },
      textColor: {
        red: "var(--color-red)",
        white: "var(--color-white)",
      },
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        title: 'var(--color-title)',
        subtitle: 'var(--color-subtitle)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};
export default config;
