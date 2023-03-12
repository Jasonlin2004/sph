const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:true,

  // 开启代理服务器
  devServer:{
    proxy:{
      'api':{
        target:'http://gmall-h5-api.atguigu.cn',
        // pathRewrite:{'^/api':''} 因为所有路径都带有/api，故不用路径重写
      }
    }
  }
})
