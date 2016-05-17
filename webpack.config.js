var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js')

module.exports = {
    context: path.resolve('js'),
    entry: ['./app.es6'],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: 'public',
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: 'node_modules',
        //         loader: 'jshint-loader',
        //     },
        // ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ],
    },
    plugins: [
        commonsPlugin
    ],
    resolve: {
        extensions: ['', '.js', '.es6'],
    },
};