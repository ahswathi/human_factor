/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }

      'md': '668px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1580px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px' /* [
        {'min': '1580px', 'max': '1920px'},
        {'min': '1920px'}
      ], */
    }
  },
  plugins: [],
}
