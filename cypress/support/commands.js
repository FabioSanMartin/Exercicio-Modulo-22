/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) =>{
    const fd = new FormData()
    fd.append('username', user)
    fd.append('pasword', pass)
    fd.append('woocommerce-login-nonce', 'ebaf25e93d')
    fd.append('_wp_http_referer', `/minha-conta`)
    fd.append('login', "Login")
    fd.append('testcookie', 1)
    
    cy.request({
        url: '/minha-conta',
        method: 'POST',
        body: fd
    }).then(resp => {
        resp.headers['set-cookies'].forEach(cookie =>{
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor+1)
            cy.setCookie(key, value)
        })
    })
    cy.visit('/minha-conta')
})
