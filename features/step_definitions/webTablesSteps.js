// features/step_definitions/webTablesSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { WebTablesPage } = require('../page_objects/WebTablesPage');
const { faker } = require('@faker-js/faker'); // Instalar com: npm install @faker-js/faker --save-dev

Given('que o usuário está na página de Web Tables', async function () {
  this.webTablesPage = new WebTablesPage(this.page);
  await this.webTablesPage.navigate();
});

// Steps para o Scenario Outline
When('o usuário cria um novo registro com os dados: {string}, {string}, {string}, {string}, {string}, {string}', async function (firstName, lastName, email, age, salary, department) {
  await this.webTablesPage.openRegistrationForm();
  await this.webTablesPage.fillRegistrationForm({ firstName, lastName, email, age, salary, department });
  await this.webTablesPage.submitForm();
});

Then('o registro com o email {string} deve estar visível na tabela', async function (email) {
  const row = await this.webTablesPage.getRowByEmail(email);
  await expect(row).toBeVisible();
});

// Steps para o cenário Bônus
When('o usuário cria {int} novos registros dinamicamente', async function (count) {
  this.createdUsers = [];
  for (let i = 0; i < count; i++) {
    const userData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 70 }).toString(),
      salary: faker.number.int({ min: 2000, max: 15000 }).toString(),
      department: faker.commerce.department(),
    };
    this.createdUsers.push(userData);
    await this.webTablesPage.openRegistrationForm();
    await this.webTablesPage.fillRegistrationForm(userData);
    await this.webTablesPage.submitForm();
  }
});

Then('{int} novos registros devem estar visíveis na tabela', async function (count) {
    for (const user of this.createdUsers) {
        const row = await this.webTablesPage.getRowByEmail(user.email);
        await expect(row).toBeVisible();
    }
});

When('o usuário deleta todos os {int} registros criados', async function (count) {
    for (const user of this.createdUsers) {
        await this.webTablesPage.clickDeleteButtonForRow(user.email);
    }
});

Then('os {int} registros criados não devem mais existir na tabela', async function (count) {
    for (const user of this.createdUsers) {
        const row = await this.webTablesPage.getRowByEmail(user.email);
        await expect(row).not.toBeVisible();
    }
});