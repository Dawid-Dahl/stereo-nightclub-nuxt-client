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
	data() {
		return {
			product: null
		}
	},
	methods: {
		constructProduct(product) {
			return Drink.fromJSON(product)
		}
	},
	apollo: {
		product: {
			query: readDrink,
			prefetch: true,
			variables() {
				return {id: 5}
			},
			update(data) {
				console.log("THE DATA", data)
				return null
			}
		}
	}
	/* async fetch() {
		try {
			const client = this.$nuxt.context.app.apolloProvider.defaultClient

			const res = await client.query({
				query: readDrink,
				variables: {
					ID: 5
				}
			})

			const drink = res.data.readDrink[0]

			if (drink) {
				this.product = this.constructProduct(drink)
			} else {
				console.error("No drink was found.")
			}
		} catch (error) {
			console.error(error)
		}
	} */
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
