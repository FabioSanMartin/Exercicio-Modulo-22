/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const cadastro = require('../../support/pages/cadastro.page')
const { confirmScreen } = require('../../support/pages/confirmScreen.page')

Given('Eu visite a loja EBAC Store', () => {
    cy.visit('/minha-conta')
})

When('Eu insira o e-mail, senha, nome e sobrenome', () => {
    let emailFaker = faker.internet.email()
    let passFaker = faker.internet.password()
    let nomeFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()

    cadastro.cadastroPre(emailFaker, passFaker, nomeFaker, sobrenomeFaker)


})

When('Eu clicar no botão "Cadastrar"', () => {
confirmScreen.minhaConta.should("be.visible")


})


Then('O painel da Minha Conta deve ser exibido', () => {
    confirmScreen.minhaConta.should('contain', 'Detalhes da conta modificados com sucesso.')
})
