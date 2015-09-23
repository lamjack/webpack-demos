var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
	/** 
	 * Read process.env.DEBUG
	 * env DEBUG=true webpack-dev-server
	 */
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	plugins: [devFlagPlugin]
};