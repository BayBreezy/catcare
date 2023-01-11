<template>
	<VNavigationDrawer
		scrim="black"
		width="340"
		temporary
		location="right"
		v-model="drawer"
		class="pa-5"
	>
		<div class="d-flex justify-space-between">
			<NuxtLink to="/" class="tw-font-semibold tw-text-2xl"
				>Cat<span class="tw-text-primary">Care</span></NuxtLink
			>
			<VBtn @click="closeDraw()" flat size="small" icon="fluent:dismiss-24-filled" />
		</div>
		<VList>
			<template v-for="(l, i) in links" :key="`mobileLink-${i}`">
				<VListItem class="rounded-lg" link>
					<VListItemTitle>{{ l.title }}</VListItemTitle>
				</VListItem>
			</template>
			<VListItem link class="rounded-lg" @click="searchDialog?.openDialog()">
				<VListItemTitle>Search</VListItemTitle>
			</VListItem>
			<VListItem
				link
				class="rounded-lg"
				@click="
					closeDraw();
					cartDraw?.openDraw();
				"
			>
				<VListItemTitle>My Cart</VListItemTitle>
			</VListItem>
			<VListItem to="/login" link color="primary" class="rounded-lg">
				<VListItemTitle>Login</VListItemTitle>
			</VListItem>
			<VListItem to="/register" color="primary" class="rounded-lg">
				<VListItemTitle>Register</VListItemTitle>
			</VListItem>
		</VList>
	</VNavigationDrawer>
	<CartDrawer ref="cartDraw" />
	<Search ref="searchDialog" />
</template>

<script setup lang="ts">
	import CartDrawer from "./CartDrawer.vue";
	import Search from "./Search.vue";
	const drawer = ref(false);
	const openDraw = () => (drawer.value = true);
	const closeDraw = () => (drawer.value = false);

	defineExpose({ openDraw, closeDraw });

	const cartDraw = ref<InstanceType<typeof CartDrawer> | null>();
	const searchDialog = ref<InstanceType<typeof Search> | null>();

	const links = ref([
		{ title: "Home", link: "/" },
		{ title: "Products", link: "#" },
		{ title: "About Us", link: "#" },
		{ title: "Contact Us", link: "#" },
	]);
</script>
