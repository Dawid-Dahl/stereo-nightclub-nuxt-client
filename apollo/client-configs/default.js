import productTypeDefs from "../type-defs/productTypeDefs"
import productMutationResolvers from "../resolvers/productMutationResolvers"

export default function (context) {
	if (process.env.NODE_ENV === "development") {
		return {
			httpEndpoint: process.env.BASE_URL_DEV,
			httpLinkOptions: {
				headers: {
					Origin: process.env.ORIGIN_HEADER_DEV
				}
			},
			typeDefs: {
				...productTypeDefs
			},
			resolvers: {
				...productMutationResolvers
			},
			onCacheInit: cache => {
				const data = {
					connected: false
				}
				cache.writeData({data})
			}
		}
	} else {
		return {
			httpEndpoint: process.env.BASE_URL,
			httpLinkOptions: {
				headers: {
					Origin: process.env.ORIGIN_HEADER
				}
			}
		}
	}
}
