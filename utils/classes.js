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

	toJSON() {
		return {...this}
	}

	static fromJSON({node: {ID, Title, Price}}) {
		return new Ingredient(parseFloat(ID), Title, Price)
	}
}
