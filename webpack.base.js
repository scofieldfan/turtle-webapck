const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    }

};