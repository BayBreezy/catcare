<template>
	<Navbar />
	<VRow no-gutters class="h-screen">
		<VCol md="6">
			<VRow justify="center">
				<VCol cols="11" md="6">
					<h1 class="tw-font-semibold tw-text-4xl tw-mt-20 float">Join today!</h1>
					<p class="text-medium-emphasis mt-2 float">Enter you information to get started</p>
					<VForm @submit.prevent="submit" class="mt-10">
						<div class="float">
							<label for="name" class="font-weight-medium text-subtitle-1 mb-1 d-inline-block"
								>Name</label
							>
							<VTextField
								autofocus
								prepend-inner-icon="fluent:person-24-regular"
								id="name"
								type="name"
								variant="outlined"
								density="comfortable"
							/>
						</div>

						<div class="float">
							<label for="email" class="font-weight-medium text-subtitle-1 mb-1 d-inline-block"
								>Email</label
							>
							<VTextField
								prepend-inner-icon="fluent:mail-24-regular"
								id="email"
								type="email"
								variant="outlined"
								density="comfortable"
							/>
						</div>

						<div class="float">
							<label for="password" class="font-weight-medium text-subtitle-1 my-1 d-inline-block"
								>Password</label
							>
							<VTextField
								prepend-inner-icon="fluent:password-24-regular"
								id="password"
								:append-inner-icon="
									passwordType == 'password'
										? 'fluent:eye-20-regular'
										: 'fluent:eye-hide-20-regular'
								"
								@click:append-inner="togglePassword()"
								:type="passwordType"
								variant="outlined"
								density="comfortable"
							/>
						</div>

						<div class="float">
							<VBtn
								class="mt-5 text-capitalize text-subtitle-1 font-weight-regular"
								flat
								color="primary"
								min-height="44"
								block
								>Create Account</VBtn
							>
						</div>
					</VForm>
					<br />
					<div class="float">
						<NuxtLink
							class="tw-text-gray-400 hover:tw-text-primary d-inline-block mt-3 text-body-2"
							to="/login"
							>Log into your account
						</NuxtLink>
					</div>
				</VCol>
			</VRow>
		</VCol>
		<VCol md="6" class="hidden-md-and-down">
			<VImg
				cover
				class="cat"
				width="100%"
				src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1080&h=750&dpr=1"
			></VImg>
		</VCol>
	</VRow>
</template>

<script setup lang="ts">
	import { gsap } from "gsap";
	const passwordType = ref("password");
	const togglePassword = () => {
		passwordType.value = passwordType.value == "password" ? "text" : "password";
	};

	const submit = async () => {};

	onMounted(() => {
		gsap.from(".float", {
			x: -50,
			stagger: { each: 0.3 },
			opacity: 0,
		});
		gsap.from(".cat", { duration: 2, x: 50 });
	});
</script>
