// features/step_definitions/practiceFormSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { PracticeFormPage } = require('../page_objects/PracticeFormPage');
const { faker } = require('@faker-js/faker');

Given('que o usuário está na página de Practice Form', async function () {
  this.practiceFormPage = new PracticeFormPage(this.page);
  await this.practiceFormPage.navigate();
});

When('o usuário preenche todo o formulário com dados aleatórios', async function () {
  const randomData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    mobile: faker.phone.number('##########'),
    address: faker.location.streetAddress(),
  };
  await this.practiceFormPage.fillForm(randomData);
});

When('o usuário faz o upload de um arquivo de teste', async function () {
  await this.practiceFormPage.uploadFile();
});

When('o usuário submete o formulário', async function () {
  await this.practiceFormPage.submit();
});

Then('um popup de confirmação deve ser exibido', async function () {
  await expect(this.practiceFormPage.confirmationModal).toBeVisible();
  await expect(this.practiceFormPage.confirmationModal).toContainText('Thanks for submitting the form');
});

Then('o usuário fecha o popup de confirmação', async function () {
  await this.practiceFormPage.closeModalButton.click();
  await expect(this.practiceFormPage.confirmationModal).not.toBeVisible();
});