'use strict'
var path = require('path');

module.exports = {
  publicPath: '/',
  outputDir: path.resolve(__dirname, './docs'),
  // devServer: {
  //   proxy: { // proxyTable 설정
  //     '/api': {
  //       target: 'http://localhost:3000/api',
  //       ws: false,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       }
  //     }
  //   }
  // },

  productionSourceMap: false,
  lintOnSave: false
}
