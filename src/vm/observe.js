const Dep = require('./dep')

function defineReactive(obj, key, value) {
  let dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        dep.depend()
      }
      return value
    },
    set(newValue) {
      if (value === newValue) {
        return
      }
      value = newValue
      // defineReactive(obj, key, newValue)
      dep.notify()
    }
  })
}

// function observe(params) {

// }

module.exports = function (vm) {
  let { data } = vm.$option
  let key, value
  for (key in data) {
    value = data[key]
    if (value.__reactive) {
      return
    }
    defineReactive(vm, key, value)
    value.__reactive = true
  }
}