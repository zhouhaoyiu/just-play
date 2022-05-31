const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"), //打包后的文件存放的地方
    filename: "bundle.js", //打包后输出文件的文件名
  },
  resolve: {
    extensions: [".ts", ".js", ".css", '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`,
      chunkFilename: `[id].css`,
    }),
    new StyleLintPlugin({
      files: ["*.{css,scss,sass,less}"],
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devtool: isProd ? "cheap-module-source-map" : "cheap-module-eval-source-map",
  devServer: {
    host: "localhost", // 主机名
    port: 8081, //端口
    open: false, //自定打开浏览器
  },
};
