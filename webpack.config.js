let path = require('path');
let webpack = require('webpack');



let __client_path = 'client';
let webpackConfig = {
    entry: {
        polyfills: path.resolve(__dirname, __client_path, 'polyfills'),
        vendor: path.resolve(__dirname, __client_path, 'vendor'),
        admin: path.resolve(__dirname, __client_path, 'admin', 'main'),
        blog: path.resolve(__dirname, __client_path, 'blog', 'main'),
    },
    output: {
        publicPath: '../static/',
        path: path.resolve(__dirname, 'public/static'),
        filename: '[name].js'
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['admin', 'blog', 'vendor', 'polyfills']
        })

    ],
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript-loader',
                'angular2-template-loader',
                'angular2-router-loader'
            ]
        }, {
            test: /\.styl$/,
            use: ['stylus-loader','to-string-loader', 'css-loader']
        }, {
            test: /\.css$/,
            use: ['to-string-loader', 'css-loader']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader?prefix=img/&limit=5000'
        }]
    },

    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};



module.exports = webpackConfig;