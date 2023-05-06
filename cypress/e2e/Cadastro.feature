Feature: Cadastro Usuario

Scenario: Realizar o pré cadastro com sucesso
Given  Eu visite a pagina "/Minha-conta"
When  Eu insira o e-mail e a senha
    Then  O painel da Minha Conta deve ser exibido