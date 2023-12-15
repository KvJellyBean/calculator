const buttons = document.querySelector('.buttons');
const output = document.querySelector('#output');

function add(operand1, operand2) {
    return (operand1 + operand2);
}

function subtract(operand1, operand2) {
    return (operand1 - operand2);
}

function multiply(operand1, operand2) {
    return (operand1 * operand2);
}

function divide(operand1, operand2) {
    if (operand2 == 0) {
        return 'Error';
    }
    return (operand1 / operand2);
}

function operate(operand1, operator, operand2) {
    switch (operator) {
        case '+': return add(+operand1, +operand2);
        case '-': return subtract(+operand1, +operand2);
        case '*': return multiply(+operand1, +operand2);
        case '/': return divide(+operand1, +operand2);
        default: return "error";
    }
}

function isOperator(operator) {
    return (operator == '+' || operator == '-' || operator == '/' || operator == '*');
}

// Declare 3 variabel for operation (var1,operator,var2)
let operand1 = 0;
let operator = '+';
let operand2 = 0;
let finalValue;

// Function for displaying to calculator's output
function populateDisplay(obj) {
    if (isOperator(obj)) {
        if (output.innerText.match(/[*/+-]/) && operand2 != 0) {
            finalValue = operate(operand1, operator, operand2);
            operand1 = finalValue;
            operator = obj;
            // operand2 = 0;
            output.innerText = operand1 + operator;
            return;
        }
        output.innerText += obj;
        operator = obj;
        operand1 = output.innerText.slice(0, output.innerText.indexOf(operator));
    } else if (obj == 'clear' || obj == 'Backspace') {
        output.innerText = '';
        operand1 = 0;
        operator = '+';
        operand2 = 0;
    } else if (obj == '=' || obj == 'Enter') {
        if (!output.innerText.match(/[*/+-]/)) {
            output.innerText = output.innerText;
            return;
        } else if (output.innerText.match(/[*/+-]/) && operand2 == 0) {
            output.innerText = output.innerText;
            return;
        }
        finalValue = operate(operand1, operator, operand2);
        operand1 = finalValue;
        operator = '+';
        operand2 = 0;
        output.innerText = finalValue;
        console.log(finalValue);
    } else if (obj == '%') {
        if (output.innerText.match(/[*/+-]/)) {
            operand2 /= 100;
            output.innerText = output.innerText.slice(0, output.innerText.indexOf(operator) + 1) + operand2;
            return;
        }
        output.innerText /= 100;
    } else if (obj == 'sign') {
        if (output.innerText.match(/[*/+-]/)) {
            operand2 *= -1;
            output.innerText = output.innerText.slice(0, output.innerText.indexOf(operator) + 1) + operand2;
            return;
        }
        output.innerText *= -1;
    }
    else {
        if (obj == undefined) {
            return;
        }
        output.innerText += obj;
        operand2 = output.innerText.slice(output.innerText.indexOf(operator) + 1);
    }
}

buttons.addEventListener('click', (e) => {
    populateDisplay(e.target.value);
});

window.addEventListener('keydown', (e) => {
    if (isAllowedKey(e.key)) {
        populateDisplay(e.key);
    }
});

function isAllowedKey(key) {
    return (key.match(/[0-9]/) || key.match(/[*/+=.%-]/) || key == 'Backspace' || key == 'Enter') && !key.match(/^F[1-9]|F1[0-2]$/);
}