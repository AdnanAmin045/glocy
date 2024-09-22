/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['Playpen Sans', 'cursive'], // Corrected syntax for custom font
        poppin: ['Poppins', 'sans-serif'],    // Corrected syntax for Poppins font
      },
      boxShadow: {
        'custom': '0px 4px 10px rgba(0, 0, 0, 0.05), 0px -4px 10px rgba(0, 0, 0, 0.05), 4px 0px 10px rgba(0, 0, 0, 0.05), -4px 0px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
