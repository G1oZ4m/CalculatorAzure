let resultField = document.getElementById('display');

function appendToDisplay(value) {
    resultField.value += value;
}

function clearDisplay() {
    resultField.value = '';
}

function evaluateExpression() {
    try {
        resultField.value = eval(resultField.value); // Выполняем выражение
    } catch (error) {
        resultField.value = 'Error';
    }
}
