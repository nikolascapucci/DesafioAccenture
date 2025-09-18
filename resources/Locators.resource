*** Variables ***
${BASE_URL}          https://demoqa.com
${HEADLESS}          False

# Main menu
${WIDGETS_MENU}      xpath=//*[contains(text(), "Widgets")]
${PROGRESS_SUBMENU}  xpath=//*[contains(text(), "Progress Bar")]

${ALERTS_MENU}       xpath=//*[contains(text(),"Alerts, Frame & Windows")]
${BROWSER_WINDOWS}   xpath=//*[contains(text(),"Browser Windows")]

${INTERACTIONS_MENU}      xpath=//*[contains(text(),"Interactions")]/ancestor::div[contains(@class,"card")]
${INTERACTIONS_SUBMENU}   xpath=//div[contains(@class,"group-header")]//*[contains(text(),"Interactions")]/ancestor::div[contains(@class,"card")]
${SORTABLE_SUBMENU}       xpath=//*[contains(text(), "Sortable")]/ancestor::li[contains(@class,"element-group")]

${ELEMENTS_MENU}            xpath=//*[contains(text(),"Elements")]/ancestor::div[contains(@class,"card")]
${WEBTABLES_MENU}           xpath=//*[contains(text(),"Web Tables")]/ancestor::li[contains(@class,"element-group")]
${ELEMENTS_GROUP}           xpath=//div[contains(@class,"header-text") and normalize-space(.)="Elements"]
${TEXTBOX_LINK}             xpath=//span[normalize-space(.)="Text Box"]
${CHECKBOX_LINK}            xpath=//span[normalize-space(.)="Check Box"]
${RADIOBUTTON_LINK}         xpath=//span[normalize-space(.)="Radio Button"]
${WEBTABLES_LINK}           xpath=//span[normalize-space(.)="Web Tables"]
${BUTTONS_LINK}             xpath=//span[normalize-space(.)="Buttons"]
${LINKS_LINK}               xpath=//span[normalize-space(.)="Links"]
${BROKENLINKS_LINK}         xpath=//span[normalize-space(.)="Broken Links - Images"]
${UPLOADDOWNLOAD_LINK}      xpath=//span[normalize-space(.)="Upload and Download"]
${DYNAMICPROPERTIES_LINK}   xpath=//span[normalize-space(.)="Dynamic Properties"]

${FORMS_MENU}        xpath=//*[contains(text(),"Forms")]
${PRACTICE_FORM}     xpath=//*[contains(text(),"Practice Form")]

# Home (cards principais)
${INTERACTIONS_CARD}    xpath=//div[@class="card-body"]/h5[normalize-space(.)="Interactions"]/ancestor::div[contains(@class,"card")]
${ELEMENTS_CARD}        xpath=//div[@class="card-body"]/h5[normalize-space(.)="Elements"]/ancestor::div[contains(@class,"card")]
${FORMS_CARD}           xpath=//div[@class="card-body"]/h5[normalize-space(.)="Forms"]/ancestor::div[contains(@class,"card")]
${WIDGETS_CARD}         xpath=//div[@class="card-body"]/h5[normalize-space(.)="Widgets"]/ancestor::div[contains(@class,"card")]

# Menu lateral (páginas internas)
${INTERACTIONS_GROUP}   xpath=//div[contains(@class,"header-text") and normalize-space(.)="Interactions"]
${SORTABLE_LINK}        xpath=//span[normalize-space(.)="Sortable"]
${SELECTABLE_LINK}      xpath=//span[normalize-space(.)="Selectable"]
${RESIZABLE_LINK}       xpath=//span[normalize-space(.)="Resizable"]
${DROPPABLE_LINK}       xpath=//span[normalize-space(.)="Droppable"]
${DRAGGABLE_LINK}       xpath=//span[normalize-space(.)="Draggable"]

# Sortable
${LIST_ITEMS}           css=#demo-tab-listContent li


# Progress bar
${START_BUTTON}      css=button#startStopButton
${PROGRESS_LABEL}    css=div#progressBar

# Browser windows
${NEW_WINDOW_BUTTON}   css=button#windowButton
${SAMPLE_PAGE_TEXT}    id:sampleHeading

# Sortable
${LIST_ITEMS}        css=#demo-tab-listContent li

# Web Tables
${ADD_BUTTON}        css=button#addNewRecordButton
${FIRST_NAME}        css=input#firstName
${LAST_NAME}         css=input#lastName
${EMAIL}             css=input#userEmail
${AGE}               css=input#age
${SALARY}            css=input#salary
${DEPARTMENT}        css=input#department
${SUBMIT_BUTTON}     css=button#submit
${SEARCH_BOX}        css=#searchBox
${TABLE_ROWS}        css=div.rt-tbody div.rt-tr-group

# Practice Form
${FIRSTNAME_INPUT}   css=input#firstName
${LASTNAME_INPUT}    css=input#lastName
${EMAIL_INPUT}       css=input#userEmail
${MOBILE_INPUT}      css=input#userNumber
${DOB_INPUT}         css=input#dateOfBirthInput
${SUBJECTS_INPUT}    css=input#subjectsInput
${UPLOAD_INPUT}      css=input#uploadPicture
${ADDRESS_TEXTAREA}  css=textarea#currentAddress
${STATE_SELECT}      id:react-select-3-input
${CITY_SELECT}       id:react-select-4-input
${SUBMIT_FORM_BTN}   css=#submit
${MODAL_DIALOG}      css=.modal-content
${MODAL_CLOSE_BTN}   css=#closeLargeModal


