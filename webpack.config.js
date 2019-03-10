const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  mode: env.mode,
  entry: {
    bundle: ['@babel/polyfill', path.resolve(__dirname, "src", "app.js")],
    vendor: [
      '@babel/polyfill',
      'react',
      'react-dom',
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    open: true,
    // hot:true
    // compress: true,
    // port: 9000
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@root": path.resolve('src'),
      "@assets": path.resolve('src/assets'),
      "@components": path.resolve('src/components')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.mode)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'dist/favicon.ico'
    })
  ],
  devtool: env.mode === 'development' ? "source-map" : '',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              ["import", {"libraryName": "antd", "style": "css"}],
            ]
          }
        }],
        exclude: [
          /(node_modules|bower_components|unitTest)/,
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:4]'
            }
          },
          {
            loader: "sass-loader"
          }]
      },
      {
        test: /\.(png|jpg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: 'img/[hash].[ext]',
              limit: 10000
            }
          }
        ]
      }
    ]
  }
});