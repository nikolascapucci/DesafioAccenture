// features/page_objects/PracticeFormPage.js
const path = require('path');

class PracticeFormPage {
  constructor(page) {
    this.page = page;
    // Campos de texto
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.userEmail = page.locator('#userEmail');
    this.userNumber = page.locator('#userNumber');
    this.currentAddress = page.locator('#currentAddress');
    // Gênero (Radio)
    this.genderMale = page.locator('label[for="gender-radio-1"]');
    // Data
    this.dateOfBirthInput = page.locator('#dateOfBirthInput');
    // Subjects (Autocomplete)
    this.subjectsInput = page.locator('#subjectsInput');
    // Hobbies (Checkbox)
    this.hobbiesSports = page.locator('label[for="hobbies-checkbox-1"]');
    // Upload
    this.uploadPictureButton = page.locator('#uploadPicture');
    // Dropdowns
    this.stateDropdown = page.locator('#state');
    this.cityDropdown = page.locator('#city');
    // Submissão
    this.submitButton = page.locator('#submit');
    this.confirmationModal = page.locator('.modal-content');
    this.closeModalButton = page.locator('#closeLargeModal');
  }

  async navigate() {
    await this.page.goto('/automation-practice-form');
  }

  async fillForm(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.userEmail.fill(data.email);
    await this.genderMale.click();
    await this.userNumber.fill(data.mobile);
    await this.subjectsInput.fill('Maths');
    await this.page.keyboard.press('Enter');
    await this.hobbiesSports.click();
    await this.currentAddress.fill(data.address);
    await this.stateDropdown.click();
    await this.page.locator('div:text("NCR")').click();
    await this.cityDropdown.click();
    await this.page.locator('div:text("Delhi")').click();
  }

  async uploadFile() {
    const filePath = path.join(__dirname, '../../resources/upload.txt');
    await this.uploadPictureButton.setInputFiles(filePath);
  }

  async submit() {
    await this.submitButton.click();
  }
}

module.exports = { PracticeFormPage };