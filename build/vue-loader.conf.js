var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  'nuxt': 'bootstrap-vue/nuxt',
    // Or if you have custom bootstrap CSS...
  'bootstrap-vue/nuxt': ['bootstrap-vue/nuxt', { css: false }],
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
