/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi-light': ['Satoshi Light', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
        'satoshi-italic': ['Satoshi Variable Bold Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

