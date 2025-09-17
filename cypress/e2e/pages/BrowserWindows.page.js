/**
 * @class BrowserWindowsPage
 * @description Representa a página de Browser Windows.
 */
class BrowserWindowsPage {
    elements = {
        newWindowButton: () => cy.get('#windowButton')
    }

    clickNewWindowButton() {
        this.elements.newWindowButton().click();
    }
}

export default new BrowserWindowsPage();