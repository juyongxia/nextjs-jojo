module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.js",
    "./pages/**/*.ts",
    "./components/**/*.tsx",
    "./components/**/*.js",
    "./components/**/*.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}