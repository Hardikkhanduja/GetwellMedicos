/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-deep':   '#0a1628',
        'navy-mid':    '#112240',
        'navy-light':  '#1a3458',
        accent:        '#4b9fd4',
        'accent-light':'#7bb8e0',
        'accent-soft': '#e8f3fb',
        'off-white':   '#f4f7fa',
        muted:         '#8a9bb0',
        'text-main':   '#0a1628',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
