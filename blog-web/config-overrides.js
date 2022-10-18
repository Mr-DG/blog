/*
  该文件是在不暴露webpack配置文件的情况下，自定义配置
  常见配置有：支持less、ant-design按需引入、跨域、打包等
*/
const { override, addLessLoader, adjustStyleLoaders, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(

  // 支持less
  addLessLoader(),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),

  // 配置别名
  addWebpackAlias({
    "@": path.resolve(__dirname, './src')
  })

)
