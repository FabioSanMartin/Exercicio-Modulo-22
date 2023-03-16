class cadastroPage {
    get #email() { return cy.get("#reg_email") }
    get #pass() { return cy.get("#reg_password") }
    get #reg() { return cy.get(":nth-child(4) > .button") }
    get #edit() { return cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')}
    get #firstName() { return cy.get("#account_first_name") }
    get #lastName() { return cy.get("#account_last_name") }
    get #save() { return cy.get('.woocommerce-Button') }
    


cadastro(emailFaker, passFaker){
    this.#email.type(emailFaker)
    this.#pass.type(passFaker)
    this.#reg.click()
}
cadastroCompleto(nome, sobrenome){
    this.#edit.click()
    this.#firstName.clear().type(nome)
    this.#lastName.clear().type(sobrenome)
    this.#save.click()
    
}
}

module.exports = new cadastroPage