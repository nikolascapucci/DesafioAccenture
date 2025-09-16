# features/browser_windows.feature
Feature: Manipulação de Janelas do Navegador

  Scenario: O usuário deve ser capaz de abrir uma nova janela e validar seu conteúdo
    Given que o usuário está na página de Browser Windows
    When o usuário clica no botão 'New Window'
    Then uma nova janela deve ser aberta com a mensagem "This is a sample page"
    And o usuário fecha a nova janela
    Then o usuário retorna para a janela original