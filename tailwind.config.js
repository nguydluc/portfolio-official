/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandblue: "#001039",
        brandgreen: "#6CC5B1",
        brandoffwhite: "#F5F5F5",
        brandbluegrey: "#BAC8C9",
        brandbeige: "#DAD9D6",
      },
    },
  },
  plugins: [],
};
