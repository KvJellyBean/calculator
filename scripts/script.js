const buttons = document.querySelector('.buttons');
const output = document.querySelector('#output');

function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return operand1 / operand2;
}

function operate(operand1, operator, operand2) {
    switch (operator) {
        case '+': return add(+operand1, +operand2); break;
        case '-': return subtract(+operand1, +operand2); break;
        case '*': return multiply(+operand1, +operand2); break;
        case '/': return divide(+operand1, +operand2); break;
    }
}

// Declare 3 variabel for operation (var1,operator,var2)
let operand1 = 0;
let operand2 = 0;
let operator;

// Event Handler for buttons container (targeting the button only with event.target)
buttons.addEventListener('click', (e) => {
    const id = e.target.id;
    const value = e.target.value;

    if (output.innerText.slice(-1).match(/[*/+-]/) && value.match(/[*/+-]/)) {
        output.innerText = output.innerText.slice(0, -1);
        output.innerText += value;
    } else {
        if (id === 'acButton') {
            output.innerText = '';
        } else if (id === 'equal') {
            console.log(operand1);
            console.log(operator);
            console.log(operand2);
            output.innerText = operate(operand1, operator, operand2);;
        } else {
            output.innerText += value;
            let matcher = output.innerText.match(/[*/+-]/);
            if (matcher != null) {
                operator = output.innerText.substr(matcher.index, 1);
                operand1 = output.innerText.slice(0, matcher.index);
                operand2 = output.innerText.slice(matcher.index + 1);
            }
        }
    }
});