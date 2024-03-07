import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    colors: {
      success: "#66b96f",
    },
    fontFamily: {
      gothicNew: ['"Plus Jakarta Sans"', ..._fontFamily.sans],
      barcode: ['"Libre Barcode 39 Extended"', ..._fontFamily.sans],
      courier: ['"Courier New"', ..._fontFamily.serif],
    },
  },
};
export const plugins = [];
