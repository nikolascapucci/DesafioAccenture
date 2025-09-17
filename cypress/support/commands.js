import { faker } from '@faker-js/faker';
import practiceFormPage from '../e2e/pages/PracticeForm.page';

/**
 * @memberof cy
 * @method fillPracticeForm
 * @description Comando customizado para preencher o formulário de prática com dados aleatórios gerados pelo Faker.js.
 * Armazena os dados gerados em um alias chamado 'formData' para validação posterior.
 */
Cypress.Commands.add('fillPracticeForm', () => {
    const formData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        gender: 'Male',
        mobile: faker.phone.number('##########'),
        address: faker.location.streetAddress(),
        subject: 'Maths',
        hobby: 'Sports',
        state: 'NCR',
        city: 'Delhi'
    };

    // Armazena os dados em um alias para que possam ser acessados em outros passos do teste
    cy.wrap(formData).as('formData');

    practiceFormPage.elements.firstNameInput().type(formData.firstName);
    practiceFormPage.elements.lastNameInput().type(formData.lastName);
    practiceFormPage.elements.emailInput().type(formData.email);
    practiceFormPage.elements.genderRadio(formData.gender).click();
    practiceFormPage.elements.mobileInput().type(formData.mobile);
    practiceFormPage.elements.subjectsInput().type(`${formData.subject}{enter}`);
    practiceFormPage.elements.hobbiesCheckbox(formData.hobby).click();
    
    // Faz o upload do arquivo a partir da pasta fixtures
    practiceFormPage.elements.uploadPictureButton().selectFile('cypress/fixtures/upload.txt');
    
    practiceFormPage.elements.currentAddressInput().type(formData.address);
    practiceFormPage.elements.stateDropdown().click().contains(formData.state).click();
    practiceFormPage.elements.cityDropdown().click().contains(formData.city).click();
});