module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai', 'sinon'],
		files: [
			'test/*.tsx'
		],

		exclude: [],
		preprocessors: {
			'test/**/*.tsx': ['webpack']
		},

		webpack: {
			module: {
				loaders: [{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: 'ts-loader'
				}]
			},
			resolve: {
				extensions: ['.ts', '.js', '.tsx', '.jsx', '']
			}
		},

		reporters: ['verbose'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: true,
		concurrency: Infinity
	})
};