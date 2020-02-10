const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.BannerPlugin({
        banner: () => {
          return 'Last Build On ' + new Date()
        }
      })
    ]
  }
}
