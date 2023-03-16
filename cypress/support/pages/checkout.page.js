get #firstName() { return cy.get("#account_first_name") }
    get #lastName() { return cy.get("#account_last_name") }
    get #billCompany() { return cy.get("#billing_company") }
    get #billCountry() { return cy.get("#select2-billing_country-container") }
    get #billAddress1() { return cy.get("#billing_address_1") }
    get #billAddress2() { return cy.get("#billing_address_1") }
    get #billCity() { return cy.get("#billing_city") }
    get #billstate() { return cy.get("#select2-billing_state-container") }
    get #billPostCode() { return cy.get("#billing_postcode") }
    get #billPhone() { return cy.get("#billing_phone") }
    get #billEmail() { return cy.get("#billing_email") }

cadastroCompleto(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, emailFaker){
    this.#firstName.clear().type(nome)
    this.#lastName.clear().type(sobrenome)
    this.#billCompany.clear().type(empresa)
    this.#billCountry.click().type(pais).get('[aria-selected="true"]').click()
    this.#billAddress1.clear().type(endereco)
    this.#billAddress2.clear().type(numero)
    this.#billCity.clear().type(cidade)
    this.#billstate.click().type(estado + '{enter}')
    this.#billPostCode.clear().type(cep)
    this.#billPhone.clear().type(telefone)
    this.#billEmail.clear().type(emailFaker)
}