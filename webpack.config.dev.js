const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['webpack-dev-server/client?http://localhost:9000', './src/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(jsx|js)$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        port: 9000,
        hot: true,
    },
    target: 'electron-renderer'
};