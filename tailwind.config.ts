import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#39592c',
        primary2: '#486b3a',
        secondary: '#af3523',
        secondary2: '#bb3f2c',
        accent: '#005da1',
        accent2: '#006fc0',
        background: '#f0efd6',
        background2: '#f4f4ef',
        backgroundSandDark: '#EBEAC7',
        backgroundGreenLight: '#D3E6CC',

      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        gothic: ['var(--font-gothic)'],
      },
      keyframes: {
        illustrationUP: {
          "0%": {
            transform: "translateY(5%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        illustrationUP: "illustrationUP 4s ease-in-out infinite alternate-reverse",
      },
    },
  },
  plugins: [],
};
export default config;
