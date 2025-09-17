/**
 * @class SortablePage
 * @description Representa a página Sortable.
 */
class SortablePage {
    /**
     * Retorna o elemento da lista com base no texto.
     * @param {string} text - O texto do item da lista.
     * @returns Cypress.Chainable
     */
    getListItem(text) {
        return cy.get('.vertical-list-container >.list-group-item').contains(text);
    }

    /**
     * Retorna todos os itens da lista.
     * @returns Cypress.Chainable
     */
    getAllListItems() {
        return cy.get('.vertical-list-container >.list-group-item');
    }
}

export default new SortablePage();