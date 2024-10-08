/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        header_footer_background_color: "var(--header_footer_background_color)",
        client_whatToDo_background_color:
          "var(--client_whatToDo_background_color)",
        primary_font_color: "var(--primary_font_color)",
        orange_color: "var(--orange_color)",
      },
    },
    fontWeight: { heading_font_weight: "var(--heading_font_weight)" },
    fontFamily: {
      sans_serif: ["Pontano Sans", "sans-serif"],
      ruda: ["Ruda", "sans-serif"],
    },
    fontSize: {
      heading_font_size: "var(--heading_font_size)",
      para_font_size: "var(--para_font_size)",
    },
  },
  plugins: [],
};
