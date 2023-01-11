import { ThemeDefinition } from "vuetify";
// Bring in colors from tailwindcss
import cols from "tailwindcss/colors";

export const myTheme: ThemeDefinition = {
	// We are using a light theme
	dark: false,
	// Primary colors set
	colors: {
		"primary-lighten-6": cols.indigo[50],
		"primary-lighten-5": cols.indigo[100],
		"primary-lighten-4": cols.indigo[200],
		"primary-lighten-3": cols.indigo[300],
		"primary-lighten-2": cols.indigo[400],
		"primary-lighten-1": cols.indigo[500],
		primary: cols.indigo[600],
		"primary-darken-1": cols.indigo[700],
		"primary-darken-2": cols.indigo[800],
		"primary-darken-3": cols.indigo[900],
	},
};
