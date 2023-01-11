import vuetify from "vite-plugin-vuetify";

// seo stuff
const title = "CatCare";
const description =
	"Webapp that shows how you can add Vuetify 3 & TailwindCSS to a Nuxt 3 web app.";
const image = "/mockup.png";
const url = "https://catcare.behonbaker.com/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: { shim: false },
	build: { transpile: ["vuetify"] },
	vite: { ssr: { noExternal: ["vuetify"] } },
	css: ["vuetify/styles", "@/assets/main.css"],
	modules: [
		"nuxt-icon",
		"@kevinmarrec/nuxt-pwa",
		async (options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) =>
				// @ts-ignore
				// Customizing variables will show some errors in the console.
				config.plugins.push(
					vuetify({
						styles: { configFile: "assets/custom.scss" },
					})
				)
			);
		},
	],
	app: {
		head: {
			title,
			link: [
				{ rel: "preconnect", href: "https://rsms.me/" },
				{ rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
				{
					rel: "canonical",
					href: url,
				},
			],
			meta: [
				{
					hid: "description",
					name: "description",
					content: description,
				},
				{ property: "og:site_name", content: title },
				{ hid: "og:type", property: "og:type", content: "website" },
				{
					hid: "og:url",
					property: "og:url",
					content: url,
				},
				{
					hid: "og:image:secure_url",
					property: "og:image:secure_url",
					content: image,
				},
				{
					hid: "og:title",
					property: "og:title",
					content: title,
				},
				{
					hid: "og:description",
					property: "og:description",
					content: description,
				},
				{
					hid: "og:image",
					property: "og:image",
					content: image,
				},
				//Twitter
				{ name: "twitter:card", content: "summary_large_image" },
				{
					hid: "twitter:url",
					name: "twitter:url",
					content: url,
				},
				{
					hid: "twitter:title",
					name: "twitter:title",
					content: title,
				},
				{
					hid: "twitter:description",
					name: "twitter:description",
					content: description,
				},
				{
					hid: "twitter:image",
					name: "twitter:image",
					content: image,
				},
			],
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	pwa: {
		meta: {
			name: title,
			author: "Behon Baker",
			theme_color: "#4f46e5",
			description: description,
		},
		manifest: {
			name: title,
			short_name: title,
			theme_color: "#4f46e5",
			description: description,
		},
	},
});
