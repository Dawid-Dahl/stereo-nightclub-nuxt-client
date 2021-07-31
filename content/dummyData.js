import { Drink } from "../utils/classes"
import { range } from "../utils/utils"
import { images } from "./images"

export const createDrinks = (number = 12) => {
  return range(1, number).map(
    x =>
      new Drink(
        Math.floor(Math.random() * 10000000),
        `Test Drink ${x}`,
        "Tempor incident sed",
        images[x % images.length],
        Math.floor(Math.random() * 1000),
        [
          "flour",
          "bleached wheat",
          "soy oil",
          "yeast",
          "flour",
          "bleached wheat",
          "soy oil",
          "yeast"
        ]
      )
  )
}
