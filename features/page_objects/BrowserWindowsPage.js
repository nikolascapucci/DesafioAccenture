// features/page_objects/BrowserWindowsPage.js
class BrowserWindowsPage {
  constructor(page) {
    this.page = page;
    this.newWindowButton = page.locator('#windowButton');
  }

  async navigate() {
    await this.page.goto('/browser-windows');
  }

  async openNewWindow() {
    // Prepara a escuta para o evento 'page' ANTES de clicar
    const pagePromise = this.page.context().waitForEvent('page');
    await this.newWindowButton.click();
    const newPage = await pagePromise; // Espera a promessa ser resolvida com a nova página
    return newPage;
  }
}

module.exports = { BrowserWindowsPage };