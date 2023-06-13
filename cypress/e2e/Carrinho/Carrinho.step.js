/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps' 


Given('Eu visite a loja da EBAC Store', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos')
})

When('adicione um produto ao carrinho', () => {
    cy.addCart()
})

Then('a mensagem de confirmação deve aparecer', () => {
    cy.get('.woocommerce-message').should('be.visible')
})