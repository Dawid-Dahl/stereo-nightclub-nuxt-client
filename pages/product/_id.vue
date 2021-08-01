<template>
	<div class="wrapper">
		<ProductPageImage :src="product.image" />
		<ProductPageContent
			:title="product.title"
			:price="product.price"
			:description="product.description"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			product: {
				id: 1415460,
				title: "Test Drink 16",
				description: "Tempor incident sed",
				image: "https://storage.googleapis.com/stereo-nightclub-bucket/resurser/product-2.jpg",
				price: 298,
				ingredients: [
					"flour",
					"bleached wheat",
					"soy oil",
					"yeast",
					"flour",
					"bleached wheat",
					"soy oil",
					"yeast"
				]
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_mixins.scss" as m;
@use "@/assets/scss/abstracts/_variables.scss" as *;

.wrapper {
	@include m.flexCenter();
	height: 50vh;
	width: 80vw;
	margin: 4rem auto;
	overflow: hidden;

	@media only screen and (max-width: $laptop-width-small) {
		height: 40vh;
	}

	@media only screen and (max-width: $tablet-width-small) {
		width: 100%;
	}

	@media only screen and (max-width: $mobile-width-large) {
		@include m.flexCenter(column);
		height: 100%;
		margin: 0;
	}
}
</style>
