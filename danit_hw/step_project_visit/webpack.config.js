const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MediaQueryPlugin = require('media-query-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const HandlebarsWebpackPlugin = require('handlebars-webpack-plugin');

const optimization = () => {
    const config = { // create config file
        splitChunks: {
            chunks: 'all', // remains the same
        },
    };

    if (isProd) { // create checking of we are in the Production mode right now
        config.minimizer = [ // create method minimizer which is a method of a optimization process which is an Array
            new OptimizeCssAssetsWebpackPlugin(), // connect CSS optimize plug-in
            new TerserWebpackPlugin(), // connect JS uglify/minify plug-in
        ]
    }
    return config;

};
const cssLoaders = (extra) => {
    const loaders = [

        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true,
            },
        },
        {

            loader: MediaQueryPlugin.loader,
        }, 'css-loader'
    ];

    if (extra) {
        loaders.push(extra)
    }

    return loaders;
};
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const babelOptions = (preset) => {
    const opts = {
        presets: [
            '@babel/preset-env'

        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ],
    };

    if (preset) {
        opts.presets.push(preset)
    }

    return opts;
};
const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions(),
    }];

    if (isDev) {
        loaders.push('eslint-loader');
    }

    return loaders;
};
const plugins = () => {
    const base = [
        new HtmlWebpackPlugin({
            template: "./src/views/layouts/main.hbs",
            minify: {
                collapseWhitespace: isProd, // optimize while production mode minify: {
                html5: isProd,
                caseSensitive: isProd,
                removeComments: isProd,
            }
        }),
        new CleanWebpackPlugin(),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
        }),
        new ImageminWebpWebpackPlugin({
            config: [{
                test: /\.(jpe?g|png)/,
                options: {
                    quality:  75
                }
            }],
            overrideExtension: true,
            detailedLogs: false,
            silent: false,
            strict: true
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, 'src/favicon.ico'),
        //         to: path.resolve(__dirname, 'public'),
        //     }
        // ]),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, './src/assets/images'),
        //         to: path.resolve(__dirname, './public/assets/images'),
        //     }
        // ]),
        new MiniCssExtractPlugin({
            filename: `styles/${filename('css')}`,
            chunkFilename: isDev ? "[name].css" : "[name][hash].css",
        }),
    //     new MediaQueryPlugin({
    //         include: [
    //             'example'
    //         ],
    //         queries: {
    //             'screen and (min-width: 320px) and (max-width: 480px)': 'phone',
    //             'screen and (min-width: 481) and (max-width: 992)': 'tablet',
    //             'screen and (min-width: 993)': 'desktop'
    //         }
    //     }),
    ];

    if (isProd) {
        base.push(new BundleAnalyzerPlugin());
    }

    return base;
};

const isDev = process.env.NODE_ENV === 'development'; // process.env.NODE_ENV == change mode the nodejs running
console.log('IS DEV', isDev);
const isProd = !isDev; // if productions mode is true





module.exports = {
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './src/index.js'],
        // analytics: './src/analytics.ts',
    },
    output: {
        filename: `js/${filename('js')}`,
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.js', '.css', '.json'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets')
        }
    },
    plugins: plugins(),
    optimization: optimization(),
    devServer: {
        port: 3000,
        hot: isDev // if isDev = will be working properly
    },
    devtool: isDev ? 'source-map' : '',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader'),
            },
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: "handlebars-loader",
                        query: {
                            partialDirs: [
                                path.join(__dirname, 'src', 'views/partials')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader','postcss-loader'),
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // name: '[name].[ext]',
                        name: '[name].[hash].[ext]',
                        context: 'src',
                        // publicPath: '../',
                        outputPath: 'assets/fonts/',    // where the fonts will go
                        // publicPath: '../'       // override the default path
                    }
                }],
            },
            {
                test: /\.(png|jpe?g|gif|jfif|bmp|webp)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[hash].[ext]',
                        context: 'src',
                        publicPath: '../',
                    }
                }],
            },
            {
                test: /\.xml$/,
                use: ['xml-loader'],
            },
            {
                test: /\.csv$/,
                use: ['csv-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-typescript'),
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-react'),
                }
            },
        ],

    },

};