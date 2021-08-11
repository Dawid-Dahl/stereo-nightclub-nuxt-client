<template>
	<div v-if="product" class="wrapper">
		<ProductPageImage :src="product.image" />
		<ProductPageContent
			:title="product.title"
			:price="product.price"
			:description="product.description"
		/>
	</div>
</template>

<script>
import readDrink from "@/apollo/queries/readDrink.query"
import {Drink} from "@/utils/classes"

export default {
	apollo: {
		product: {
			query: readDrink,
			variables() {
				return {id: this.$route.params.id}
			},
			update(data) {
				try {
					const drink = data.readDrink[0]
					return Drink.fromJSON(drink)
				} catch (e) {
					console.error("No product could be found.")
				}
			}
		}
	},
	mounted() {
		console.log("LOOOL4", this.$config.baseUrl)
		console.log("LOOOL5", this.$config.originHeader)
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
