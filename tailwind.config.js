const defaultTheme = require("tailwindcss/defaultTheme");

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
        start: "url('../images/start.png')",
        footer: "url('../images/footer.png')",
        sid: "url('../images/sid.jpg')",
        rojen: "url('../images/rojen.jpg')",
        pukar: "url('../images/pukar.jpeg')",
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
