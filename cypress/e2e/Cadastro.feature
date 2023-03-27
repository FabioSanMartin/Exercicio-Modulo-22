Feature: Cadastro Usuario
Scenario Outline: Realizar o pré cadastro
Given Eu visite a loja EBAC Store
When Eu insira o e-mail "<faker.internet.email>" e a senha "<faker.internet.password>"
Then O painel da Minha Conta deve ser exibido

    Feature Description