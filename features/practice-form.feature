# features/practice-form.feature
Feature: Preenchimento do Formulário de Prática

  Scenario: O usuário deve preencher e submeter o formulário com dados aleatórios
    Given que o usuário está na página de Practice Form
    When o usuário preenche todo o formulário com dados aleatórios
    And o usuário faz o upload de um arquivo de teste
    And o usuário submete o formulário
    Then um popup de confirmação deve ser exibido
    And o usuário fecha o popup de confirmação