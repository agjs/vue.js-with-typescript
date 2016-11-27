const tslint_config = require('./tslint.config');

module.exports = {
	entry: "./src/app.tsx",
	output: {
		filename: "dist/bundle.js"
	},

	resolve: {
		// Add '.ts' and '.tsx' as a resolvable extension.
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],

		// By default, the NPM package exports the runtime-only build. To use the standalone build, add the following alias to your Webpack config:
		// https://vuejs.org/v2/guide/installation.html
		
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},
	module: {
		preLoaders: [{
			test: /\.tsx?$/,
			loader: 'tslint-loader'
		}],

		loaders: [
			// It's important to run 'babel' first this will avoid a compilation error
			{
				test: /\.tsx?$/,
				loader: "babel"
			},
			// Run ts loader to transform our typescript into JS
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader"
			}
		]
	},

	tslint: tslint_config,

	// If you want to load 'vue' as an external, and not include it in your bundle
	// simply add it to the array.
	externals: []
};