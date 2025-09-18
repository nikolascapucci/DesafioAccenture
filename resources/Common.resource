*** Settings ***
Resource   Locators.resource
Library    SeleniumLibrary

*** Keywords ***
Open DemoQA
    [Arguments]     ${path}=${EMPTY}
    Open Browser    ${BASE_URL}${path}    chrome
    Maximize Browser Window

Close Browser Safe
    Run Keyword And Ignore Error    Close Browser

Wait For Element And Click
    [Arguments]    ${locator}    ${timeout}=10s
    Wait Until Element Is Visible    ${locator}    ${timeout}
    Click Element    ${locator}

Get Progress Percentage
    ${text}=    Get Text    ${PROGRESS_LABEL}
    ${digits}=    Evaluate    ''.join(ch for ch in ${text} if ch.isdigit())
    ${pct}=    Evaluate    int(${digits}) if ${digits} != '' else 0
    RETURN    ${pct}
