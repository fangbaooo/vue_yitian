var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://www.easy-mock.com/mock/59bf2ba7e0dc663341ad7387/vue_yitian"'
})
