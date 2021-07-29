export const createPagination =
  (itemsPerPage = 10) =>
  (arr = []) => {
    const copy = [...arr]
    const paginated = []

    while (copy.length) {
      paginated.push(copy.splice(0, itemsPerPage))
    }

    return paginated
  }

export const range = (start, end) =>
  end <= start ? [start] : [...range(start, end - 1), end]

export const changeElementHTML = (elementClass = "", content = "") => {
  console.log("LOL")
  const element = document.querySelector(elementClass)
  element.innerHTML = content
}
