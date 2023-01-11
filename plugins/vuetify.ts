import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
	// create vuetify instance
	const vuetify = createVuetify({
		// SSR cause Nuxt - duh!
		ssr: true,
		// Defin icons to be used
		icons: {
			defaultSet: "fluentSet",
			// We don't need to import these explicitly cause nuxt auto import stuff from the `utils` folder
			aliases,
			sets: {
				fluentSet,
			},
		},
		// Add theme created - check utils folder
		theme: {
			defaultTheme: "myTheme",
			themes: {
				myTheme,
			},
		},
		// Global component defaults
		defaults: {
			VTextField: {
				color: "primary",
			},
		},
	});

	/// add the instance to our nuxt app
	app.vueApp.use(vuetify);
});
