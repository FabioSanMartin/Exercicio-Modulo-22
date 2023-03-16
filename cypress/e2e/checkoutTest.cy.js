const data = require ('../fixtures/data.json')

describe('Funcionalidade de checkout', () => {
   beforeEach(() => {
    cy.login(data.usuario, data.senha)
   });
    it('Deve realizar o checkout com sucesso', () => {
        
    });
});