const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = {
  e2e: {
    "specPattern": "**/*.feature",
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config){
      on('file:preprocessor', cucumber())
    },
    projectId: 'modulo 23',
        reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/results',
        quiet: true,
        overwrite: false,
        html: false,
        json: true,
        timestamp: 'mmddyyyy_HHMMss'
      }
    }
  },
};
