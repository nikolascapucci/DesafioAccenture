*** Settings ***
Library          SeleniumLibrary
Resource         ../resources/Common.resource
Suite Setup      Open DemoQA
Suite Teardown   Close Browser Safe

*** Variables ***
${PROGRESS_BAR}    css:div[role="progressbar"]
${START_BUTTON}    id:startStopButton
${RESET_BUTTON}    id:resetButton


*** Test Cases ***
Etapa 1 - Progress Bar
    [Tags]    ProgressBar
    Go To    ${BASE_URL}
    Wait For Element And Click     ${WIDGETS_MENU}
    Press Keys   None   PAGE_DOWN
    Sleep    5s
    Wait For Element And Click    ${PROGRESS_SUBMENU}
    Press Keys   None   PAGE_UP
    Sleep    2s
    Wait For Element And Click    ${START_BUTTON}

    # Verifica valor até 25%
    Wait Until Progress Reaches    20
    Click Button    ${START_BUTTON}
    ${PERCENTAGE}=    Get Text        id:progressBar
    Log    ${PERCENTAGE}
    IF    "${PERCENTAGE}" <= "25%"
        Log    Progress is at 25%
    ELSE
        Fail    Progress did not reach 25% as expected, current value: ${PERCENTAGE}
        
    END
    
    Click Button    ${START_BUTTON}



    # Aguarda até 100%
    Wait Until Progress Reaches    100
    Sleep    0.5
    Click Button    ${RESET_BUTTON}

*** Keywords ***
Get Progress Value
    ${value}=    Get Element Attribute    ${PROGRESS_BAR}    aria-valuenow
    ${value}=    Convert To Integer    ${value}
    RETURN    ${value}

Wait Until Progress Reaches    
    [Arguments]    ${target}
    WHILE    True
        ${val}=    Get Progress Value
        Run Keyword If    ${val} >= ${target}    Exit For Loop
        Sleep    0.1
    END

Check Progress <= 25
    ${val}=    Get Progress Value
    Should Be True    ${val} <= 25

Progress Should Be 100
    ${pct}=    Get Progress Percentage
    Should Be True    ${pct} == 100
