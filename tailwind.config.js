/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#58A646',
        'p-hero': '#303030E5',
        'customer-logo-bg': ' #F5F7F8',
        'solutions-bg': '#F5F7F8',
        'solutions-card-yellow': '#FBBC04'
      }
    },
  },
  plugins: [],
}