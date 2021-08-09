<template>
	<div class="wrapper">
		<SortingDropDown
			@UPDATE_SORTING_ORDER="updateSortingOrder"
			:sortingOrder="sortingOrder"
		/>
		<div class="grid">
			<Product
				v-for="product in paginatedProducts[page - 1]"
				:key="product.ID"
				:product="product"
			/>
		</div>
		<pagination
			v-model="page"
			:records="paginationRecords"
			:per-page="9"
			:options="options"
		/>
	</div>
</template>

<script>
import {Drink} from "@/utils/classes"
import {createPagination} from "@/utils/utils"
import readDrinks from "@/apollo/queries/readDrinks.query"

export default {
	data() {
		return {
			sortingOrder: "Created",
			page: 1,
			options: {
				chunk: 5
			}
		}
	},
	apollo: {
		products: {
			query: readDrinks,
			prefetch: true,
			update(data) {
				return data.readDrinks.map(drink => Drink.fromJSON(drink))
			}
		}
	},
	computed: {
		paginatedProducts() {
			return createPagination(9)(this.products)
		},
		paginationRecords() {
			return this.products ? this.products.length : 0
		}
	},
	methods: {
		constructProduct(product) {
			return Drink.fromJSON(product)
		},
		updateSortingOrder(sortingOrder) {
			console.log(sortingOrder)
			this.sortingOrder = sortingOrder
		}
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_variables.scss" as *;

.wrapper {
	max-width: 730px;
	margin: 0 auto 3rem auto;
	position: relative;

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
