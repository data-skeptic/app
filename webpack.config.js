const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './main.jsx',
    output: {
        path: path.join(__dirname, '__build__'),
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: '__build__'
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
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
