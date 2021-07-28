export class Drink {
  constructor(
    title = '',
    description = '',
    image = '',
    price = 0,
    ingredients = []
  ) {
    ;(this.title = title),
      (this.description = description),
      (this.image = image),
      (this.price = price),
      (this.ingredients = ingredients)
  }
}
