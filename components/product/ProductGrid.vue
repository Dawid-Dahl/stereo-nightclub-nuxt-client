<template>
	<div class="wrapper">
		<div class="grid">
			<Product
				v-for="product in paginatedProducts[page - 1]"
				:key="product.id"
				:product="product"
			/>
		</div>
		<pagination
			v-model="page"
			:records="products.length"
			:per-page="9"
			@paginate="cb"
			:options="options"
		/>
	</div>
</template>

<script>
import {mapMutations, mapState} from "vuex"
import {createDrinks} from "../../content/dummyData"

export default {
	data() {
		return {
			page: 1,
			options: {
				chunk: 5
			}
		}
	},
	computed: {
		...mapState("products", ["products", "paginatedProducts"])
	},
	methods: {
		...mapMutations({
			addProducts: "products/ADD_PRODUCTS",
			paginateProducts: "products/PAGINATE_PRODUCTS"
		}),
		cb: function (page) {}
	},
	created: function () {
		this.addProducts(createDrinks(100))
		this.paginateProducts({
			products: this.products,
			productsPerPage: 9
		})
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
