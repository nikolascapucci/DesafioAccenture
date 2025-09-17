/**
 * @class PracticeFormPage
 * @description Gerencia os elementos e ações da página Practice Form.
 */
class PracticeFormPage {
    elements = {
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        genderRadio: (gender) => cy.get(`#genterWrapper input[value="${gender}"]`).parent(),
        mobileInput: () => cy.get('#userNumber'),
        dateOfBirthInput: () => cy.get('#dateOfBirthInput'),
        subjectsInput: () => cy.get('#subjectsInput'),
        hobbiesCheckbox: (hobby) => cy.get('#hobbiesWrapper').contains(hobby),
        uploadPictureButton: () => cy.get('#uploadPicture'),
        currentAddressInput: () => cy.get('#currentAddress'),
        stateDropdown: () => cy.get('#state'),
        cityDropdown: () => cy.get('#city'),
        submitButton: () => cy.get('#submit'),
        modal: () => cy.get('.modal-content'),
        modalTitle: () => cy.get('#example-modal-sizes-title-lg'),
        modalCloseButton: () => cy.get('#closeLargeModal')
    }
}

export default new PracticeFormPage();