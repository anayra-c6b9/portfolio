import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
    extend: {
        colors: {
            sucess: "#66b96f",
            unsucess: "#1e232a",
            shadow: "#e8e8e8",
            darkness: "#2d2d2e",
            primary: "#0f0f10",
            secondary: "#848890",
        },
        fontFamily: {
            gothicNew: ['"Plus Jakarta Sans"', ..._fontFamily.sans],
            barcode: ['"Libre Barcode 39 Extended"', ..._fontFamily.sans],
            courier: ['"Courier New"', ..._fontFamily.serif],
        },
    },
};
export const plugins = [];
export const darkMode = "class";