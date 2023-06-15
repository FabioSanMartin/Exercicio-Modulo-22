/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const fragments1 = require("../../fixtures/data.json")

Given('eu visite a loja da EBAC Store', () => {
    cy.visit('/')
    cy.addCart()
})

When('altere um produto no carrinho', () => {
    cy.intercept(
        {
            method: "POST",
            url: "/?wc-ajax=get_refreshed_fragments",
        },
        (req) => {
            req.reply({
                statusCode: 200,
                body: JSON.stringify(fragments1),
            });
        }
    );

    cy.alterarQuantidade()
})

Then('a mensagem de carrinho atualizado deve aparecer', () => {
    cy.confirmarAlteração()
})