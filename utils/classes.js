export class Drink {
	constructor(
		id = Math.floor(Math.random() * 1000000),
		title = "",
		description = "",
		image = "",
		price = 0,
		ingredients = [],
		created = ""
	) {
		this.id = id
		this.title = title
		this.description = description
		this.image = image
		this.price = price
		this.ingredients = ingredients
		this.created = created
	}

	static toJSON(
		id = Math.floor(Math.random() * 1000000),
		title = "",
		description = "",
		image = "",
		price = 0,
		ingredients = [],
		created = ""
	) {
		return {
			ID: id,
			Title: title,
			Description: description,
			Image: image,
			Price: price,
			Ingredients: ingredients,
			Created: created
		}
	}

	static fromJSON({
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
}

export class Ingredient {
	constructor(
		id = Math.floor(Math.random() * 1000000),
		title = "",
		price = 0
	) {
		this.id = id
		this.title = title
		this.price = price
	}

	static toJSON() {
		return {...this}
	}

	static fromJSON({node: {ID, Title, Price}}) {
		return new Ingredient(parseFloat(ID), Title, Price)
	}
}

export class ProductSortingStrategy {
	/**
	 * .create returns a sorting strategy.
	 * A sorting strategy is a fn that takes data and returns a copy of sorted data.
	 * @param {String} sortingEnumType The specific sorting strategy type.
	 * @param {String} sortingEnum The sorting strategy enum.
	 * @return {function(any[]):any[]} A sorting strategy function.
	 */
	static create(sortingEnumType = "", sortingEnum = {}) {
		if (
			Object.entries(sortingEnum)
				.map(([k, v]) => v)
				.includes(sortingEnumType)
		) {
			switch (sortingEnumType) {
				case sortingEnum.PRICE_ASC:
					return (data = []) =>
						[...data].sort((a, b) => b.Price - a.Price)
				case sortingEnum.PRICE_DESC:
					return (data = []) =>
						[...data].sort((a, b) => a.Price - b.Price)
				case sortingEnum.CREATED_ASC:
					return (data = []) =>
						[...data].sort(
							(a, b) =>
								Date.parse(b.Created) - Date.parse(a.Created)
						)
				case sortingEnum.CREATED_DESC:
					return (data = []) =>
						[...data].sort(
							(a, b) =>
								Date.parse(a.Created) - Date.parse(b.Created)
						)
				default:
					console.error(
						"Something went wrong while selecting strategy."
					)
					return null
			}
		} else {
			console.error("Sorting type was not recognized.")

			return null
		}
	}
}
