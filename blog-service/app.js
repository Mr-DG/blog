const express = require('express')
const app = express()
// 用.env保存全局变量
require('dotenv').config()
const sequelize = require('./db/sequelize')
const initDB = require('./init/initDB')
const initServer = require('./init/initServer')

const main = async () => {
  await initDB(sequelize)
  await initServer(app)
}
main()