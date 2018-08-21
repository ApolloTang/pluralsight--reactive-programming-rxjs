const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({env=[], mode='development'}={env:[], mode:'development'}) => {
  const config = {
    mode,
    // entry: "./src/ts-entrypoint.ts", // commented out, so it is default to ./src/index.js
    devServer: {
      open: false,
      port: 9090
    },
    entry: './src/main',
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loaders: ['awesome-typescript-loader']
        }
        ,
        {
          test: /\.js$/,
          loaders: 'source-map-loader',
          enforce: "pre"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  }
  return config;
}
