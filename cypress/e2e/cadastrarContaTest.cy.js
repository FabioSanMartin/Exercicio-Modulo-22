import { faker } from '@faker-js/faker'
const cadastroPage = require('../support/pages/cadastro.page')
const { confirmScreen } = require('../support/pages/confirmScreen.page')

describe('Pré cadastro', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    it('Relizar o pré cadastro com sucesso', () => {
let emailFaker = faker.internet.email()
let passFaker = faker.internet.password()
let nome = faker.name.firstName()
let sobrenome = faker.name.lastName()


cadastroPage.cadastro(emailFaker, passFaker)
confirmScreen.minhaConta.should("be.visible")
cadastroPage.cadastroCompleto(nome, sobrenome)
confirmScreen.minhaConta.should('contain', 'Detalhes da conta modificados com sucesso.')
    })
});

