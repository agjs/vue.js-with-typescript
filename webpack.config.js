module.exports = {
	entry: "./src/app.tsx",
	output: {
		filename: "bin/bundle.js"
	},
	resolve: {
		// Add '.ts' and '.tsx' as a resolvable extension.
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		loaders: [
			// It's important to run 'babel' first this will avoid a compilation error
			{
				test: /\.tsx?$/,
				loader: "babel"
			},
			// Run ts loader to transform our typescript into JS
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			}
		]
	},
	// If you want to load 'vue' as an external, and not include it in your bundle
	// simply add it to the array.
	externals: []
};