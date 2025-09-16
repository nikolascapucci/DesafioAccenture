// features/page_objects/ProgressBarPage.js
const { expect } = require('@playwright/test');

class ProgressBarPage {
  constructor(page) {
    this.page = page;
    this.startStopButton = page.locator('#startStopButton');
    this.resetButton = page.locator('#resetButton');
    this.progressBar = page.locator('#progressBar > div');
  }

  async navigate() {
    await this.page.goto('/progress-bar');
  }

  async clickStartStopButton() {
    await this.startStopButton.click();
  }

  async stopProgressBarBefore(targetPercentage) {
    await this.startStopButton.click(); // Inicia
    
    // Espera ativamente até que o valor seja >= targetPercentage, então para.
    await this.page.waitForFunction(
      (args) => {
        const progressBar = document.querySelector(args.selector);
        const currentValue = parseInt(progressBar.getAttribute('aria-valuenow'), 10);
        return currentValue >= args.percentage;
      },
      { selector: '#progressBar > div', percentage: targetPercentage - 5 }, // Para um pouco antes para garantir < 25
      { timeout: 15000 }
    );

    await this.startStopButton.click(); // Para
  }

  async getCurrentProgressValue() {
    const value = await this.progressBar.getAttribute('aria-valuenow');
    return parseInt(value, 10);
  }

  async waitForCompletion() {
    await expect(this.progressBar).toHaveAttribute('aria-valuenow', '100', { timeout: 20000 });
  }
}

module.exports = { ProgressBarPage };