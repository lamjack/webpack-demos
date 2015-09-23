module.exports = {
	entry: './main.jsx',
	output: {
		filename: 'bundle.js'
	},
  	module: {
    	loaders:[
    		{ test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
		]
  	}
};