const path = require('path')

const CHAIN = Symbol('lbch.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.lbchinfo.lib.Chain.get(this.config.lbch.chain)
    return this[CHAIN]
  },
  get lbchinfo() {
    return {
      lib: require(path.resolve(this.config.lbchinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.lbchinfo.path, 'rpc'))
    }
  }
}
