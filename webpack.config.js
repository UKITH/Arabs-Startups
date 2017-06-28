const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, './', 'src/server.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: [
          {loader: 'handlebars-loader'},
        ]
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }]
    }
  ]
  },
  target: 'node',
  externals: [nodeExternals()]
};
