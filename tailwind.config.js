module.exports = {
  corePlugins: {
    accessibility: false,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Roboto slab", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
