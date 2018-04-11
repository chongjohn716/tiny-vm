const Depend = require('./dep')

let uid = 0

function Watcher(vm, exp, cb) {
  this.id = uid++
  this.vm = vm
  this.getter = exp
  this.cb = cb
  this.subs = {}
  this.value = this.get()
}

Watcher.prototype.addDep = function (dep) {
  this.subs[dep.id] = dep
}

Watcher.prototype.update = function () {
  let newVal = this.get()
  let oldVal = this.value
  this.value = newVal
  this.cb && this.cb.call(this.vm, newVal, value)
}

Watcher.prototype.get = function () {
  Depend.target = this
  let vm = this.vm
  this.getter.call(vm, vm)
  Depend.target = null
}

module.exports = Watcher