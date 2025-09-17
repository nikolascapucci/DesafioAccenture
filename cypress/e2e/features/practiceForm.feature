#language: pt
Funcionalidade: Preenchimento do Formulário de Prática

  Cenário: Deve preencher e submeter o formulário com dados aleatórios
    Dado que eu estou na página "Practice Form" em "Forms"
    Quando eu preencho todo o formulário com dados aleatórios e faço upload de um arquivo
    E eu submeto o formulário
    Então eu valido que o popup de confirmação foi aberto com os dados corretos
    E eu fecho o popup de confirmação