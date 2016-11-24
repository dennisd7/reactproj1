var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style!css"},
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)([\?]?.*)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
