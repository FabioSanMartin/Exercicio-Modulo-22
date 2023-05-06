const data = require('../fixtures/data.json')
const { commands } = require('../support/commands')

describe('Funcionalidade de checkout', () => {

    context(`Given i visit the site EBAC Store with user ${data.usuario} and password ${data.senha}`, () => {
        before(() => {
            cy.login(data.usuario, data.senha)
        });

        context(`When i add an item to the cart and checkout with the ${data.firstName} ${data.lastName} ${data.country} ${data.address1} ${data.city} ${data.city} ${data.state} ${data.postCode} ${data.phone} ${data.email} data`, () => {
            beforeEach(() => {
            cy.addIten()
        cy.checkout(data.firstName, data.lastName, data.country, data.address1, data.city, data.city, data.state, data.postCode, data.phone, data.email)
        })

        });

        it('Then the checkout should be successful', () => {
            cy.checkoutConfirm()
        });
    });
    
   // it('Deve realizar o checkout com sucesso', () => {
     //   cy.login(data.usuario, data.senha)
       // cy.addIten()
        //cy.checkout(data.firstName, data.lastName, data.country, data.address1, data.city, data.city, data.state, data.postCode, data.phone, data.email)
        //cy.checkoutConfirm()

    //});
   
});

