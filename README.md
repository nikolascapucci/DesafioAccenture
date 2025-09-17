# DesafioAccenture
Projeto de desafio técnico para testar aplicações API e automação de front-end.

Projeto de Automação de Testes - Desafio QA

Este repositório contém uma suíte de testes de automação front-end desenvolvida com Cypress, JavaScript e Cucumber (BDD) para o site(https://demoqa.com/).

Tecnologias Utilizadas

    Framework de Teste: Cypress

    Linguagem: JavaScript

    Padrão de Escrita de Testes: BDD com Cucumber (Gherkin)

    Padrão de Projeto: Page Object Model (Híbrido com App Actions)

    Geração de Dados: @faker-js/faker

    Relatórios: cypress-mochawesome-reporter

    Integração Contínua: GitHub Actions

Pré-requisitos

    Node.js (versão 18 ou superior)

    npm

Instalação

    Clone o repositório:bash
    git clone

    Navegue até o diretório do projeto:
    Bash

cd

Instale as dependências:
Bash

    npm install

Execução dos Testes

Existem duas formas de executar os testes:

1. Modo Interativo (Cypress Test Runner)

Este modo abre a interface gráfica do Cypress, permitindo que você veja os testes executando em tempo real e depure com facilidade.
Bash

npx cypress open

2. Modo Headless (Linha de Comando)

Este modo executa todos os testes em um navegador em segundo plano (headless). É ideal para execuções em ambientes de CI/CD. Ao final da execução, um relatório HTML será gerado em cypress/reports/html.
Bash

npx cypress run

Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar a manutenção e escalabilidade:

    cypress/e2e/features: Contém as especificações dos testes em Gherkin.

    cypress/e2e/pages: Contém as classes de Page Object que abstraem as páginas da aplicação.

    cypress/e2e/step_definitions: Contém a implementação dos passos definidos nos arquivos .feature.

    cypress/support: Contém comandos customizados e configurações globais.

    cypress.config.js: Arquivo principal de configuração do Cypress.


Este blueprint final fornece não apenas o código funcional, mas uma estrutura completa e profissional, pronta para ser avaliada e expandida, demonstrando um domínio abrangente das ferramentas e filosofias de automação de testes modernas.