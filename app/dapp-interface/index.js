const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const connect = require('react-redux').connect
const copyToClipboard = require('copy-to-clipboard')
const qp = require('query-parse')

const Method = require('./method')

module.exports = connect(mapStateToProps)(DappInterface)

function mapStateToProps (state) {
  return {
    abi: state.abi,
    address: state.address,
    name: state.name,
  }
}


inherits(DappInterface, Component)
function DappInterface () {
  Component.call(this)
}

DappInterface.prototype.render = function () {
  const props = this.props
  const { abi, address, name } = props

  const methods = abi.filter((item) => item.type === 'function')

  return h('.ui', [
    h('h4', name),
    h('button', {
      onClick: (ev) => {
        var paramObj = { abi: escape(abi), address, name }
        var queryParams = qp.toString(paramObj)
        copyToClipboard(`${window.location.origin}?${queryParams}`)
      },
    }, 'Copy Link'),
    methods.map((method, i) => {
      return h(Method, { method, key: `${name}:${i}` })
    })
  ])
}
