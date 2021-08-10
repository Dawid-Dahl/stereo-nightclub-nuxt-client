import readDrinks from "../queries/readDrinks.local.query"
import {sortingEnum} from "@/utils/enums"
import {updateApolloCacheOrder} from "~/utils/utils"
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

				updateApolloCacheOrder(sortingStrategy, readDrinks, cache)

				return true
			} catch (e) {
				console.error(e)
				return false
			}
		}
	}
}

export default productMutationResolvers
