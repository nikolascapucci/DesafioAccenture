*** Settings ***
Library          SeleniumLibrary
Library           Collections
Resource         ../resources/Common.resource
Suite Setup      Open DemoQA
Suite Teardown   Close Browser Safe

*** Test Cases ***
Etapa 3 - Sortable
    Go To    ${BASE_URL}
    Wait Until Element Is Visible    ${INTERACTIONS_CARD}    10s
    Click Element    ${INTERACTIONS_CARD}
    Wait Until Page Contains Element    ${INTERACTIONS_GROUP}    10s
    Wait Until Element Is Visible    ${INTERACTIONS_GROUP}    10s
    Press Keys   None   PAGE_DOWN
    # (Opcional: expandir se o grupo vier recolhido)
    ${expanded}=    Run Keyword And Return Status    Element Should Be Visible    ${SORTABLE_LINK}
    IF    '${expanded}' == 'False'
        Click Element    ${INTERACTIONS_GROUP}
        Wait Until Element Is Visible    ${SORTABLE_LINK}    5s
    END
    Click Element    ${SORTABLE_LINK}
    Wait Until Element Is Visible    ${LIST_ITEMS}    10s


    ${items}=    Get WebElements    ${LIST_ITEMS}
    @{texts}=    Create List
    FOR    ${el}    IN    @{items}
        ${t}=    Get Text    ${el}
        Append To List    ${texts}    ${t}
    END

    ${sorted}=    Evaluate    sorted(${texts})

    FOR    ${target}    IN    @{sorted}
        ${src}=    Set Variable    xpath=//li[normalize-space()="${target}"]
        # Aqui defina destino pela posição nova: reobtenha todos os itens e escolha índice
        ${current_items}=    Get WebElements    ${LIST_ITEMS}
        ${index}=    Evaluate    [el.get_attribute("outerHTML") for el in ${current_items}].index(Browser.Get Element Attribute    ${src}    outerHTML)
        ${dest}=    Set Variable    xpath=(//li)[${index + 1}]
    END