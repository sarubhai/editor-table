const path = require('path');

module.exports = {
  entry: './src/plugin.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
    library: 'Table',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.pcss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
            options: {
              removeSVGTagAttrs: false
            }
          }
        ]
      }
    ]
  }
};