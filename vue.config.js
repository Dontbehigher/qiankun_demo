const { defineConfig } = require('@vue/cli-service')

// const { name } = require('./package');
const { name } = require("./package.json");


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8090, // 指定端口
    headers: {
      "Access-Control-Allow-Origin": "*", // 配置跨域
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "*",
      "Cache-Control": "no-cache",
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      }
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    }
  },
});