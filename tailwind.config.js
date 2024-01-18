/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'Light-pink': 'hsl(275, 100%, 97%)',
        'Grayish-purple': 'hsl(292, 16%, 49%)',
        'Dark-purple': 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        'Work-sans': ['Work Sans', 'sans-serif']
      },
      backgroundImage: {
        'desktop-pattern': "url(./assets/images/background-pattern-desktop.svg)",
        'mobile-pattern': "url(./assets/images/background-pattern-mobile.svg)"
      }
    },
  },
  plugins: [],
}

