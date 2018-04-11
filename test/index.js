// import Vm from '../src'

const Vm = require('../src/vm')

let option = {
  data: {
    aaa: 'aaa',
    bbb: 'bbb',
    ccc: 'ccc'
  },
  el: '#app',
  render(c, vm) {
    return `data.aaa = ${vm.aaa}
            data.bbb = ${vm.bbb}`
  }
}

let vm = new Vm(option)

vm.aaa = 123

vm.ccc = 4312

vm.bbb = 'abc'