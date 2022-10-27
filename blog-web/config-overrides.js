/*
  该文件是在不暴露webpack配置文件的情况下，自定义配置
  常见配置有：支持less、ant-design按需引入、跨域、打包等
*/
const { override, addLessLoader, adjustStyleLoaders, addWebpackAlias } = require('customize-cra')
// 取绝对路径
const path = require('path')
const pathResolve = pathUrl => path.resolve(__dirname, pathUrl)

module.exports = override(

  // 支持less
  addLessLoader(),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),

  // 配置别名
  addWebpackAlias({
    '@': pathResolve('./src'),
    'assets': pathResolve('./src/assets'),
    'components': pathResolve('./src/components'),
    'utils': pathResolve('./src/utils'),
    'pages': pathResolve('./src/pages'),
    'store': pathResolve('./src/store')
  })

)
