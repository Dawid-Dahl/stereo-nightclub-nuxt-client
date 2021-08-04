export default function (context) {
	return {
		httpEndpoint: process.env.BASE_URL,
		httpLinkOptions: {
			headers: {
				Authorization: "Basic ZGF3aWRkYWhsQGdtYWlsLmNvbTp0ZXN0MTIzNDU="
			}
		}
	}
}
