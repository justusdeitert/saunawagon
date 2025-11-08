const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
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
        publicPath: '',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        hot: true,
        open: true,
        port: 8080,
        watchFiles: ['src/**/*.ejs', 'src/**/*.html'],
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: 'ejs-compiled-loader',
                        options: {
                            htmlmin: false,
                            htmlminOptions: {
                                removeComments: true
                            }
                        }
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
                        sourceMap: true,
                        sassOptions: {
                            quietDeps: true,
                            silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'slash-div', 'legacy-js-api']
                        }
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
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
    resolve: {
        alias: {
            // Provide empty module for jQuery since Materialize's M.* API doesn't need it
            jquery: false
        }
    },
	plugins: [
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
        })
	]
};

module.exports = webpackConfig;
