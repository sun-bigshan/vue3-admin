const path = require('path')
const fs = require('fs')

const mock = {}
const reg = /^\w+\.mock\.js$/
const isMockFile = (file) => reg.test(file)

fs.readdirSync(path.resolve(__dirname, './')).forEach((file) => {
  if (isMockFile(file)) {
    const mockFile = require(path.resolve(__dirname, `./${file}`))
    Object.assign(mock, mockFile)
  }
})

module.exports = mock
