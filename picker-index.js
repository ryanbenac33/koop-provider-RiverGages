const pkg = require('./package.json')
const provider = {
    name: 'rivergages-locations',
    type: 'provider',
    version: pkg.version,
    Model: require('./model'),
    hosts: false,
    disableIdParam: false,
    routes: pkg.routes,
    Controller: pkg.Controller,
  }

  module.exports = provider