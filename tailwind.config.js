module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      colors: {
        pokered: "#FF0000",
        pokeredish: "#CC0000",
        pokeblue: "#3B4CCA",
        pokeyelow: "#FFDE00",
        pokeyelowish: "#B3A125",
      },
    },
  },
  plugins: [],
};
