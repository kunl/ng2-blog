let path = require('path');
let webpack = require('webpack');


let webpackConfig = {
    entry: {
        polyfills: path.resolve(__dirname, 'admin/polyfills.ts'),
        vendor: path.resolve(__dirname, 'admin/vendor.ts'),
        app: path.resolve(__dirname, 'admin/main')
    },
    output: {
        publicPath: 'static/',
        path: path.resolve(__dirname, 'public/static'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        // new ExtractTextPlugin("./style.css"),
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
                'angular2-router-loader',
                'angular2-template-loader'
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
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }

};



module.exports = webpackConfig;