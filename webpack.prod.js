const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].chunk.[contenthash].js',
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
});