// 引入path,后续需要使用它将路径转换成绝对路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css单独文件

const devMode = process.env.NODE_ENV !== "production"; // 判断是否为开发环境


// 相对路径转换成绝对路径
const resolvePath = (dir) => {
  return path.resolve(__dirname, dir);
}

const baseConfig = {
  entry: resolvePath('../src/index.jsx'), // 入口文件
  output: {
    path: resolvePath('../dist'), // 出口文件
    filename: '[name].bundle.js', // 出口文件名
    clean: true,  // 重构是否清空dist文件夹
    pathinfo: false, // 开启路径信息
  },
  module: {
    // 加载css, less
    rules: [
      {
        test: /\.css$/,
        // 顺序不能错, css-loader 必须在 postcss-loader 和 less-loader 之前
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      }, {
        test: /\.less$/,
        // 顺序不能错, css-loader 必须在 postcss-loader 和 less-loader 之前
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      }, {
        // 将所有的jsx文件使用babel编译
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          }
        },
        exclude: /node_modules/,
      },
      {
        // 支持所有图片
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        type: 'asset/resource',
      },
    ]
  },
  // 配置模块如何解析
  resolve: {
    // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    // 请注意，以上这样使用 resolve.extensions 会 覆盖默认数组，这就意味着 webpack 将不再尝试使用默认扩展来解析模块。然而你可以使用 '...' 访问默认拓展名：
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    alias: {
      '@': resolvePath('../src'), // 用'@'代替'../src'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html'),
      filename: 'index.html',
      title: 'react-app'
    }), new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
    })
  ],
  // optimization: {
  //   usedExports: true,
  // },
}

module.exports = {
  resolvePath,
  baseConfig
}
