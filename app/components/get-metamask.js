const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits

module.exports = GetMetaMask

inherits(GetMetaMask, Component)
function GetMetaMask () {
  Component.call(this)
}

GetMetaMask.prototype.render = function () {
  return h('.content', [
    h('h3', `
      To interact with Ethereum enabled web sites, you need an Ethereum enabled browser.
    `),
    h('a', {
      href: 'https://metamask.io',
    }, [
      h('img', {
        src: 'static/get-metamask.png',
        style: {
          width: '300px',
        },
      }),
    ]),
  ])
}
