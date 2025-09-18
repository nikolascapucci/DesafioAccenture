*** Settings ***
Library          SeleniumLibrary
Resource         ../resources/Common.resource
Suite Setup      Open DemoQA
Suite Teardown   Close Browser Safe

*** Variables ***
${FIRST}    RobotFirst
${LAST}     RobotLast

*** Test Cases ***
Etapa 4 - CRUD na Web Table
    Go To    ${BASE_URL}
    Wait Until Element Is Visible    ${ELEMENTS_CARD}    10s
    Click Element    ${ELEMENTS_CARD}
    Wait Until Element Is Visible    ${ELEMENTS_GROUP}   10s
    # (Opcional: expandir se o menu vier recolhido)NTS_MENU
    ${expanded}=    Run Keyword And Return Status    Element Should Be Visible    ${WEBTABLES_MENU}
    IF    '${expanded}' == 'False'
        Click Element    ${ELEMENTS_CARD}
        Wait Until Element Is Visible    ${WEBTABLES_MENU}    5s
    END
    Click Element    ${WEBTABLES_MENU}
    Wait Until Element Is Visible    ${ADD_BUTTON}    10s



    Click Element    ${ADD_BUTTON}
    Input Text    ${FIRST_NAME}    ${FIRST}
    Input Text    ${LAST_NAME}     ${LAST}
    Input Text    ${AGE}           30
    Input Text    ${EMAIL}         test@example.com
    Input Text    ${SALARY}        2000
    Input Text    ${DEPARTMENT}    QA
    Click Element    ${SUBMIT_BUTTON}

    Click Element    xpath=//div[text()="${FIRST}"]/ancestor::div[contains(@class,'rt-tr-group')]//span[@title='Edit']
    Input Text    ${SALARY}    5000
    Click Element    ${SUBMIT_BUTTON}

    Click Element    xpath=//div[text()="${FIRST}"]/ancestor::div[contains(@class,'rt-tr-group')]//span[@title='Delete']
