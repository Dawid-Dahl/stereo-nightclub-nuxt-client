require("dotenv").config()

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Stereo Nightclub",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{charset: "utf-8"},
			{name: "viewport", content: "width=device-width, initial-scale=1"},
			{hid: "description", name: "description", content: ""},
			{name: "format-detection", content: "telephone=no"}
		],
		link: [
			{rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
			{rel: "preconnect", href: "https://fonts.googleapis.com"},
			{rel: "preconnect", href: "https://fonts.gstatic.com"},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"@/assets/scss/base/_global.scss",
		"@/assets/scss/abstracts/_mixins.scss",
		"@/assets/scss/abstracts/_variables.scss",
		"@/assets/scss/components/_pagination.scss"
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/vue-pagination-2.js"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		"@nuxtjs/apollo",
		"@nuxtjs/dotenv"
	],

	apollo: {
		watchLoading: "@/apollo/loadingHandler.js",
		errorHandler: "@/apollo/errorHandler.js",
		clientConfigs: {
			default: "@/apollo/client-configs/default.js"
		}
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {baseURL: process.env.BASE_URL},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	router: {
		middleware: []
	}
}
