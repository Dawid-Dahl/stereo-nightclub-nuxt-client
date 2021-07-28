export class Drink {
  constructor(
    id = Math.floor(Math.random() * 1000000),
    title = "",
    description = "",
    image = "",
    price = 0,
    ingredients = []
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.price = price
    this.ingredients = ingredients
  }
}
