Feature: CarrinhoAlt

    Scenario: Alterar um iten no carrinho
    Given eu visite a loja da EBAC Store
    When altere um produto no carrinho
    Then a mensagem de carrinho atualizado deve aparecer