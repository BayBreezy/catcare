<template>
	<header class="tw-bg-white/80 tw-backdrop-blur tw-sticky tw-top-0 tw-border-b tw-z-50">
		<div
			class="tw-flex tw-items-center tw-justify-between tw-mx-auto tw-max-w-6xl py-5 px-5 px-md-0"
		>
			<NuxtLink to="/" class="tw-font-semibold tw-text-2xl"
				>Cat<span class="tw-text-primary">Care</span></NuxtLink
			>
			<!-- Mobile only nav button -->
			<VBtn
				@click="mobileMenu?.openDraw()"
				class="hidden-md-and-up"
				flat
				icon="fluent:navigation-24-regular"
			/>
			<nav class="tw-flex hidden-sm-and-down tw-items-center tw-gap-x-1">
				<template v-for="(l, i) in links" :key="`navItem-${i}`">
					<NuxtLink
						v-ripple
						:to="l.link"
						class="tw-text-sm tw-font-medium tw-px-4 tw-py-2 tw-transition tw-text-gray-600 hover:tw-bg-primary-50 hover:tw-text-primary tw-rounded-lg"
						>{{ l.title }}</NuxtLink
					>
				</template>
			</nav>
			<div class="tw-flex tw-gap-x-3 tw-items-center hidden-sm-and-down">
				<button
					@click="searchDialog?.openDialog()"
					v-ripple
					class="tw-text-gray-600 tw-p-2 tw-flex tw-items-center tw-justify-center tw-rounded-lg hover:tw-bg-primary-50 hover:tw-text-primary"
				>
					<VIcon size="22">fluent:search-24-regular</VIcon>
				</button>
				<button
					@click="cartDraw?.openDraw()"
					v-ripple
					class="tw-text-gray-600 tw-p-2 tw-flex tw-items-center tw-justify-center tw-rounded-lg hover:tw-bg-primary-50 hover:tw-text-primary"
				>
					<VIcon size="22">fluent:cart-24-regular</VIcon>
				</button>
				<NuxtLink
					to="/login"
					v-ripple
					class="tw-text-sm tw-font-medium tw-px-4 tw-py-2 tw-transition tw-text-gray-600 hover:tw-bg-primary-50 hover:tw-text-primary tw-rounded-lg"
					>Login</NuxtLink
				>
				<NuxtLink
					to="/register"
					v-ripple
					class="tw-text-sm tw-font-medium tw-px-4 tw-py-2 tw-transition tw-text-gray-600 hover:tw-bg-primary hover:tw-text-primary-50 tw-rounded-lg tw-border tw-border-gray-400 hover:tw-border-primary"
					>Register</NuxtLink
				>
			</div>
		</div>
	</header>
	<CartDrawer ref="cartDraw" />
	<Search ref="searchDialog" />
	<MobileMenu ref="mobileMenu" />
</template>

<script setup lang="ts">
	import CartDrawer from "./CartDrawer.vue";
	import Search from "./Search.vue";
	import MobileMenu from "./MobileMenu.vue";
	import { useTheme } from "vuetify";
	const theme = useTheme();

	const links = ref([
		{ title: "Home", link: "/" },
		{ title: "Products", link: "#" },
		{ title: "About Us", link: "#" },
		{ title: "Contact Us", link: "#" },
	]);

	const cartDraw = ref<InstanceType<typeof CartDrawer> | null>();
	const searchDialog = ref<InstanceType<typeof Search> | null>();
	const mobileMenu = ref<InstanceType<typeof MobileMenu> | null>();
</script>

<style scoped></style>
