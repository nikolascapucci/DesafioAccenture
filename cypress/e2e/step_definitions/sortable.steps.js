import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../pages/Home.page';
import sortablePage from '../pages/Sortable.page';

Given('que eu estou na página "Sortable" em "Interactions"', () => {
    homePage.accessPage('https://demoqa.com/');
    homePage.clickCard('Interactions');
    cy.contains('Sortable').click();
});

When('eu arrasto os itens para a ordem "One", "Two", "Three", "Four", "Five", "Six"', () => {
    // A ordem correta que queremos alcançar
    const targetOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    // Lógica para mover cada item para sua posição correta
    // Este é um exemplo simples. Lógicas mais complexas podem ser necessárias para casos gerais.
    sortablePage.getListItem('Six').drag(sortablePage.getListItem('Two'));
    sortablePage.getListItem('Four').drag(sortablePage.getListItem('Two'));
    sortablePage.getListItem('Five').drag(sortablePage.getListItem('Three'));
    sortablePage.getListItem('Three').drag(sortablePage.getListItem('Six'));
});

Then('os itens da lista devem estar na ordem crescente correta', () => {
    const expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
    sortablePage.getAllListItems().each(($el, index) => {
        cy.wrap($el).should('have.text', expectedOrder[index]);
    });
});