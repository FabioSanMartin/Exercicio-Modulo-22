/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps' 


Given('Eu visite a loja da EBAC Store', () => {
    cy.visit('/')
})

When('adicione um produto ao carrinho', () => {
    cy.addCart()
})

Then('a mensagem de confirmação deve aparecer', () => {
    cy.wait(3000)
    cy.get('.woocommerce-message').should('be.visible')
})