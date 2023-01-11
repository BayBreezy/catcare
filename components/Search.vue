<template>
	<div>
		<VDialog v-model="dialog" max-width="500">
			<VCard rounded="lg">
				<VTextField
					autofocus
					hide-details
					v-model="search"
					clearable
					variant="solo"
					placeholder="Search"
					prepend-inner-icon="fluent:search-24-regular"
				/>
				<VExpandTransition>
					<VList v-if="search" lines="two">
						<VListSubheader>Products</VListSubheader>
						<template v-for="(n, i) in dummyResults" :key="`searchItem-${i}`">
							<VListItem>
								<template #prepend>
									<VAvatar size="50">
										<VImg cover :src="n.image" />
									</VAvatar>
								</template>
								<VListItemTitle
									class="font-weight-medium hover:tw-text-primary tw-cursor-pointer hover:tw-underline"
									>{{ n.name }}</VListItemTitle
								>
								<VListItemSubtitle
									>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos,
									sunt rem tempore mollitia odio soluta fuga dolore ratione reprehenderit tenetur
									maiores, voluptates eligendi laborum vero repellendus molestias impedit
									molestiae?</VListItemSubtitle
								>
							</VListItem>
							<!-- <div class="border-b tw-h-px tw-ml-16"></div> -->
						</template>
					</VList>
				</VExpandTransition>
			</VCard>
		</VDialog>
	</div>
</template>

<script setup lang="ts">
	const dialog = ref(false);

	const openDialog = () => (dialog.value = true);
	const closeDialog = () => (dialog.value = false);

	// expose functions
	defineExpose({ openDialog, closeDialog });

	const search = ref("");

	const dummyResults = ref([
		{
			image:
				"https://images.unsplash.com/photo-1596822316110-288c7b8f24f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
			name: "Blue Leash Collar",
		},
		{
			image:
				"https://images.unsplash.com/photo-1615332591802-dddd86b35238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
			name: "Polkadot String Toy",
		},
		{
			image:
				"https://images.unsplash.com/photo-1585837575652-267c041d77d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
			name: "Blue Fish Hook Toy",
		},
	]);
</script>
