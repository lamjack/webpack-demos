module.exports = {
	entry: './main.jsx',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
			/**
			 *  https://github.com/webpack/css-loader
			 *  https://github.com/css-modules/css-modules
			 **/
			{ test: /\.css$/, loader: 'style-loader!css-loader?modules' }
		]
	}
}