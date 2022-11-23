const express = require('express')
const app = express()
// 用.env保存全局变量
require('dotenv').config()
const sequelize = require('./db/sequelize')
const initDB = require('./init/initDB')
const initServer = require('./init/initServer')
const auth = require('./middleware/auth')

const main = async () => {
  await initDB(sequelize)
  // 系统管理路由
  app.use('/system', auth, require('./router'))
  await initServer(app)
}
main()