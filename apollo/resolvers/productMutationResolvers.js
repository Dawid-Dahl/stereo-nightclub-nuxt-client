import {Drink} from "~/utils/classes"
import readDrinks from "../queries/readDrinks.local.query"

const productMutationResolvers = {
	Mutation: {
		updateSortingOrderMutation: (root, {sortBy}, {cache}) => {
			if (!sortBy) {
				console.log("A sorting method must be supplied.")
				return
			}

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
				console.log(copy)

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
