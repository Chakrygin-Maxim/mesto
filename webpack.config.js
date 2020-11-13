const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: { main: "./src/pages/index.js" },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/, // Загрузчик JS
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /.(png|svg|jpe?g|gif)$/, // Загрузчик картинок
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./images/",
            },
          },
        ],
      },
      {
        test: /.(eot|ttf|woff|woff2)$/, // Загрузчик шрифтов
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./vendor/",
            },
          },
        ],
      },
      {
        test: /\.html$/i, // Загрузчик для html
        loader: "html-loader",
      },
      {
        test: /\.css$/i, // Загрузчик css
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin(),
    new PrettierPlugin({
      printWidth: 100,
      singleQuote: true,
      trailingComma: "all",
      bracketSpacing: true,
      jsxBracketSameLine: false,
      tabWidth: 2,
      semi: true,
    }),
  ],
  devtool: "inline-source-map",
};
