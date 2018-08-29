const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: [
  				"style-loader",
  				"css-loader"
  			]
  		},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          "file-loader"
        ]
      }
  	]
  }
};