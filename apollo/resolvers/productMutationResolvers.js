import readDrinks from "../queries/readDrinks.local.query"
import {sortingEnum} from "@/utils/enums"

const productMutationResolvers = {
	Mutation: {
		updateSortingOrderMutation: (root, {sortingEnumType}, {cache}) => {
			if (!sortBy) {
				console.log("A sorting method must be supplied.")
				return
			}

			updateCacheOrder(sortingEnumType, readDrinks, cache)

			const {readDrinks: drinks} = cache.readQuery({query: readDrinks})

			const copy = [...drinks]

			if (sortBy.toLowerCase() === "price") {
				copy.sort((a, b) => a.Price - b.Price)

				cache.writeQuery({
					query: readDrinks,
					data: {
						readDrinks: copy
					}
				})
			}

			if (sortBy.toLowerCase() === "created") {
				copy.sort(
					(a, b) => Date.parse(b.Created) - Date.parse(a.Created)
				)

				cache.writeQuery({
					query: readDrinks,
					data: {
						readDrinks: copy
					}
				})
			}

			return sortBy
		}
	}
}

export default productMutationResolvers
