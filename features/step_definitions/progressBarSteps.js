// features/step_definitions/progressBarSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ProgressBarPage } = require('../page_objects/ProgressBarPage');

Given('que o usuário está na página de Progress Bar', async function () {
  this.progressBarPage = new ProgressBarPage(this.page);
  await this.progressBarPage.navigate();
});

When('o usuário clica no botão {string}', async function (buttonText) {
  await this.progressBarPage.clickStartStopButton();
});

When('o usuário para a barra de progresso antes de atingir {int}%', async function (percentage) {
  await this.progressBarPage.stopProgressBarBefore(percentage);
});

Then('o valor da barra de progresso deve ser menor ou igual a {int}%', async function (percentage) {
  const currentValue = await this.progressBarPage.getCurrentProgressValue();
  expect(currentValue).toBeLessThanOrEqual(percentage);
});

When('o usuário clica no botão {string} novamente', async function (buttonText) {
  await this.progressBarPage.clickStartStopButton();
});

When('espera a barra de progresso atingir {int}%', async function (percentage) {
  await this.progressBarPage.waitForCompletion();
});

Then('o botão {string} deve estar visível e a barra de progresso deve estar em {int}%', async function (buttonText, percentage) {
  await expect(this.progressBarPage.resetButton).toBeVisible();
  const currentValue = await this.progressBarPage.getCurrentProgressValue();
  expect(currentValue).toBe(percentage);
  await this.progressBarPage.resetButton.click();
});