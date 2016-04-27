const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./package.json');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './main.jsx',
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: path.join(__dirname, '__build__'),
        filename: 'bundle-[chunkhash:6].js',
        publicPath: '/'
    },
    devtool:'source-map',
    devServer: {
        contentBase: "__build__/"
    },
    historyApiFallback: true,
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[chunkhash:6].js'),
        new HtmlWebpackPlugin({
            inject: false,
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
