const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),//打包后的文件存放的地方
    filename: 'bundle.js'   //打包后输出文件的文件名
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  devServer: {
    host: 'localhost', // 主机名
    port: 8081, //端口
    open: false //自定打开浏览器
  },
}
