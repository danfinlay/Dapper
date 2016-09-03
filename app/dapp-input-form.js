const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const connect = require('react-redux').connect

module.exports = connect(mapStateToProps)(DappInputForm)

function mapStateToProps (state) {
  return {
    abi: state.abi,
    address: state.address,
    name: state.name,
  }
}

inherits(DappInputForm, Component)
function DappInputForm () {
  Component.call(this)
}

DappInputForm.prototype.render = function () {
  const props = this.props
  const { abi, address, name } = props

  return (
    h('.form', [
      h('h3', 'Enter Dapp Details'),

      h('.name', [
        h('input', {
          placeholder: 'Dapp Name',
          defaultValue: name,
        })
      ]),

      h('.address', [
        h('input', {
          placeholder: 'Dapp Address',
          defaultValue: address,
        })
      ]),

      h('.abi', [
        h('textarea', {
          placeholder: 'ABI (Application Binary Interface)',
          defaultValue: abi,
        })
      ]),

      h('button', {
        onClick: (ev) => {
          const name = document.querySelector('.name input').value
          const address = document.querySelector('.address input').value
          const abi = document.querySelector('.abi textarea').value

          props.dispatch({
            type: 'PARAMS',
            value: { name, address, abi },
          })
        },
      }, 'Create Interface'),
    ])
  )
}
