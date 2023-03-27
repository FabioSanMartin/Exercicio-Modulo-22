const data = require('../fixtures/data.json')

describe('Funcionalidade de checkout', () => {
    it('Deve realizar o checkout com sucesso', () => {
        cy.login(data.usuario, data.senha)
        cy.addIten()
        cy.checkout(data.firstName, data.lastName, data.country, data.address1, data.city, data.city, data.state, data.postCode, data.phone, data.email)
        cy.checkoutConfirm()

    });
   
});