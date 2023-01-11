const cols = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
	],
	prefix: "tw-",
	theme: {
		extend: {
			fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
			colors: {
				primary: {
					DEFAULT: cols.indigo[600],
					...cols.indigo,
				},
			},
		},
	},
	plugins: [],
};
