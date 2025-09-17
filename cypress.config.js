const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  // Configuração do reporter para gerar relatórios HTML com Mochawesome
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes - Desafio QA',
    embeddedScreenshots: true, // Incorpora screenshots nos relatórios de falhas
    inlineAssets: true,
    saveAllAttempts: false, // Salva screenshots apenas da última tentativa em caso de retries
  },
  
  e2e: {
    // URL base da aplicação a ser testada
    baseUrl: 'https://demoqa.com',
    // Padrão para encontrar os arquivos de teste (arquivos.feature)
    specPattern: "cypress/e2e/features/**/*.feature",
    // Configurações de viewport para consistência visual
    viewportWidth: 1920,
    viewportHeight: 1080,
    // Timeout padrão para os comandos do Cypress
    defaultCommandTimeout: 10000,

    async setupNodeEvents(on, config) {
      // Configura o pré-processador do Cucumber
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Configura o plugin do Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // É importante retornar o objeto de configuração com quaisquer alterações
      return config;
    },
  },
});