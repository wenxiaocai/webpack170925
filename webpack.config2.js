var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'js/[name]-[chunkhash].js',
		// publicPath:'http://cdn.com/'
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'a.html',
			template:'index.html',
			inject:false,
			title:'this is a',
			date:new Date(),
			// chunks:['main','a'],
			excludeChunks:['b','c']
			// minify:{
			// 	removeComments:true,
			// 	collapseWhitespace:true
			// }

		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			template:'index.html',
			inject:false,
			title:'this is b',
			date:new Date(),
			// chunks:['b']
			excludeChunks:['a','c']


			// minify:{
			// 	removeComments:true,
			// 	collapseWhitespace:true
			// }

		}),
		new htmlWebpackPlugin({
			filename:'c.html',
			template:'index.html',
			inject:false,
			title:'this is c',
			date:new Date(),
			// chunks:['c']
			excludeChunks:['b','a']

			// minify:{
			// 	removeComments:true,
			// 	collapseWhitespace:true
			// }

		})
	]
}