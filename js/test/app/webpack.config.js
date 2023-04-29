module.exports = {
	// ... outras configurações ...
	resolve: {
		fallback: {
			fs: false, // Indica que não precisamos de um polyfill para 'fs'
			path: require.resolve('path-browserify'),
			os: require.resolve('os-browserify/browser'),
		},
	},
	// ... outras configurações ...
}
