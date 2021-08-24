module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('../images/hero.png')",
        about: "url('../images/about.png')",
      }),
    },
    colors: {
      primary: "#f1bb7c",
      white: "#ffffff",
      black: "#000000",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
