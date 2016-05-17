var path = require("path");

var webpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    include: [
        path.resolve(__dirname, "src"),
    ],
    loader: webpackStripLoader.loader('console.log'),
};

devConfig.modules.loaders.push(stripLoader);

module.exports = devConfig;