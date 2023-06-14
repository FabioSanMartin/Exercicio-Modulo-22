/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('eu visite a loja da EBAC Store', () => {
cy.visit('/')
})

When('e exclua o produto que esta no carrinho', () => {
cy.addCart()
cy.delete()
})

Then('a mensagem de removido e carrinho vazio deve aparecer', () => {
cy.confirmarExclusão()
})