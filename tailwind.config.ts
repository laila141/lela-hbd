import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f4257b",
        "background-light": "#fdfaf3",
        "background-dark": "#221017",
        "tape-pink": "#ff8ebc",
        "tape-yellow": "#fde047",
        parchment: "#fdfaf1",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
        fancy: ["var(--font-dancing)", "cursive"],
        serif: ["var(--font-dm-serif)", "serif"],
        doodle: ["var(--font-gochi)", "cursive"],
      },
      animation: {
        'blob-bounce': 'blob-bounce 8s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'shake': 'shake 0.3s ease-in-out infinite',
      },
      keyframes: {
        'blob-bounce': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'shake': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
