const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
  specPattern: '**/*.cy.js'},
  setupNodeEvents(on, config) {
    return require('./cypress/plugins/index.js')(on, config)
  },
  baseUrl: 'http://lojaebac.ebaconline.art.br',
})
