Feature: Carrinho de compras

    Scenario: Adicionar item ao carrinho com sucesso
    Given Eu visite a loja EBAC Store
    When adicione um produto ao carrinho
    Then a mensagem de confirmação deve aparecer
