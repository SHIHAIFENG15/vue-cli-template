module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    open: true, // 启动是否打开浏览器
    overlay: { // 是否在浏览器上显示编译的 errors 或 warnings
      warnings: false,
      errors: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};
