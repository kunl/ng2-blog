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
            test: /\.css$/,
            include: `${__dirname}/src`,
            loader: ['css-loader', 'style-loader']

        }, {
            test: /\.html$/,
            loader: 'raw-loader'
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