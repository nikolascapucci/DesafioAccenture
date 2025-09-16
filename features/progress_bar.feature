# features/progress_bar.feature
Feature: Interação com a Barra de Progresso

  Scenario: O usuário deve ser capaz de iniciar, parar, validar e resetar a barra de progresso
    Given que o usuário está na página de Progress Bar
    When o usuário clica no botão 'Start'
    And o usuário para a barra de progresso antes de atingir 25%
    Then o valor da barra de progresso deve ser menor ou igual a 25%
    When o usuário clica no botão 'Start' novamente
    And espera a barra de progresso atingir 100%
    Then o botão 'Reset' deve estar visível e a barra de progresso deve estar em 100%  
    When o usuário clica no botão 'Reset'
    Then a barra de progresso deve ser resetada para 0%