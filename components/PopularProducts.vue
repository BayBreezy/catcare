<template>
	<section class="tw-max-w-6xl tw-mx-auto">
		<h1 class="tw-font-semibold tw-text-2xl text-center">Popular Products</h1>

		<div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-4 tw-gap-5 tw-mt-10 tw-p-4 lg:tw-p-0">
			<template v-for="n in 4" :key="`popItem-${n}`">
				<div class="prod">
					<img
						src="https://images.unsplash.com/photo-1631412727237-226e759778d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
						alt="Cat food"
						class="tw-object-cover tw-border tw-w-full tw-h-60 tw-shadow tw-object-center tw-rounded-md"
					/>
					<div class="text-center px-2">
						<p class="tw-font-medium tw-text-gray-700 tw-mt-4 tw-text-lg">Cat Food</p>
						<p class="mt-1 tw-text-gray-600">$25,150.00</p>
						<div class="mt-2 tw-flex tw-items-center tw-justify-center">
							<Icon class="tw-text-yellow-500" name="fluent:star-24-filled" size="18" />
							<Icon class="tw-text-yellow-500" name="fluent:star-24-filled" size="18" />
							<Icon class="tw-text-yellow-500" name="fluent:star-24-filled" size="18" />
							<Icon class="tw-text-yellow-500" name="fluent:star-24-filled" size="18" />
							<Icon class="tw-text-gray-300" name="fluent:star-24-filled" size="18" />
						</div>
					</div>
				</div>
			</template>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		gsap.from(".prod", {
			scrollTrigger: {
				trigger: ".prod",
				toggleActions: "play none none none",
			},
			stagger: { each: 0.2 },
			opacity: 0,
			y: -30,
		});
	});
</script>
