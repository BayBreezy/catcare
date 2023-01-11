<template>
	<div>
		<Navbar />
		<div class="tw-relative">
			<!-- Photos -->

			<img
				src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
				alt="Cat Image"
				class="tw-absolute tw-right-32 tw-top-24 tw-rounded-3xl tw-object-cover tw-w-[500px] tw-h-[500px] img hidden-md-and-down"
			/>
			<img
				src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
				alt="Cat Image"
				class="tw-absolute tw-right-16 -tw-top-10 tw-shadow tw-rounded-3xl tw-object-cover tw-w-[400px] tw-h-[600px] hover:tw-scale-110 hover:tw-rotate-2 tw-transition-all tw-z-10 img hidden-md-and-down"
			/>

			<!-- Text Section -->
			<section class="lg:tw-max-w-6xl tw-mx-auto tw-relative">
				<h1
					class="lg:tw-text-7xl tw-text-4xl tw-font-medium tw-text-gray-800 lg:tw-mt-24 tw-mt-16 tw-max-w-3xl heading tw-text-center lg:tw-text-left"
				>
					Show your cat all the love in the world
				</h1>
				<p
					class="tw-text-gray-600 lg:tw-text-xl tw-my-10 lg:tw-leading-loose lg:tw-max-w-xl heading tw-px-5 lg:tw-px-0 tw-text-center lg:tw-text-left"
				>
					We understand that your cat means the world to you, so we offer only the best here at
					CatCare. Get everything you need from cat food, cat beds, cat toys and more!
				</p>

				<div class="tw-flex tw-items-center tw-justify-center lg:tw-justify-start tw-gap-3 heading">
					<NuxtLink
						v-ripple
						class="tw-bg-primary tw-text-white px-8 py-4 tw-rounded-lg hover:tw-bg-primary-700"
						to="/"
						>View Products</NuxtLink
					>
					<NuxtLink
						v-ripple
						class="tw-bg-white border tw-text-gray-600 px-8 py-4 tw-rounded-lg hover:tw-bg-gray-100"
						to="/"
						>Contact Us</NuxtLink
					>
				</div>

				<span
					class="tw-mt-10 mx-auto mx-md-0 tw-shadow pa-5 tw-flex tw-flex-col tw-w-72 tw-rounded-lg tw-bg-white heading"
				>
					<p class="tw-font-medium tw-capitalize tw-text-gray-700">Join 1k+ satisfied customers</p>
					<div class="mt-4 tw-flex tw-items-center tw-gap-x-2">
						<Icon class="tw-text-yellow-500" name="fluent:star-24-filled" size="20" />
						<span class="tw-text-sm tw-text-gray-600">5K + five star reviews</span>
					</div>
				</span>
			</section>
		</div>

		<div class="tw-mt-40 tw-mb-10">
			<PopularProducts />
		</div>
		<VFooter class="mt-10 justify-center py-10 border-t">
			<VRow class="lg:tw-max-w-6xl" justify="center">
				<VCol cols="12" md="3">
					<NuxtLink to="/" class="tw-font-semibold tw-text-2xl"
						>Cat<span class="tw-text-primary">Care</span></NuxtLink
					>
					<p class="tw-text-gray-600 tw-mt-5">
						Get everything you need from cat food, cat beds, cat toys and more!
					</p>
				</VCol>
				<VCol cols="12" md="3" class="pl-md-10">
					<h1 class="tw-text-gray-700 tw-font-semibold tw-text-xl mb-5">Links</h1>

					<nav class="tw-flex tw-flex-col tw-gap-2 tw-text-gray-500">
						<NuxtLink to="#" class="hover:tw-underline">Home</NuxtLink>
						<NuxtLink to="#" class="hover:tw-underline">About</NuxtLink>
						<NuxtLink to="#" class="hover:tw-underline">Contact</NuxtLink>
						<NuxtLink to="#" class="hover:tw-underline">Products</NuxtLink>
					</nav>
				</VCol>
				<VCol cols="12" md="3">
					<h1 class="tw-text-gray-700 tw-font-semibold tw-text-xl mb-5">Opening Hours</h1>

					<p class="tw-text-gray-500 mb-2">Mon-Fri: 9:00 AM - 4:00 PM</p>
					<p class="tw-text-gray-500 mb-2">Saturday: 11:00 AM - 5:00 PM</p>
					<p class="tw-text-gray-500 mb-2">Sunday: Closed</p>
				</VCol>
				<VCol cols="12" md="3">
					<h1 class="tw-text-gray-700 tw-font-semibold tw-text-xl mb-5">Get In Touch</h1>

					<p class="tw-text-gray-500 mb-2 hover:tw-underline">
						<a href="mailto:admin@catcare.com">admin@catcare.com</a>
					</p>
					<p class="tw-text-gray-500 mb-2 hover:tw-underline">
						<a href="mailto:info@catcare.com">info@catcare.com</a>
					</p>
					<p class="tw-text-gray-500 mb-2 hover:tw-underline">
						<a href="tel:+1 876 555-8421">+1 876 555-8421</a>
					</p>
				</VCol>
			</VRow>
		</VFooter>
	</div>
</template>

<script setup lang="ts">
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		gsap.from(".heading", {
			scrollTrigger: {
				trigger: ".heading",
				toggleActions: "play none none none",
			},
			duration: 1,
			stagger: {
				each: 0.5,
			},
			opacity: 0,
			x: -100,
		});
	});
</script>
