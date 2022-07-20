module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#8E44AD",
        secondary: "#0287D0",
        accent: "#3A4256",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    }, ],
  },
  plugins: [require("daisyui")],
}
