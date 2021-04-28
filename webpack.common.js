const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HTMLWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.html$/i,
        use: ["html-loader"],
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputPath: "assets/images",
          },
        },
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[hash].[name].[ext]",
            outputPath: "assets/fonts",
          },
        },
      },

      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
    ],
  },
};
