// features/step_definitions/browserWindowsSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { BrowserWindowsPage } = require('../page_objects/BrowserWindowsPage');

Given('que o usuário está na página de Browser Windows', async function () {
  this.browserWindowsPage = new BrowserWindowsPage(this.page);
  await this.browserWindowsPage.navigate();
});

When('o usuário clica no botão {string}', async function (buttonText) {
  // A lógica de captura da nova página está no step 'Then' para manter o estado
  this.newPage = await this.browserWindowsPage.openNewWindow();
});

Then('uma nova janela deve ser aberta com a mensagem {string}', async function (message) {
  expect(this.newPage).toBeDefined();
  await this.newPage.waitForLoadState();
  const bodyText = await this.newPage.locator('body').textContent();
  expect(bodyText).toContain(message);
});

Then('o usuário fecha a nova janela', async function () {
  await this.newPage.close();
});

Then('o usuário retorna para a janela original', async function () {
  await this.page.bringToFront();
});