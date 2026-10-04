import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0e27',
          900: '#1a1f3a',
          800: '#2a3050',
          700: '#3a4060',
          600: '#4a5070',
        },
        primary: {
          600: '#8b5cf6',
          500: '#a78bfa',
          400: '#c4b5fd',
        },
        secondary: {
          600: '#3b82f6',
          500: '#60a5fa',
          400: '#93c5fd',
        },
        accent: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
