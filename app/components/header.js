const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits

module.exports = NewComponent

inherits(NewComponent, Component)
function NewComponent () {
  Component.call(this)
}

NewComponent.prototype.render = function () {
  return (
    h('div', [
      h('h1', 'Dapper'),
      h('h2', 'Universal Dapp Interface'),
    ])
  )
}
