Feature: Checkout

Scenario Outline: Realizar o checkout com sucesso
Given Eu acesse a página da EBAC Store com e-mail "<user>" e a senha "<pass>"
When Eu adicione um produto ao carrinho e complete o cadastro
Then A tela com a mensagem com o pedido deve aparecer

    Feature Description