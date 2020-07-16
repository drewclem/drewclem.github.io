module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Roboto slab", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
