/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        forest: '#166534',
        'forest-mid': '#15803d',
        emerald: '#4ADE80',
        dark: '#0F172A',
      },
    },
  },
  plugins: [],
}
