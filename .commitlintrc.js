const fs = require('fs')
const path = require('path')

const plugins = fs.readdirSync(path.resolve(__dirname, 'packages/plugins'))

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [...plugins]],
    'footer-max-line-length': [0],
  },
}
