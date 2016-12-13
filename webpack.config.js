let path = require('path');
let webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;


let __client_path = 'client';
let webpackConfig = {
    entry: {
        polyfills: path.resolve(__dirname, __client_path, 'polyfills'),
        vendor: path.resolve(__dirname, __client_path, 'vendor'),
        admin: path.resolve(__dirname, __client_path, 'admin', 'main'),
        blog: path.resolve(__dirname, __client_path, 'blog', 'main'),
    },
    output: {
        publicPath: 'static/',
        path: path.resolve(__dirname, 'public/static'),
        filename: '[name].js'
    },
    plugins: [
        // new ExtractTextPlugin("./style.css"),
        new CheckerPlugin(),
        new TsConfigPathsPlugin({
            configFileName: 'admin/tsconfig.json'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
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
    devtool: 'source-map',
    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }

};



module.exports = webpackConfig;