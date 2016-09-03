const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const connect = require('react-redux').connect

const Header = require('./components/header')
const GetMetaMask = require('./components/get-metamask')
const DappInputForm = require('./dapp-input-form')
const DappInterface = require('./dapp-interface')

module.exports = connect(mapStateToProps)(AppRoot)

function mapStateToProps (state) {
  return {
    view: state.currentView,
    web3Found: state.web3Found,
    abi: state.abi,
    address: state.address,
    name: state.name,
    editMode: state.editMode,
  }
}

inherits(AppRoot, Component)
function AppRoot () {
  Component.call(this)
}

AppRoot.prototype.render = function () {
  return h('.content', [
    h(Header),
    this.renderBody(),
  ])
}

AppRoot.prototype.renderBody = function() {
  const props = this.props
  const { web3Found, abi, address, name, editMode } = props

  if (!web3Found) {
    return h(GetMetaMask)
  }

  if (editMode) {
    return h(DappInputForm)
  }

  return h(DappInterface)
  return h('Render dapp interface here.')
}
