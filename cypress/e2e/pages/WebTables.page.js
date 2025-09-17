/**
 * @class WebTablesPage
 * @description Gerencia os elementos e ações da página Web Tables.
 */
class WebTablesPage {
    elements = {
        addButton: () => cy.get('#addNewRecordButton'),
        firstNameInput: () => cy.get('#firstName-wrapper #firstName'),
        lastNameInput: () => cy.get('#lastName-wrapper #lastName'),
        emailInput: () => cy.get('#userEmail-wrapper #userEmail'),
        ageInput: () => cy.get('#age-wrapper #age'),
        salaryInput: () => cy.get('#salary-wrapper #salary'),
        departmentInput: () => cy.get('#department-wrapper #department'),
        submitButton: () => cy.get('#submit'),
        searchInput: () => cy.get('#searchBox')
    }

    /**
     * Retorna o ícone de edição para uma linha que contém um texto específico.
     * @param {string} rowText - Texto único na linha (ex: email).
     * @returns Cypress.Chainable
     */
    getEditIconForRow(rowText) {
        return cy.get('.rt-tbody').contains('.rt-tr-group', rowText).find('[title="Edit"]');
    }

    /**
     * Retorna o ícone de deleção para uma linha que contém um texto específico.
     * @param {string} rowText - Texto único na linha (ex: email).
     * @returns Cypress.Chainable
     */
    getDeleteIconForRow(rowText) {
        return cy.get('.rt-tbody').contains('.rt-tr-group', rowText).find('');
    }

    /**
     * Preenche o formulário de registro.
     * @param {object} userData - Objeto com os dados do usuário.
     * @param {string} userData.firstName
     * @param {string} userData.lastName
     * @param {string} userData.email
     * @param {string} userData.age
     * @param {string} userData.salary
     * @param {string} userData.department
     */
    fillRegistrationForm(userData) {
        this.elements.firstNameInput().type(userData.firstName);
        this.elements.lastNameInput().type(userData.lastName);
        this.elements.emailInput().type(userData.email);
        this.elements.ageInput().type(userData.age);
        this.elements.salaryInput().type(userData.salary);
        this.elements.departmentInput().type(userData.department);
    }

    clickSubmit() {
        this.elements.submitButton().click();
    }
}

export default new WebTablesPage();