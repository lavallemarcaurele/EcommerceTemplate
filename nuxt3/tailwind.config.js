/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      main: '#00cdbd',
      secondary: '#f0f0f0',
      grey: '#585c56',
    },
  },
  plugins: [],
}

