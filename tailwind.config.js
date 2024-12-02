/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Adds Poppins font
      },
      colors: {
        green: {
          DEFAULT: "#00732F", // Green button color
          hover: "#005a25", // Darker green for hover
        },
        red: {
          DEFAULT: "#EB7150", // Red button color
          hover: "#d45538", // Darker red for hover
        },
        section: {
          DEFAULT: "#072F57", // Section container background
          card: "#E8FBFF", // Section and card background
        },
        footer: "#123557", // Footer background
      },
    },
  },
  plugins: [],
};
