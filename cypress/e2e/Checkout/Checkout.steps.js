/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const data = require('../../fixtures/data.json')

Given('Eu acesse a página da EBAC Store com meu usuario e senha', () => {
    cy.login(data.usuario, data.senha)
})

When('Eu adicione um produto ao carrinho e complete o cadastro', () => {
    cy.addIten()
    cy.checkout(data.firstName, data.lastName, data.country, data.address1, data.city, data.city, data.state, data.postCode, data.phone, data.email)
})

Then('A tela com a mensagem com o pedido deve aparecer', () => {
    cy.checkoutConfirm()
})