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
import addProductMutation from "@/apollo/mutations/addProduct.local.mutation"

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

			this.$apollo.mutate({
				mutation: addProductMutation,
				variables: {
					id: 234345345340,
					description: "I am a new product."
				},
				update: (store, data) => {
					console.log("STORE", store)
					console.log("DATA", data)
					console.log("Inside update")
				}
			})
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
