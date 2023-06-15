/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const fragments2 = require("../../fixtures/data.json")

Given('eu visite a loja da EBAC Store', () => {
cy.visit('/')
cy.addCart()
})

When('e exclua o produto que esta no carrinho', () => {
    cy.intercept(
        {
            method: "POST",
            url: "/?wc-ajax=get_refreshed_fragments",
        },
        (req) => {
            req.reply({
                statusCode: 200,
                body: JSON.stringify(fragments2),
            });
        }
    );


cy.delete()
})

Then('a mensagem de removido e carrinho vazio deve aparecer', () => {
cy.confirmarExclusão()
})