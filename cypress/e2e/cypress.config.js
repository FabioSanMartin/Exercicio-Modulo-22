const { defineConfig } = require('cypress')
const dotenvOutput = require('dotenv').config()

module.exports = defineConfig({
  e2e: {
  specPattern: '**/*.cy.js'},
  setupNodeEvents(on, config) {
    return require('./cypress/plugins/index.js')(on, config)
  },
  baseUrl: 'http://lojaebac.ebaconline.art.br',
})
