/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'morado': '#1F7F7E',
      'hmorado': '#78C5AC',
      'negro': '#000112',
      'bg': '#0A1528',
      'oscuro': '#0C1C33',
      'hoscuro': '#113546',
      'gris': '#828FA3',
      'hgris': '#E4EBFA',
      'blanco': '#F4F7FD',
      'hblanco': '#FFFFFF',
      'rojo': '#EA5555',
      'hrojo': '#FF9898'
    }
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}