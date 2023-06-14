/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('eu visite a loja da EBAC Store', () => {
    cy.visit('/')
})

When('altere um produto no carrinho', () => {
    cy.addCart()
    cy.alterarQuantidade()
})

Then('a mensagem de carrinho atualizado deve aparecer', () => {
    cy.confirmarAlteração()
})