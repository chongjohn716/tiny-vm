
let uid = 0

function Depend() {
  this.id = uid++
  this.watchers = {}
}

Depend.target = null

Depend.prototype.depend = function () {
  let target = Depend.target
  if (!target) {
    return
  }
  this.watchers[target.id] = target
  target.addDep(this)
}

Depend.prototype.notify = function () {
  let watchers = this.watchers
  for (let key in watchers) {
    watchers[key].update()
  }
}


module.exports = Depend
