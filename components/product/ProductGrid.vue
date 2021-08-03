<template>
	<div class="wrapper">
		<div class="grid">
			<Product
				v-for="product in paginatedProducts[page - 1]"
				:key="product.ID"
				:product="constructProduct(product)"
			/>
		</div>
		<pagination
			v-model="page"
			:records="products.length"
			:per-page="9"
			:options="options"
		/>
	</div>
</template>

<script>
import {mapMutations, mapState} from "vuex"
import {Drink} from "@/utils/classes"
import readDrinks from "@/apollo/queries/readDrinks"

export default {
	data() {
		return {
			page: 1,
			options: {
				chunk: 5
			}
		}
	},
	methods: {
		...mapMutations({
			PAGINATE_PRODUCTS: "products/PAGINATE_PRODUCTS",
			ADD_PRODUCTS: "products/ADD_PRODUCTS"
		}),
		constructProduct({
			ID,
			Title,
			Description,
			Image,
			Price,
			Ingredients,
			Created
		}) {
			return new Drink(
				parseFloat(ID),
				Title,
				Description,
				Image,
				Price,
				Ingredients.edges,
				Created
			)
		}
	},
	computed: {
		...mapState("products", ["products", "paginatedProducts"])
	},
	async fetch() {
		const client = this.$nuxt.context.app.apolloProvider.defaultClient

		console.log("LOL", process.env.BASE_URL)

		/* const {data} = await client.query({
			query: readDrinks
		})

		const {readDrinks: drinks} = data

		this.ADD_PRODUCTS(drinks)

		this.PAGINATE_PRODUCTS({
			products: drinks,
			productsPerPage: 9
		}) */
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_variables.scss" as *;

.wrapper {
	max-width: 730px;
	margin: 0 auto 3rem auto;

	@media only screen and (max-width: $tablet-width-large) {
		margin: 0 1rem 3rem 1rem;
	}
	@media only screen and (max-width: $mobile-width-small) {
		margin: 0;
	}
}

.grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 0.5rem;

	@media only screen and (max-width: $tablet-width-small) {
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: $mobile-width-small) {
		display: block;
	}
}
</style>
