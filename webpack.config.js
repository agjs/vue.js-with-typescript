const tslint_config = require('./tslint.config');

module.exports = {
	entry: "./src/app.tsx",
	output: {
		filename: "dist/bundle.js"
	},

	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],

		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},
	module: {
		preLoaders: [{
			test: /\.tsx?$/,
			loader: 'tslint-loader'
		}],

		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.tsx?$/,
			loader: 'vue-ts'
		}]
	},

	vue: {
		// instruct vue-loader to load TypeScript
		loaders: {
			js: 'vue-ts-loader',
		},
		// make TS' generated code cooperate with vue-loader
		esModule: true
	},

	tslint: tslint_config,

	// If you want to load 'vue' as an external, and not include it in your bundle
	// simply add it to the array.
	externals: []
};