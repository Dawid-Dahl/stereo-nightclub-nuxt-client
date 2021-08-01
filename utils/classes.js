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

	toJSON() {
		return {...this}
	}
}
