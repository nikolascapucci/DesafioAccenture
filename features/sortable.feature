# features/sortable.feature
Feature: Interação com Listas Ordenáveis

  Scenario: O usuário deve ser capaz de reordenar os itens de uma lista
    Given que o usuário está na página de Sortable
    When o usuário ordena os itens da lista para a ordem crescente
    Then os itens da lista devem estar na ordem "One", "Two", "Three", "Four", "Five", "Six"
    When o usuário ordena os itens da lista para a ordem decrescente
    Then os itens da lista devem estar na ordem "Six", "Five", "Four", "Three", "Two", "One"