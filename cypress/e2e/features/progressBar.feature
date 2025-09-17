#language: pt
Funcionalidade: Interação com a Barra de Progresso

  Cenário: Deve controlar a barra de progresso e validar seus valores
    Dado que eu estou na página da "Progress Bar" em "Widgets"
    Quando eu clico no botão "Start"
    E eu clico no botão "Stop" quando o progresso está abaixo de 25%
    Então eu valido que o valor da barra de progresso é menor ou igual a 25%
    Quando eu clico no botão "Start" novamente
    E eu espero a barra de progresso chegar a 100%
    Então o botão "Reset" deve ser exibido e eu clico nele
    E eu valido que o valor da barra de progresso foi resetado para 0%