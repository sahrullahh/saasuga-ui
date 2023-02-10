/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      // font-famlily globally
      fontFamily: {
        lexend: '"lexend", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      colors: {
        primary: "#001E26",
        "primary-dark": " #002833",
        github: "#24292E",
      },
    },
  },
  plugins: [],
};
