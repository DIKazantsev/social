var webpack = require('webpack');
var path = require('path');

// variables
var sourcePath = path.join(__dirname + '/../src');
var outPath = path.resolve(__dirname + '/../dist');
const multi = require('multi-loader');

console.log('sourcePath', sourcePath)
console.log('outPath', outPath)

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
            { test: /\.ts$/, loader: 'ts-loader' },
            {
                test: /\.tsx$/, loader: 'babel-loader!ts-loader',

            },
            // {
            //     loader: 'ts-loader|babel-loader',
            // options: {
            //     presets: [
            //         "@babel/react",
            //     ],
            //     plugins: [
            //         [
            //             "import",
            //             {
            //                 libraryName: "antd",
            //                 libraryDirectory: "lib"
            //             },
            //             "ant"
            //         ]
            //     ]
            // }
            // loader: 'babel-loader',
            // options: {
            //     presets: [
            //         "@babel/react",
            //     ],
            //     plugins: [
            //         [
            //             "import",
            //             {
            //                 libraryName: "antd",
            //                 libraryDirectory: "lib"
            //             },
            //             "ant"
            //         ]
            //     ]
            // }
            //  },
            //  ]
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
            { test: /\.(a?png|svg|jpe?g)$/, use: 'url-loader?limit=10000' },
            { test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader' }
        ]
    },
    mode: 'development',

    plugins: [
        new WebpackCleanupPlugin(),
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            template: 'assets/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        //new CheckerPlugin(),
    ],
    devServer: {
        contentBase: [sourcePath, path.join(__dirname, '../server/static/')],
        hot: true,
        inline: true,
        port: 3001,
        host: 'localhost',
        open: true,
        historyApiFallback: {
            disableDotRule: true
        },
        stats: 'minimal',
        clientLogLevel: 'warning'
    },
    devtool: 'cheap-module-eval-source-map',
    node: {
        fs: 'empty',
        net: 'empty'
    }
};
