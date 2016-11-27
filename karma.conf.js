module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai', 'sinon'],
		files: [
			'test/*.tsx'
		],

		exclude: [],
		preprocessors: {
			'test/**/*.spec.tsx': ['webpack']
		},

		webpack: {
			module: {
				loaders: [{
					test: /\.vue$/,
					loader: 'vue'
				}, {
					test: /\.tsx?$/,
					loader: 'vue-ts'
				}]
			},

			vue: {
				loaders: {
					js: 'vue-ts-loader',
				},
				esModule: true
			},

			resolve: {
				extensions: ['.ts', '.js', '.tsx', '.jsx', '']
			},
		},

		reporters: ['verbose', 'progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: true,
		concurrency: Infinity
	})
};