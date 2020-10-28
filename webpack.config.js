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
                test: /\.(png|jpe?g|gif|svg|woff|woff2)$/i, // Загрузчик картинок
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin(),
    ],
    devtool: 'inline-source-map',
}; 