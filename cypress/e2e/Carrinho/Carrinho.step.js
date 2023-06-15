/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const fragments = require("../../fixtures/data.json")

Given('Eu visite a loja da EBAC Store', () => {
    cy.visit('/')
})

When('adicione um produto ao carrinho', () => {
    cy.intercept(
        {
            method: "POST",
            url: "/?wc-ajax=get_refreshed_fragments",
        },
        (req) => {
            req.reply({
                statusCode: 200,
                body: JSON.stringify(fragments),
            });
        }
    );

    cy.addCart();

})

Then('a mensagem de confirmação deve aparecer', () => {
    cy.wait(3000)
    cy.get('.woocommerce-message').should('be.visible')
})