/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary': "#050816",
        'title' : '#4D27F2',
        'subtitle' : '#dfd9ff',
      },
      backgroundImage:{
        "hero-pattern": "url('/src/assets/herobg.png')",
      }
    }, 
  },
  plugins: [],
}