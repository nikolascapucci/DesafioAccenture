/**
 * @class ProgressBarPage
 * @description Classe que representa os elementos e ações da página Progress Bar.
 */
class ProgressBarPage {
    /**
     * @description Elementos da página Progress Bar.
     */
    elements = {
        startStopButton: () => cy.get('#startStopButton'),
        resetButton: () => cy.get('#resetButton'),
        progressBar: () => cy.get('#progressBar > div')
    }

    /**
     * Clica no botão Start/Stop.
     */
    clickStartStopButton() {
        this.elements.startStopButton().click();
    }

    /**
     * Clica no botão Reset.
     */
    clickResetButton() {
        this.elements.resetButton().click();
    }

    /**
     * Valida o valor atual da barra de progresso.
     * @param {string} value - O valor esperado (ex: '100%').
     */
    validateProgressBarValue(value) {
        this.elements.progressBar().should('have.text', value);
    }
}

export default new ProgressBarPage();