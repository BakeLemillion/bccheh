const webpack = require("webpack");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.config.js");

const devConfig = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader'],
      }
    ]
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

module.exports = devConfig;
