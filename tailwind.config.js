/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          xl: "1440px",
        },
        margin: "0 auto",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], 
      },
      colors: {
        primary: "#274c5b",
        secondary: "#7EB693",
        third: "#EACF70",
        fourth: "#D4D4D4",
        fifth: "#F9F8F8",
        sixth: "#EFF6F1",
        seventh: "#525C60",
        eigth: "#22C55E",
        nineth: "#ffff",
      },
    },
  },
  plugins: [],
};
