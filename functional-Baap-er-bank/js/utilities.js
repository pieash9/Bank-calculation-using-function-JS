function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setElementTextValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}