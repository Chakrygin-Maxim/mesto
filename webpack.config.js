const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/, // Загрузчик JS
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.(png|svg|jpe?g|gif)$/, // Загрузчик картинок
                use: [
                    {
                        loader: 'file-loader?name=./images/[name].[ext]'
                    }
                ]
            },
            {
                test: /.(eot|ttf|woff|woff2)$/, // Загрузчик шрифтов
                use: [
                    {
                        loader: 'file-loader?name=./vendor/[name].[ext]',
                    }
                ]
            },
            {
                test: /\.html$/i, // Загрузчик для html
                loader: 'html-loader',
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/, // Загрузчик для шрифтов
                use: 'file-loader'
            },
            {
                test: /\.css$/i, // Загрузчик css
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin(),
    ],
    devtool: 'inline-source-map',
}; 