// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features',
  timeout: 60 * 1000, // Timeout global de 60 segundos por teste
  expect: {
    timeout: 10 * 1000, // Timeout para asserções 'expect'
  },
  use: {
    baseURL: 'https://demoqa.com',
    headless: false, // Executar em modo com interface gráfica para visualização
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15 * 1000, // Timeout para ações como click() e fill()
    trace: 'on-first-retry', // Grava um trace se o teste falhar e for retentado
    screenshot: 'only-on-failure', // Tira um screenshot apenas em caso de falha
  },
  reporter: [['html', { open: 'never' }]], // Gera um relatório HTML
});