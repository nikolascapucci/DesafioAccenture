# features/web-tables.feature
Feature: Gerenciamento de Registros em Web Tables

  Scenario Outline: O usuário deve ser capaz de criar, editar e deletar registros
    Given que o usuário está na página de Web Tables
    When o usuário cria um novo registro com os dados: "<firstName>", "<lastName>", "<email>", "<age>", "<salary>", "<department>"
    Then o registro com o email "<email>" deve estar visível na tabela
    When o usuário edita o registro com o email "<email>" para ter o sobrenome "<newLastName>"
    Then o registro com o email "<email>" deve ter o sobrenome "<newLastName>"
    When o usuário deleta o registro com o email "<email>"
    Then o registro com o email "<email>" não deve mais existir na tabela

    Examples:

| firstName | lastName | email | age | salary | department | newLastName |
| Cierra | Vega | cierra.vega@example.com | 39 | 10000 | Insurance | Smith |

  @bonus
  Scenario: O usuário deve ser capaz de criar e deletar múltiplos registros dinamicamente
    Given que o usuário está na página de Web Tables
    When o usuário cria 12 novos registros dinamicamente
    Then 12 novos registros devem estar visíveis na tabela
    When o usuário deleta todos os 12 registros criados
    Then os 12 registros criados não devem mais existir na tabela