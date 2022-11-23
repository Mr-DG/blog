module.exports = (req, res, next) => {
  // 根据用户的token返回对应的用户信息
  // console.log(req.headers.authorization)
  req.userId = 1
  next()
}