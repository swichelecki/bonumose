var webpack = require('webpack');

var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
    disable: false
});

module.exports = {
    entry: {
        index: path.join(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
      /*watch: true,
      devServer: {
          contentBase: __dirname + "/src",
          filename: '.dist/[name].bundle.js',
          inline: true,
          host: '0.0.0.0',
          port: 8080,
          historyApiFallback: true
      },*/
    module: {
      rules: [
          {
            test: /\.js$/,
            use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: ['react']
                    }
                  }
                ],
            exclude: /node_modules/
          },
        {
          test: /\.css$/,
          use: extractPlugin.extract({
              fallback: ['style-loader'],
              use: ['css-loader']
          })
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(jpg|png|woff|woff2)$/,
          use: [
                {
                  loader: 'file-loader',
                  options: {
                    context: path.resolve(__dirname, "./src"),
                    name (file) {
                      return '[path][name].[ext]'
                    }
                  }
                }
              ]
        }
      ]
    },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.html',
          chunks: ['index']
      }),
      new CleanWebpackPlugin(['dist']),
      extractPlugin,
  ]
}
