const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 808,
    allowedHosts: [
      'f3322.net',
      '.f3322.net',
      'xianlin.xyz',
      '.xianlin.xyz',
      'xianlin.vip',
      '.xianlin.vip'
    ],
    host: '0.0.0.0'
  }
})
