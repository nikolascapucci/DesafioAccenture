*** Settings ***
Library         SeleniumLibrary
Library         OperatingSystem
Resource        ../resources/Common.resource
Suite Setup      Open DemoQA
Suite Teardown   Close Browser Safe

*** Test Cases ***
Etapa 5 - Formulário
    Go To    ${BASE_URL}
    Scroll Element Into View      ${FORMS_MENU}
    Wait For Element And Click    ${FORMS_MENU}
    Scroll Element Into View      ${PRACTICE_FORM}
    Wait For Element And Click    ${PRACTICE_FORM}

    Input Text       ${FIRSTNAME_INPUT}    TestFirst
    Input Text       ${LASTNAME_INPUT}     TestLast
    Input Text       ${EMAIL_INPUT}        test@mail.com
    Click Element    xpath=//label[text()="Male"]
    Input Text       ${MOBILE_INPUT}      9999999999

    Click Element     ${DOB_INPUT}
    Press Keys        ${DOB_INPUT}    CTRL+A
    Input Text        ${DOB_INPUT}    10 Sep 1990
    Press Keys        ${DOB_INPUT}    ENTER

    Input Text    ${SUBJECTS_INPUT}    Math
    Press Keys    ${SUBJECTS_INPUT}    ENTER

 # Upload corrigido
    ${file}=    Join Path    ${CURDIR}    ..    upload_files    sample_upload.txt
    Choose File    ${UPLOAD_INPUT}    ${file}

# Endereço
    Input Text    ${ADDRESS_TEXTAREA}    Rua Exemplo 123
    Press Keys    None    PAGE_DOWN
    Sleep    1s
    
# STATE
    Click Element    xpath=//div[@id="state"]   # clica no container visível
    Input Text       id:react-select-3-input    Haryana
    Press Keys       id:react-select-3-input    ENTER

# CITY
    Click Element    xpath=//div[@id="city"]    # clica no container visível
    Input Text       id:react-select-4-input    Karnal
    Press Keys       id:react-select-4-input    ENTER


    Click Element    ${SUBMIT_FORM_BTN}
    Wait Until Element Is Visible    ${MODAL_DIALOG}    5s
    Click Element    ${MODAL_CLOSE_BTN}
