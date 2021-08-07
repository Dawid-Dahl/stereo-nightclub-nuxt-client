export default function (context) {
	if (process.env.NODE_ENV === "development") {
		return {
			httpEndpoint: process.env.BASE_URL_DEV,
			httpLinkOptions: {
				headers: {
					Origin: process.env.ORIGIN_HEADER_DEV
				}
			}
		}
	} else {
		return {
			httpEndpoint: process.env.BASE_URL,
			httpLinkOptions: {
				headers: {
					Origin: ORIGIN_HEADER
				}
			}
		}
	}
}
