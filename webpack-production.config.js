var path = require('path');
var webpack = require('webpack')

var webpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    include: [
        path.resolve(__dirname, 'src'),
    ],
    loader: webpackStripLoader.loader('console.log'),
};

// Add strip-loader
devConfig.module.loaders.push(stripLoader);

// Add uglify
devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());

module.exports = devConfig;