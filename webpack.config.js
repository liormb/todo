/**
 * User: liormb
 * Date: 10/9/15
 * Time: 10:57 PM
 */

'use strict';

var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var src = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        bundle: path.join(src, 'app-client.js'),
        common: ['react']
    },
    resolve: {
        root: src,
        extension: ['', '.js'],
        moduleDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'public/c'),
        publicPath: '',
        pathInfo: true,
        filename: '[name].js',
        library: ['WebpackReactFluxible', '[name]']
    },
    module: {
        loaders: [
            { test: /\.js?$/  , loader: 'babel?cacheDirectory', exclude: /node_modules/ },
            { test: /\.css?$/ , loader: 'style-loader!css-loader' },
            { test: /\.scss?$/, loader: 'style!css!sass' }
        ]
    },
    plugins: [
        new CommonsChunkPlugin('common', 'common.js'),
        new HTMLWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    debug: true,
    devTool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './public/c',
        historyApiFallback: true
    }
};