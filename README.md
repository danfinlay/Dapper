# Dapper

A universal dapp interface.

[Live Example](https://flyswatter.github.io/Dapper/)

Provides a form to describe an Ethereum smart contract, generates an interface for that smart contract, and gives you a hyperlink to share that interface freely.

To Do:
- [x] Warn users when they don't have a web3 browser.
- [x] Provide Dapp describing interface.
- [x] Generate interface from dapp description.
- [x] Generate reusable URL from dapp UI description.
- [ ] Use reusable URL to restore dapp UI.
- [ ] Let the UI make real requests to the contract.
- [ ] Make the UI look good

To run:

`npm start`

To build:

`npm run bundle`.

Then just include `bundle.js` in an HTML file.

To live reload during development:

`npm start`.
