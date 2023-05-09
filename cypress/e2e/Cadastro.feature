Feature: Cadastro Usuario

Scenario: Realizar o pré cadastro com sucesso
Given  Eu visite a loja EBAC Store
When  Eu insira o e-mail, senha, nome e sobrenome
    Then  O painel da Minha Conta deve ser exibido