module.exports = {
  corePlugins: {
    accessibility: false,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Roboto slab", "sans-serif"],
      },
      colors: {
        red: {
          100: "#e09090",
          200: "#db7e7e",
          300: "#d66b6b",
          400: "#da5959",
          500: "#cc4646",
          600: "#b83f3f",
          700: "#a33838",
          800: "#8f3131",
          900: "#7a2a2a",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
