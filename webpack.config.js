'use strict';
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let cssLoaders = [
  { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
  { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
];

if (process.env.NODE_ENV === 'production') {
  cssLoaders = [
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
    { test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') },
  ];
}

const config = {
  entry: {
    app: [
      './src/js/app',
    ],
    vendor: [
      'font-awesome-loader',
      'bootstrap-loader',
      'jquery',
      'holderjs',
    ],
  },
  devtool: '#cheap-module-eval-source-map',

  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: '[name].js',
    // chunkFilename: '[id].js',
    publicPath: '/assets/',
  },

  module: {
    loaders: [
      ...cssLoaders,
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file' },

      // Use one of these to serve jQuery for Bootstrap scripts:
      // Bootstrap 3
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },

      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7,' +
            ' interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],
  postcss: () => [autoprefixer],
};

module.exports = config;
