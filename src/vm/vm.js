const Watcher = require('./watcher')

const observe = require('./observe')

/**
 * Class Vm
 */
function Vm(option) {
  this.$option = option
  this._init()
}

Vm.prototype = {

  constructor: Vm,

  /**
     * vm mount on el
     * @param {String|Element} el 
     */
  $mount(el) {
    // if (typeof el === 'string') {
    //   el = document.getElementById(el.slice(1))
    // }
    // this.$el = el
    this._mount()
  },

  _mount() {
    this._watcher = new Watcher(this, function () {
      this._update(this._render())
    })
  },

  _render() {
    return this.$option.render(null, this)
  },

  _update(htmlStr) {
    console.log(htmlStr)

    // this.$el.innerHtml = htmlStr
  },

  /**
     * init vm and rending
     */
  _init() {
    let option = this.$option
    this._initData()
    if (option.el) {
      this.$mount(option.el)
    }
  },

  /**
   * init data
   */
  _initData() {
    let data
    let option = this.$option
    if (!(data = option.data)) {
      option.data = {}
      return
    }

    observe(this)
  }
}

module.exports = Vm