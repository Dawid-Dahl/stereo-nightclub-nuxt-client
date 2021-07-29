import { Drink } from "../utils/classes.js"
import { images } from "./images"

const range = (start, end) =>
  end <= start ? [start] : [...range(start, end - 1), end]

export const createDrinks = (number = 12) => {
  return range(1, number).map(
    (x, i) =>
      new Drink(
        Math.floor(Math.random() * 1000000),
        `Test Drink ${i}`,
        "Tempor incident sed",
        images[i % images.length],
        Math.floor(Math.random() * 1000)
      )
  )
}
