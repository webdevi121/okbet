/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1280px",
      // => @media (min-width: 1200px) { ... }
    },
    fontFamily: {
      theme: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        theme: {
          primary: {
            DEFAULT: "var(--primary-color)",
            light: "var(--accent-color-4)",
            light100: "var(--primary-color-light100)",
            light200: "var(--primary-color-light200)",
          },
          secondary: {
            DEFAULT: "var(--secondary-color)",
          },
          light: {
            DEFAULT: "var(--light-color)",
          },
          borderColor: "#EAEAEA",
          darkGray: "#666666",
          lightGray: "#fafafa",
          mediumGray: "#F8F8F8",
          error: "var(--accent-color-1)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
