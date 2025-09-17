#language: pt
Funcionalidade: Manipulação de Janelas do Navegador

  Cenário: Deve abrir uma nova janela e validar seu conteúdo
    Dado que eu estou na página de "Browser Windows" em "Alerts, Frame & Windows"
    Quando eu clico no botão "New Window"
    Então eu valido que uma nova página foi aberta com a mensagem "This is a sample page"
    E eu retorno para a página anterior