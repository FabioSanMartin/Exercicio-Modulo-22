/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const cadastroPage = require('../support/pages/cadastro.page')
const { confirmScreen } = require('../support/pages/confirmScreen.page')

Given('Eu visite a loja EBAC Store', () => {
    cy.visit('/minha-conta')
})

When("Eu insira o e-mail '{faker.internet.email()}' e a senha '{faker.internet.password()}'", () => {
    let emailFaker = faker.internet.email()
    let passFaker = faker.internet.password()
    cadastroPage.cadastro(emailFaker, passFaker)
})

Then('O painel da Minha Conta deve ser exibido ', ()=>{
    confirmScreen.minhaConta.should("be.visible")
})
