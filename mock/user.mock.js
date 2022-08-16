// const Mock = require('mockjs')

module.exports = {
  'POST /api/sys/login': (req, res) => {
    res.json({
      code: 200,
      message: '登录成功',
      data: {
        token: '53c85679798849f8bdbf45eddec43282'
      }
    })
  }
}
sssasasa
