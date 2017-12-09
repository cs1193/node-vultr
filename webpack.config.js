const path = require('path');
const webpack = require('webpack');
const FlowtypePlugin = require('flowtype-loader/plugin');

const PACKAGE = require('./package.json');

const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | (c) 2016, ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' + PACKAGE.license + ' | ' + PACKAGE.homepage;

const configuration = {
  cache: true,
  context: __dirname,
  entry: {
    lib: ["./src/index.js"]
  },
  devtool: "source-map",
  resolve: {
    enforceExtension: false,
    extensions: [".js"]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [{
        loader: 'eslint-loader'
      }, {
        loader: 'flowtype-loader'
      }]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: [
            'env',
            'flow',
            'es2017'
          ],
          plugins: [
            'transform-flow-strip-types',
            'syntax-flow'
          ]
        }
      }]
    }, {
      test: /\.(json|geojson)$/,
      use: [{
        loader: 'json-loader'
      }]
    }]
  },
  output: {
    pathinfo: true,
    filename: "[name].js",
    path: path.resolve('./lib'),
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.BannerPlugin(banner),
    new FlowtypePlugin()
  ],
  target: 'node',
  externals: [
    /^(?!\.|\/).+/i,
  ]
};

module.exports = configuration;
