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
        'background': '#000000',
        'primary': '#FFFFFF',
        'secondary': '#808080',
        'highlight': '#171717',
      },
    },
  },
  plugins: [],
};

export default config;