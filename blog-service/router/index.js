const express = require('express')
const router = express.Router()
const { userList, roleList, permissionList } = require('../mock_data')

router.get('/user-info', (req, res) => {
  const user = userList.filter(item => item.id === req.userId)[0]
  if (user) {
    res.send({
      code: 200,
      msg: '请求用户数据成功',
      data: user
    })
  } else {
    res.send({
      code: 10015,
      msg: '用户不存在'
    })
  }
})

router.get('/user-role', (req, res) => {
  const user = userList.filter(item => item.id === req.userId)[0]
  const role = roleList.filter(item => item.id === user.id)[0]
  if (role) {
    res.send({
      code: 200,
      msg: '请求用户数据成功',
      data: role
    })
  } else {
    res.send({
      code: 400,
      msg: 'role不存在'
    })
  }
})
router.get('/permission', (req, res) => {
  const user = userList.filter(item => item.id === req.userId)[0]
  const role = roleList.filter(item => item.id === user.id)[0]
  const permission = permissionList.filter(item => role.permission.includes(item.id))

  if (role) {
    res.send({
      code: 200,
      msg: '请求用户数据成功',
      data: permission
    })
  } else {
    res.send({
      code: 400,
      msg: 'role不存在'
    })
  }
})

module.exports = router