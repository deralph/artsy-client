/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landback: "url('/../../public/Background.jpg')",
      },
      colors: {
        primary: "#1e1e1e",
        secondary: "#07174b",
        // secondary: {
        //   100: "#E2E2D5",
        //   200: "#888883",
        // },
      },
      spacing: {
        init: "1em",
      },
      fontFamily: {
        primary: "satoshi",
        secondary: "DM Serif Text",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      slg: { max: "900px" },
      // => @media (max-width: 900px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sml: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      sm: { max: "500px" },
      // => @media (max-width: 500px) { ... }
    },
  },
  plugins: [],
};
