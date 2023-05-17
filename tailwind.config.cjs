/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Roslindale: ["Roslindale", "sans-serif"],
        AmbersandBold: ["Ambersand-bold"],
      },
      colors: {
        primary: "#140074",
        secondary: "#B7B5B5",
        tertiary: "#2F2B4B",
        "black-100": "#100d25",
        cover: "rgba(9, 9, 9, 0.67)",
        red: "#CD5C5C",
        green: "#00FA9A",
        purple: "#985BF5",
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xxs: "270px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
