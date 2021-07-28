import Drink from './classes'

const range = (start, end) =>
  end <= start ? [start] : [...range(start, end - 1), end]

export const createDrinks = (number = 12) => {
  return range(1, number).map(x => new Drink())
}
