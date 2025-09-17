#language: pt
Funcionalidade: Ordenação de Elementos

  Cenário: Deve ordenar os itens da lista em ordem crescente
    Dado que eu estou na página "Sortable" em "Interactions"
    Quando eu arrasto os itens para a ordem "One", "Two", "Three", "Four", "Five", "Six"
    Então os itens da lista devem estar na ordem crescente correta