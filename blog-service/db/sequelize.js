// 实例化sequelize
const { Sequelize } = require('sequelize')
// 参数分别为 数据库名、账号、密码、{地址、数据库类型}
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql'
})

module.exports = sequelize