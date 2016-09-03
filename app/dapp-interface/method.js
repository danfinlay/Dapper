const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits

module.exports = NewComponent

inherits(NewComponent, Component)
function NewComponent () {
  Component.call(this)
}

NewComponent.prototype.render = function () {
  const props = this.props
  const { method } = props

  return h('.method', [
    h('label.name', method.name),
    method.inputs.map((input) => {
      return ('.input', [
        h('input.value', {
          placeholder: input.name,
        })
      ])
    })
  ])
}
