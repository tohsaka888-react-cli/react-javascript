const { baseConfig, resolvePath } = require("./webpack.base.conf");

const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  cache: {
    type: 'memory',
    cacheUnaffected: true,
  },
  experiments: {
    cacheUnaffected: true,
  },
  devServer: {
    hot: true,
    port: 3000,
    host: 'localhost',
    open: true,
    allowedHosts: 'auto',
    client: {
      progress: true,
      logging: 'info'
    },
    host: 'local-ip',
    historyApiFallback: true, // support React Router Dom
  },
  stats: {
    colors: true,
    modules: false,
    assets: false,
    nestedModulesSpace: 15,
    chunks: false,
    env: true,
    errorDetails: 'auto',
    hash: false,
    publicPath: false 
  }
})