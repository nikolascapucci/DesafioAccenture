import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../pages/Home.page';
import browserWindowsPage from '../pages/BrowserWindows.page.js';

Given('que eu estou na página de "Browser Windows" em "Alerts, Frame & Windows"', () => {
    cy.visit('https://demoqa.com/');
    cy.contains('Alerts, Frame & Windows').click();
    cy.contains('Browser Windows').click();
});

When('eu clico no botão "New Window"', () => {
    // Workaround para nova aba: remove o atributo 'target' para abrir na mesma aba
    browserWindowsPage.elements.newWindowButton().invoke('removeAttr', 'target').click();
});

Then('eu valido que uma nova página foi aberta com a mensagem "This is a sample page"', () => {
    cy.url().should('include', '/sample');
    cy.get('#sampleHeading').should('have.text', 'This is a sample page');
});

Then('eu retorno para a página anterior', () => {
    cy.go('back');
    cy.url().should('include', '/browser-windows');
});