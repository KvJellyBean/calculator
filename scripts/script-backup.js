const buttons = document.querySelector('.buttons');
const output = document.querySelector('#output');

function add(operand1, operand2) {
    return (operand1 + operand2).toFixed(5);
}

function subtract(operand1, operand2) {
    return (operand1 - operand2).toFixed(5);
}

function multiply(operand1, operand2) {
    return (operand1 * operand2).toFixed(3);
}

function divide(operand1, operand2) {
    if (operand2 == 0) {
        return 'Error';
    }
    return (operand1 / operand2).toFixed(3);
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

    if (e.target.tagName !== 'BUTTON') {
        return;
    }

    const lastCharIsOperator = output.innerText.slice(-1).match(/[*/+-]/);
    const valueIsOperator = value.match(/[*/+-]/);
    const outputHasOperator = output.innerText.match(/[*/+-]/);

    if (lastCharIsOperator && valueIsOperator) {
        output.innerText = output.innerText.slice(0, -1) + value;
    } else {
        if (id === 'acButton') {
            output.innerText = '';
            operand1 = 0;
            operand2 = 0;
            operator = '';
        } else if (id === 'equal') {
            output.innerText = `${operate(operand1, operator, operand2)}`;
        } else {
            const lastCharIsNumber = output.innerText.slice(-1).match(/[0-9]/);
            if (lastCharIsNumber && valueIsOperator && outputHasOperator) {
                operand1 = operate(operand1, operator, operand2);
                operand2 = 0;
                operator = value;
                output.innerText = `${operand1}${operator}`;
            } else {
                output.innerText += value;
                if (outputHasOperator !== null) {
                    operator = output.innerText.substr(outputHasOperator.index, 1);
                    operand1 = output.innerText.slice(0, outputHasOperator.index);
                    operand2 = output.innerText.slice(outputHasOperator.index + 1);
                }
            }
        }
    }
});

// maxlength ?
// count negative value
// +-, %, . ketika di tekan sekali harus gbs nerima lagi