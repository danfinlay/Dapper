const extend = require('xtend')
const qp = require('query-parse')

module.exports = function(state, action) {

  if (action.type === 'INCREMENT_NONCE') {
    return extend(state, {
      nonce: state.nonce + 1,
    })
  }

  switch (action.type) {
    case 'PARAMS':
      try {
        const { abi, address, name } = action.value
        if (!abi || !address || !name) {
          const parsed = JSON.parse(abi)
          const newParams = qp.toString({ abi, address, name })
          /*
          if (newParams !== window.location.search) {
            window.location.search = newParams
          }
          */
          return extend(state, {
            abi: parsed,
            address,
            name,
            editMode: true,
          })
        }

        const parsed = JSON.parse(abi)

        const newParams = qp.toString({ abi, address, name })
        return extend(state, {
          abi: parsed,
          address,
          name,
          editMode: false,
        })
      } catch (e) {
        return extend(state, {
          error: e,
        })
      }

    default:
      return extend(state)
  }
}
