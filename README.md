<h1>Cat<span style="color: #4f46e5">Care</span></h1>

![Mockup of the landing page](/public//mockup.png)

## Demo

Demo can be found here [CatCare Demo](https://catcare.behonbaker.com/)

### Why?

I got tired of styling the [HeadlessUI](https://headlessui.com/) components. They are nice but to be styling them for each project is a pain. Vuetify 3 is out now so I thought, why not get the components from Vuetify & the precision in styling that Tailwind offers 🤔.

### About

So this repo is just a starting point. Here I mix Nuxt 3 with TailwindCSS and Vuetify. Thanks to the people who made this possible(This is all open source stuff).

#### Please Note 🚨

- If you plan to use Vuetify's dark mode(theme), stick to Vuetify color classes. Mixing the classes (jumping between TW & Vuetify color classes) will be a pain to fix when switching between dark and light mode.

- You can import tailwind colors inside your theme file for Vuetify. You can also instruct Vuetify to generate the color variants for you if you dont want to type out each `lighten` & `darken` variant like I did lol

```ts
import { ThemeDefinition } from "vuetify";
import cols from "tailwindcss/colors";

export const myTheme: ThemeDefinition = {
	dark: false,
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
```

#### GSAP 🤔?

Yeah, I added gsap.. feel free to remove it and use your anime library of choice.
