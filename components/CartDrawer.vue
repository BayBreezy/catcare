<template>
	<VNavigationDrawer
		scrim="black"
		width="340"
		temporary
		location="right"
		v-model="drawer"
		class="pa-5"
	>
		<VRow class="mb-7" align="center" justify="space-between" no-gutters>
			<VCol>
				<h1 class="tw-font-medium tw-text-gray-700 tw-text-xl">Your Cart</h1>
			</VCol>
			<VCol class="text-right">
				<VBtn color="grey-lighten-4" size="small" icon flat @click.stop="closeDraw()">
					<VIcon icon="fluent:dismiss-24-regular" />
				</VBtn>
			</VCol>
		</VRow>
		<ul class="tw-space-y-7">
			<template v-for="n in 3" :key="`cartItem-${n}`">
				<li class="d-flex justify-space-between">
					<VAvatar size="70" variant="elevated" class="rounded-lg">
						<VImg src="http://placeimg.com/250/250/cats" alt="Cat image in cart" />
					</VAvatar>
					<div class="ml-5 tw-grow">
						<p class="tw-font-medium tw-text-gray-700">Cat Item {{ n }}</p>
						<p class="tw-text-sm tw-text-gray-600">{{ n }} x ${{ n * 520.5 }}</p>
					</div>
					<div>
						<VBtn flat icon size="small">
							<VIcon color="grey-darken-2" icon="fluent:delete-24-regular" />
						</VBtn>
					</div>
				</li>
			</template>
		</ul>
		<template #append>
			<div class="pt-5">
				<VBtn
					rounded
					height="42"
					color="primary"
					flat
					block
					class="text-capitalize text-subtitle-1 font-weight-regular"
					>Checkout</VBtn
				>
			</div>
		</template>
	</VNavigationDrawer>
</template>

<script setup lang="ts">
	const drawer = ref(false);
	const openDraw = () => (drawer.value = true);
	const closeDraw = () => (drawer.value = false);

	defineExpose({ openDraw, closeDraw });
</script>

<style scoped></style>
