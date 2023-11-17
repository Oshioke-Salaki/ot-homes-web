/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        textPrimary: "#312E2E",
        lightBorder: "#D0D0D0",
        primaryColor: "#772271",
      },
      backgroundImage: {
        homeHero: "url('/src/assets/homeHeroImg.png')",
        city1: "url('/src/assets/city1.png')",
        city2: "url('/src/assets/city2.png')",
        city3: "url('/src/assets/city3.png')",
        city4: "url('/src/assets/city4.png')",
      },
      boxShadow: {
        shadow1: "0px 15px 30px 0px rgba(221, 221, 221, 0.15)",
      },
    },
  },
  plugins: [],
};
