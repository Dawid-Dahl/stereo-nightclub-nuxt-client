import readDrinks from "../queries/readDrinks.local.query"

const productMutationResolvers = {
	Mutation: {
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
