// features/page_objects/SortablePage.js
class SortablePage {
  constructor(page) {
    this.page = page;
    this.listItems = page.locator('.vertical-list-container.list-group-item');
  }

  async navigate() {
    await this.page.goto('/sortable');
  }

  async getItemByText(text) {
    return this.page.locator('.vertical-list-container.list-group-item', { hasText: text });
  }

  async sortListToAscendingOrder() {
    const expectedOrder = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Defina os textos corretos dos itens
    
    for (let i = 0; i < expectedOrder.length; i++) {
      const targetItemText = expectedOrder[i];
      const currentItems = await this.listItems.allTextContents();
      const currentPosition = currentItems.indexOf(targetItemText);

      if (currentPosition!== i) {
        const sourceLocator = await this.getItemByText(targetItemText);
        const targetLocator = this.listItems.nth(i);
        await sourceLocator.dragTo(targetLocator);
      }
    }
  }

  async getItemsOrder() {
    return await this.listItems.allTextContents();
  }
}

module.exports = { SortablePage };