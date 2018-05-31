const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

// Only to Analyse the Bundle - Do not Use in Production
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = {
    entry: {
        // jquery: 'jquery',
        app: './src/app.js',
        analytics: './src/js/analytics.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
        publicPath: ''
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                parser: {
                    amd: false
                }
            },
            {
                test: /\.(ejs)/,
                use: [
                    {
                        loader: 'ejs-loader'
                    }
                ]
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    // creates style nodes from JS strings
                    loader: 'style-loader'
                }, {
                    // translates CSS into CommonJS
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            }
            // {
            //     test: /\.(svg)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'icons/',
            //                 publicPath: 'icons/'
            //             }
            //         }
            //     ]
            // }
        ]
    },
	plugins: [
        new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
            title: 'Saunawagon - Events & Vermietung',
			template: 'src/index.ejs',
            favicon: 'src/favicon.ico',
            inject: false,
            chunks: ['analytics', 'app'],
            head: ['analytics'],
            body: ['app']
		}),
        // Get API Key from Server Side
        new webpack.DefinePlugin({
            API_KEY: '',
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            $: "jquery",
            jQuery: "jquery"
        })
	]
};

module.exports = webpackConfig;
