/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: [
          // \\ for Windows, / for macOS and Linux
          /node_modules[\\/]core-js/,
          /node_modules[\\/]webpack[\\/]buildin/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
} 
}