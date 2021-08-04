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
import readDrink from "@/apollo/queries/readDrink"

export default {
	data() {
		return {
			product: null
		}
	},
	async fetch() {
		try {
			const client = this.$nuxt.context.app.apolloProvider.defaultClient

			const res = await client.query({
				query: readDrink,
				variables() {
					return {
						ID: this.$route.params.id
					}
				}
			})

			const {readDrink: drink} = res.data

			this.product = drink
		} catch (error) {
			console.error(error)
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
