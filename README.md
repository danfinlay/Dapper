# Dapper

A universal dapp interface.

Provides a form to describe an Ethereum smart contract, generates an interface for that smart contract, and gives you a hyperlink to share that interface freely.

To Do:
- [x] Warn users when they don't have a web3 browser.
- [x] Provide Dapp describing interface.
- [ ] Generate interface from dapp description.
- [ ] Generate reusable URL from dapp UI description.

To run:

`npm start`

To build:

`browserify index.js -o bundle.js`

Then just include `bundle.js` in an HTML file.
