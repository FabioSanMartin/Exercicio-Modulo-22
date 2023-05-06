Feature: Checkout cliente

Scenario: Deve realizae o checkout com sucesso
Given Eu acesse a página da EBAC Store com meu usuario e a senha
When Eu adicione um produto ao carrinho e complete o cadastro
Then A tela com a mensagem com o pedido deve aparecer