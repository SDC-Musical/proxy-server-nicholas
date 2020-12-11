const path = require('path');

module.exports = {
  mode: 'development',
  entry: './server/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};