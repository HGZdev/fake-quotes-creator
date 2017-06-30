var path = require("path");

module.exports = {
  entry: ['whatwg-fetch', './src/app.jsx'],
  output: {
    path: path.resolve("dist"),
    filename: "out.js"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 8080
  },
  watch: true,
  module: {
    loaders: [

      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }


    ]
  }
};
