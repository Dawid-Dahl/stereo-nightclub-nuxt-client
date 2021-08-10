export const range = (start, end) =>
	end <= start ? [start] : [...range(start, end - 1), end]

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

export const changeElementHTML = (elementClass = "", content = "") => {
	const element = document.querySelector(elementClass)
	element.innerHTML = content
}

export const createSnippet = (str = "", snippetWordOffset = 10) => {
	const words = str.split(" ")

	return words.length < snippetWordOffset
		? str
		: `${words.slice(0, 5).join(" ")} ...`
}

export const updateApolloCacheOrder = (sortingStrategy, query, apolloCache) => {
	try {
		if (!sortingStrategy || !query || !apolloCache) {
			console.error("Args not passed correctly")
			return false
		}

		const queryName = query?.definitions[0]?.name?.value ?? null

		if (queryName) {
			const {[queryName]: data} = apolloCache.readQuery({query: query})

			const sortedData = sortingStrategy(data)

			apolloCache.writeQuery({
				query: query,
				data: {
					[queryName]: sortedData
				}
			})

			return true
		} else {
			console.error("Couldn't find the query name")
			return false
		}
	} catch (e) {
		console.error(e)
		return false
	}
}
