// features/page_objects/WebTablesPage.js
class WebTablesPage {
  constructor(page) {
    this.page = page;
    // Botões
    this.addButton = page.locator('#addNewRecordButton');
    this.submitButton = page.locator('#submit');
    // Campos do formulário
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.ageInput = page.locator('#age');
    this.salaryInput = page.locator('#salary');
    this.departmentInput = page.locator('#department');
  }

  async navigate() {
    await this.page.goto('/webtables');
  }

  async openRegistrationForm() {
    await this.addButton.click();
  }

  async fillRegistrationForm(data) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.ageInput.fill(data.age.toString());
    await this.salaryInput.fill(data.salary.toString());
    await this.departmentInput.fill(data.department);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async getRowByEmail(email) {
    return this.page.locator('.rt-tr-group', { hasText: email });
  }

  async clickEditButtonForRow(email) {
    const row = await this.getRowByEmail(email);
    await row.locator('[id^="edit-record-"]').click();
  }

  async clickDeleteButtonForRow(email) {
    const row = await this.getRowByEmail(email);
    await row.locator('[id^="delete-record-"]').click();
  }
}

module.exports = { WebTablesPage };