const { baseConfig, resolvePath } = require("./webpack.base.conf");
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin(), '...'
    ],
    nodeEnv: 'production',
    usedExports: true,
  }
})