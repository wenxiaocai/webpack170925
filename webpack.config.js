var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var autoprefixer = require("autoprefixer");

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js',
        // publicPath:'http://cdn.com/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                {
                    loader: "css-loader",options:{importLoaders:1}

                },{
                        loader:'postcss-loader',
                        options:{
                            plugins:function(){
                                return [
                                    require('postcss-import')(),        //一定要写在require("autoprefixer")前面，否则require("autoprefixer")无效
                                    require("autoprefixer")({browsers:['last 5 versions']})
                                ]
                            }
                        }
                    }
            ]
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}