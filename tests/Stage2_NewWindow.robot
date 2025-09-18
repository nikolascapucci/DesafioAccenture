*** Settings ***
Library          SeleniumLibrary
Resource         ../resources/Common.resource
Suite Setup      Open DemoQA
Suite Teardown   Close Browser Safe

*** Test Cases ***
Etapa 2 - Nova Janela
    Go To    ${BASE_URL}
    Wait For Element And Click    ${ALERTS_MENU}
    Wait For Element And Click    ${BROWSER_WINDOWS}

    Click Element    ${NEW_WINDOW_BUTTON}
    Sleep    5s

    ${handles}=    Get Window Handles
    Switch Window    ${handles}[1]

    Wait Until Element Is Visible    ${SAMPLE_PAGE_TEXT}    8s
    ${msg}=    Get Text    ${SAMPLE_PAGE_TEXT}
    Should Contain    ${msg}    This is a sample page
    Close Window
