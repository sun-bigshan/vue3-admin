// const Mock = require('mockjs')

module.exports = {
  'POST /api/sys/login': (req, res) => {
    res.json({
      code: 200,
      success: true,
      message: '登录成功',
      data: {
        token: '53c85679798849f8bdbf45eddec43282'
      }
    })
  },
  'GET /api/sys/profile': (req, res) => {
    res.json({
      code: 200,
      success: true,
      message: '获取资料成功',
      data: {
        avatar:
          'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
        id: '1000',
        permission: {
          menus: [
            'userManage',
            'roleList',
            'permissionList',
            'articleRanking',
            'articleCreate'
          ]
        },
        role: [{ id: '1', title: '超级管理员' }],
        title: '超级管理员',
        username: 'super-admin'
      }
    })
  }
}
