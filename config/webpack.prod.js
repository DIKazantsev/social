var webpack = require('webpack');
var path = require('path');

// variables
var sourcePath = path.join(__dirname + '/../src');
var outPath = path.resolve(__dirname + '/../build');
console.log('sourcePath', sourcePath)
console.log('outPath', outPath)

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    context: sourcePath,
    entry: [
        './index.tsx',
        './style.less'
    ],
    output: {
        path: outPath,
        filename: 'bundle.js',
        chunkFilename: '[chunkhash].js'

    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        mainFields: ['module', 'browser', 'main'],
        alias: {
            app: path.resolve(__dirname + '/../src/app/')
        }
    },
    module: {
        rules: [
            // .ts, .tsx
            { test: /\.ts$/, loader: 'ts-loader' },
            {
                test: /\.tsx$/, loader: 'babel-loader!ts-loader',

            },
            {
                test: /\.(?:le|c)ss$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                    },
                    {
                        loader: require.resolve('less-loader'),
                    },
                ]
            },
            // static assets
            { test: /\.html$/, use: 'html-loader' },
            {
                test: /\.(a?woff|ttf|woff2)$/, use: 'url-loader?limit=10000'
            },
            //{ test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader' }
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
                use: [{
                    loader: 'file-loader',
                    // options: {
                    //     name: '[name].[ext]',
                    // }
                }]
            },

        ]
    },
    mode: 'production',

    plugins: [
        new WebpackCleanupPlugin(),
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            template: 'assets/index.html'
        }),
    ],
    devtool: 'hidden-source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false,
                },
            }),
        ],
    }

};
