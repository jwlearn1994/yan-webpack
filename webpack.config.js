const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const extendedConfig = require('./webpack.extend');

const isProd = process.env.NODE_ENV === 'production';
const assetsTarget = process.env.TARGET;

const config = {
  mode: isProd ? 'production' : 'development',
  entry: `./src/${assetsTarget}.js`,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${assetsTarget}/main.js`,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './src')],
      },
    ],
  },
  plugins: [
    new DefinePlugin({ 'process.env': extendedConfig.envObject }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `views/${assetsTarget}.html`,
          to: `${assetsTarget}/index.html`,
        },
        {
          from: `styles/${assetsTarget}.css`,
          to: `${assetsTarget}/style.css`,
        },
      ],
    }),
  ],
  externals: {
    vue: 'Vue',
  },
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    disableHostCheck: true,
    inline: true,
    hot: true,
    overlay: { errors: true },
  },
};

module.exports = config;
