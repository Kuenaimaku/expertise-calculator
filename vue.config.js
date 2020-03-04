module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/expertise-calculator/'
    : '/'
    ,
    configureWebpack: {
      devtool: 'source-map'
    }
  }