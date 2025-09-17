import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../pages/Home.page';
import practiceFormPage from '../pages/PracticeForm.page';

Given('que eu estou na página "Practice Form" em "Forms"', () => {
    homePage.accessPage('https://demoqa.com/');
    homePage.clickCard('Forms');
    cy.contains('Practice Form').click();
});

When('eu preencho todo o formulário com dados aleatórios e faço upload de um arquivo', () => {
    // A lógica complexa de preenchimento é abstraída para um comando customizado
    cy.fillPracticeForm();
});

When('eu submeto o formulário', () => {
    practiceFormPage.elements.submitButton().click();
});

Then('eu valido que o popup de confirmação foi aberto com os dados corretos', () => {
    practiceFormPage.elements.modal().should('be.visible');
    practiceFormPage.elements.modalTitle().should('have.text', 'Thanks for submitting the form');
    
    // Valida se os dados no popup correspondem aos dados gerados (armazenados via cy.wrap().as())
    cy.get('@formData').then(formData => {
        cy.get('.modal-body').should('contain', `${formData.firstName} ${formData.lastName}`);
        cy.get('.modal-body').should('contain', formData.email);
        cy.get('.modal-body').should('contain', 'Male');
        cy.get('.modal-body').should('contain', formData.mobile);
    });
});

Then('eu fecho o popup', () => {
    practiceFormPage.elements.modalCloseButton().click();
    practiceFormPage.elements.modal().should('not.exist');
});