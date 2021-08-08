<template>
	<div class="wrapper">
		<ProductImage
			:src="product.image"
			:id="product.id"
			:price="product.price"
			:ingredients="product.ingredients"
		/>
		<NuxtLink :to="dynamicUrl"
			><h1>{{ product.title }}</h1></NuxtLink
		>
		<NuxtLink :to="dynamicUrl"
			><h6>{{ productDescriptionSnippet }}</h6></NuxtLink
		>
	</div>
</template>

<script>
import {createSnippet} from "~/utils/utils"
import {Drink} from "../../utils/classes"

export default {
	props: {
		product: Drink
	},
	computed: {
		productDescriptionSnippet() {
			return createSnippet(this.product.description)
		},
		dynamicUrl: function () {
			return `product/${this.id}`
		}
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_mixins.scss" as *;
@use "@/assets/scss/abstracts/_variables.scss" as *;

.wrapper {
	@include flexCenter(column);
	margin: 0;
}

a {
	text-decoration: none;
}

h1,
h6 {
	color: white;
	margin: 0;
	cursor: pointer;
}

h1 {
	font-size: var(--font-size-main);
	margin: 0.4rem 0 0.1rem 0;

	@media only screen and (max-width: $mobile-width-small) {
		font-size: calc(var(--font-size-main) + 30%);
	}
}

h6 {
	font-size: var(--font-size-small);
	font-weight: 300;
	margin: 0 0 1rem 0;
	color: var(--text-color-dark);

	@media only screen and (max-width: $mobile-width-small) {
		font-size: calc(var(--font-size-main) + 30%);
		margin: 0 0 1.5rem 0;
	}
}
</style>
