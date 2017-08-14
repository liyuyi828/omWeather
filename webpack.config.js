// transpile all files base on dependency of "index.js" to "app.bundle.js"
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "app.bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  }, 
  resolve: {
    extensions: ['.js', '.jsx']
  }
};