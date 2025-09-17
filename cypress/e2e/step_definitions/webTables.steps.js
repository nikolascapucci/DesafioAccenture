import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import homePage from '../pages/Home.page';
import webTablesPage from '../pages/WebTables.page';

// Armazena os dados do usuário gerado para uso em todo o cenário
let testUser;

Given('que eu estou na página "Web Tables" em "Elements"', () => {
    homePage.accessPage('https://demoqa.com/');
    homePage.clickCard('Elements');
    cy.contains('Web Tables').click();
});

When('eu crio um novo registro com dados únicos', () => {
    testUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 80 }).toString(),
        salary: faker.number.int({ min: 1000, max: 10000 }).toString(),
        department: faker.commerce.department()
    };

    webTablesPage.elements.addButton().click();
    webTablesPage.fillRegistrationForm(testUser);
    webTablesPage.clickSubmit();
});

Then('eu valido que o novo registro foi adicionado à tabela', () => {
    webTablesPage.elements.searchInput().type(testUser.email);
    cy.get('.rt-tbody').contains('.rt-tr-group', testUser.email).should('exist');
    cy.get('.rt-tbody').contains('.rt-tr-group', testUser.firstName).should('exist');
});

When('eu edito o registro recém-criado', () => {
    testUser.salary = faker.number.int({ min: 11000, max: 20000 }).toString();
    
    webTablesPage.getEditIconForRow(testUser.email).click();
    webTablesPage.elements.salaryInput().clear().type(testUser.salary);
    webTablesPage.clickSubmit();
});

Then('eu valido que as informações do registro foram atualizadas', () => {
    webTablesPage.elements.searchInput().clear().type(testUser.email);
    cy.get('.rt-tbody').contains('.rt-tr-group', testUser.salary).should('exist');
});

When('eu deleto o registro', () => {
    webTablesPage.getDeleteIconForRow(testUser.email).click();
});

Then('eu valido que o registro não existe mais na tabela', () => {
    webTablesPage.elements.searchInput().clear().type(testUser.email);
    cy.get('.rt-tbody').contains('.rt-tr-group', testUser.email).should('not.exist');
    cy.get('.rt-noData').should('be.visible').and('contain.text', 'No rows found');
});

// Armazena os e-mails dos usuários criados para a deleção em massa
const createdEmails = [];

When('eu crio um novo registro com os dados "{string}", "{string}", "{string}", "{string}", "{string}" e "{string}"', (firstName, lastName, email, age, salary, department) => {
    createdEmails.push(email); // Guarda o email para o cenário de deleção
    webTablesPage.elements.addButton().click();
    webTablesPage.fillRegistrationForm({ firstName, lastName, email, age, salary, department });
    webTablesPage.clickSubmit();
});

Then('o registro com o email "{string}" deve estar visível na tabela', (email) => {
    webTablesPage.elements.searchInput().clear().type(email);
    cy.get('.rt-tbody').contains('.rt-tr-group', email).should('be.visible');
    webTablesPage.elements.searchInput().clear();
});

When('eu deleto todos os 12 registros criados', () => {
    createdEmails.forEach(email => {
        webTablesPage.getDeleteIconForRow(email).click();
    });
});

Then('a tabela deve conter apenas os 3 registros originais', () => {
    cy.get('.rt-tr-group').filter(':not(.-padRow)').should('have.length', 3);
});