import readDrinks from "../queries/readDrinks.local.query"
import {sortingEnum} from "@/utils/enums"
import {updateApolloCacheOrder, parseDate} from "~/utils/utils"
import {ProductSortingStrategy} from "~/utils/classes"

const productMutationResolvers = {
	Mutation: {
		updateSortingOrderMutation: (root, {sortingEnumType}, {cache}) => {
			try {
				if (
					!Object.entries(sortingEnum)
						.map(([k, v]) => v)
						.includes(sortingEnumType)
				) {
					console.error("A valid sorting type must be supplied.")
					return false
				}

				const sortingStrategy = ProductSortingStrategy.create(
					sortingEnumType,
					sortingEnum
				)

				return updateApolloCacheOrder(
					sortingStrategy,
					readDrinks,
					cache
				)
			} catch (e) {
				console.error(e)
				return false
			}
		},
		addProductMutation: (root, {id, description}, {cache}) => {
			const {readDrinks: drinks} = cache.readQuery({query: readDrinks})

			const myNewDrink = Drink.toJSON(id, "LOL DRINK LOCAL", description)

			const myNewDrinkWithTypeName = {...myNewDrink, __typename: "drink"}

			cache.writeQuery({
				query: readDrinks,
				data: {
					readDrinks: [...drinks, myNewDrinkWithTypeName]
				}
			})

			return id
		}
	}
}

export default productMutationResolvers
