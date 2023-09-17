/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172aff',
          foreground: '#f8fafc',
        },
        destructive: {
          DEFAULT: '#ef4444ff',
          foreground: '#f8fafc',
        },
        muted: {
          DEFAULT: '#f3f4f6ff',
          foreground: '#817f84ff',
        },
        warning: {
          DEFAULT: '#fbbf24ff',
          foreground: '#f8fafc',
        },
        success: {
          DEFAULT: '#22c55eff',
          foreground: '#f8fafc',
        },
        accent: '#f3f4f6ff',
        border: '#e8eaedff',
        ring: '#d1d5dbff',
        background: '#ffffff',
        ai: '#75ac9d',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
