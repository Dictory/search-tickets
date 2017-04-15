global.Promise         = require('bluebird');

const webpack            = require('webpack');
const path               = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin    = require('stylelint-webpack-plugin');

const productionBuild = process.env.NODE_ENV === 'production';
const nodeEnv = productionBuild ? 'production' : 'development';

const publicPath = 'http://localhost:8050/public/assets';
const cssName = productionBuild ? 'styles-[hash].css' : 'styles.css';
const jsName = productionBuild ? 'bundle-[hash].js' : 'bundle.js';

const plugins = [
  new StyleLintPlugin({
    configFile: './.stylelintrc',
    context: 'inherits from webpack',
    files: '**/*.s?(a|c)ss',
    failOnError: false,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER:  JSON.stringify(true),
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new ExtractTextPlugin(cssName)
];

if (productionBuild) {
  plugins.push(
    new CleanWebpackPlugin([ 'public/assets/' ], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  );
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}

module.exports = {
  entry: ['babel-polyfill', './src/client.js'],
  debug: !productionBuild,
  resolve: {
    root              : path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions        : ['', '.js', '.jsx']
  },
  plugins,
  output: {
    path: `${__dirname}/public/assets/`,
    filename: jsName,
    publicPath
  },
  eslint: {
    configFile: './.eslintrc',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader:'babel!eslint-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          { loader: 'postcss-loader'}
        ]
      }
      { test: /\.(jpg|gif|png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader?limit=100000' },
    ]
  },
  devtool: !productionBuild ? 'source-map' : null,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};
