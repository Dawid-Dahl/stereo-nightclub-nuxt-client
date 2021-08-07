export default (
	{graphQLErrors, networkError, operation, forward},
	nuxtContext
) => {
	console.log("Global error handler")
	console.log(graphQLErrors)
	/* console.log(networkError) */
	/* console.log(nuxtContext) */
}
