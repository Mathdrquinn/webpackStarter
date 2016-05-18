var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ['./app.es6'],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000'
            },
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
    plugins: [],
    resolve: {
        extensions: ['', '.js', '.es6'],
    },
};