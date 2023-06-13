Feature: Carrinho

    Scenario: Adiconar produto ao carrinho com sucesso
    Given Eu visite a loja da EBAC Store
    When adicione um produto ao carrinho
    Then a mensagem de confirmação deve aparecer