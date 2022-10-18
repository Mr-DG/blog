const dbConnect = async sequelize => {
  return new Promise(async (resolve, reject) => {
    // 测试连接 authenticate
    try {
      await sequelize.authenticate()
      console.log('mysql数据库连接成功。')
      resolve()
    } catch (error) {
      console.error('数据库连接失败', error)
      reject()
    }
  })
}

module.exports = dbConnect