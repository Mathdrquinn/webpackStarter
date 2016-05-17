var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('js'),
    entry: ['./app.es6'],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public',
    },
    module: {
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
    resolve: {
        extensions: ['', '.js', '.es6'],
    },
};