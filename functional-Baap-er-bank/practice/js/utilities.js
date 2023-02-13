function getInputValueById(inputId){
    const inputTextElement = document.getElementById(inputId);
    const inputText = parseFloat(inputTextElement.value);
    inputTextElement.value = '';
    return inputText;
}

function getElementValueById(elementId){
    const textElementValue = document.getElementById(elementId);
    const textValue = parseFloat(textElementValue.innerText);
    return textValue;
}

function setElementValue(elementId, newInputValue){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newInputValue;
}