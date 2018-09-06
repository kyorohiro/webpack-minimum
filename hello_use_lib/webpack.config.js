const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
      alias: {
          'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
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
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
  	]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
//    new VueLoaderPlugin()
  ]

};