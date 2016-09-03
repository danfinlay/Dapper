const render = require('react-dom').render
const h = require('react-hyperscript')
const configureStore = require('./lib/store')
const Root = require('./app/root.js')
const Provider = require('react-redux').Provider
const qp = require('query-parse')
const params = qp.toObject(window.location.search.substr(1))

var body = document.querySelector('body')
const container = document.createElement('div')
body.appendChild(container)

window.addEventListener('load', function() {
  // Now you can start your app & access web3 freely:
  try {
    if (web3 === undefined) {
      window.web3 = false
    }
  } catch (e) {
    window.web3 = false
  }

  startApp()
})

const store = configureStore({
  currentView: 'home',
  web3Found: !!window.web3,
  editMode: true,
})

console.dir({ params })
store.dispatch({
  type: 'PARAMS',
  value: {
    abi: unescape(params.abi),
    address: params.address,
    name: params.name,
  },
})

function startApp(){
  render(h('.super', [
    // h('style', styles),
    h(Provider, { store }, [
      h(Root),
    ]),
  ]),
  container)
}

