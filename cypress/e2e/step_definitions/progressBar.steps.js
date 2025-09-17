import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../pages/Home.page';
import progressBarPage from '../pages/ProgressBar.page';

Given('que eu estou na página da "Progress Bar" em "Widgets"', () => {
    homePage.accessPage('https://demoqa.com/');
    homePage.clickCard('Widgets');
    cy.contains('Progress Bar').click();
});

When('eu clico no botão "Start"', () => {
    progressBarPage.clickStartStopButton();
});

When('eu clico no botão "Stop" quando o progresso está abaixo de 25%', () => {
    // Abordagem robusta para elementos assíncronos
    // O Cypress irá repetir a busca pelo elemento e a verificação até que a condição seja atendida ou o timeout seja atingido.
    cy.get('#progressBar > div', { timeout: 10000 }).should($div => {
        const value = parseInt($div.attr('aria-valuenow'));
        if (value >= 20 && value < 25) { // Para em um valor seguro antes de 25
            progressBarPage.clickStartStopButton();
        }
        expect(value).to.be.lessThan(25);
    });
});

Then('eu valido que o valor da barra de progresso é menor ou igual a 25%', () => {
    progressBarPage.elements.progressBar().invoke('attr', 'aria-valuenow').then(value => {
        expect(parseInt(value)).to.be.at.most(25);
    });
});

When('eu espero a barra de progresso chegar a 100%', () => {
    // O timeout é aumentado para garantir que a barra tenha tempo de chegar a 100%
    progressBarPage.elements.progressBar({ timeout: 15000 }).should('have.attr', 'aria-valuenow', '100');
});

Then('o botão "Reset" deve ser exibido e eu clico nele', () => {
    progressBarPage.elements.resetButton().should('be.visible').click();
});

Then('eu valido que o valor da barra de progresso foi resetado para 0%', () => {
    progressBarPage.validateProgressBarValue('0%');
});