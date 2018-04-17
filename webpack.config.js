const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'annouing.min.js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  mode: 'development'
};
