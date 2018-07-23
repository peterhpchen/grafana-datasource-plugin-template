const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        'module': './module.ts'
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ]
    }
}
