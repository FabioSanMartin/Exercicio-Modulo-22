Feature: Carrinho Deletar

    Scenario: Deve Excluir o item do carrinho com sucesso
    Given eu visite a loja da EBAC Store
    When e exclua o produto que esta no carrinho
    Then a mensagem de removido e carrinho vazio deve aparecer