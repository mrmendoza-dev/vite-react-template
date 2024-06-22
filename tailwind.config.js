module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
