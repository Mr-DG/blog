// 初始化数据库
const dbConnect = require('../db/dbConnect')

const initDB = async sequelize => {
  // 连接数据库
  await dbConnect(sequelize)

}

module.exports = initDB