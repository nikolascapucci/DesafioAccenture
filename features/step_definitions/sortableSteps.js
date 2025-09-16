// features/step_definitions/sortableSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { SortablePage } = require('../page_objects/SortablePage');

Given('que o usuário está na página de Sortable', async function () {
  this.sortablePage = new SortablePage(this.page);
  await this.sortablePage.navigate();
});

When('o usuário ordena os itens da lista para a ordem crescente', async function () {
  await this.sortablePage.sortListToAscendingOrder();
});

Then('os itens da lista devem estar na ordem {string}', async function (expectedOrderString) {
  const expectedOrder = expectedOrderString.split(', ').map(item => item.replace(/"/g, ''));
  const actualOrder = await this.sortablePage.getItemsOrder();
  expect(actualOrder).toEqual(expectedOrder);
});

When('o usuário ordena os itens da lista para a ordem decrescente', async function () {
  await this.sortablePage.sortListToDescendingOrder();
});

Then('os itens da lista devem estar na ordem {string}', async function (expectedOrderString) {
  const expectedOrder = expectedOrderString.split(', ').map(item => item.replace(/"/g, ''));
  const actualOrder = await this.sortablePage.getItemsOrder();
  expect(actualOrder).toEqual(expectedOrder);
});